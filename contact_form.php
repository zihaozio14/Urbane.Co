<?php
$servername = "localhost";
$database = "u219822055_urbaneco";
$username = "u219822055_urbaneco";
$password = "Redgr@v2023";

//Contact form database PHP
$connection = mysqli_connect($servername, $username, $password, $database);
$subject = mysqli_real_escape_string($connection, $_REQUEST['subject']);
$email = mysqli_real_escape_string($connection, $_REQUEST['email']);
$name = mysqli_real_escape_string($connection, $_REQUEST['name']);
$message = mysqli_real_escape_string($connection, $_REQUEST['message']);


    $subject = $_POST['subject']; 
    $email = $_POST['email'];
    $name = $_POST['name'];
    $message = $_POST['message'];
    $request = "insert into contact_form(subject, email, name, message) values ('$subject', '$email', '$name', '$message')";

    mysqli_query($connection, $request);

    header('location:contact.php');


mysqli_close($connection);
?>