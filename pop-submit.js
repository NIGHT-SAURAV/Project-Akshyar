document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.getElementById('submit-button');

    submitButton.addEventListener('click', function () {
        // Set a cookie or use local storage to store a flag indicating that the popup should be displayed
        // This example uses local storage
        localStorage.setItem('showPopup', 'true');

        // Redirect to top.html after clicking the submit button
        window.location.href = 'top.html';
    });
});
