const inputBtn = document.querySelector(".signup-btn");
const inputUser = document.querySelector("#username");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputPasswordConfirm = document.querySelector("#password-confirm");
const form = document.querySelector("#signup-form");

form.addEventListener('submit', function (event) {

    const userName = inputUser.value;
    const password = inputPassword.value;
    const passwordConfirm = inputPasswordConfirm.value;

    if(userName.length < 3)
        alert("Username must be at least 3 characters long");
    else if(password.length < 8)
        alert("Password must be at least 8 characters long");
    else if(password != passwordConfirm)
        alert("Passwords do not match");
    else
    {
        // TODO server request
    }
});