<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $type = $_POST['type'];
    $message = $_POST['message'];

    // SMTP server settings
    $smtp_host = 'mail.icontroltech.com';
    $smtp_port = 465;
    $smtp_username = 'inquiry@icontroltech.com'; // Your SMTP username (your email address)
    $smtp_password = 'icti_inquiry2023'; // Your SMTP password
    
    // Recipient email address
    $recipient_email = 'support@icontroltech.com'; // Change to the recipient's email address

    // Create an email header
    $headers = "From: $email\r\nReply-To: $email";
    
    // Set the subject as a combination of "name" and "type"
    $subject = "Contact Form - $name ($type)";

    // Compose the email message
    $email_message = $message;

    // Configure SMTP settings
    ini_set('SMTP', $smtp_host);
    ini_set('smtp_port', $smtp_port);
    ini_set('sendmail_from', $smtp_username);

    // Attempt to send the email
    if (mail($recipient_email, $subject, $email_message, $headers)) {
        echo 'Message has been sent';
    } else {
        echo 'Message could not be sent';
    }
} else {
    echo 'Invalid request';
}
?>
