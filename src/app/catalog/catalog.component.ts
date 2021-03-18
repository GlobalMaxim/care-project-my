import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { BreadcrumbService } from '../common/breadcrumbs/breadcrumb.service';
import { IBreadCrumb } from '../common/breadcrumbs/breadcrumbs.interface';
import { RoutingService } from '../routing/routing-service';
import { SeoRouting } from '../routing/seo-routing';

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.less']
})
export class CatalogComponent extends SeoRouting implements OnInit {
    
    baseRoute: string = '/catalog';

    constructor(routingService: RoutingService,
                breadcrumbService: BreadcrumbService) {
        super(routingService, breadcrumbService);
    }

    setBreadcrumbs(): Promise<{ url: string; label: string; }[]> {
        const breadcrumbs: { url: string; label: string; }[] = [
            {
                url: '/',
                label: 'breadcrumbs.home'
            },
            {
                url: '/catalog',
                label: 'breadcrumbs.shop'
            }
        ];
        return new Promise<{ url: string; label: string; }[]>((resolve, reject) => {
            resolve(breadcrumbs);
        });
    }

    ngOnInit(): void {
        super.ngOnInit();
    }

}
