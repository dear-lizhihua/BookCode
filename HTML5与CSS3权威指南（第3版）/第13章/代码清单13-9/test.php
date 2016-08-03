<?
$str =file_get_contents('php://input');
$fileName='副本_'.$_REQUEST['fileName'];
$fp = fopen(iconv("UTF-8","GBK",$fileName),'w'); 
fwrite($fp,$str); //插入第一条记录 
fclose($fp); //关闭文件 
?>
