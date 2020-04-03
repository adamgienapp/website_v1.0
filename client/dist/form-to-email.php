<?php
if(!isset($_POST['submit']))
{
  echo "error, you need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

//Validate
if(empty($name) || empty($visitor_email))
{
  echo "Name and email are mandatory!";
  exit;
}

function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
               
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

//Assemble email
$email_from = "gienappa@gmail.com";
$email_subject = "New form submission from adamgienapp.com";
$email_body = "Name: $name \n".
              "Email: $email \n".
              "Subject: $subject \n".
              "Message: $message".

$to = "gienappa@gmail.com";
$headers = "From: $email_from \r \n";
$headers .= "Reply-To: $visitor_email \r\n";

//Send!
mail($to, $email_subject, $email_body, $headers);
?>