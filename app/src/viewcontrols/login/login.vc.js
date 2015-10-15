var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var base_vc_1 = require('../base/base.vc');
var home_vc_1 = require('../home/home.vc');
var register_vc_1 = require('../register/register.vc');
var user_repo_1 = require('../../repositories/user/user.repo');
var LoginViewControl = (function (_super) {
    __extends(LoginViewControl, _super);
    function LoginViewControl(userRepository) {
        _super.call(this);
        this.userRepository = userRepository;
        this.templateString = require('./login.vc.html');
        this.context = {
            email: '',
            password: '',
            error: ''
        };
    }
    LoginViewControl.prototype.login = function () {
        var _this = this;
        this.userRepository.login(this.context.email, this.context.password)
            .then(function (success) {
            _this.navigator.navigate(home_vc_1.default);
        }).catch(function (error) {
            _this.context.error = error;
        });
    };
    LoginViewControl.prototype.register = function () {
        this.navigator.navigate(register_vc_1.default);
    };
    return LoginViewControl;
})(base_vc_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginViewControl;
platypus_1.register.viewControl('login-vc', LoginViewControl, [user_repo_1.default]);
