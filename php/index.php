<?php
$login = filter_var($_POST['name']);
$password = filter_var($_POST['password']);
$mysql = new mysqli('localhost', 'root', '1234', 'users');
$mysql->query("INSERT INTO `users`( `name`, `password`) VALUES ('$login', '$password')");
$mysql -> close();
header('LOCATION: check_in.html')
?>