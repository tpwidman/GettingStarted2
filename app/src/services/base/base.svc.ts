import {async, Utils} from 'platypus';
export default class BaseService {
	protected static _inject: any = {
        http: async.Http,
        Promise: async.IPromise,
        utils: Utils
    };

	protected http: async.Http;
	protected Promise: async.IPromise;
	protected utils: Utils;

    host: string = 'http://platypisamples.azurewebsites.net/gettingstarted/api';
    
    json(url: string, data?: any, method: string = 'GET'): async.IThenable<any> {
        return this.http.json<models.IResponse>({
                method: method,
                url: url,
                data: data
            }).then((success) => {
                return success.response.data;
            }, (error) => {
                throw error.response.message;
            });
        }
}

