var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var base_repo_1 = require('../base/base.repo');
var user_svc_1 = require('../../services/user/user.svc');
var UserRepository = (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository(userService) {
        _super.call(this);
        this.userService = userService;
        this.userid = 0;
    }
    UserRepository.prototype.login = function (email, password) {
        var _this = this;
        return this.userService.login(email, password).then(function (user) {
            _this.userid = user.id;
            _this.email = user.email;
            return true;
        });
    };
    UserRepository.prototype.register = function (email, password, firstname, lastname) {
        var _this = this;
        return this.userService.register(email, password, firstname, lastname).then(function (user) {
            _this.userid = user.id;
            _this.email = user.email;
            return true;
        });
    };
    return UserRepository;
})(base_repo_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserRepository;
platypus_1.register.injectable('user-repo', UserRepository, [user_svc_1.default]);
