document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".slider-track");
    const nextBtn = document.querySelector(".slider-btn.next");
    const prevBtn = document.querySelector(".slider-btn.prev");

    let currentSlide = 0;
    const imagesPerSlide = 4;
    const imageWidth = 270 + 10; // 270px width + 10px gap between images
    const totalImages = document.querySelectorAll(".slider-track img").length;
    const maxSlide = totalImages - imagesPerSlide;

    // Ensure the buttons exist before adding event listeners
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => {
            if (currentSlide < maxSlide) {
                currentSlide++;
                updateSlider();
            }
        });

        prevBtn.addEventListener("click", () => {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlider();
            }
        });
    }

    function updateSlider() {
        const moveX = currentSlide * imageWidth;
        track.style.transform = `translateX(-${moveX}px)`;
    }
});
