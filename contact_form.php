<?php
$servername = "urbaneco.shop";
$database = "u219822055_urbaneco";
$username = "u219822055_urbaneco";
$password = "Redgr@v2023";

//Contact form database PHP
$connection = mysqli_connect($servername, $username, $password, $database);
$name = mysqli_real_escape_string($connection, $_REQUEST['name-contact']);
$email = mysqli_real_escape_string($connection, $_REQUEST['email-contact']);
$phone = mysqli_real_escape_string($connection, $_REQUEST['phone-contact']);
$message = mysqli_real_escape_string($connection, $_REQUEST['message-contact']);

if (isset($_POST['submit'])) {
    $name = $_POST['name-contact'];
    $email = $_POST['email-contact'];
    $phone = $_POST['phone-contact'];
    $message = $_POST['message-contact'];
    $request = "insert into contact_form(name, email, phone, message) values ('$name', '$email', '$phone', '$message')";

    mysqli_query($connection, $request);

    header('location:contact.php');

} else {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

mysqli_close($connection);
?>