const form =  document.querySelector("#info")
const name =  document.querySelector("#name")
const nameHelp =  document.querySelector("#nameHelp")
const email =  document.querySelector("#email")
const emailHelp =  document.querySelector("#emailHelp")

form.addEventListener("submit", (event) => { 
event.preventDefault()
if (name.value === "" || email.value === "") {

if (name.value === ""){
nameHelp.innerText = "Ud. no ha ingresado su nombre aquí."
}
if (email.value === "") {
emailHelp.innerText ="Ud. no ha ingresado un correo electrónico"
}
} else {

form.submit();
}

})
