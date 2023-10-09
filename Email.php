<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $type = $_POST["type"];
    $message = $_POST["message"];
    
    // Change the recipient email address to support@icontroltech.com
    $to = "support@icontroltech.com";
    
    // Email subject as "Name - Selected Category"
    $subject = "$name - $type";
    
    // Email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Category: $type\n\n";
    $email_message .= "Message:\n$message";
    
    // Additional headers
    $headers = "From: $email";
    
    // Send the email
    if (mail($to, $subject, $email_message, $headers)) {
        // Email sent successfully
        echo "Success! Your message has been sent.";
    } else {
        // Email sending failed
        echo "Error: Something went wrong. Please try again later.";
    }
} else {
    // Redirect back to the contact form if accessed directly
    header("Location: Index.html");
}
?>
