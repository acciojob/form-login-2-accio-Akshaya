//your JS code here. If required.
function showAlert(){
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;


	var message = " First Name: "+ firstName +
		           " Last Name: "+ lastName +
		           " Phone Number: "+ phone +
		           " Email ID: "+ email;

	alert(message);
}
