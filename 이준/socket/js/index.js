const socket = io();
const input = one('#message');;
const nickname = one('#nickname');
const chat = one('#chat');

// 접속시 접속을 알림
socket.on('connect', () => {
	if (!nickname.value === "") {
		name = "unknown";
	}
	socket.emit('newUser', { type: 'connect', nickname: nickname.value });
});

// 변경사항이 있을 시에 알림.
socket.on('update', (data) => {
	const { nickname, msg, type } = data;

	const node = document.createElement("LI"); 
	
	let _msg = "";
	
	if (type === 'connect') {
		_msg = `${nickname}님이 접속했습니다.`;
	} else if (type === 'message') {
		_msg = `${nickname} : ${msg}`;
	}

	const textnode = document.createTextNode(_msg);
	node.appendChild(textnode);
	chat.appendChild(node);
});

function appendHTML(element, str) {
	chat.innerHTML = str;
	while (chat.children.length > 0) {
		element.appendChild(chat.children[0]);
	}
}

// 메시지를 보냄
function send() {
	input = document.getElementById('message');
	var message = input.value;
	input.value = "";
	socket.emit('message', { nickname: nickname.value, type: 'message', msg: message});
}

function one(element) {
	return document.querySelector(element);
}