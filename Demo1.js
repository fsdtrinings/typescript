"use strict";
exports.__esModule = true;
var MyApp = /** @class */ (function () {
    function MyApp() {
    }
    MyApp.prototype.doThings = function (a, b) {
        if (b === void 0) { b = 50; }
        console.log("DoThings called " + (a + b));
    };
    return MyApp;
}()); //end of typescript class
var obj = new MyApp();
obj.doThings(15);
// tsc Demo1.ts --watch
