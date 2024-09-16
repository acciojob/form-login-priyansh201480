function getFormvalue() {
      // Access the form element
      const form = document.getElementById("form1");

      // Prevent the form from submitting normally
      form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the values of the first and last name fields
        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;

        // Display the result in an alert
        alert(firstName + " " + lastName);
      });
    }

    // Call the function to set the event listener on page load
    window.onload = getFormvalue;