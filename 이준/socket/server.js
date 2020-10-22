const express = require('express');
const app = express();
const http = require('http');
const socket = require('socket.io');
const server = http.createServer(app);
const io = socket(server);

app.use(express.static('public'));
app.use('/io', express.static('node_modules'));
app.use('/js', express.static('js'));

io.on('connection', (socket) => {

	// 유저 접속
	socket.on('newUser', ({ nickname }) => {
		socket.name = nickname;
		const payload = {
			type: 'connect',
			nickname
		};
		io.sockets.emit('update', payload);
	});

	// 메시지 받기
	socket.on('message', ({ nickname, type, msg }) => {
		// 보내는 사람
		 // data.name = socket.name;
		 console.log(msg);

		// 나머지에게 유저에게 메시지 전송
		// console.log(data);
		// socket.broadcast.emit('update', { nickname, type, msg });
		io.sockets.emit('update', { nickname, type, msg });
	})

	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

const PORT = 80;

server.listen(PORT, () => {
	console.log(`PORT NUMBER : ${PORT}`);
});