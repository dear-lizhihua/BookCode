<?php
session_start(); 
$str =file_get_contents('php://input');
$_SESSION['arraybuffer']=$str;
echo $_SESSION['arraybuffer'];
flush();
?>
