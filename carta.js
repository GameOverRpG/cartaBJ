document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    let index = 0;

    function moverCarrossel() {
        index++;
        if (index > 3) index = 0;
        carousel.style.transform = `translateX(${-index * 165}px)`;
    }

    setInterval(moverCarrossel, 2000); // Alterna as imagens a cada 2 segundos
});