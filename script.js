//your JS code here. If required.
function displayFormInfo(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Access the form element
    const form = document.getElementById("userForm");

    // Retrieve values from form fields
    const firstName = form.querySelector('input[name="First Name"]').value.trim();
    const lastName = form.querySelector('input[name="Last Name"]').value.trim();
    const phoneNumber = form.querySelector('input[name="Phone Number"]').value.trim();
    const emailID = form.querySelector('input[name="Email ID"]').value.trim();

    // Construct and display the alert message
    const alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailID}`;
    alert(alertMessage);
}

