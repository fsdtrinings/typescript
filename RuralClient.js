"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Client_1 = require("./Client");
var RuralClient = /** @class */ (function (_super) {
    __extends(RuralClient, _super);
    function RuralClient(clientName, clientId, balance, villageName) {
        var _this = _super.call(this, clientName, clientId, balance) || this;
        _this.villageName = villageName;
        return _this;
    }
    RuralClient.prototype.fundTransfer = function () {
        // business objective code
        return 0;
    };
    return RuralClient;
}(Client_1.client));
