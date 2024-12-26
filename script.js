//your JS code here. If required.
function getFormValue(event){
	event.preventDefault();
	const form =documnet.getElementById("form1");

	const firstName=form.elements["form"].value;
	const lastName=form.elements["form"].value;
	const phoneNumber=form.elements["form"].value;
	const EmailID=form.elements["form"].value;

	const message = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailID}`;
	alert(message);
	
}
