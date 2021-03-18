
import {
    AfterViewInit,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild
} from '@angular/core';
import { Subscription } from 'rxjs';
import { RoutingService } from 'src/app/routing/routing-service';


const languages: string[] = ['en', 'ru'];
// import * as $ from 'jquery';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements AfterViewInit, OnInit, OnDestroy {
    @ViewChild('dropdowntoggle', { static: true }) el!: ElementRef;
    @ViewChild('dropdown', { static: true }) ell!: ElementRef;
    status = false;
    urlSubscription: Subscription;
    languageSubscription: Subscription;
    localizedUrls = [];
    currentLanguage = 'en';

    constructor(private routingService: RoutingService) { }

    changeStatus() {
        this.status = !this.status;
    }

    ngOnInit() {
        this.urlSubscription = this.routingService.getUrls.subscribe(urls => {
            this.localizedUrls = urls;
        });
        this.languageSubscription = this.routingService.getLanguage.subscribe(language => {
            this.currentLanguage = language;
        });
    }

    ngOnDestroy() {
        this.urlSubscription.unsubscribe();
        this.languageSubscription.unsubscribe();
    }

    ngAfterViewInit() { }
}
