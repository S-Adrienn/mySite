const images = document.querySelectorAll(".slide-image");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function showSlide(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });

    currentIndex = index;
    updateActiveDot();
}

function updateActiveDot() {
    dots.forEach((dot, i) => {
        if (i === currentIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

showSlide(currentIndex);

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}, 2000);


