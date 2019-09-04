// JavaScript Documentvar fs = require('fs'),
var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    socketio = require('socket.io')
    express = require('express');

var port = 8888;

var options = {
    key: fs.readFileSync('/etc/letsencrypt/live/oneboard.io/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/oneboard.io/cert.pem'),
ca: fs.readFileSync('/etc/letsencrypt/live/oneboard.io/chain.pem')
};

var app = express();

var server = https.createServer( options,app).listen(port, function(){
  console.log("Express server listening on port " + port);

var b = []

socketio.listen(server).on('connection',function(socket){

//start main code
console.log("New Connection from: "+ socket.id)



socket.on("update",function(data){
console.log("update in room"+ data.r);
//console.log(data);
	
	socket.broadcast.to(data.r).emit("update",data)
	
})

socket.on("room",function(data){
console.log("JROOM" + data.r);
	
 socket.join(data.r);	

	
})


socket.on("disconnect",function(){
console.log("Disconnect");
	 
})

		})


});
