import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBreadCrumb } from './breadcrumbs.interface';
import { BreadcrumbService } from './breadcrumb.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.less'],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
    public breadcrumbs: IBreadCrumb[] = [];
    private breadcrumbSubscription: Subscription;

    constructor(private breadcrumbService: BreadcrumbService) { }

    getIsBreadCrumbsDefined(): boolean {
        return this.breadcrumbs && this.breadcrumbs.length > 0;
    }

    ngOnDestroy(): void {
        this.breadcrumbSubscription.unsubscribe();
    }

    ngOnInit() {
        this.breadcrumbSubscription = this.breadcrumbService.getBreadcrumbs.subscribe(breadcrumbs => {
            this.breadcrumbs = breadcrumbs;
        });
    }
}
