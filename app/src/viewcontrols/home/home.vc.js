var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var base_vc_1 = require('../base/base.vc');
var order_vc_1 = require('../order/order.vc');
var user_repo_1 = require('../../repositories/user/user.repo');
var products_svc_1 = require('../../services/products/products.svc');
var HomeViewControl = (function (_super) {
    __extends(HomeViewControl, _super);
    function HomeViewControl(userRepository, productsService) {
        _super.call(this);
        this.userRepository = userRepository;
        this.productsService = productsService;
        this.templateString = require('./home.vc.html');
        this.context = {
            products: []
        };
    }
    HomeViewControl.prototype.canNavigateTo = function () {
        if (this.userRepository.userid === 0) {
            this.navigator.navigate('login-vc');
            return false;
        }
        ;
    };
    ;
    ;
    HomeViewControl.prototype.navigatedTo = function () {
        var _this = this;
        this.productsService.getProductsOld().then(function (products) {
            _this.context.products = products;
        });
    };
    ;
    HomeViewControl.prototype.order = function (id) {
        this.navigator.navigate(order_vc_1.default, { parameters: { id: id } });
    };
    ;
    return HomeViewControl;
})(base_vc_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomeViewControl;
platypus_1.register.viewControl('home-vc', HomeViewControl, [user_repo_1.default, products_svc_1.default]);
