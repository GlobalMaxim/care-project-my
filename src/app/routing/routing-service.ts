import { APP_BASE_HREF, DOCUMENT } from "@angular/common";
import { Inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Subject } from 'rxjs';
import { AppConstants } from "../app-constants";
import { UrlDescriptor } from "./url-descriptor";

@Injectable({
    providedIn: 'root'
})
export class RoutingService {
    public getUrls = new Subject<UrlDescriptor[]>();
    public getLanguage = new Subject<string>();
    private renderer: Renderer2;
    private currentLanguage: string = AppConstants.DEF_LANG;

    constructor(private translate: TranslateService,
        @Inject(DOCUMENT) private document: Document,
        rendererFactory: RendererFactory2) {
            this.renderer = rendererFactory.createRenderer(null, null);
        }
    
    private setSeoUrls(urls: UrlDescriptor[]) {
        const baseHref = this.document.location.origin;
        let headElements = Array.from(this.document.head.children);
        headElements.forEach(element => {
            let rel = element.getAttribute('rel');
            let hrefLang = element.getAttribute('hrefLang');
            if (rel && ((rel === 'alternate' && hrefLang) || rel === 'canonical')) {
                element.remove();
            }
        });
        urls.forEach(url => {
            const linkElt = this.renderer.createElement('link');
            this.renderer.setAttribute(linkElt, 'rel', url.isDefault() ? 'canonical' : 'alternate');
            if (!url.isDefault()) {
                this.renderer.setAttribute(linkElt, 'hreflang', url.language);
            }
            this.renderer.setAttribute(linkElt, 'href', baseHref + url.link);
            this.renderer.appendChild(this.document.head, linkElt);
        });
    }

    setLanguage(lang: string) {
        this.currentLanguage = lang;
        this.getLanguage.next(lang);
        this.translate.use(lang);
        this.document.documentElement.lang = lang;
    }

    setUrls(urls: UrlDescriptor[]) {
        this.getUrls.next(urls);
        this.setSeoUrls(urls);
    }

    getCurrentLanguage(): string {
        return this.currentLanguage;
    }

    getUrlByLanguage(path: string, language: string = AppConstants.DEF_LANG): string {
        if (language !== AppConstants.DEF_LANG) {
            path = `/${language}${path}`;
        }
        return path;
    }
}