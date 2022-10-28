const form = document.getElementById("form");
const fullName = document.getElementById("full_name")
const faculty = document.getElementById("faculty");
const birthDate = document.getElementById("birth_date");
const address = document.getElementById("address");
const email = document.getElementById("email");

const enteredName = document.getElementById("entered_full_name");
const enteredFaculty = document.getElementById("entered_faculty");
const enteredBirthDate = document.getElementById("entered_birth_date");
const enteredAddress = document.getElementById("entered_address");
const enteredEmail = document.getElementById("entered_email");

export function submitForm(){
    form.addEventListener("submit", event => {
        event.preventDefault();
        validateForm();
        if(checkIfNotEmpty()){
            addEnteredInfo();
        }
    });
}

function checkIfNotEmpty(){
    const fullNameValue = fullName.value;
    const facultyValue = faculty.value;
    const birthDateValue = birthDate.value;
    const addressValue = address.value;
    const emailValue = email.value;

    let formIsNotEmpty = true;

    if(fullNameValue === ""){
        addError(fullName, "ПІБ не може бути пустим");
        formIsNotEmpty = false;
    }
    if(facultyValue === ""){
        addError(faculty, "Факультет не може бути пустим");
        formIsNotEmpty = false;
    }
    if(birthDateValue === ""){
        addError(birthDate, "Дата не може бути пустою");
        formIsNotEmpty = false;
    }
    if(addressValue === ""){
        addError(address, "Адреса не може бути пустою");
        formIsNotEmpty = false;
    }
    if(emailValue === ""){
        addError(email, "E-mail не може бути пустим");
        formIsNotEmpty = false;
    }
    return formIsNotEmpty;

}

export function validateForm(){ 
    fullName.addEventListener("input", () => {
        let fullNameValue = fullName.value;
        const fullNameRegex = /^[А-ЯЇІЄҐA-Z]{1}[а-яїіґєa-z"'-]+\s[А-ЯЇІЄҐA-Z]{1}\.\s[А-ЯЇІЄҐA-Z]{1}\./;
        if(fullNameValue.length <= 5){
            addError(fullName, "ПІБ має містити більше 5 символів");
        }else if(!fullNameRegex.test(fullNameValue)){
            addError(fullName, "Приклад ПІБ: Самойленко М. С.");
        }else{
            addSuccess(fullName);
        }
    })

    faculty.addEventListener("input", () => {
        let facultyValue = faculty.value;
        const facultyRegex = /^[А-ЯЇІЄҐA-Z]+$/;
        if(facultyValue.length < 3){
            addError(faculty, "Факультет має містити 3 або більше символів");
        }else if(!facultyRegex.test(facultyValue)){
            addError(faculty, "Факультет має бути абревіатурою");
        }else{
            addSuccess(faculty);
        }
    })

    birthDate.addEventListener("input", () => {
        let birthDateValue = birthDate.value;
        let year = parseInt(birthDateValue.split("-")[0]);
        console.log(year)
        if(year < 1900 || year > new Date().getFullYear()){
            addError(birthDate, `Рік має бути між 1900 та ${new Date().getFullYear()}`);
        }else{
            addSuccess(birthDate);
        }
    })

    address.addEventListener("input", () => {
        let addressValue = address.value;
        const addressRegex = /^(смт|м|с)\.\s[А-ЯЇІЄҐ]{1}[а-яїіґє"'-]+/;
        if(addressValue.length <= 4){
            addError(address, "Адреса має містити більше 4 символів")
        }else if(!addressRegex.test(addressValue)){
            addError(address, "Адреса має містити лише тип і назву населеного пункту");
        }else{
            addSuccess(address);
        }
    })

    email.addEventListener("input", () => {
        let emailValue = email.value;
        const emailRegex = /[a-z]+@[a-z]+\.com/;
        if(!emailRegex.test(emailValue)){
            addError(email, "E-mail має містити @ і закінчуватись на .com")
        }else{
            addSuccess(email);
        }
    })
}

function addError(input, message){
    const formGroup = input.parentElement;
    const small = formGroup.querySelector("small");
    small.innerText = message;
    small.classList.add("active");
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    
}

function addSuccess(input){
    const formGroup = input.parentElement;
    const small = formGroup.querySelector("small");
    small.classList.remove("active");
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
}

function addEnteredInfo(){
    const fullNameValue = fullName.value;
    const facultyValue = faculty.value;
    const birthDateValue = birthDate.value;
    const addressValue = address.value;
    const emailValue = email.value;

    enteredName.innerText = fullNameValue;
    enteredFaculty.innerText = facultyValue;
    enteredBirthDate.innerText = birthDateValue;
    enteredAddress.innerText = addressValue;
    enteredEmail.innerText = emailValue;
}
