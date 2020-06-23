import core_1 from "@angular/core";
import animations_1 from "@angular/animations";
const ErrorModalComponent /** @class */ = (() => {
  /**
   * Builds a new ErrorModalComponent
   * with the injected services
   *
   * @param {ApplicationRef} appRef
   */
  class ErrorModalComponent {
    constructor(appRef) {
      this.appRef = appRef;
      /**
       * Defines the current state of the dialog (used for animation)
       * @type {string}
       */
      this.currentState = "active";
    }

    /**
     * Invoked by the error to close the
     * error modal
     */
    closeModal() {
      const _this = this;
      this.currentState = "inactive";
      setTimeout(() => {
        _this.appRef.detachView(_this.componentRef.hostView);
        _this.componentRef.destroy();
        if (_this.callback != null) {
          _this.callback();
        }
      }, 150);
    }
  }

  ErrorModalComponent = __decorate(
    [
      core_1.Component({
        selector: "error-modal",
        template: require("./error_modal.component.html"),
        styles: [require("./error_modal.component.css")],
        animations: [
          animations_1.trigger("state", [
            animations_1.state("active", animations_1.style({ opacity: 1 })),
            animations_1.state("inactive", animations_1.style({ opacity: 0 })),
            animations_1.transition("void => *", animations_1.animate("150ms")),
            animations_1.transition(
              "active => inactive",
              animations_1.animate("150ms")
            ),
          ]),
        ],
      }),
      __metadata("design:paramtypes", [core_1.ApplicationRef]),
    ],
    ErrorModalComponent
  );
  return ErrorModalComponent;
})();

export { ErrorModalComponent };
//# sourceMappingURL=error_modal.component.js.map
