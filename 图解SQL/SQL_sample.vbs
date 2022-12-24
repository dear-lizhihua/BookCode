'从用户获取输入
UserInput = InputBox("请输入SQL语句", _
    "客户端查询软件", _
    "")

'连接RDBMS
Set objSQLConnection = CreateObject("ADODB.Connection")
objSQLConnection.Open _
    "PROVIDER=SQLOLEDB;" & _
    "SERVER=DESKTOP-9H19PM3\SQLEXPRESS;" & _
    "DATABASE=db_ehon;" & _
    "UID=sa;" & _
    "PWD=ehon"

'发送查询
Set objSQLRecordset = CreateObject("ADODB.Recordset")
objSQLRecordset.Open _
    UserInput, _
    objSQLConnection

'将查询结果调整为易于用户阅读的形式
DatabaseTitle = ""
DatabaseOut = ""
Do Until objSQLRecordset.EOF
    If DatabaseTitle = "" Then
         For Each objField in objSQLRecordset.Fields
                 DatabaseTitle = DatabaseTitle & objField.Name & "|"
        Next
        DatabaseTitle = DatabaseTitle & vbNewLine
    End If
         For Each objField in objSQLRecordset.Fields
        DatabaseOut = DatabaseOut & objField & "|"
    Next
    DatabaseOut = DatabaseOut & vbNewLine
    objSQLRecordset.MoveNext
Loop

'显示结果
MsgBox DatabaseTitle & DatabaseOut, vbOKOnly, "执行结果"
