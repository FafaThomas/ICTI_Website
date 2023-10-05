$(document).ready(function() {
    // Attach an event handler to the form submission
    $("#contactForm").submit(function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get form data
        var name = $("input[name='name']").val();
        var email = $("input[name='email']").val();
        var type = $("#type option:selected").text();
        var message = $("textarea[name='message']").val();

        // Send the form data to the server-side PHP script
        $.ajax({
            type: "POST",
            url: "Email.php", // Replace with the actual path to your PHP script
            data: {
                name: name,
                email: email,
                type: type,
                message: message
            },
            success: function(response) {
                // Display a confirmation message on the website
                alert("Message sent successfully!");
                // Clear the form fields
                $("#contactForm")[0].reset();
            },
            error: function(error) {
                // Handle error if the email couldn't be sent
                alert("An error occurred. Please try again later.");
            }
        });
    });
});
