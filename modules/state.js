export class loginValidationState {
    constructor() {
        this.email = false;
        this.password= false;
    }
    
    setValid(name, newValue) {
        this[`${name}`] = newValue;
    }
}

export class signupValidationState extends loginValidationState {
    constructor() {
        super();
        this.nickname= false;
        this.passwordConfirm= false;
    }
}

export class passwordState {
    constructor() {
        this.passwordContent = '';
        this.passwordConfirmContent= '';
    }

    setContent (name, newValue) {
        this[`${name}`] = newValue;
    }
}