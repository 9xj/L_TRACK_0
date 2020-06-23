import core_1 from "@angular/core";
const StatusService /** @class */ = (() => {
  class StatusService {
    constructor() {
      /**
       * Defines the list of globally
       * available status components
       *
       * @type {Map<string, StatusComponent>}
       */
      this.list = new Map();
    }

    /**
     * Registers a new status component
     * into the global list
     *
     * @param {StatusComponent} comp The status component to register
     * @private
     */
    _register(comp) {
      this.list.set(comp.name, comp);
    }

    /**
     * Returns the status component that
     * was registered with the provided name
     *
     * @param {string} name The name of the status component to select
     * @returns {StatusComponent} The status component registered under the requested name
     */
    get(name) {
      return this.list.get(name);
    }
  }

  StatusService = __decorate([core_1.Injectable()], StatusService);
  return StatusService;
})();

export { StatusService };
//# sourceMappingURL=status.service.js.map
