document.addEventListener('DOMContentLoaded', () => {
    const countElement = document.querySelector('#count');
    const counter = JSON.parse(localStorage.getItem('counter')) || 0;
    if (countElement) {
        countElement.textContent = counter;
    } else {
        console.error('No element with id "count" was found'); 
    }
});