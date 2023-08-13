const fname= document.getElementById("fullName");
const email= document.getElementById("email");
const phoneNo= document.getElementById("phone");
const password= document.getElementById("password");
const conformPassword= document.getElementById("conformPassword");
const form= document.getElementById("Form");
const error= document.getElementById("error");

form.addEventListener("submit", function(event){

    let errorMessages = [];

    if(fname.value == "" || fname.value === null){
        errorMessages.push("Name cannot be blank")
    }
       
    if(email.value == "" || email.value === null){
        errorMessages.push("Email cannot be blank")
    }

    if(phoneNo.value == "" || phoneNo.value === null){
        errorMessages.push("Phone Number cannot be blank")
    }

    if(phoneNo.value == "0123456789"){
        errorMessages.push("Phone Number cannot be '0123456789'")
    }

    if(phoneNo.value.length < 10){
        errorMessages.push("Phone Number must be a 10-digit number")
    }

    if(password.value === "" || password.value === null){
        errorMessages.push("Password cannot be blank")
    }

    if(password.value.length <= 8){
        errorMessages.push("Password must be greater than 8 characters")
    }

    if(password.value === "password" || password.value === "Password"){
        errorMessages.push("The password value cannot be 'password'")
    }

    if(conformPassword.value === "" || conformPassword.value === null){
        errorMessages.push("Conform password cannot be blank")
    }
     
    if(conformPassword.value != password.value){
        errorMessages.push("Conform password must be same as the Password")
    }

    if(errorMessages.length > 0){
        event.preventDefault();
        error.innerText = errorMessages.join(" , ");
    }
    
})