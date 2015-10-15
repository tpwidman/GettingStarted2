var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var home_vc_1 = require('../viewcontrols/home/home.vc');
var register_vc_1 = require('../viewcontrols/register/register.vc');
var login_vc_1 = require('../viewcontrols/login/login.vc');
var order_vc_1 = require('../viewcontrols/order/order.vc');
var confirmation_vc_1 = require('../viewcontrols/confirmation/confirmation.vc');
var MyApp = (function (_super) {
    __extends(MyApp, _super);
    function MyApp(router) {
        _super.call(this);
        router.configure([
            { pattern: '', view: home_vc_1.default },
            { pattern: 'login', view: login_vc_1.default },
            { pattern: 'register', view: register_vc_1.default },
            { pattern: 'order/:id', view: order_vc_1.default },
            { pattern: 'confirmation', view: confirmation_vc_1.default }
        ]);
    }
    MyApp.prototype.error = function (ev) {
        console.log(ev.error);
    };
    return MyApp;
})(platypus_1.App);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MyApp;
platypus_1.register.app('app', MyApp, [
    platypus_1.routing.Router
]);
