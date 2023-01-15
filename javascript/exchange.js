"use strict";
var exchange;
class Exchange {
    constructor(options) {
        var _a;
        if (options == null) {
            this.exchangeId = "";
        }
        else {
            this.exchangeId = (_a = options.exchangeId) !== null && _a !== void 0 ? _a : options.ExchangeId;
        }
    }
}
//# sourceMappingURL=exchange.js.map