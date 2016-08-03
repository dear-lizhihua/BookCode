<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
echo "event:requests\n";
echo "data:服务器端当前时间:".date('Y/m/d H:i:s')."\n\n";
flush();
?>

