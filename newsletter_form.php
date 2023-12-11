<?php
$servername = "localhost";
$database = "u453974301_zippo_db";
$username = "u453974301_zippo";
$password = "kga-Kd.q6~PBU:57";

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