/**
 * Logger provides a common
 * logging utility that will
 * print all log messages to
 * the background console
 *
 * @author Liam Haworth <liamh@familyzone.com>
 * @since 1.0.0
 */
const Logger = /** @class */ (() => {
  /**
   * Constructs a new Logger class
   * with the provided name
   *
   * @param {string} loggerName The name/domain to include in log messages
   */
  class Logger {
    constructor(loggerName) {
      this.loggerName = loggerName;
    }

    /**
     * Formats messages into the desired
     * layout for log messages
     *
     * @param {string} level The level of the message being logged
     * @param {string} msg The message to log
     * @returns {string}
     */
    formatMessage(level, msg) {
      return `${new Date().toISOString()} [${
        this.loggerName
      }] ${level}: ${msg}`;
    }

    /**
     * Promise wrapper for the `chrome.runtime`
     * API that is normally a callback
     *
     * @returns {Promise<Window>}
     */
    getBackgroundPage() {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, (_a) => [
          2 /*return*/,
          new Promise((resolve) =>
            chrome.runtime.getBackgroundPage((backgroundPage) =>
              resolve(backgroundPage)
            )
          ),
        ]);
      });
    }

    /**
     * Prints a debug level message
     * to the background console
     *
     * @param {string} msg The message to log
     * @param extras Any extra items to include in the log message
     */
    debug(msg) {
      const _this = this;
      const extras = [];
      for (let _i = 1; _i < arguments.length; _i++) {
        extras[_i - 1] = arguments[_i];
      }
      this.getBackgroundPage().then(({ console }) => {
        let _a;
        (_a = console).debug.apply(
          _a,
          [_this.formatMessage("DEBUG", msg)].concat(extras)
        );
      });
    }

    /**
     * Prints a info level message
     * to the background console
     *
     * @param {string} msg The message to log
     * @param extras Any extra items to include in the log message
     */
    info(msg) {
      const _this = this;
      const extras = [];
      for (let _i = 1; _i < arguments.length; _i++) {
        extras[_i - 1] = arguments[_i];
      }
      this.getBackgroundPage().then(({ console }) => {
        let _a;
        (_a = console).info.apply(
          _a,
          [_this.formatMessage("INFO", msg)].concat(extras)
        );
      });
    }

    /**
     * Prints a warning level message
     * to the background console
     *
     * @param {string} msg The message to log
     * @param extras Any extra items to include in the log message
     */
    warn(msg) {
      const _this = this;
      const extras = [];
      for (let _i = 1; _i < arguments.length; _i++) {
        extras[_i - 1] = arguments[_i];
      }
      this.getBackgroundPage().then(({ console }) => {
        let _a;
        (_a = console).warn.apply(
          _a,
          [_this.formatMessage("WARN", msg)].concat(extras)
        );
      });
    }

    /**
     * Prints a error level message
     * to the background console
     *
     * @param {string} msg The message to log
     * @param extras Any extra items to include in the log message
     */
    error(msg) {
      const _this = this;
      const extras = [];
      for (let _i = 1; _i < arguments.length; _i++) {
        extras[_i - 1] = arguments[_i];
      }
      this.getBackgroundPage().then(({ console }) => {
        let _a;
        (_a = console).error.apply(
          _a,
          [_this.formatMessage("ERROR", msg)].concat(extras)
        );
      });
    }
  }

  return Logger;
})();

export { Logger };
//# sourceMappingURL=logger.js.map
