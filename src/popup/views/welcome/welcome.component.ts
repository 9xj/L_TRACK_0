import core_1 from "@angular/core";
import angular_1 from "@uirouter/angular";
import forms_1 from "@angular/forms";
import client_1 from "javascript-familyzone-api/dist/client";
import environment_1 from "../../../common/environment/environment";
import logger_1 from "../../../common/logger";
import status_service_1 from "../../services/status/status.service";
import storage_helper_1 from "../../../common/storage_helper";
import error_modal_service_1 from "../../services/error/error_modal.service";
import common_proto_1 from "fc-common/common_js/common_proto";
const ApiError = common_proto_1.errors.ApiError;
const WelcomeComponent /** @class */ = (() => {
  /**
   * Builds a new WelcomeComponents
   * with the injected services
   *
   * @param {StateService} stateService
   * @param {StatusService} statusService
   * @param {ErrorModalService} errorService
   */
  class WelcomeComponent {
    constructor(stateService, statusService, errorService) {
      this.stateService = stateService;
      this.statusService = statusService;
      this.errorService = errorService;
      /**
       * Defines the logger used by the logic of this component
       * @type {Logger}
       */
      this.logger = new logger_1.Logger(
        "com.familyzone.mobilezone.popup.welcome"
      );
      /**
       * Defines the Family Zone API client used by this component
       * @type {ApiClient}
       */
      this.client = new client_1.ApiClient(environment_1.environment.env);
    }

    /**
     * Called by angular when it is
     * initialising the component
     * in the browser
     */
    ngOnInit() {
      this.footerStatus = this.statusService.get("footer");
      this.loginForm = new forms_1.FormGroup({
        username: new forms_1.FormControl(),
        password: new forms_1.FormControl(),
      });
      /*this.logger.info("Checking if current device is running ChromeOS");
            Helpers.isChromeOSDevice().then(chromeOS => {
                if (chromeOS)
                    return;

                this.logger.warn("Not running on a ChromeOS device, showing warning message to user");
                this.errorService.showErrorMessage(
                    "Mobile Zone for Chromebooks doesn't work on Windows or macOS<br/></br>Please visit <a target='_blank' href='http://familyzone.com/laptops'>Family Zone</a> to download the correct application for your device",
                    () => {
                    window.close();
                })
            });*/
    }

    /**
     * Invoked by the user when they click
     * on the "SIGN IN" button on the component,
     * a parent token and user context is requested
     * and a new device entry is created
     *
     * @returns {Promise<void>}
     */
    signIn() {
      return __awaiter(this, void 0, void 0, function () {
        let parentToken;
        let err_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 3, , 4]);
              this.logger.info("Attempting to sign in user to portal");
              this.footerStatus.setBusy("Logging into Portal");
              this.loginForm.disable();
              this.logger.debug("Requesting parent token");
              return [
                4 /*yield*/,
                this.client.getParentToken({
                  grant_type: "password",
                  username: this.loginForm.get("username").value,
                  password: this.loginForm.get("password").value,
                  scope: "zone:admin",
                  client_description: "Chromebook Agent",
                }),
              ];
            case 1:
              parentToken = _a.sent();
              this.logger.debug("Storing parent token");
              return [
                4 /*yield*/,
                storage_helper_1.StorageHelper.setParentToken(parentToken),
              ];
            case 2:
              _a.sent();
              this.footerStatus.setIdle();
              this.logger.info(
                "User logged in successfully, asking user to assign device"
              );
              this.stateService.go("assign_device");
              return [3 /*break*/, 4];
            case 3:
              err_1 = _a.sent();
              this.footerStatus.setIdle();
              this.loginForm.enable();
              this.logger.error(
                "Encountered error while attempting to sign in:",
                err_1
              );
              if (err_1 instanceof ApiError)
                this.errorService.showErrorMessage(
                  `Failed to login into portal: ${err_1.reason}`
                );
              else
                this.errorService.showErrorMessage(
                  `Failed to login into portal: ${err_1}`
                );
              return [3 /*break*/, 4];
            case 4:
              return [2 /*return*/];
          }
        });
      });
    }
  }

  WelcomeComponent = __decorate(
    [
      core_1.Component({
        selector: "welcome-panel",
        template: require("./welcome.component.html"),
        styles: [require("./welcome.component.css")],
      }),
      __metadata("design:paramtypes", [
        angular_1.StateService,
        status_service_1.StatusService,
        error_modal_service_1.ErrorModalService,
      ]),
    ],
    WelcomeComponent
  );
  return WelcomeComponent;
})();

export { WelcomeComponent };
//# sourceMappingURL=welcome.component.js.map
