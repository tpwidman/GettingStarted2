import {async, register} from 'platypus';
import BaseService from '../base/base.svc';
import UserRepository from '../../repositories/user/user.repo';

export default class ProductsService extends BaseService {
    constructor(private userRepository: UserRepository) {
        super();
    };

   getProductsOld(): async.IThenable<Array<models.IProduct>> {
        return this.http.json<models.IResponse>({
            method: 'GET',
            url: this.host + '/products/all'
        }).then((success) => {
            return <Array<models.IProduct>>success.response.data;
        });
    };


/*    getProducts(): async.IThenable<Array<models.IProduct>> {
        return this.json('products/all');
    }

    placeOrder(order: models.IOrder): async.IThenable<boolean> {
        order.userid = this.userRepository.userid;
        return this.http.json<models.IResponse>({
            method: 'POST',
            url: this.host + '/orders/create',
            data: order
        }).then(
            (success) => {
                return true;
            },
            (error: async.AjaxError): any => {
                throw error.response.message;
            }
        );
    }  
*/    
    
}

register.injectable('products-svc', ProductsService, [UserRepository]);