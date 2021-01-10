<?php

    $message_sent= false;
    
    if(isset($_POST['submit']) && $_POST['email']!= ''){

        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
            //validation complete, submit form

            $userName = $_POST['name'];
            $userEmail = $_POST['email'];
            $message = $_POST['message'];


            $to = "francesco@metaconsultinggroup.org";
            
            $messageSubject = "Contact Form by ".$userName;

            $body = "";
            $body .= "Contacted by: ".$userName. "\r\n";
            $body .= "Email: ".$userEmail. "\r\n";
            $body .= "Message: ".$message. "\r\n";


            mail($to,$messageSubject,$body);

            $message_sent= true;


            
        }


    }

?>