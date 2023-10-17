<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    include('C:\Users\ICTI\Documents\ICTI Cred Test\config.php');

    $name = $_POST['name'];
    $email = $_POST['email'];
    $type = $_POST['type'];
    $message = $_POST['message'];

    // Retrieve SMTP settings from the configuration
    $smtp_host = $config['smtp_host'];
    $smtp_port = $config['smtp_port'];
    $smtp_username = $config['smtp_username'];
    $smtp_password = $config['smtp_password'];

    
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
