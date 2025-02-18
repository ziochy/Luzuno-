const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 200;

let dino = {
    x: 50,
    y: 150,
    width: 50,
    height: 50,
    velocityY: 0,
    gravity: 1.5,
    jumping: false,
    immune: false
};

let hearts = 5;

function drawDino() {
    let img = new Image();
    img.src = 'dino.png';
    ctx.drawImage(img, dino.x, dino.y, dino.width, dino.height);
}

function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dino.y += dino.velocityY;
    dino.velocityY += dino.gravity;

    if (dino.y > 150) {
        dino.y = 150;
        dino.jumping = false;
    }

    drawDino();
    requestAnimationFrame(updateGame);
}

document.getElementById('jumpButton').addEventListener('click', () => {
    if (!dino.jumping) {
        dino.velocityY = -20;
        dino.jumping = true;
    }
});

document.getElementById('shieldButton').addEventListener('click', () => {
    if (!dino.immune) {
        dino.immune = true;
        document.getElementById('shieldButton').disabled = true;
        setTimeout(() => {
            dino.immune = false;
            document.getElementById('shieldButton').disabled = false;
        }, 5000);
    }
});

function regenHearts() {
    if (hearts < 5) {
        hearts++;
        updateHeartsDisplay();
    }
    setTimeout(regenHearts, 60000);
}

function updateHeartsDisplay() {
    document.getElementById('hearts').innerText = '❤️'.repeat(hearts);
}

updateGame();
regenHearts();
updateHeartsDisplay();
