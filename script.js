// --- Matrix Code Rain Effect ---
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(3, 10, 5, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff66';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(drawMatrix, 33);

// --- High-Attitude Dynamic Typing List ---
const textArray = [
    "ALEX SAHIL YOUR FATHER",
    "KING OF MY OWN WORLD",
    "DON'T PLAY WITH FIRE",
    "MY GAME, MY RULES",
    "ORIGINAL IS ALWAYS UNBEATABLE",
    "SILENT BUT DANGEROUS",
    "CYBER MODE ACTIVATED",
    "BORN TO RULE, NOT TO FOLLOW"
];

let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 90); // টাইপিংয়ের স্পিড
    } else {
        setTimeout(eraseText, 1800); // লেখাটি কতক্ষণ থাকবে
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingElement.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 40); // মোছার স্পিড
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeText, 400); // পরের লেখা শুরু হওয়ার সময়
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeText();
});
