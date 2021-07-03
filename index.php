<?php
//php code to send contact form ro both client and owner
if(isset($_POST['submit'])){ //check of user enter data
    $mailto = "abdullahisalihu2003@gmail.com"; //my email address
    $from = $_POST['email'] //senders email address
    $name = $_POST['name']; //user name
    $subject = $_POST['subject'];
    $subject2 = "Your Message Has Been Submitted Successfully"; //this is for client
    $message = "Client Name: ". $name. "Wrote the following message". "\n\n". $_POST['message'];
    $message2 = "Dear ". $name. "\n\n" ."Thank you for contacting us! We will get back to you shortly"; //this is for sender
    $headers = "From: ". $from; //user email address
    $header2 = "From: ". $mailto; //this will receive to client
    $result = mail($mailto, $subject, $message, $headers); // send email to website owner
    $result = mail($from, $subject2, $message2, $headers2); // send email to user as wall
    if ($result) { //if email is submitted sucessfully
         echo '<script type="text/javascript">alert("Your message was sent sucessfully. We will contact you shortly") </script>';
    } else{
         echo '<script type="text/javascript">alert("Submission failed! Try again later") </script>';
    }
}
?>