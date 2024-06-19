const observ = new IntersectionObserver((entries) =>   {
entries.forEach( (entry) => {
    if (entry.isIntersecting){
        entry.target.classList.add('elementshow')
    } else{
        entry.target.classList.remove('elementshow')
    }
})
})

const elements = document.querySelectorAll('.element')
elements.forEach((element) => observ.observe(element))

const specialObserv = new IntersectionObserver((entries2) => {
    entries2.forEach( (entry) => {
    if (entry.isIntersecting){
        entry.target.classList.add('elementshow')
    } else{
        entry.target.classList.remove('elementshow')
    }

});
})
const specialElements = document.querySelectorAll('.element-top');
specialElements.forEach((element) => specialObserv.observe(element));

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (checkInputUsername() && checkInputEmail() && checkInputPhone()) {
        alert("AGENDAMENTO CONFIRMADO!!");
    }
});

function checkInputUsername() {
    const usernameValue = username.value.trim();

    if (usernameValue === "") {
        errorInput(username, "Nome obrigatório!");
        return false;
    } else {
        successInput(username);
        return true;
    }
}

function checkInputEmail() {
    const emailValue = email.value.trim();

    if (emailValue === "") {
        errorInput(email, "Email obrigatório!");
        return false;
    } else {
        successInput(email);
        return true;
    }
}

function checkInputPhone() {
    const phoneValue = phone.value.trim();
    const phonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;

    if (!phonePattern.test(phoneValue)) {
        errorInput(phone, "Número de telefone inválido!");
        return false;
    } else {
        successInput(phone);
        return true;
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;
    textMessage.style.visibility = "visible";

    formItem.classList.add("error");
}

function successInput(input) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = "";
    textMessage.style.visibility = "hidden";

    formItem.classList.remove("error");
}

