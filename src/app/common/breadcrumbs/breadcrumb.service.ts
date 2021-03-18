import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { IBreadCrumb } from "./breadcrumbs.interface";

@Injectable({
    providedIn: 'root'
})
export class BreadcrumbService {
    public getBreadcrumbs = new Subject<IBreadCrumb[]>();

    constructor() { }

    setBreadcrumbs(breadcrumbs: IBreadCrumb[]) {
        this.getBreadcrumbs.next(breadcrumbs);
    }
}