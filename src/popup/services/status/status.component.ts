import core_1 from "@angular/core";
import status_service_1 from "./status.service";
const StatusComponent /** @class */ = (() => {
  /**
   * Makes a new status component
   *
   * @param {StatusService} statusService The Status Service as to register for global use
   */
  class StatusComponent {
    constructor(statusService) {
      this.statusService = statusService;
      /**
       * Defines the current state of the status component
       * @type {boolean}
       */
      this.idle = true;
    }

    /**
     * Called once the component has been loaded
     * by Angular, it allows the component to register
     * itself with the global status component list
     */
    ngOnInit() {
      this.statusService._register(this);
    }

    /**
     * Changes the state of the status component
     * to idle
     */
    setIdle() {
      this.idle = true;
    }

    /**
     * Changes the state of the status component
     * to busy and sets the test to display next
     * to the busy image
     *
     * @param {string} busyText Text describing the current busy status
     */
    setBusy(busyText) {
      this.busyText = busyText;
      this.idle = false;
    }
  }

  __decorate(
    [core_1.Input(), __metadata("design:type", String)],
    StatusComponent.prototype,
    "name",
    void 0
  );
  __decorate(
    [core_1.Input(), __metadata("design:type", String)],
    StatusComponent.prototype,
    "idleImage",
    void 0
  );
  __decorate(
    [core_1.Input(), __metadata("design:type", String)],
    StatusComponent.prototype,
    "busyImage",
    void 0
  );
  StatusComponent = __decorate(
    [
      core_1.Component({
        selector: "status",
        template: require("./status.component.html"),
        styles: [require("./status.component.css")],
      }),
      __metadata("design:paramtypes", [status_service_1.StatusService]),
    ],
    StatusComponent
  );
  return StatusComponent;
})();

export { StatusComponent };
//# sourceMappingURL=status.component.js.map
