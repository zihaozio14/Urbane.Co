<?php
$servername = "urbaneco.shop";
$database = "u219822055_urbaneco";
$username = "u219822055_urbaneco";
$password = "Redgr@v2023";

//Contact form database PHP
$connection = mysqli_connect($servername, $username, $password, $database);
$email = mysqli_real_escape_string($connection, $_REQUEST['email']);

if (isset($_POST['submit'])) {
    $email = $_POST['email'];

    $request = "insert into newsletter_form(email) values ('$email')";

    mysqli_query($connection, $request);

    header('location:index.php');

} else {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

mysqli_close($connection);
?>