import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class ConfirmationViewControl extends BaseViewControl {
    templateString: string = require('./confirmation.vc.html');

    context: any = {};
}

register.viewControl('confirmation-vc', ConfirmationViewControl);
