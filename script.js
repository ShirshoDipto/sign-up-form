const confirmPassword = document.querySelector('#confirmPassword');
const password = document.querySelector('#password');
const passwords = document.querySelector('.passwords');
const errorMessage = document.querySelector('.errorMessage');


function showErrorMessage(e) {
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('error');
        password.classList.add('error');
        errorMessage.textContent = '* Passwords do no match';
    }
    else {
        confirmPassword.classList.remove('error');
        password.classList.remove('error');
        errorMessage.textContent = '';
    }
}


confirmPassword.addEventListener('input', showErrorMessage);
password.addEventListener('input', showErrorMessage);