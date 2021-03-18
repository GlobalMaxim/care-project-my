import { Component, Inject, OnInit, Optional } from '@angular/core';
import { RESPONSE } from '@nguniversal/express-engine/tokens';
import { Response } from 'express';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.less']
})
export class NotFoundComponent implements OnInit {

    private response: Response;

    constructor(@Optional() @Inject(RESPONSE) response: any) {
        this.response = response;
     }

    ngOnInit(): void {
        if (this.response) {
            this.response.statusCode = 404;
        }
    }

}
