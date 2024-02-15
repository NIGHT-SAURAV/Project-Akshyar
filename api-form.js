console.log("Form validation started.");

function validateForm() {
    var name = document.getElementById('name').value;
    var organization = document.getElementById('organization').value;
    var designation = document.getElementById('designation').value;
    var email = document.getElementById('email').value;

    var nameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
        showError("Name can only contain letters and spaces.");
        return false;
    }

    if (!nameRegex.test(organization)) {
        showError("Organization can only contain letters and spaces.");
        return false;
    }

    if (!nameRegex.test(designation)) {
        showError("Designation can only contain letters and spaces.");
        return false;
    }

    if (!emailRegex.test(email)) {
        showError("Please enter a valid email address.");
        return false;
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzukYPaMvpgByTq41Vs9s0mu6QegXmIMG2HQxi9UygGacyIyG-EgJ1kuC0Zl4bSrNx2tg/exec';
    console.log("submitted");
    const form = document.getElementById('contactForm');
    console.log("hello")
    console.log("hi")
    return true;
}

function displaySwal(message) {
    Swal.fire({
        text: message // Changed "thank" to "message"
    });
}

function showError(message) {
    console.error(message);
}

function clearForm() {
    let nameInput = document.getElementById("name");
    let organizationInput = document.getElementById("organization");
    let designationInput = document.getElementById("designation");
    let emailInput = document.getElementById("email");
    nameInput.value = "";
    emailInput.value = "";
    organizationInput.value = "";
    designationInput.value = "";
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Validate the form
    if (!validateForm()) {
        return; // Exit the function if validation fails
    }

    // Get form data
    var formData = new FormData(this);

    // Make an AJAX request to submit the form data
    fetch('https://script.google.com/macros/s/AKfycbzukYPaMvpgByTq41Vs9s0mu6QegXmIMG2HQxi9UygGacyIyG-EgJ1kuC0Zl4bSrNx2tg/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle successful response here
        console.log(data);
        // Optionally, display a success message
        displaySwal("Form submitted successfully!");
        // Clear the form fields
        clearForm();
    })
    .catch(error => {
        // Handle error here
        console.error('There was an error!', error);
        // Optionally, display a user-friendly error message
        displaySwal("An error occurred while submitting the form.");
    });
});
