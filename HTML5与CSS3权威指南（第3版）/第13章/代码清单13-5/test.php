<?
$name =$_POST['name'] ;
$age =$_POST['age'] ;
$add_data =$_POST['add_data'] ;
echo '服务器端接收数据：<br/>';
echo '姓名：'.$name.'<br/>';
echo '年龄：'.$age.'<br/>';
echo '附加数据：'.$add_data;
flush();
?>
