import {Component, Injector} from '@angular/core';
import './operators';
import {UIRouter} from "ui-router-ng2";

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  templateUrl: 'app.component.html',
})
export class AppComponent {
  lang: string;

  constructor(router: UIRouter) {
    console.log('Loaded App');
    this.lang = router.stateService.params['lang'] || 'en';
  }
}
