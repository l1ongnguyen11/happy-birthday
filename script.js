// Slideshow ảnh
let index = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    index++;
    if (index > slides.length) index = 1;
    slides[index - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}
showSlides();

// Hiệu ứng rơi tim
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let hearts = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createHeart() {
    return {
        x: Math.random() * canvas.width,
        y: 0,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 1
    };
}

function drawHeart(h) {
    ctx.font = `${h.size}px Arial`;
    ctx.fillStyle = 'red';
    ctx.fillText('❤️', h.x, h.y);
}

function updateHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (Math.random() < 0.1) hearts.push(createHeart());
    hearts.forEach((h, i) => {
        h.y += h.speed;
        drawHeart(h);
        if (h.y > canvas.height) hearts.splice(i, 1);
    });
    requestAnimationFrame(updateHearts);
}
updateHearts();
