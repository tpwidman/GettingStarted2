var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var base_vc_1 = require('../base/base.vc');
var products_svc_1 = require('../../services/products/products.svc');
var confirmation_vc_1 = require('../confirmation/confirmation.vc');
var OrderViewControl = (function (_super) {
    __extends(OrderViewControl, _super);
    function OrderViewControl(productsService) {
        _super.call(this);
        this.productsService = productsService;
        this.templateString = require('./order.vc.html');
        this.context = {
            order: {
                productid: 0,
                address: '',
                city: '',
                state: '',
                zip: '',
                productsize: ''
            },
            error: ''
        };
    }
    OrderViewControl.prototype.navigatedTo = function (params, query) {
        this.context.order.productid = Number(params.id);
    };
    ;
    ;
    OrderViewControl.prototype.placeOrder = function () {
        var _this = this;
        this.productsService.placeOrder(this.context.order).then(function (success) {
            _this.navigator.navigate(confirmation_vc_1.default);
        }).catch(function (error) {
            _this.context.error = error;
        });
    };
    return OrderViewControl;
})(base_vc_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = OrderViewControl;
platypus_1.register.viewControl('order-vc', OrderViewControl, [products_svc_1.default]);
