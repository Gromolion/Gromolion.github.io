let login_btn = document.getElementById("login_btn");
let signin_btn = document.getElementById("signin_btn");
let login_form = document.getElementById("login_form");
let signin_form = document.getElementById("signin_form");

let account_title = document.getElementById("account_title");
let pswd_inputs = document.getElementsByClassName("password_input");
let type = 0;

login();

function login() {
    login_btn.style.background = "#ebebeb";
    signin_btn.style.background = "#fff";

    login_form.style.display = "flex";
    signin_form.style.display = "none";

    account_title.innerText = "ВОЙТИ";

    for (let inp of pswd_inputs) {
        inp.setAttribute("type", "password");
    }
    type = 0
}

function signin() {
    signin_btn.style.background = "#ebebeb";
    login_btn.style.background = "#fff";

    signin_form.style.display = "flex";
    login_form.style.display = "none";

    account_title.innerText = "ЗАРЕГИСТРИРОВАТЬСЯ";

    for (let inp of pswd_inputs) {
        inp.setAttribute("type", "password");
    }
    type = 0;
}

function show() {
    if (type === 0) {
        for (let inp of pswd_inputs) {
            inp.setAttribute("type", "text");
        }
        type = 1;
    } else {
        for (let inp of pswd_inputs) {
            inp.setAttribute("type", "password");
        }
        type = 0;
    }
}