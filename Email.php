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
        $mail->setFrom($email, $name);
        $mail->addAddress('support@icontroltech.com');  // Recipient
        $mail->addReplyTo($email, $name);

        // Email content
        $mail->isHTML(false);  // Set email format to plain text
        $mail->Subject = $name . ' - ' . $type;  // Subject with name and type
        $mail->Body = $message;  // Message in the body

        // Send the email
        $mail->send();
        header("Location: Email.php?mailsend");
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
