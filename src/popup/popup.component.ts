import core_1 from "@angular/core";
import angular_1 from "@uirouter/angular";
import status_service_1 from "./services/status/status.service";
import logger_1 from "../common/logger";
import helpers_1 from "../common/helpers";
const PopupComponent = /** @class */ (() => {
  /**
   * Builds a new PopupComponent
   * with the injected services
   *
   * @param {StateService} stateService
   * @param {StatusService} statusService
   */
  class PopupComponent {
    constructor(stateService, statusService) {
      this.stateService = stateService;
      this.statusService = statusService;
      /**
       * Defines the logger used by the logic of this component
       * @type {Logger}
       */
      this.logger = new logger_1.Logger("com.familyzone.mobilezone.popup");
    }

    /**
     * Called by angular when it is
     * initialising the component
     * in the browser just after the
     * view has been rendered
     */
    ngAfterViewInit() {
      const _this = this;
      setTimeout(() =>
        _this.initializePopup().catch((err) => {
          _this.logger.error("Failed to initialize UI core:", err);
        })
      );
    }

    /**
     * Initializes the Popup IO by
     * checking if the device has been
     * already claimed and assigned, if
     * not it attempted to claim the device
     * for auto-enrolment and falls back
     * to user login if all else fails
     *
     * @returns {Promise<void>}
     */
    initializePopup() {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.logger.info("Mobile Zone Agent UI initialized");
              this.footerStatus = this.statusService.get("footer");
              this.logger.info("Checking if device has been claimed");
              this.footerStatus.setBusy("Fetching device details");
              return [4 /*yield*/, helpers_1.Helpers.isDeviceClaimed()];
            case 1:
              if (_a.sent()) {
                this.logger.info(
                  "Device token has been claimed, showing user details"
                );
                this.footerStatus.setIdle();
                this.stateService.go("user_details");
                return [2 /*return*/];
              } else {
                this.logger.info(
                  "Device has not been claimed, asking user to login"
                );
                this.footerStatus.setIdle();
                this.stateService.go("welcome");
              }
              return [2 /*return*/];
          }
        });
      });
    }
  }

  PopupComponent = __decorate(
    [
      core_1.Component({
        selector: "popup",
        template: require("./popup.component.html"),
        styles: [require("./popup.component.css")],
      }),
      __metadata("design:paramtypes", [
        angular_1.StateService,
        status_service_1.StatusService,
      ]),
    ],
    PopupComponent
  );
  return PopupComponent;
})();

export { PopupComponent };
//# sourceMappingURL=popup.component.js.map
