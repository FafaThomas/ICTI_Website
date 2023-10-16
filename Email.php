<?php
// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $type = $_POST['type'];
    $message = $_POST['message'];

    // Create a new PHPMailer instance, passing `true` to enable exceptions
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;  // Enable verbose debug output
        $mail->isSMTP();  // Send using SMTP
        $mail->Host = 'smtp.example.com';  // Set the SMTP server to send through
        $mail->SMTPAuth = true;  // Enable SMTP authentication
        $mail->Username = 'user@example.com';  // SMTP username
        $mail->Password = 'secret';  // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;  // Enable implicit TLS encryption
        $mail->Port = 465;  // TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        // Recipients
        $mail->setFrom($email, 'Mailer');
        $mail->addAddress('support@icontroltech.com');  // Add a recipient
        $mail->addReplyTo($email, $name);

        // Email content
        $mail->isHTML(false);  // Set email format to plain text
        $mail->Subject = 'Contact Form Submission - ' . $name . ' - ' . $type;
        $mail->Body = "Name: " . $name . "\n" .
                      "Email: " . $email . "\n" .
                      "Type: " . $type . "\n" .
                      "Message: " . $message;

        // Send the email
        $mail->send();
        header("Location: Email.php?mailsend");
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
