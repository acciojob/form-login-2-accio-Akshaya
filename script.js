//your JS code here. If required.
function displayFormInfo(){
	
	const form =documnet.getElementById("userform");

	const firstName=form.ements["fname"].value;
	const lastName=form.elements["lname"].value;
	const phoneNumber=form.elements["phone"].value;
	const EmailID=form.elements["email"].value;

	const message = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailID}`;
	alert(message);
	
	
}
