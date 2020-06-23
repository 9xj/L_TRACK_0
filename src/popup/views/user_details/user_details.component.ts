import core_1 from "@angular/core";
import angular_1 from "@uirouter/angular";
import status_service_1 from "../../services/status/status.service";
import logger_1 from "../../../common/logger";
import client_1 from "javascript-familyzone-api/dist/client";
import environment_1 from "../../../common/environment/environment";
import storage_helper_1 from "../../../common/storage_helper";
import error_modal_service_1 from "../../services/error/error_modal.service";
import common_proto_1 from "fc-common/common_js/common_proto";
const ApiError = common_proto_1.errors.ApiError;
const UserDetailsComponent /** @class */ = (() => {
  /**
   * Builds a new UserDetails component
   * with the injected services
   *
   * @param {StatusService} statusService
   * @param {StateService} stateService
   * @param {ErrorModalService} errorService
   */
  class UserDetailsComponent {
    constructor(statusService, stateService, errorService) {
      this.statusService = statusService;
      this.stateService = stateService;
      this.errorService = errorService;
      /**
       * Defines the logger used by the logic of this component
       * @type {Logger}
       */
      this.logger = new logger_1.Logger(
        "com.familyzone.mobilezone.popup.user_details"
      );
      /**
       * Defines the Family Zone API client used by this component
       * @type {ApiClient}
       */
      this.apiClient = new client_1.ApiClient(environment_1.environment.env);
      /**
       * Represents the current filtering routine of the assigned user
       */
      this.userRoutine = "play";
      /**
       * Defines if the component is populated and ready to display
       */
      this.ready = false;
    }

    /**
     * Called by angular when it is
     * initialising the component
     * in the browser
     */
    ngOnInit() {
      const _this = this;
      this.footerStatus = this.statusService.get("footer");
      this.populateDeviceDetails().catch((err) => {
        _this.footerStatus.setIdle();
        if (err instanceof ApiError) {
          switch (err.status_code) {
            case 400:
            case 401:
            case 403:
              _this.logger.error(
                "Failed to populate device details, device isn't registered:",
                err.toString(),
                err.body
              );
              _this.errorService.showErrorMessage(err.reason);
              storage_helper_1.StorageHelper.clearKeys(["device_token"]);
              storage_helper_1.StorageHelper.setUserName(null);
              storage_helper_1.StorageHelper.setAssignmentState(false);
              _this.stateService.go("welcome");
              break;
            default:
              _this.logger.error(
                "Failed to populate device details:",
                err.message
              );
              _this.errorService.showErrorMessage(err.reason, () => {
                window.close();
              });
          }
        } else {
          _this.logger.error(
            "Failed to populate device details, network error:",
            err
          );
          _this.errorService.showErrorMessage(
            "Could not reach Family Zone portal service. Please check your connection and try again",
            () => {
              window.close();
            }
          );
        }
      });
    }

    /**
     * Called during the initialization of
     * the component to fill in details about
     * the user currently assigned to the device
     *
     * @returns {Promise<void>}
     */
    populateDeviceDetails() {
      return __awaiter(this, void 0, void 0, function () {
        let deviceToken;
        let deviceDetails;
        let _a;
        let _b;
        let _c;
        let _d;
        return __generator(this, function (_e) {
          switch (_e.label) {
            case 0:
              this.logger.info("Requesting device details from portal");
              this.footerStatus.setBusy("Fetching device details");
              this.logger.debug("Retrieving device token from storage");
              return [
                4 /*yield*/,
                storage_helper_1.StorageHelper.getDeviceToken(),
              ];
            case 1:
              deviceToken = _e.sent();
              this.logger.debug("Querying portal for device details");
              _b = (_a = this.apiClient).getDeviceDetails;
              _c = [deviceToken];
              _d = {};
              return [
                4 /*yield*/,
                storage_helper_1.StorageHelper.getMACAddress(),
              ];
            case 2:
              return [
                4 /*yield*/,
                _b.apply(
                  _a,
                  _c.concat([
                    ((_d.device_id = _e.sent()),
                    (_d.include_user_filtering = true),
                    _d),
                  ])
                ),
              ];
            case 3:
              deviceDetails = _e.sent();
              this.userFullName = `${deviceDetails.user.name.firstName} ${deviceDetails.user.name.lastName}`;
              this.userRoutine = deviceDetails.filtering.currentAccessType.toLowerCase();
              this.ready = true;
              this.footerStatus.setIdle();
              return [
                4 /*yield*/,
                storage_helper_1.StorageHelper.setAssignmentState(true),
              ];
            case 4:
              _e.sent();
              return [2 /*return*/];
          }
        });
      });
    }

    /**
     * Invoked when a user clicks on the
     * "REQUEST CHANGES" button on this
     * component, its opens the Family
     * Zone home page in a new tab
     */
    requestChange() {
      this.logger.debug(
        "Request change selected, opening new tab to home.tools"
      );
      window.open("http://home.tools", "_blank");
    }
  }

  UserDetailsComponent = __decorate(
    [
      core_1.Component({
        selector: "user-details-panel",
        template: require("./user_details.component.html"),
        styles: [require("./user_details.component.css")],
      }),
      __metadata("design:paramtypes", [
        status_service_1.StatusService,
        angular_1.StateService,
        error_modal_service_1.ErrorModalService,
      ]),
    ],
    UserDetailsComponent
  );
  return UserDetailsComponent;
})();

export { UserDetailsComponent };
//# sourceMappingURL=user_details.component.js.map
