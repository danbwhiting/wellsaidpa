// JavaScript functionalities can be added here if needed.
let i = 0;
const text = document.querySelector('h1').textContent;
document.querySelector('h1').textContent = '';

function typeWriter() {
    if (i < text.length) {
        document.querySelector('h1').textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // adjust the speed of typing here
    }
}

typeWriter();