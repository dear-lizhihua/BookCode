<?php
$data= $GLOBALS['HTTP_RAW_POST_DATA'];
$file=fopen("test.jpg","w");
fwrite($file,$data);
fclose($file);
?>