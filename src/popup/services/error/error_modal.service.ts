import core_1 from "@angular/core";
import error_modal_component_1 from "./error_modal.component";
const ErrorModalService /** @class */ = (() => {
  /**
   * Builds a new ErrorModalService
   * with the injected services
   *
   * @param {ComponentFactoryResolver} componentFactoryResolver
   * @param {ApplicationRef} appRef
   * @param {Injector} injector
   */
  class ErrorModalService {
    constructor(componentFactoryResolver, appRef, injector) {
      this.componentFactoryResolver = componentFactoryResolver;
      this.appRef = appRef;
      this.injector = injector;
    }

    /**
     * Constructs a new ErrorMessageComponent
     * with the provided error message and
     * appends it to the body of the page
     *
     * @param {string} message The error message to display
     * @param {Function} callback Optional function to be called when the modal is closed
     */
    showErrorMessage(message, callback) {
      const componentRef = this.componentFactoryResolver
        .resolveComponentFactory(error_modal_component_1.ErrorModalComponent)
        .create(this.injector);
      componentRef.instance.modalMessage = message;
      componentRef.instance.componentRef = componentRef;
      componentRef.instance.callback = callback;
      this.appRef.attachView(componentRef.hostView);
      const domElement = componentRef.hostView.rootNodes[0];
      document.body.appendChild(domElement);
    }
  }

  ErrorModalService = __decorate(
    [
      core_1.Injectable(),
      __metadata("design:paramtypes", [
        core_1.ComponentFactoryResolver,
        core_1.ApplicationRef,
        core_1.Injector,
      ]),
    ],
    ErrorModalService
  );
  return ErrorModalService;
})();

export { ErrorModalService };
//# sourceMappingURL=error_modal.service.js.map
