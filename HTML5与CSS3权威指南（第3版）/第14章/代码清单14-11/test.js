onconnect = function(e) {
   var port = e.ports[0];
   port.postMessage('你好');
}
