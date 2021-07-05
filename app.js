console.log("This is index.js file");
let emailValid = false;
let nameValid = false;
let phoneValid = false;
document.querySelector("#name").addEventListener("blur", () => {
    console.log("name is blurred");
    let name = document.querySelector("#name").value;
    validateName(name);
})
document.querySelector("#email").addEventListener("blur", () => {
    console.log("email is blurred");
    let emailValue = document.querySelector("#email").value;
    validateEmail(emailValue);

})
document.querySelector("#phone").addEventListener("blur", () => {
    console.log("phone is blurred");
    let phoneValue = document.querySelector("#phone").value;
    validatePhone(phoneValue)
})
function validateName(string) {
    let regex = /^([a-zA-z])(\w){2,15}$/;
    if (regex.test(string)) {
        console.log("it matched");
        document.querySelector("#name").classList.remove("is-invalid");
        nameValid = true
    } else {
        console.log("not matched");
        document.querySelector("#name").classList.add("is-invalid");
    }
}
function validatePhone(string) {
    let regex = /^([0-9]){10}$/
    if (regex.test(string)) {
        document.querySelector("#phone").classList.remove("is-invalid");
        phoneValid = true
    } else {
        console.log("not matched")
        document.querySelector("#phone").classList.add("is-invalid");
    }
}
function validateEmail(string) {
    let regex = /^([a-zA-z0-9\.\_\-]+)@([a-zA-z0-9\.\_\-]+)\.([a-zA-Z]){2,7}$/
    if (regex.test(string)) {
        console.log("matched");
        document.querySelector("#email").classList.remove("is-invalid");
        emailValid = true;
    } else {
        console.log(" not matched");
        document.querySelector("#email").classList.add("is-invalid");
    }
}
document.querySelector("#submit").addEventListener("click", (e) => {
    e.preventDefault();
    if (emailValid == true && nameValid == true && phoneValid == true) {
        validateForm('Success', "Your travel request has been successfully submitted", 'success')
    } else {
        validateForm("Error", "Your travel request has not been sent due to errors", "danger");
    }
    console.log("clicked");
})
function validateForm(heading, message, status) {
    let html = document.createElement("div");
    html.innerHTML = `<div id="" class="alert alert-${status} alert-dismissible show fade" role="alert">
    <strong>${heading}!</strong>${message} 
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
    </button>
</div>`
    let container = document.querySelector("body");
    let elementBefore = document.querySelector(".container");
    container.insertBefore(html, elementBefore);
}