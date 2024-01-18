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
    const form = document.getElementById('contactForm');

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                alert("Thank you! Your form is submitted successfully.");
                window.location.href = 'index.html'; // Redirect to index.html
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => console.error('Error!', error.message));

    // Prevent default form submission
    return false;
}

function showError(message) {
    var errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;

    var form = document.getElementById('contactForm');
    form.appendChild(errorDiv);
}
