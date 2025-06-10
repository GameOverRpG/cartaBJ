document.addEventListener("DOMContentLoaded", () => {
    const heartContainer = document.getElementById("heart-container");

    function criarCoracoes() {
        for (let i = 0; i < 10; i++) {
            let heart = document.createElement("div");
            heart.innerHTML = "❤";
            heart.classList.add("heart");
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.bottom = "0px"; // Corações surgem a partir do fundo
            heart.style.animationDelay = `${Math.random() * 2}s`;
            heartContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 3000);
        }
    }

    setInterval(criarCoracoes, 1500);
});