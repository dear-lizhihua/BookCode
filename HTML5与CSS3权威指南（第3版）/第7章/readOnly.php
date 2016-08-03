<?php
$link=mysql_connect("localhost","root","root"); 
mysql_query("SET NAMES UTF8"); 
mysql_select_db("mysql"); 
$result = mysql_query('SELECT * FROM users WHERE id ='.$_REQUEST['id'],$link);
If ($result&&mysql_num_rows($result) > 0) {
    $obj = mysql_fetch_object($result);
}
?>
<header id="div_head_title_big">
<h1>查看用户信息</h1>
</header>
<form id="form1" >
<ul>
    <li>
        <ul>
    	    <li id="title_1"><label>用户姓名</label></li>
	    <li id="content_1"><?echo $obj->UserName;?></li>
	    <li id="title_2"><label>出生年月</label></li>
	    <li id="content_2"><?echo $obj->Birthday;?></li>
	    <li id="title_3"><label>密码</label></li>
	    <li id="content_3"><?echo $obj->Password;?></li>
	</ul>
    </li>
    <li>
	<ul>
	    <li id="title_4"><label>住宅电话</label></li>
	    <li id="content_4"><?echo $obj->Phone;?></li>
	    <li id="title_5"><label>移动电话</label></li>
	    <li id="content_5"><?echo $obj->Mobile;?></li>
	    <li id="title_6"><label>传真</label></li>
	    <li id="content_6"><?echo $obj->Zip;?></li>
	</ul>
    </li>
    <li>
	<ul>
	    <li id="title_7"><label>住址</label></li>
	    <li id="content_7"><?echo $obj->Address;?></li>
	    <li id="title_8"><label>Email</label></li>
	    <li id="content_8"><?echo $obj->Email;?></li>
	    <li id="title_9"><label>用户类型</label></li>
	    <li id="content_9"><?if($obj->UserType=="0") echo "管理员";else if($obj->UserType=="1") echo"普通用户";?></li>
	</ul>
    </li>
</ul>
</form> 