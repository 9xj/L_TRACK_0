/**
 * StorageHelper provides wrapper
 * methods for accessing chrome
 * storage without long keys or
 * callbacks
 *
 * @author Liam Haworth <liamh@familyzone.com>
 * @since 1.0.0
 */
const StorageHelper = /** @class */ (() => {
  class StorageHelper {
    /**
     * Wraps the call to local storage to
     * retrieve a stored device token
     *
     * @returns {Promise<DeviceToken>}
     */
    static getDeviceToken() {
      return __awaiter(this, void 0, void 0, function () {
        let items;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4 /*yield*/,
                this.getFromLocalStorage(this.storageKeys["device_token"]),
              ];
            case 1:
              items = _a.sent();
              return [2 /*return*/, items[this.storageKeys["device_token"]]];
          }
        });
      });
    }

    /**
     * Wraps the call to local storage to
     * save a device token in the browser
     *
     * @param {DeviceToken} deviceToken The device token to store
     * @returns {Promise<void>}
     */
    static setDeviceToken(deviceToken) {
      return __awaiter(this, void 0, void 0, function () {
        let items;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              items = {};
              items[this.storageKeys["device_token"]] = deviceToken;
              return [4 /*yield*/, this.putInLocalStorage(items)];
            case 1:
              _a.sent();
              return [2 /*return*/];
          }
        });
      });
    }

    /**
     * Wraps the call to local storage to
     * retrieve a stored parent token
     *
     * @returns {Promise<ParentToken>}
     */
    static getParentToken() {
      return __awaiter(this, void 0, void 0, function () {
        let items;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4 /*yield*/,
                this.getFromLocalStorage(this.storageKeys["parent_token"]),
              ];
            case 1:
              items = _a.sent();
              return [2 /*return*/, items[this.storageKeys["parent_token"]]];
          }
        });
      });
    }

    /**
     * Wraps the call to local storage to
     * save a parent token in the browser
     *
     * @param {ParentToken} parentToken The parent token to store
     * @returns {Promise<void>}
     */
    static setParentToken(parentToken) {
      return __awaiter(this, void 0, void 0, function () {
        let items;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              items = {};
              items[this.storageKeys["parent_token"]] = parentToken;
              return [4 /*yield*/, this.putInLocalStorage(items)];
            case 1:
              _a.sent();
              return [2 /*return*/];
          }
        });
      });
    }

    /**
     * Wraps the call to local storage to
     * retrieve the stored MAC address
     *
     * @returns {Promise<String>}
     */
    static getMACAddress() {
      return __awaiter(this, void 0, void 0, function () {
        let items;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4 /*yield*/,
                this.getFromLocalStorage(this.storageKeys["mac_address"]),
              ];
            case 1:
              items = _a.sent();
              return [2 /*return*/, items[this.storageKeys["mac_address"]]];
          }
        });
      });
    }

    /**
     * Wraps the call to local storage to
     * save the MAC address in the browser
     *
     * @param {string} macAddress The MAC address to store
     * @returns {Promise<void>}
     */
    static setMACAddress(macAddress) {
      return __awaiter(this, void 0, void 0, function () {
        let items;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              items = {};
              items[this.storageKeys["mac_address"]] = macAddress;
              return [4 /*yield*/, this.putInLocalStorage(items)];
            case 1:
              _a.sent();
              return [2 /*return*/];
          }
        });
      });
    }

    /**
     * Wraps the call to local storage to
     * retrieve the stored the current device
     * assignment state
     *
     * @returns {Promise<String>}
     */
    static getAssignmentState() {
      return __awaiter(this, void 0, void 0, function () {
        let items;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4 /*yield*/,
                this.getFromLocalStorage(this.storageKeys["assignment_state"]),
              ];
            case 1:
              items = _a.sent();
              return [
                2 /*return*/,
                items[this.storageKeys["assignment_state"]] != null
                  ? items[this.storageKeys["assignment_state"]]
                  : false,
              ];
          }
        });
      });
    }

    /**
     * Wraps the call to local storage to
     * save the MAC address in the browser
     *
     * @param {boolean} state The device assignment state to store
     * @returns {Promise<void>}
     */
    static setAssignmentState(state) {
      return __awaiter(this, void 0, void 0, function () {
        let items;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              items = {};
              items[this.storageKeys["assignment_state"]] = state;
              return [4 /*yield*/, this.putInLocalStorage(items)];
            case 1:
              _a.sent();
              if (!state) chrome.runtime.sendMessage("reload_filter");
              return [2 /*return*/];
          }
        });
      });
    }

    /**
     * Wraps the call to local storage to
     * retrieve the stored Payment Required error
     *
     * @returns {Promise<String>}
     */
    static getPaymentRequiredError() {
      return __awaiter(this, void 0, void 0, function () {
        let items;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4 /*yield*/,
                this.getFromLocalStorage(this.storageKeys["payment_required"]),
              ];
            case 1:
              items = _a.sent();
              return [
                2 /*return*/,
                items[this.storageKeys["payment_required"]],
              ];
          }
        });
      });
    }

    /**
     * Wraps the call to local storage to
     * save the Payment Required error in the browser
     *
     * @param {PaymentRequiredError} error The error to store
     * @returns {Promise<void>}
     */
    static setPaymentRequiredError(error) {
      return __awaiter(this, void 0, void 0, function () {
        let items;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              items = {};
              items[this.storageKeys["payment_required"]] = error;
              return [4 /*yield*/, this.putInLocalStorage(items)];
            case 1:
              _a.sent();
              return [2 /*return*/];
          }
        });
      });
    }

    /**
     * Wraps the call to local storage to
     * retrieve the incognito warning count
     *
     * @returns {Promise<number>}
     */
    static getIncognitoWarningCount() {
      return __awaiter(this, void 0, void 0, function () {
        let items;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4 /*yield*/,
                this.getFromLocalStorage(this.storageKeys["incognito_count"]),
              ];
            case 1:
              items = _a.sent();
              return [
                2 /*return*/,
                items[this.storageKeys["incognito_count"]] != null
                  ? items[this.storageKeys["incognito_count"]]
                  : 0,
              ];
          }
        });
      });
    }

    /**
     * Calls `getIncognitoWarningCount` to retrieve
     * the current count and increments it by one then
     * stores the count in local storage
     *
     * @returns {Promise<void>}
     */
    static incrementIncognitoWarningCount() {
      return __awaiter(this, void 0, void 0, function () {
        let items;
        let _a;
        let _b;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              items = {};
              _a = items;
              _b = this.storageKeys["incognito_count"];
              return [4 /*yield*/, this.getIncognitoWarningCount()];
            case 1:
              _a[_b] = _c.sent() + 1;
              return [4 /*yield*/, this.putInLocalStorage(items)];
            case 2:
              _c.sent();
              return [2 /*return*/];
          }
        });
      });
    }

    /**
     * Will return the user configuration currently
     * store in the local storage of the browser, if
     * none currently exists a default configuration will
     * be stored and returned
     *
     * @returns {Promise<UserConfiguration>}
     */
    static getUserConfiguration() {
      return __awaiter(this, void 0, void 0, function () {
        let items;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4 /*yield*/,
                this.getFromLocalStorage(
                  this.storageKeys["user_configuration"]
                ),
              ];
            case 1:
              items = _a.sent();
              if (!(items[this.storageKeys["user_configuration"]] == null))
                return [3 /*break*/, 3];
              return [
                4 /*yield*/,
                this.storeUserConfiguration(this.defaultUserConfiguration),
              ];
            case 2:
              _a.sent();
              return [2 /*return*/, this.defaultUserConfiguration];
            case 3:
              return [
                2 /*return*/,
                items[this.storageKeys["user_configuration"]],
              ];
          }
        });
      });
    }

    /**
     * Wraps the call to local storage to store
     * a user configuration in the browser
     *
     * @param config {UserConfiguration} The configuration to store
     * @returns {Promise<void>}
     */
    static storeUserConfiguration(config) {
      return __awaiter(this, void 0, void 0, function () {
        let items;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              items = {};
              items[this.storageKeys["user_configuration"]] = config;
              return [4 /*yield*/, this.putInLocalStorage(items)];
            case 1:
              _a.sent();
              return [2 /*return*/];
          }
        });
      });
    }

    /**
     * Wraps the call to local storage to
     * retrieve the stored user name
     *
     * @returns {Promise<String>}
     */
    static getUserName() {
      return __awaiter(this, void 0, void 0, function () {
        let items;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4 /*yield*/,
                this.getFromLocalStorage(this.storageKeys["user_name"]),
              ];
            case 1:
              items = _a.sent();
              return [2 /*return*/, items[this.storageKeys["user_name"]]];
          }
        });
      });
    }

    /**
     * Wraps the call to local storage to
     * save the user name in the browser
     *
     * @param {string} userName The user name to store
     * @returns {Promise<void>}
     */
    static setUserName(userName) {
      return __awaiter(this, void 0, void 0, function () {
        let items;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              items = {};
              items[this.storageKeys["user_name"]] = userName;
              return [4 /*yield*/, this.putInLocalStorage(items)];
            case 1:
              _a.sent();
              return [2 /*return*/];
          }
        });
      });
    }

    /**
     * Clears the values of the provided keys
     *
     * @param {string[]} keys Array of keys to clear from storage
     */
    static clearKeys(keys) {
      const _this = this;
      chrome.storage.local.remove(
        keys.map((shortKey) => _this.storageKeys[shortKey])
      );
    }

    /**
     * Calls a get on the Chrome managed storage
     * and checks if a policy is set, if none is
     * set then null is returned otherwise the
     * content of the managed storage is cast to
     * a Policy object and returned
     *
     * @returns {Promise<Policy>}
     */
    static getConfigurationPolicy() {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, (_a) => [
          2 /*return*/,
          new Promise((resolve) => {
            chrome.storage.managed.get((policy) => {
              if (Object.keys(policy).length === 0)
                resolve({
                  disable_incognito_check: false,
                  auto_enrolment: null,
                });
              resolve(policy);
            });
          }),
        ]);
      });
    }
  }

  /**
   * Wraps the 'chrome.storage.local.get' into
   * a Promise rather than a callback API
   *
   * @param {string | string[] | Object | null} keys The keys to request from storage
   * @returns {Promise<Object>} The hash of items returned from storage
   */
  StorageHelper.getFromLocalStorage = (keys) =>
    new Promise((resolve) => {
      chrome.storage.local.get(keys, (items) => {
        resolve(items);
      });
    });
  /**
   * Wraps the 'chrome.storage.local.set' into
   * a Promise rather than a callback API
   *
   * @param {Object} items The items to set in the local storage
   * @returns {Promise<void>}
   */
  StorageHelper.putInLocalStorage = (items) =>
    new Promise((resolve) => {
      chrome.storage.local.set(items, () => resolve());
    });
  /**
   * Defines a static list of storage
   * short names to their respective
   * long name
   *
   * @type {[key: string]: string}
   */
  StorageHelper.storageKeys = {
    device_token: "com.familyzone.mobilezone.device_token",
    parent_token: "com.familyzone.mobilezone.parent_token",
    mac_address: "com.familyzone.mobilezone.mac_address",
    assignment_state: "com.familyzone.mobilezone.assignment_state",
    payment_required: "com.familyzone.mobilezone.payment_required",
    incognito_count: "com.familyzone.mobilezone.incognito_warning_count",
    user_configuration: "com.familyzone.mobilezone.user_configuration",
    user_name: "com.familyzone.mobilezone.user_name",
  };
  /**
   * defaultUserConfiguration defines a default base user
   * configuration to return if none currently exists in
   * local storage
   */
  StorageHelper.defaultUserConfiguration = {
    filtering: {
      enabled: true,
      safe_ssids: [],
    },
    enabled_features: [],
    features: {},
  };
  return StorageHelper;
})();

export { StorageHelper };
//# sourceMappingURL=storage_helper.js.map
