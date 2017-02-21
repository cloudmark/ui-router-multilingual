import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {UIRouterModule} from "ui-router-ng2";
import {ExtNg2StateDeclaration} from "../router-extentions/ExtNg2StateDeclarations";
import {uiRouterConfigureSitemap} from "../router-extentions/routerConfig";


export let CHILD_STATES: ExtNg2StateDeclaration[] = [{
  name: 'app.home',
  future: true,
  component: HomeComponent
}];

@NgModule({
  imports: [CommonModule,
    UIRouterModule.forChild({
      states: CHILD_STATES,
      config: uiRouterConfigureSitemap
    })],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {
}
