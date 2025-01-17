const input = document.querySelector('input');
const list = document.querySelector('ul');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    
    deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
    })
    
    if (input.value.trim() !== '') {
        li.textContent = input.value;
        deleteBtn.textContent = "❌";

        li.append(deleteBtn);

        list.append(li);

        input.value = ""
        input.focus();
        
    } else {
        alert('Please enter a value');
        input.focus();
    }

});
