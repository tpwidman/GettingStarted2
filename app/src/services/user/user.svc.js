var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var base_svc_1 = require('../base/base.svc');
var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        _super.apply(this, arguments);
    }
    UserService.prototype.register = function (email, password, firstname, lastname) {
        return this.http.json({
            method: 'POST',
            url: this.host + '/users/register',
            data: {
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname
            }
        }).then(function (success) {
            return {
                id: success.response.data,
                email: email
            };
        }, function (error) {
            throw error.response.message;
        });
    };
    ;
    UserService.prototype.login = function (email, password) {
        return this.http.json({
            method: 'POST',
            url: this.host + '/users/login',
            data: {
                email: email,
                password: password
            }
        }).then(function (success) {
            return {
                id: success.response.data,
                email: email
            };
        }, function (error) {
            throw error.response.message;
        });
    };
    return UserService;
})(base_svc_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserService;
platypus_1.register.injectable('user-svc', UserService);
