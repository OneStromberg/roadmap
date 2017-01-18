export function validateEmail(value){
    var emailReg  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let result = emailReg.test(value);
    if (result) {
        return true;
    }else{
        return false;
    }
    
};
export function validateName(value) {
    return lengthValidator(value, 4);
};
export function validateRegion(value) {
    return lengthValidator(value, 4);
};
export function validateTitle(value) {
    return lengthValidator(value, 4);
};
export function validatePassword(value) {
    return lengthValidator(value, 7);
};

function lengthValidator(value, length) {
    return value !== null && value.length > length;
}

export function checkValid(state){
    for (var prop in state) {
        if (!state[prop]) {
            return false;
        }
    }
    return true;
}

