
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){
	e.preventDefault()
	let username = document.getElementById("usernameInput").value
	let password = document.getElementById("passwordInput").value

	let userObj = {}
	userObj.username = username;
	userObj.password = password;
	alert("User created successfully!")
	console.log(userObj)

})