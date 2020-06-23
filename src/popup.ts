import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { environment } from "./common/environment/environment";
import { PopupModule } from "./popup/popup.model";
require("zone.js/dist/zone");

if (environment.production) {
  enableProdMode();
} else {
  Error["stackTraceLimit"] = Infinity;
  require("zone.js/dist/long-stack-trace-zone");
}

platformBrowserDynamic()
  .bootstrapModule(PopupModule)
  .catch((err) => console.log(err));
