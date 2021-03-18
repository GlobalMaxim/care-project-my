/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */
import '@angular/localize/init';
import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import { RESPONSE } from '@nguniversal/express-engine/tokens';

const domino = require('domino');
const fs = require('fs');
const path = require('path');
var webpack = require("webpack");

// Use the browser index.html as template for the mock window
const template = fs
    .readFileSync(path.join(join(process.cwd(), 'dist/care-clinic-client-application/browser'), 'index.html'))
    .toString();

// Shim for the global window and document objects.
const window = domino.createWindow(template);
window.navigator.language = 'en';
global['window'] = window;
global['document'] = window.document;

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
    const server = express();
    const distFolder = join(process.cwd(), 'dist/care-clinic-client-application/browser');
    const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

    // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
    server.engine('html', ngExpressEngine({
        bootstrap: AppServerModule,
    }));

    server.set('view engine', 'html');
    server.set('views', distFolder);

    // Example Express Rest API endpoints
    // server.get('/api/**', (req, res) => { });
    // Serve static files from /browser
    server.get('*.*', express.static(distFolder, {
        maxAge: '1y'
    }));

    // All regular routes use the Universal engine
    server.get('*', (req, res) => {

        const supportedLocales = ['en', 'ru'];
        const defaultLocale = 'en';
        const matches = req.url.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)\//);

        const locale = (matches && supportedLocales.indexOf(matches[1]) !== -1) ? matches[1] : defaultLocale;


        res.render(indexHtml, {
            req,
            providers: [
                {
                    provide: RESPONSE,
                    useValue: res,
                },
                {
                    provide: APP_BASE_HREF,
                    useValue: req.baseUrl
                },
            ]
        });

    });

    return server;
}

function run(): void {
    const port = process.env.PORT || 8802;

    // Start up the Node server
    const server = app();
    server.listen(port, () => {
        console.log(`Node Express server listening on http://localhost:${port}`);
    });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = typeof __non_webpack_require__ !== 'undefined'
    ? __non_webpack_require__.main
    : require.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
    run();
}

export * from './src/main.server';
