import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ProductsService from '../../services/products/products.svc';
import ConfirmationViewControl from '../confirmation/confirmation.vc';

export default class OrderViewControl extends BaseViewControl {
    templateString: string = require('./order.vc.html');

context: contexts.IOrder = {
    
    order: <models.IOrder> {
        productid: 0,
        address: '',
        city: '',
        state: '',
        zip: '',
        productsize: ''
    },
    error: ''
    };
    
    navigatedTo(params: { id: string; }, query: any): void {
        this.context.order.productid = Number(params.id);
    };
    
    constructor(private productsService: ProductsService) {
    super();
};
    placeOrder(): void {
    this.productsService.placeOrder(this.context.order).then((success) => {
        this.navigator.navigate(ConfirmationViewControl);
    }).catch((error) => {
        this.context.error = error;
    });
}
    
}
register.viewControl('order-vc', OrderViewControl, [ProductsService]);
