<?php
if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $type = $_POST['type'];
    $message = $_POST['message'];

    $to = 'support@icontroltech.com';
    $subject = 'Contact Form Submission - ' . $name . ' - ' . $type;
    $body = "Name: " . $name . "\n" .
            "Email: " . $email . "\n" .
            "Type: " . $type . "\n" .
            "Message: " . $message;

    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if(mail($to, $subject, $body, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Failed to send your message. Please try again.";
    }
}
?>