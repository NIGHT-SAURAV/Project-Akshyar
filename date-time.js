function updateDateTime() {
    // Get current date and time
    var currentDateTime = new Date();

    // Format the date and time
    var formattedDateTime = currentDateTime.toLocaleString();

    // Display the formatted date and time
    document.getElementById('dateTime').innerHTML = formattedDateTime;
}

// Update the date and time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);

// Initial call to set the initial date and time
updateDateTime();
