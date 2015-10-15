var platypus_1 = require('platypus');
var BaseService = (function () {
    function BaseService() {
        this.host = 'http://platypisamples.azurewebsites.net/gettingstarted/api';
    }
    BaseService.prototype.json = function (url, data, method) {
        if (method === void 0) { method = 'GET'; }
        return this.http.json({
            method: method,
            url: url,
            data: data
        }).then(function (success) {
            return success.response.data;
        }, function (error) {
            throw error.response.message;
        });
    };
    BaseService._inject = {
        http: platypus_1.async.Http,
        Promise: platypus_1.async.IPromise,
        utils: platypus_1.Utils
    };
    return BaseService;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BaseService;
