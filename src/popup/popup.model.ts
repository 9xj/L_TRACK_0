import welcome_component_1 from "./views/welcome/welcome.component";
import user_details_component_1 from "./views/user_details/user_details.component";
import forms_1 from "@angular/forms";
import popup_component_1 from "./popup.component";
import angular_1 from "@uirouter/angular";
import core_1 from "@angular/core";
import assign_device_component_1 from "./views/assign_device/assign_device.component";
import platform_browser_1 from "@angular/platform-browser";
import popup_states_1 from "./popup.states";
import status_component_1 from "./services/status/status.component";
import status_service_1 from "./services/status/status.service";
import error_modal_component_1 from "./services/error/error_modal.component";
import error_modal_service_1 from "./services/error/error_modal.service";
import animations_1 from "@angular/platform-browser/animations";
import insufficient_entitlements_component_1 from "./views/insufficient_entitlements/insufficient_entitlements.component";
import activation_required_component_1 from "./views/activation_required/activation_required.component";
import ng_select_1 from "@ng-select/ng-select";
const PopupModule = /** @class */ (() => {
  function PopupModule() {}
  PopupModule = __decorate(
    [
      core_1.NgModule({
        declarations: [
          popup_component_1.PopupComponent,
          status_component_1.StatusComponent,
          error_modal_component_1.ErrorModalComponent,
          welcome_component_1.WelcomeComponent,
          assign_device_component_1.AssignDeviceComponent,
          user_details_component_1.UserDetailsComponent,
          insufficient_entitlements_component_1.InsufficientEntitlementsComponent,
          activation_required_component_1.ActivationRequiredComponent,
        ],
        imports: [
          platform_browser_1.BrowserModule,
          animations_1.BrowserAnimationsModule,
          forms_1.ReactiveFormsModule,
          ng_select_1.NgSelectModule,
          forms_1.FormsModule,
          angular_1.UIRouterModule.forRoot({
            useHash: false,
            states: popup_states_1.POPUP_ROUTER_STATES,
          }),
        ],
        providers: [
          status_service_1.StatusService,
          error_modal_service_1.ErrorModalService,
        ],
        entryComponents: [error_modal_component_1.ErrorModalComponent],
        bootstrap: [popup_component_1.PopupComponent],
      }),
    ],
    PopupModule
  );
  return PopupModule;
})();

export { PopupModule };
//# sourceMappingURL=popup.model.js.map
