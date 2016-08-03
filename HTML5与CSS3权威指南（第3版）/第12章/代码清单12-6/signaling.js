var port =8080;
var io = require('socket.io').listen(port);
 
io.sockets.on('connection', function(socket) {
    //进入房间
    socket.on('enter', function(roomname) {
        socket.set('roomname', roomname);
        socket.join(roomname);
    });
 
    socket.on('message', function(message) {
        //在message中追加发送方的id（以识别对方）
        message.from = socket.id;
 
        // 目标方已指定？
        var target = message.sendto;
        if (target) {
            // 已指定目标方的时候，向其发送消息
            io.sockets.socket(target).emit('message', message);
            return;
        }
 
        //未指定目标方的时候进行广播
        emitMessage('message', message);
    });
    //只向房间内广播消息
    function emitMessage(type, message) {
        var roomname;
        socket.get('roomname', function(err, _room) {  roomname = _room;  });
 
        if (roomname) {  
            socket.broadcast.to(roomname).emit(type, message);   
        }
        else {
            socket.broadcast.emit(type, message);
        }
    }
    socket.on('disconnect', function() {
        emitMessage('用户断开连接');
    });
});

