import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc';
import RegisterViewControl from '../register/register.vc';
import UserRepository from '../../repositories/user/user.repo';

export default class LoginViewControl extends BaseViewControl {
    templateString: string = require('./login.vc.html');

    context: contexts.ILogin = {
        email: '',
        password: '',
        error: ''
    };

    constructor(private userRepository: UserRepository) {
        super();
    }

    login(): void {
        this.userRepository.login(this.context.email, this.context.password)
        .then((success) => {
            this.navigator.navigate(HomeViewControl);
        }).catch((error) => {
            this.context.error = error;
        });
    }

    register(): void {
        this.navigator.navigate(RegisterViewControl);
    }
}

register.viewControl('login-vc', LoginViewControl, [UserRepository]);