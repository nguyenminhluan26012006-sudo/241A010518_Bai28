let score = 0;
let timeLeft = 30;
let gameInterval = null;
let timerInterval = null;
let targetElement = null;

function startGame() {
    score = 0;
    timeLeft = 30;
    document.getElementById("score").innerHTML = score;
    document.getElementById("timer").innerHTML = timeLeft;
    document.getElementById("btnStart").disabled = true;
    const arena = document.getElementById("arena");
    arena.innerHTML = ""; 

    targetElement = document.createElement("div");
    targetElement.className = "target";
    targetElement.onclick = function() {
        score++;
        document.getElementById("score").innerHTML = score;
        changeTargetPosition(); 
    };

    arena.appendChild(targetElement);
    changeTargetPosition();
    gameInterval = setInterval(changeTargetPosition, 1000);

    timerInterval = setInterval(function() {
        timeLeft--;
        document.getElementById("timer").innerHTML = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}
function changeTargetPosition() {
    if (!targetElement) return;
    const maxLeft = 560;
    const maxTop = 360;
    const randomLeft = Math.floor(Math.random() * maxLeft);
    const randomTop = Math.floor(Math.random() * maxTop);
    targetElement.style.left = randomLeft + "px";
    targetElement.style.top = randomTop + "px";
}

function endGame() {
    clearInterval(gameInterval);
    clearInterval(timerInterval);
    document.getElementById("btnStart").disabled = false;
    const arena = document.getElementById("arena");
    arena.innerHTML = "";
    alert("Hết giờ! Tổng số điểm bạn đạt được là: " + score);
}