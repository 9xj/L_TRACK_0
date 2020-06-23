import storage_helper_1 from "./storage_helper";
import common_proto_1 from "fc-common/common_js/common_proto";
const ManagedDeviceRequest =
  common_proto_1.api.requests.v2.ManagedDeviceRequest;
/**
 * Helpers provides generic helper
 * functions for different tasks that
 * don't fit into the scope of other classes
 *
 * @author Liam Haworth <liamh@familyzone.com>
 * @since 1.0.0
 */
const Helpers = /** @class */ (() => {
  class Helpers {
    /**
     * Promise wrapper for the `chrome.extension`
     * API that is normally a callback
     *
     * @returns {Promise<boolean>}
     */
    static isAllowedIncognitoAccess() {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, (_a) => [
          2 /*return*/,
          new Promise((resolve) =>
            chrome.extension.isAllowedIncognitoAccess((isAllowedAccess) =>
              resolve(isAllowedAccess)
            )
          ),
        ]);
      });
    }

    /**
     * Promise wrapper for the `chrome.tabs`
     * API that is normally a callback
     *
     * @param {chrome.tabs.CreateProperties} createProperties
     * @returns {Promise<chrome.tabs.Tab>}
     */
    static createTab(createProperties) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, (_a) => [
          2 /*return*/,
          new Promise((resolve) =>
            chrome.tabs.create(createProperties, (tab) => resolve(tab))
          ),
        ]);
      });
    }

    /**
     * Promise wrapper for the 'chrome.runtime.getPlatformInfo`
     * API that is normally a callback, the result
     * it checked to see if the platform OS is
     * `cros` which would identify the device as
     * a ChromeOS device
     *
     * @returns {Promise<boolean>}
     */
    static isChromeOSDevice() {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, (_a) => [
          2 /*return*/,
          new Promise((resolve) =>
            chrome.runtime.getPlatformInfo(({ os }) => resolve(os === "cros"))
          ),
        ]);
      });
    }

    /**
     * getUserEmail wraps the Chrome API call
     * to get the users email from a callback
     * to a promise
     *
     * @returns {Promise<string>}
     */
    static getUserEmail() {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, (_a) => [
          2 /*return*/,
          new Promise((resolve) =>
            chrome.identity.getProfileUserInfo(({ email }) => resolve(email))
          ),
        ]);
      });
    }

    /**
     * Checks if the device has been claimed
     * in portal by checking if a device token
     * is stored in the browser.
     *
     * @returns {Promise<boolean>}
     */
    static isDeviceClaimed() {
      return __awaiter(this, void 0, void 0, function () {
        let _a;
        return __generator(this, (_b) => {
          switch (_b.label) {
            case 0:
              return [
                4 /*yield*/,
                storage_helper_1.StorageHelper.getDeviceToken(),
              ];
            case 1:
              _a = _b.sent() != null;
              if (!_a) return [3 /*break*/, 3];
              return [
                4 /*yield*/,
                storage_helper_1.StorageHelper.getDeviceToken(),
              ];
            case 2:
              _a = _b.sent().token.length > 0;
              _b.label = 3;
            case 3:
              return [2 /*return*/, _a];
          }
        });
      });
    }

    /**
     * Constructs a new ManagedDeviceRequest pre-filled
     * with information about the current device and the
     * operating system.
     *
     * If the device has already been provisioned a MAC
     * address it will be used in the request, otherwise
     * the field will be left blank and API will generate
     * a new MAC address for the device.
     *
     * @param {string} name The name of the device
     * @param {IUser} user The user to assign to the device on creation
     * @returns {ManagedDeviceRequest}
     */
    static generateDeviceDetails(name, { zoneId, id }) {
      return __awaiter(this, void 0, void 0, function () {
        let mac;
        return __generator(this, (_a) => {
          switch (_a.label) {
            case 0:
              mac = undefined;
              return [
                4 /*yield*/,
                storage_helper_1.StorageHelper.getMACAddress(),
              ];
            case 1:
              if (!_a.sent()) return [3 /*break*/, 3];
              return [
                4 /*yield*/,
                storage_helper_1.StorageHelper.getMACAddress(),
              ];
            case 2:
              mac = _a.sent();
              _a.label = 3;
            case 3:
              return [
                2 /*return*/,
                ManagedDeviceRequest.create({
                  controllerType:
                    common_proto_1.api.models.v2.ControllerType.CHROME_EXT,
                  platform: common_proto_1.api.models.v2.PlatformType.CHROME_OS,
                  platformVersion: Helpers.getChromeVersion(),
                  appType:
                    common_proto_1.api.models.v2.AppType.MOBILE_ZONE_LAPTOP,
                  appVersion: chrome.runtime.getManifest().version,
                  name,
                  mac,
                  zoneId: zoneId,
                  userId: id,
                }),
              ];
          }
        });
      });
    }
  }

  /**
   * Returns the current Chrome browser
   * version the extension is running in
   *
   * @returns {String}
   */
  Helpers.getChromeVersion = () =>
    /Chrome\/([0-9]{2,}\.[0-9]+)/.exec(navigator.userAgent)[1];
  return Helpers;
})();

export { Helpers };
//# sourceMappingURL=helpers.js.map
