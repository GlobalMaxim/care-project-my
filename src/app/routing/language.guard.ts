import { Injectable } from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import { AppConstants } from "../app-constants";

@Injectable({
    providedIn: 'root'
})
export class LanguageGuard implements CanActivate {

    constructor(private router: Router) { }
 
    private isNotSupportedLanguageChoosen(route: ActivatedRouteSnapshot): boolean {
        var language = route.params.lang;
        return AppConstants.APP_LANGS.indexOf(language) === -1;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UrlTree | boolean | Observable<boolean> {
        if (this.isNotSupportedLanguageChoosen(route)) {
            return this.router.parseUrl('/404');
        }
        return true;
    }
}