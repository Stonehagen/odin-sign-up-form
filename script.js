const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm-password");
const hint = document.querySelector(".pass-check");

password.addEventListener('input', e => {
    if (password.value != confirm_password.value) {
        hint.style.visibility = "visible";
    } else {
        hint.style.visibility = "hidden";
    }
});

confirm_password.addEventListener('input', e => {
    if (password.value != confirm_password.value) {
        hint.style.visibility = "visible";
    } else {
        hint.style.visibility = "hidden";
    }
});
