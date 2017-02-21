import {StatesModule} from "ui-router-ng2";
import {UIRouter} from "ui-router-core";
import {Injector} from "@angular/core";
import {getSitemap} from "../sitemap-api/sitemapService";

import * as _ from "lodash";
import {ExtNg2StateDeclaration} from "./ExtNg2StateDeclarations";

export function uiRouterConfigureSitemap(router: UIRouter, injector: Injector, module: StatesModule) {
  let states: ExtNg2StateDeclaration[] = <ExtNg2StateDeclaration[]>module.states;

  // Process the states;
  let filteredStates: ExtNg2StateDeclaration[] = _.filter(states, (s) => {
    return s.future && !s._complete
  });

  _.map(filteredStates, (s) => {
    let sitemapObj:any = _.find(getSitemap(), (sitemap:any) => sitemap.module == s.name);
    console.log(`Retrieved ${s.name} from sitemap ${sitemapObj.path}`);
    // Set the url from the sitemap object
    s.url = sitemapObj.path;
    s._complete = true;
  });
  router.urlService.config.strictMode(false);
}

