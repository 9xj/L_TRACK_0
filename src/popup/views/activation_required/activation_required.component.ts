import core_1 from "@angular/core";
import storage_helper_1 from "../../../common/storage_helper";
import error_modal_service_1 from "../../services/error/error_modal.service";
import logger_1 from "../../../common/logger";
const ActivationRequiredComponent /** @class */ = (() => {
  /**
   * Builds a new ActivationRequiredComponent
   * with the injected services
   *
   * @param {ErrorModalService} errorService
   */
  class ActivationRequiredComponent {
    constructor(errorService) {
      this.errorService = errorService;
      /**
       * Defines the logger used by the logic of this component
       * @type {Logger}
       */
      this.logger = new logger_1.Logger(
        "com.familyzone.mobilezone.popup.activation_required"
      );
      /**
       * Defines the user's email address to present in the view
       * @type {string}
       */
      this.userEmail = "user@example.com";
    }

    /**
     * Called by angular when it is
     * initialising the component
     * in the browser
     */
    ngOnInit() {
      const _this = this;
      storage_helper_1.StorageHelper.getPaymentRequiredError().then(
        ({ email, actionUrl }) => {
          _this.userEmail = email;
          _this.resendLink = actionUrl;
        }
      );
    }

    /**
     * Invoked by the user when they
     * click on 'RESEND EMAIL', it will
     * call the action URL included in
     * the Payment Required error
     *
     * @returns {Promise<void>}
     */
    resendEmail() {
      return __awaiter(this, void 0, void 0, function () {
        let response;
        let err_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              return [4 /*yield*/, fetch(this.resendLink)];
            case 1:
              response = _a.sent();
              switch (response.status) {
                case 200:
                  return [2 /*return*/];
                default:
                  this.logger.error(
                    "Failed to resend activation email:",
                    response
                  );
                  this.errorService.showErrorMessage(
                    "Failed to resend activation email, please contact Family Zone support for further assistance"
                  );
              }
              return [3 /*break*/, 3];
            case 2:
              err_1 = _a.sent();
              this.logger.error("Failed to resend activation email:", err_1);
              this.errorService.showErrorMessage(
                "Failed to resend activation email, please contact Family Zone support for further assistance"
              );
              return [3 /*break*/, 3];
            case 3:
              return [2 /*return*/];
          }
        });
      });
    }
  }

  ActivationRequiredComponent = __decorate(
    [
      core_1.Component({
        selector: "activation_required",
        template: require("./activation_required.component.html"),
        styles: [require("./activation_required.component.css")],
      }),
      __metadata("design:paramtypes", [
        error_modal_service_1.ErrorModalService,
      ]),
    ],
    ActivationRequiredComponent
  );
  return ActivationRequiredComponent;
})();

export { ActivationRequiredComponent };
//# sourceMappingURL=activation_required.component.js.map
