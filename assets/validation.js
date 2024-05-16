const haveFormError = false;

function validation(formSelector, formMessageSelector, objectSet, addMessage){
    const formElem = document.querySelector(formSelector);
    let haveError = false;
    objectSet.forEach(inputObject=>{
        const inputElem = formElem.querySelector(inputObject.selector);
        const formMessageElem = inputElem.parentElement.querySelector(formMessageSelector);
        console.log(inputElem);
        console.log(formMessageElem);
        inputObject.rules.forEach(rule=>{
            runningRule(inputElem, formMessageElem, rule);
        });
    });
}


function runningRule(inputElem, formMessageElem, rule){
    switch(rule){
        case 'required': required(inputElem, formMessageElem, addMessage); break;
        case 'checkEmail': checkEmail(inputElem, formMessageElem, addMessage); break;
        case 'checkPhoneNumber': checkPhoneNumber(inputElem, formMessageElem, addMessage); break;
        case 'checkPassword': checkPassword(inputElem, formMessageElem, addMessage); break;
        case 'confirmPassword': confirmPassword(inputElem, inputObject.selectorCheck, formMessageElem, addMessage);
    }
}

function addingMessage(inputElem, formMessageElem, message, condition){
    console.log(condition);
    if(!condition){
        formMessageElem.textContent = message;
        addMessage = true;
    }else if(condition && addMessage){
        formMessageElem.textContent = '';
        addMessage = false;
    }
    haveFormError += addMessage;
}

function required(inputElem, formMessageElem, addMessage){
    inputElem.addEventListener('blur', ()=>addingMessage(inputElem, formMessageElem, '*Please enter in this text box', inputElem.value, addMessage));
}

function checkEmail(inputElem, formMessageElem, addMessage){
    const regex = /^[^\s@]+@[^\s@]+(\.[^\s@])
    addingMessage(inputElem, formMessageElem, '*This field must be email form', inputElem.value.length === 0 || regex.test(inputElem.value), addMessage);
}

function checkPhoneNumber(inputElem, formMessageElem, addMessage){

}

function checkPassword(inputElem, formMessageElem, addMessage){

}

function confirmPassword(inputElem, formMessageElem, addMessage){

}