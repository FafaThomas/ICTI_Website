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

    mail($to, $subject, $body, $headers);
    header("Location: Email.php?mailsend");
}
?>