const btn = document.querySelector(".btn");
const fullName = document.querySelectorAll(".name");
const userName = document.querySelector("#username");
const pass = document.querySelector("#pass");
const cpass = document.querySelector("#confPass");
const email = document.getElementById("mail");
// console.log(fullName);
let checkPass;


for (let i = 0; i < fullName.length; i++) {
    fullName[i].addEventListener('input',(event)=>{
        let inputField = event.target.value;
        console.log(inputField);
        const checkName = /\d/;
        if(checkName.test(inputField)){
            fullName[i].setCustomValidity("Name can't contain a number!");
        } else {
            fullName[i].setCustomValidity("");
        }
    })
}

userName.addEventListener('input',(event)=>{
    let inputField = event.target.value;
    const space = /[a-z]/;
    if(!(space.test(inputField))){
        userName.setCustomValidity("Username can't be empty!");
    }
    else{
        userName.setCustomValidity("");

    }
})

pass.addEventListener('input',(event)=>{
    const passCheck = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    checkPass = event.target.value
    console.log(checkPass);
    if(!(passCheck.test(checkPass))){
        pass.setCustomValidity("A minimum 8 characters password containing a combination of uppercase and lowercase letter,number and special character!")
    }
    else{
        pass.setCustomValidity("")
    }
})

cpass.addEventListener('input',(event) =>{
    if(event.target.value !== checkPass){
        cpass.setCustomValidity("Password and Confirm password doesn't match!")
    }
    else{
        cpass.setCustomValidity("")
    }
})






email.addEventListener("input", (event) => {
    const specialCharater = /\~|\!|\#|\$|\%|\^|\&|\*|\(|\)|\_|\-|\+|\=|\{|\}|\[|\]|\;|\:|\'|\"|\,|\<|\>|\/|\?/s;
  if (specialCharater.test(event.target.value)) {
    email.setCustomValidity("Sorry,only letters(a-z),numbers(0-9), and periods(.) are allowed.");
  } else {
    email.setCustomValidity("");
  }
})
