import core_1 from "@angular/core";
import angular_1 from "@uirouter/angular";
import forms_1 from "@angular/forms";
import status_service_1 from "../../services/status/status.service";
import logger_1 from "../../../common/logger";
import storage_helper_1 from "../../../common/storage_helper";
import environment_1 from "../../../common/environment/environment";
import client_1 from "javascript-familyzone-api/dist/client";
import error_modal_service_1 from "../../services/error/error_modal.service";
import common_proto_1 from "fc-common/common_js/common_proto";
const ApiError = common_proto_1.errors.ApiError;
import helpers_1 from "../../../common/helpers";
const PaymentRequired = common_proto_1.errors.PaymentRequired;
const AssignDeviceComponent /** @class */ = (() => {
  /**
   * Builds a new AssignDevice component
   * with the injected services
   *
   * @param {StatusService} statusService
   * @param {StateService} stateService
   * @param {ErrorModalService} errorService
   */
  class AssignDeviceComponent {
    constructor(statusService, stateService, errorService) {
      this.statusService = statusService;
      this.stateService = stateService;
      this.errorService = errorService;
      /**
       * Defines the logger used by the logic of this component
       * @type {Logger}
       */
      this.logger = new logger_1.Logger(
        "com.familyzone.mobilezone.popup.assign_device"
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
      const _this = this;
      this.footerStatus = this.statusService.get("footer");
      this.assignDeviceForm = new forms_1.FormGroup({
        deviceName: new forms_1.FormControl(),
        deviceUser: new forms_1.FormControl(),
      });
      this.populateUsers().catch((err) => {
        _this.footerStatus.setIdle();
        _this.logger.error("Failed to populate users list:", err);
        if (err instanceof ApiError)
          _this.errorService.showErrorMessage(
            `Encountered error while fetching users from portal: ${err.reason}`
          );
        else
          _this.errorService.showErrorMessage(
            `Encountered error while fetching users from portal: ${err}`
          );
        _this.stateService.go("welcome");
      });
    }

    /**
     * Called during the initialization of
     * the component to fill in the available
     * users in the zone that can be assign to
     * this device
     *
     * @returns {Promise<void>}
     */
    populateUsers() {
      return __awaiter(this, void 0, void 0, function () {
        let parentToken;
        let _a;
        let _b;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              this.footerStatus.setBusy("Fetching users from portal");
              this.logger.debug("Fetching parent token from storage");
              return [
                4 /*yield*/,
                storage_helper_1.StorageHelper.getParentToken(),
              ];
            case 1:
              parentToken = _c.sent();
              this.logger.info("Fetching users from portal");
              _a = this;
              _b = this.buildList;
              return [
                4 /*yield*/,
                this.client.listEnrollableUsers(parentToken, 10, this.search),
              ];
            case 2:
              _a.userDetails = _b.apply(this, [_c.sent().users]);
              this.searchTimeout = null;
              this.logger.debug("Got users from portal", this.userDetails);
              this.footerStatus.setIdle();
              return [2 /*return*/];
          }
        });
      });
    }

    /**
     * Builds a searchable list from an API
     * result
     *
     * @param users List of users from API
     */
    buildList(users) {
      const list = Array();
      users.forEach((user) => {
        list.push({
          name: `${user.name.firstName} ${user.name.lastName}`,
          user,
        });
      });
      return list;
    }

    /**
     * Invoked when the user starts typing in the search
     * box of the user selection menu, it will wait till
     * the user finishes typing and then submits an API
     * query to get a more accurate list
     *
     * @param event
     */
    searchUsers({ term }) {
      this.search = term;
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(this.populateUsers.bind(this), 500);
    }

    /**
     * Assign Device is invoked when the user
     * clicks on the "ASSIGN DEVICE" button on
     * this component, API calls to assign the
     * device against the selected user are made
     * and the device token is claimed.
     *
     * Once the assignment is completed the state
     * is changed to UserDetails
     *
     * @returns {Promise<void>}
     */
    assignDevice() {
      return __awaiter(this, void 0, void 0, function () {
        let deviceName;
        let deviceUser;
        let parentToken;
        let deviceDetails;
        let _a;
        let _b;
        let _c;
        let err_1;
        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 6, , 11]);
              this.footerStatus.setBusy("Assigning device to user");
              deviceName = this.assignDeviceForm.get("deviceName").value;
              deviceUser = this.assignDeviceForm.get("deviceUser").value;
              if (deviceName == null || deviceName.length == 0) {
                this.footerStatus.setIdle();
                this.errorService.showErrorMessage(
                  "A device name must be provided, please set one and try again"
                );
                return [2 /*return*/];
              }
              if (!deviceUser) {
                this.footerStatus.setIdle();
                this.errorService.showErrorMessage(
                  "A user must be selected to be assigned to the device"
                );
                return [2 /*return*/];
              }
              this.logger.debug("Fetching parent token from storage");
              return [
                4 /*yield*/,
                storage_helper_1.StorageHelper.getParentToken(),
              ];
            case 1:
              parentToken = _d.sent();
              this.logger.debug("selected user:", deviceUser);
              this.logger.info("Activating device with Family Zone");
              _b = (_a = this.client).activateManagedDevice;
              _c = [parentToken];
              return [
                4 /*yield*/,
                helpers_1.Helpers.generateDeviceDetails(
                  deviceName,
                  deviceUser.user
                ),
              ];
            case 2:
              return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent()]))];
            case 3:
              deviceDetails = _d.sent();
              this.logger.debug("Storing device token");
              return [
                4 /*yield*/,
                storage_helper_1.StorageHelper.setDeviceToken({
                  token: deviceDetails.authToken,
                }),
              ];
            case 4:
              _d.sent();
              this.logger.debug("Storing mac address");
              return [
                4 /*yield*/,
                storage_helper_1.StorageHelper.setMACAddress(deviceDetails.mac),
              ];
            case 5:
              _d.sent();
              this.logger.debug(
                "Removing parent token and user context from storage"
              );
              storage_helper_1.StorageHelper.clearKeys(["parent_token"]);
              chrome.runtime.sendMessage("update_config");
              chrome.runtime.sendMessage("reload_filter");
              this.footerStatus.setIdle();
              this.stateService.go("user_details");
              return [3 /*break*/, 11];
            case 6:
              err_1 = _d.sent();
              this.footerStatus.setIdle();
              this.logger.error("Failed to assign device to user:", err_1);
              if (!(err_1 instanceof ApiError)) return [3 /*break*/, 7];
              this.errorService.showErrorMessage(
                `Failed to assign device to user: ${err_1.reason}`
              );
              return [3 /*break*/, 10];
            case 7:
              if (!(err_1 instanceof PaymentRequired)) return [3 /*break*/, 9];
              return [
                4 /*yield*/,
                storage_helper_1.StorageHelper.setPaymentRequiredError(err_1),
              ];
            case 8:
              _d.sent();
              switch (err_1.code) {
                case "TEMPORARY_ZONE":
                  this.stateService.go("activation_required");
                  return [2 /*return*/];
                case "INSUFFICIENT_ENTITLEMENTS":
                  this.stateService.go("insufficient_entitlements");
                  return [2 /*return*/];
              }
              return [3 /*break*/, 10];
            case 9:
              this.errorService.showErrorMessage(
                `Failed to assign device to user: ${err_1}`
              );
              _d.label = 10;
            case 10:
              return [3 /*break*/, 11];
            case 11:
              return [2 /*return*/];
          }
        });
      });
    }
  }

  AssignDeviceComponent = __decorate(
    [
      core_1.Component({
        selector: "assign-device-panel",
        template: require("./assign_device.component.html"),
        styles: [require("./assign_device.component.css")],
      }),
      __metadata("design:paramtypes", [
        status_service_1.StatusService,
        angular_1.StateService,
        error_modal_service_1.ErrorModalService,
      ]),
    ],
    AssignDeviceComponent
  );
  return AssignDeviceComponent;
})();

export { AssignDeviceComponent };
//# sourceMappingURL=assign_device.component.js.map
