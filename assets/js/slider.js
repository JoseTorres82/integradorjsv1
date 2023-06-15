const slider = document.querySelector(".slider");
const slides = slider.querySelector(".slides");
const prevBtn = slider.querySelector(".prev");
const nextBtn = slider.querySelector(".next");

const slideWith = slides.clientWidth;

let slideIndex = 0;

const moveToSlide = () => {
    slides.style.transform = `translateX(${-slideWith * slideIndex}px)`;
};

const nextSlide = () => {
    if (slideIndex === slides.children.length -1)  {
        slideIndex = 0;
    }else {
        slideIndex++;
    }
    moveToSlide();
};
 
nextBtn.addEventListener("click",nextSlide);
