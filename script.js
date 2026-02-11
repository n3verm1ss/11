const messages = [
    "Ты уверена??",
    "Ты правда уверена???",
    "Ну почему?",
    "Юль, пожалуйста...",
    "Только подумай об этом!",
    "Если ты откажешься, мне будет очень грустно...",
    "Очень очень грустно...",
    "Я буду плакать...",
    "Хорошо, я больше не буду спрашивать...",
    "Шутка, просто скажи да, пожалуйста ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}