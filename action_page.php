<?php
$psw = $_GET['psw'];

if ($psw == "11") {
header('location: login.html');
} else {header('location: error.html');}
?>
