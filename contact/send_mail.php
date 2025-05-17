<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "hetitan10@gmail.com";
    $subject = $_POST['objet'];
    $message = $_POST['message'];
    $headers = "From: " . $_POST['email'];

    if (mail($to, $subject, $message, $headers)) {
        echo "Email envoyé avec succès !";
    } else {
        echo "Erreur lors de l'envoi.";
    }
}
?>