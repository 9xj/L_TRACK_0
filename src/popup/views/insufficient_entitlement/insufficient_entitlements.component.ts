import core_1 from "@angular/core";
import storage_helper_1 from "../../../common/storage_helper";
const InsufficientEntitlementsComponent /** @class */ = (() => {
  class InsufficientEntitlementsComponent {
    manageAccount() {
      return __awaiter(this, void 0, void 0, function () {
        let _a;
        let _b;
        return __generator(this, (_c) => {
          switch (_c.label) {
            case 0:
              _b = (_a = window).open;
              return [
                4 /*yield*/,
                storage_helper_1.StorageHelper.getPaymentRequiredError(),
              ];
            case 1:
              _b.apply(_a, [_c.sent().actionUrl, "_blank"]);
              return [2 /*return*/];
          }
        });
      });
    }
  }

  InsufficientEntitlementsComponent = __decorate(
    [
      core_1.Component({
        selector: "insufficient_entitlements",
        template: require("./insufficient_entitlements.component.html"),
        styles: [require("./insufficient_entitlements.component.css")],
      }),
    ],
    InsufficientEntitlementsComponent
  );
  return InsufficientEntitlementsComponent;
})();

export { InsufficientEntitlementsComponent };
//# sourceMappingURL=insufficient_entitlements.component.js.map
