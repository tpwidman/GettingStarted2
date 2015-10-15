import {controls, events, register, ui, web} from 'platypus';
import {DrawerController} from 'platypusui';

export default class NavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbar.tc.html');
    
    drawerController: controls.INamedElement<HTMLDivElement, DrawerController>;

    context: any = {
        showNavbar: false
    };

    initialize(): void {
        this.on('navigated', (ev: events.DispatchEvent, utils: web.UrlUtils) => {
            this.drawerController.control.close();
            if(utils.pathname.indexOf('/login') === 0 ||
                utils.pathname.indexOf('/register') === 0) {
                this.context.showNavbar = false;
            } else {
                this.context.showNavbar = true;
            }
        });
}
}

register.control('navbar', NavbarTemplateControl);
