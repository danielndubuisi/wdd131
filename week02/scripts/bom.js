const input = document.querySelector('input');
const list = document.querySelector('ul');
const button = document.querySelector('button');

const li = document.createElement('li');
const deleteBtn = document.createElement('button');

li.textContent = input.value;
deleteBtn.textContent = "❌";

li.append(deleteBtn);

list.append(li);