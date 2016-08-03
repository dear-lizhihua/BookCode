<?
for ($i=0;$i<count($_FILES['myfile']['name']);$i++) 
{
    move_uploaded_file($_FILES['myfile']['tmp_name'][$i],'./uploads/'.iconv("utf-8","gbk",$_FILES['myfile']['name'][$i]));
    echo '已上传文件：'.$_FILES['myfile']['name'][$i].'<br/>';
}
flush();
?>
