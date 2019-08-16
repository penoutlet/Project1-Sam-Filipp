// emailInput.addEventListener("change", function(){
// 	alert(emailInput.value)
// })

// let usernameInput = document.getElementById("usernameInput")
// usernameInput.addEventListener("change", function(){
// 	alert(usernameInput.value)
// })


let signUpForm = document.getElementById("registerForm");
signUpForm.addEventListener("submit", function(e){
e.preventDefault()
	alert("Form submitted")
let email = document.getElementById("emailInput").value
let username = document.getElementById("usernameInput").value
let password = document.getElementById("passwordInput").value
let firstName = document.getElementById("firstNameInput").value
let lastName = document.getElementById("lastNameInput").value
let userObj = {}


let radios = document.getElementsByName("exampleRadios")
let checked = ""
  for(i=0;i<radios.length;i++){
    if(radios[i].checked){
    checked += radios[i].value
    }
  }

userObj.email = email;
userObj.username = username;
userObj.password = password;
userObj.firstname = firstName;
userObj.lastname = lastName;
userObj.user_type = checked;
alert(JSON.stringify(userObj))
console.log(userObj)

// ,passwordInput,firstname,lastname);

})