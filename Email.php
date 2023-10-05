<?php
// Include the PHPMailer library
require 'PHPMailer\src\PHPMailer.php';

// Configuration for your email server
$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'smtp.live.com'; // Replace with your SMTP server
$mail->SMTPAuth = true;
$mail->Username = 'ICTIWebSender@outlook.com'; // Replace with your SMTP username
$mail->Password = 'WebSenderICTI2023'; // Replace with your SMTP password
$mail->SMTPSecure = 'tls'; // Use 'tls' or 'ssl' as appropriate
$mail->Port = 587; // Adjust the port if needed

// Sender's email address
$mail->setFrom($_POST['email'], $_POST['name']);

// Recipient email address
$mail->addAddress('support@icontroltech.com');

// Subject formatted as "name - type"
$mail->Subject = $_POST['name'] . ' - ' . $_POST['type'];

// Email body
$mail->Body = $_POST['message'];

// Try to send the email
try {
    if ($mail->send()) {
        // Email sent successfully
        echo json_encode(['status' => 'success']);
    } else {
        // Email sending failed
        echo json_encode(['status' => 'error']);
    }
} catch (Exception $e) {
    // An exception occurred during email sending
    $errorMessage = $e->getMessage();
    echo '<script>';
    echo 'var errorMessage = "' . addslashes($errorMessage) . '";'; // Get the error message
    echo 'alert("Email sending failed: " + errorMessage);';
    echo '</script>';
}
?>
