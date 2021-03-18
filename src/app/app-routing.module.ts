import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartDetailsStepComponent } from './cart/cart-details-step/cart-details-step.component';
import { ReviewDetailsStepComponent } from './cart/review-details-step/review-details-step.component';
import { SuccessStepComponent } from './cart/success-step/success-step.component';
import { CatalogComponent } from './catalog/catalog.component';
import { IndexComponent } from './index/index.component';
import { ProductComponent } from './product/product.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { ClientDeliveryDetailsStepComponent } from './cart/client-delivery-details-step/client-delivery-details-step.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LanguageGuard } from './routing/language.guard';
import { ServiceCatalogComponent } from './service-catalog/service-catalog.component';
import { ServiceComponent } from './service/service.component';

const routes = [
  {
    path: '',
    component: IndexComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'breadcrumbs.home',
    },
  },
  {
    path: 'cart',
    component: CartDetailsStepComponent,
  },
  {
    path: 'cart/details',
    component: ClientDeliveryDetailsStepComponent,
  },
  {
    path: 'cart/review',
    component: ReviewDetailsStepComponent,
  },
  {
    path: 'cart/success',
    component: SuccessStepComponent,
  },
  {
    path: 'catalog',
    component: CatalogComponent,
    data: {
      breadcrumb: 'breadcrumbs.shop',
    },
  },
  {
    path: 'catalog/:code',
    component: CatalogComponent,
  },
  {
    path: 'catalog/:code/:subCode',
    component: CatalogComponent,
  },
  {
    path: 'catalog/:code/:subCode/:productCode',
    component: ProductComponent,
  },
  {
    path: 'service-catalog',
    component: ServiceCatalogComponent,
  },
  {
    path: 'service',
    component: ServiceComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: ':lang',
    component: NavigatorComponent,
    canActivate: [LanguageGuard],
    children: [
      { path: '', component: IndexComponent, pathMatch: 'full' },
      {
        path: 'cart',
        component: CartDetailsStepComponent,
      },
      {
        path: 'cart/details',
        component: ClientDeliveryDetailsStepComponent,
      },
      {
        path: 'cart/review',
        component: ReviewDetailsStepComponent,
      },
      {
        path: 'cart/success',
        component: SuccessStepComponent,
      },
      {
        path: 'catalog',
        component: CatalogComponent,
      },
      {
        path: 'catalog/:code',
        component: CatalogComponent,
      },
      {
        path: 'catalog/:code/:subCode',
        component: CatalogComponent,
      },
      {
        path: 'catalog/:code/:subCode/:productCode',
        component: ProductComponent,
      },
      {
        path: 'service-catalog',
        component: ServiceCatalogComponent,
      },
      {
        path: 'service',
        component: ServiceComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [LanguageGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
