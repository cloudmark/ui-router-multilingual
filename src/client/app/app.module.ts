import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';

import {AboutModule} from './about/about.module';
import {HomeModule} from './home/home.module';
import {UIRouterModule, UIView} from 'ui-router-ng2';
import {ExtNg2StateDeclaration} from "./router-extentions/ExtNg2StateDeclarations";
import {uiRouterConfigureSitemap} from "./router-extentions/routerConfig";
import {NameListService} from "./name-list/name-list.service";
import {trace} from "ui-router-core";

export let MAIN_STATES: ExtNg2StateDeclaration[] = [{
  name: 'app',
  future: false,
  url: '/:lang',
  component: AppComponent,
  abstract: true
}];

@NgModule({
  imports: [BrowserModule, HttpModule,
    AboutModule,
    HomeModule,
    UIRouterModule.forRoot({
      states: MAIN_STATES,
      config: uiRouterConfigureSitemap
    }),
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }, NameListService],
  bootstrap: [UIView]

})
export class AppModule {
}
