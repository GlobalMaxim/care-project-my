import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AppConstants } from "../app-constants";
import { BreadcrumbService } from "../common/breadcrumbs/breadcrumb.service";
import { IBreadCrumb } from "../common/breadcrumbs/breadcrumbs.interface";
import { RoutingService } from "./routing-service";
import { UrlDescriptor } from "./url-descriptor";

@Injectable()
export abstract class SeoRouting implements OnInit {

    private urls: UrlDescriptor[] = [];
    abstract baseRoute: string = '';

    constructor(protected routingService: RoutingService,
        protected breadcrumbService: BreadcrumbService) { }

    protected initUrls(): void { 
        const languages = AppConstants.APP_LANGS;
        languages.forEach(language => {
            let url = this.routingService.getUrlByLanguage(this.baseRoute, language);
            this.urls.push(new UrlDescriptor(url, language));
        });
    }

    protected initBreadCrumbs(breadcrumbs: { url: string; label: string; }[]): IBreadCrumb[] {
        const resultBreadcrumbs: IBreadCrumb[] = [];
        const language = this.routingService.getCurrentLanguage();
        breadcrumbs.forEach(breadcrumb => {
            let breadcrumbItem: IBreadCrumb = {
                url: this.routingService.getUrlByLanguage(breadcrumb.url, language),
                label: breadcrumb.label
            };
            resultBreadcrumbs.push(breadcrumbItem);
        });
        return resultBreadcrumbs;
    }

    abstract setBreadcrumbs(): Promise<{ url: string, label: string }[]>;

    ngOnInit(): void {
        this.initUrls();
        this.routingService.setUrls(this.urls);
        this.setBreadcrumbs()
            .then(breadcrumbs => {
                const breadcrumbItems = this.initBreadCrumbs(breadcrumbs);
                this.breadcrumbService.setBreadcrumbs(breadcrumbItems);
            });
    }

}