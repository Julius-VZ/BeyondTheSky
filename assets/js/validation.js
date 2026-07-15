function valEmail(){
    let emailval = document.getElementById("txtemail").value;
    let emailField = document.getElementById("txtemail");
    let errorMsg = document.getElementById("errormsg")
    const PATTERN = /^[\w\._-]+@[\w\.-]+\.[a-zA-Z]{2,7}$/;

    if(PATTERN.test(emailval) == false){
        emailField.focus();
        errorMsg.textContent = "Invalid email";
        errorMsg.style.color = "red";
    }else{
        errorMsg.textContent = "Thank you";
        errorMsg.style.color = "green";
    }
}
txtemail.addEventListener("blur", valEmail);