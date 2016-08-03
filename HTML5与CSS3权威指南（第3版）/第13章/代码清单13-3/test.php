<?
$str =file_get_contents('php://input');
echo '服务器端接收数据：'.$str;
flush();
?>
