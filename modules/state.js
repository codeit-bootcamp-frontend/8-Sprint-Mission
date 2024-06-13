export class loginValidationState {
    constructor() {
        this.email = false;
        this.password= false;
    }
    
    setValid(name, newValue) {
        this[`${name}`] = newValue;
    }

    isValid() {
        if (this.email && this.password) {
            return true;
        } else {
            return false;
        }
    } 
}

export class signupValidationState extends loginValidationState {
    constructor() {
        super();
        this.nickname= false;
        this.passwordConfirm= false;
    }

    isValid() {
        if (
            this.email 
            && this.nickname
            && this.password
            && this.passwordConfirm
        ) {
            return true;
        } else {
            return false;
        }
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