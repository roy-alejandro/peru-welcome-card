
const welcomeButton = document.querySelector("#welcome-button");
const greetingMessage = document.querySelector("#greeting-message");

welcomeButton.addEventListener("click", function () {
    greetingMessage.textContent =
        "Thank you for visiting Peru! I hope you have an unforgettable experience.";
});
