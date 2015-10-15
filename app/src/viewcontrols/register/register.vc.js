var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var base_vc_1 = require('../base/base.vc');
var home_vc_1 = require('../home/home.vc');
var user_repo_1 = require('../../repositories/user/user.repo');
var RegisterViewControl = (function (_super) {
    __extends(RegisterViewControl, _super);
    function RegisterViewControl(userRepository) {
        _super.call(this);
        this.userRepository = userRepository;
        this.templateString = require('./register.vc.html');
        this.context = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            error: ''
        };
    }
    ;
    RegisterViewControl.prototype.register = function () {
        var _this = this;
        this.context.error = '';
        this.userRepository.register(this.context.email, this.context.password, this.context.firstname, this.context.lastname)
            .then(function (success) {
            _this.navigator.navigate(home_vc_1.default);
        }).catch(function (error) {
            _this.context.error = error;
        });
    };
    ;
    return RegisterViewControl;
})(base_vc_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RegisterViewControl;
;
platypus_1.register.viewControl('register-vc', RegisterViewControl, [user_repo_1.default]);
