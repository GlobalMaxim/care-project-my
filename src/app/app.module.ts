import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./common/header/header.component";
import { FooterComponent } from './common/footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { CartProgressComponent } from './cart/cart-progress/cart-progress.component';
import { CartDetailsStepComponent } from './cart/cart-details-step/cart-details-step.component';
import { ReviewDetailsStepComponent } from './cart/review-details-step/review-details-step.component';
import { ClientDeliveryDetailsStepComponent } from './cart/client-delivery-details-step/client-delivery-details-step.component';
import { SuccessStepComponent } from './cart/success-step/success-step.component';
import { CartMiniInfoComponent } from './cart/cart-mini-info/cart-mini-info.component';
import { ClientDetailsFormComponent } from './cart/client-delivery-details-step/client-details-form/client-details-form.component';
import { DeliveryDetailsFormComponent } from './cart/client-delivery-details-step/delivery-details-form/delivery-details-form.component';
import { ProductComponent } from './product/product.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductGridComponent } from './catalog/product-grid/product-grid.component';
import { CategoriesTreeComponent } from './catalog/categories-tree/categories-tree.component';
import { ProductCardComponent } from './catalog/product-grid/product-card/product-card.component';
import { BreadcrumbsComponent } from './common/breadcrumbs/breadcrumbs.component';
import { LayoutMainComponent } from './layout/layout-main/layout-main.component';
import { IndexComponent } from './index/index.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Location } from '@angular/common';
import { AppTranslationModule } from './app-translation.module';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NavigatorComponent } from './navigator/navigator.component';
import { PipeModule } from './pipe.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactFormComponent } from './common/contact-form/contact-form.component';
import { ServiceCatalogComponent } from './service-catalog/service-catalog.component';
import { ServiceCatalogGridComponent } from './service-catalog/service-catalog-grid/service-catalog-grid.component';
import { ServiceCatalogCardComponent } from './service-catalog/service-catalog-grid/service-catalog-card/service-catalog-card.component';
import { ServiceComponent } from './service/service.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CartComponent,
    CartProgressComponent,
    CartDetailsStepComponent,
    ReviewDetailsStepComponent,
    ClientDeliveryDetailsStepComponent,
    SuccessStepComponent,
    CartMiniInfoComponent,
    ClientDetailsFormComponent,
    DeliveryDetailsFormComponent,
    ProductComponent,
    CatalogComponent,
    ProductGridComponent,
    CategoriesTreeComponent,
    ProductCardComponent,
    LayoutMainComponent,
    IndexComponent,
    NavigatorComponent,
    NotFoundComponent,
    ContactFormComponent,
    ServiceCatalogComponent,
    ServiceCatalogGridComponent,
    ServiceCatalogCardComponent,
    ServiceComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppTranslationModule,
    AppRoutingModule,
    HttpClientModule,
    TransferHttpCacheModule,
    SwiperModule,
    NgbModule,
    PipeModule
  ],
  providers: [],
  bootstrap: [AppComponent, Location],
})
export class AppModule { }
