const categories = {
    fruits: ["🍎", "🍌", "🍇", "🍉", "🍓", "🥭", "🍒", "🍍"],
    emojis: ["😀", "😂", "😍", "😎", "😡", "🤔", "🥳", "😭"],
    animals: ["🐶", "🐱", "🐭", "🐼", "🦁", "🐸", "🐢", "🦄"],
    planets: ["🌍", "🪐", "🌕", "🌞", "⭐", "🌟", "☄️", "🌑"]
};

let selectedCards = [];
let flippedCards = [];
let matchedPairs = 0;
let score = 0;
let timer = 30;
let countdown;

function startGame(category) {
    document.getElementById("landing-page").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");

    selectedCards = [...categories[category], ...categories[category]];
    selectedCards = shuffle(selectedCards);

    displayCards();
    resetGame();
    startTimer();
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function displayCards() {
    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = "";

    selectedCards.forEach((item, index) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.dataset.value = item;
        card.dataset.index = index;
        card.addEventListener("click", handleCardClick);
        gameBoard.appendChild(card);
    });
}

function handleCardClick(event) {
    let clickedCard = event.target;

    if (
        flippedCards.length < 2 &&
        !clickedCard.classList.contains("flipped") &&
        !clickedCard.classList.contains("matched")
    ) {
        clickedCard.classList.add("flipped");
        clickedCard.innerHTML = clickedCard.dataset.value;
        flippedCards.push(clickedCard);
    }

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 800);
    }
}

function checkMatch() {
    let [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        matchedPairs++;
        score += 10;
    } else {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1.innerHTML = "";
        card2.innerHTML = "";
    }

    flippedCards = [];
    updateScore();

    if (matchedPairs === selectedCards.length / 2) {
        endGame("You Win! 🎉");
    }
}

function startTimer() {
    timer = 30;
    document.getElementById("timer").innerText = `Time: ${timer}s`;

    countdown = setInterval(() => {
        timer--;
        document.getElementById("timer").innerText = `Time: ${timer}s`;

        if (timer === 0) {
            clearInterval(countdown);
            endGame("Time's Up! ❌");
        }
    }, 1000);
}

function updateScore() {
    document.getElementById("score").innerText = `Score: ${score}`;
}

function endGame(message) {
    alert(`${message}\nFinal Score: ${score}`);
    clearInterval(countdown);
    restartGame();
}

function restartGame() {
    document.getElementById("landing-page").classList.remove("hidden");
    document.getElementById("game-container").classList.add("hidden");

    flippedCards = [];
    matchedPairs = 0;
    score = 0;
    updateScore();
}
