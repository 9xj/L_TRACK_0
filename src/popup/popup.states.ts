Object.defineProperty(exports, "__esModule", { value: true });
import assign_device_component_1 from "./views/assign_device/assign_device.component";
import user_details_component_1 from "./views/user_details/user_details.component";
import welcome_component_1 from "./views/welcome/welcome.component";
import insufficient_entitlements_component_1 from "./views/insufficient_entitlements/insufficient_entitlements.component";
import activation_required_component_1 from "./views/activation_required/activation_required.component";

/**
 * Defines a global list of all
 * states defined in this application
 * and their respective component
 */
export var POPUP_ROUTER_STATES = [
  {
    name: "welcome",
    component: welcome_component_1.WelcomeComponent,
  },
  {
    name: "assign_device",
    component: assign_device_component_1.AssignDeviceComponent,
  },
  {
    name: "user_details",
    component: user_details_component_1.UserDetailsComponent,
  },
  {
    name: "insufficient_entitlements",
    component:
      insufficient_entitlements_component_1.InsufficientEntitlementsComponent,
  },
  {
    name: "activation_required",
    component: activation_required_component_1.ActivationRequiredComponent,
  },
];
//# sourceMappingURL=popup.states.js.map
