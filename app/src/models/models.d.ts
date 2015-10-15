declare module models {
    interface IUser {
        id?: number;
        email: string;
        password?: string;
        firstname?: string;
        lastname?: string;
    }

    interface IProduct {
        name: string;
        image: string;
    }

    interface IOrder {
        userid: number;
        productid: number;
        address: string;
        city: string;
        state: string;
        zip: string;
        productsize: string;
    }

    interface IResponse {
        status: string;
        message?: string;
        data?: any;
        errors?: Array<Error>;
    }
}

declare module contexts {
    interface IHome {
        products: Array<models.IProduct>;
    }

    interface ILogin {
        email: string;
        password: string;
        error: string;
    }

    interface IOrder {
        order: models.IOrder;
        error: string;
    }

    interface IRegister {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
        error: string;
    }
}