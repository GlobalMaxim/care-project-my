import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppConstants } from './app-constants';
import { RoutingService } from './routing/routing-service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    constructor(private router: Router,
        private route: ActivatedRoute,
        private routingService: RoutingService) {
    }
    ngOnInit(): void {
        this.router.events.pipe(
            filter((e): e is NavigationEnd => e instanceof NavigationEnd))
            .subscribe(() => {
                this.route.root.firstChild.url.subscribe(url => {
                    var lang = url.length && url[0].path;
                    if (AppConstants.APP_LANGS.indexOf(lang) === -1) {
                        lang = AppConstants.DEF_LANG;
                    }
                    this.routingService.setLanguage(lang);
                });
            });
    }
}
