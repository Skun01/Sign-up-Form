function validation(formSelector, formMessageSelector, objectSet){
    const formElem = document.querySelector(formSelector);
    objectSet.forEach(inputObject=>{
        const inputElem = formElem.querySelector(inputObject.selector);
        const formMessageElem = inputElem.parentElement.querySelector(formMessageSelector);
        console.log(formMessageElem);
        inputObject.rules.forEach(rule=>{
            switch(rule){
                case 'required': required(inputElem, formMessageElem); break;
                case 'checkEmail': checkEmail(inputElem, formMessageElem); break;
                case 'checkPhoneNumber': checkPhoneNumber(inputElem, formMessageElem); break;
                case 'checkPassword': checkPassword(inputElem, formMessageElem); break;
                case 'confirmPassword': confirmPassword(inputElem, inputObject.selectorCheck, formMessageElem);
            }
        });
    });
}
