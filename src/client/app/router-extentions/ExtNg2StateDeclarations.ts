import {Ng2StateDeclaration} from "ui-router-ng2";

export interface ExtNg2StateDeclaration extends Ng2StateDeclaration {
  future: boolean;
  _complete?: boolean;
}
