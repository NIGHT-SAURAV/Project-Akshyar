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

    // If all validations pass, the form will submit
    return true;
}

function showError(message) {
    var errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;

    var form = document.getElementById('contactForm');
    form.appendChild(errorDiv);
}
