function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
  {
    return true
  }
    return false
}
let email = document.querySelector("input.email")
let password = document.querySelector("input.password")
let button = document.querySelector("button")
button.addEventListener('mouseover', ()=>{
    valid = true
        if(! ValidateEmail(email)){
            valid = false
        }
        if(password.value.length <= 5){
            valid = false
        }
        if(!valid){
            button.classList.toggle('move')
        }
})
email.addEventListener('input', ()=>{
    if(!ValidateEmail(email)){
        email.classList.add("error")
    }else{
        email.classList.remove("error")
    }
})
password.addEventListener('input', ()=>{
    if(password.value.length <= 5){
        password.classList.add("error")
    }
    else{
        password.classList.remove("error")
    }
})