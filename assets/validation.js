function validator(objForm){
    const formElem = document.querySelector(objForm.formSelector);
    objForm.setRules.forEach(inputObj=>{
        const inputElem = document.querySelector(inputObj.inputSelector);
        const parentElem = inputElem.parentElement;
        const errorElem = parentElem.querySelector(objForm.errorSelector);
        inputElem.addEventListener('blur', e=>{
            const messageList = inputObj.rules;
            for(testObj of messageList){
                let message = testObj.test(inputElem);
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
    formElem.addEventListener('submit', e=>{
        objForm.setRules.forEach(inputObj=>{
            const inputElem = document.querySelector(inputObj.inputSelector);
            inputElem.dispatchEvent(new Event('blur'));
        });
        const errorMessages = document.querySelectorAll(objForm.errorSelector);
        for(let errorMessage of errorMessages){
            if(errorMessage.textContent.length !== 0){
                e.preventDefault();
                break;
            }
        }
    });
}

validator.required = function (inputElement, message){
    return {test: function (inputElement){return inputElement.value ? undefined : message}};
}

validator.isEmail = function(){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return {
        test: function (inputElement){
            return inputElement.value || regex.test(inputElement.value) ? undefined : 'You must enter email form';
        }
    }
}

validator.isPhoneNumber = function(){
    const regex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return{
        test: function(inputElement){
            return !inputElement.value||regex.test(inputElement.value) ? undefined : 'Your phone number is uncorrect';
        }
    }
}

validator.checkPasswordLength = function(min){
    return{
        test: function(inputElem){
            return inputElem.value.length >= min ? undefined : `your password must be minimum of ${min} character`;
        }
    }
}

validator.checkPasswordSecure = function(){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{6,}$/;
    return{
        test: function(inputElem){
            return regex.test(inputElem.value) ? undefined : 'Your password must contain uppercase letters, lowercase letters, special characters, and numbers';
        }
    }
}

validator.confirmPassword = function(checkSelector){
    const checkElem = document.querySelector(checkSelector);
    return{
        test: function(inputElem){
            return inputElem.value === checkElem.value ? undefined : 'The re-entered password does not match';
        }
    }
}
