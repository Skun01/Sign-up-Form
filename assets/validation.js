function validator(objForm){
    const formElem = document.querySelector(objForm.formSelector);
    objForm.setRules.forEach(inputObj=>{
        const inputElem = document.querySelector(inputObj.inputSelector);
        inputObj.inputElement = inputElem;
        const parentElem = inputElem.parentElement;
        const errorElem = parentElem.querySelector(objForm.errorSelector);
        inputElem.addEventListener('blur', e=>{
            const messageList = inputObj.rules;
            for(message in messageList){
                if(message){
                    errorElem.textContent = message;
                    inputElem.classList.add('invalid');
                    break;
                }
            }
        });
        inputElem.addEventListener('input', ()=>{
            errorElem.textContent = '';
            inputElem.classList.remove('invalid');
        });
    });
}

validator.required = function (inputElement, message){
    return inputElement.value ? undefined : message;
}

validator.isEmail = function(inputElement){

}

validator.isPhoneNumber = function(inputElement){

}

validator.checkPasswordLength = function(inputElement, min){

}

validator.checkPasswordSecure = function(inputElement){

}

validator.confirmPassword = function(inputElement, checkSelector){

}
const testing ={
    name : 'hello',
    run: test(this.age)
}

function test(age){
    console.log(age);
    return age;
}
testing.age = 20;
console.log(run);
