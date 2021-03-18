import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    AppModule,
    TranslateModule.forRoot(
      {
          loader: {
              provide: TranslateLoader,
              useFactory: (createTranslateLoader),
              deps: [HttpClient]
          }
      }),
    BrowserTransferStateModule
  ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}
