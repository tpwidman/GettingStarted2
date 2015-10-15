var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var base_svc_1 = require('../base/base.svc');
var user_repo_1 = require('../../repositories/user/user.repo');
var ProductsService = (function (_super) {
    __extends(ProductsService, _super);
    function ProductsService(userRepository) {
        _super.call(this);
        this.userRepository = userRepository;
    }
    ;
    ProductsService.prototype.getProductsOld = function () {
        return this.http.json({
            method: 'GET',
            url: this.host + '/products/all'
        }).then(function (success) {
            return success.response.data;
        });
    };
    ;
    ProductsService.prototype.placeOrder = function (order) {
        order.userid = this.userRepository.userid;
        return this.http.json({
            method: 'POST',
            url: this.host + '/orders/create',
            data: order
        }).then(function (success) {
            return true;
        }, function (error) {
            throw error.response.message;
        });
    };
    return ProductsService;
})(base_svc_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductsService;
platypus_1.register.injectable('products-svc', ProductsService, [user_repo_1.default]);
