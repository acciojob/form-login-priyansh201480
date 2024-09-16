function getFormvalue() {
    // Get the values of the first and last name fields
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;

    // Display the result in an alert
    alert(firstName + " " + lastName);
}
