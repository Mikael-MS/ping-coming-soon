const email = document.getElementById("email-input");
const errorMsg = document.getElementById("error-msg");

function validateEmail (valueEmail) {
  
    if (!valueEmail){
        return 'empty email';
    } else if (valueEmail.length < 4) {
        return 'short email';
    } else if(!valueEmail.includes('@')) {
        return 'email without "@"';
    } else if(!valueEmail.includes('.')) {
        return 'email without "."';
    } else {
        return '';
    }
}

function submitEmail() {
    const valueEmail = email.value;
    const errorMessage = validateEmail(valueEmail);
    errorMsg.innerHTML = errorMessage;
    if(errorMessage){
        email.style.border = '1px solid red';
        errorMsg.style.color = 'red';
    } else {
        email.style.border = '1px solid green';
        email.value= '';
    }
}

