const socket = io();

const messages = document.querySelector('.messages');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const nameBlock = document.querySelector('.name');

const userName = prompt('Ваше ім\`я');
nameBlock.innerHTML = `${userName}`;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(input.value) {
    socket.emit('chat message', {
      message: input.value, 
      name: userName
    });

    input.value = '';
  }
})

socket.on('chat message', (data) => {
  const item = document.createElement('li');
  item.classList.add('message');
  item.innerHTML = `<span>${data.name}</span>: ${data.message}`;

  messages.append(item);
});