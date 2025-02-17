<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);
    $honeypot = $_POST["website"];

    if (!empty($honeypot)) {
        http_response_code(400);
        echo "Greška pri slanju.";
        exit;
    }

        $to = "filip.zivanovic1999@gmail.com";
        $email_subject = "Novi upit putem kontakt forme na sajtu";
        $message_body = "Stigao je novi upit putem kontakt forme:\n\n";
        $message_body .= "Ime i prezime: $name\n";
        $message_body .= "Email: $email\n";
        $message_body .= "Naslov: $subject\n";
        $message_body .= "Poruka: $message";
        $headers = "From: no-reply@cvetkoviclaw.rs\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

        if (mail($to, $email_subject, $message_body, $headers)) {
            http_response_code(200);
        echo "Hvala što ste nas kontaktirali. Uskoro ćemo vam odgovoriti.";
        } else {
            http_response_code(500);
           echo "Došlo je do greške prilikom slanja vaše poruke. Molimo pokušajte kasnije.";
        }
}
else{
  echo "Oops! Something went wrong.";
}

?>

<!-- session_start();  -->
<!-- $_SESSION['feedback_message'] = "Hvala što ste nas kontaktirali. Uskoro ćemo vam odgovoriti."; -->

<!-- echo "<div class='inner success'><p class='success'>Thanks for contacting us. We will contact you ASAP!</p></div> -->
