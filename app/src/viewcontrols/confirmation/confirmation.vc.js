var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var base_vc_1 = require('../base/base.vc');
var ConfirmationViewControl = (function (_super) {
    __extends(ConfirmationViewControl, _super);
    function ConfirmationViewControl() {
        _super.apply(this, arguments);
        this.templateString = require('./confirmation.vc.html');
        this.context = {};
    }
    return ConfirmationViewControl;
})(base_vc_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ConfirmationViewControl;
platypus_1.register.viewControl('confirmation-vc', ConfirmationViewControl);
