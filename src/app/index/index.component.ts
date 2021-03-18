import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { BreadcrumbService } from '../common/breadcrumbs/breadcrumb.service';
import { RoutingService } from '../routing/routing-service';
import { SeoRouting } from '../routing/seo-routing';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.less']
})
export class IndexComponent extends SeoRouting implements OnInit {

    baseRoute: string = '';

    constructor(routingService: RoutingService,
        breadcrumbService: BreadcrumbService) {
        super(routingService, breadcrumbService);
    }

    setBreadcrumbs(): Promise<{ url: string; label: string; }[]> {
        return new Promise((resolve, reject) => resolve([]));
    }

    ngOnInit(): void {
        super.ngOnInit();
    }
}
