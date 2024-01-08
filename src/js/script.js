let btn_div = document.querySelector("#menu-btn");
let btn_close = document.querySelector("#close-btn");
let span_close = document.querySelector("#span-close");
let menu = document.querySelector("#menu");
let bar = document.querySelector("#bar");

// open the buttons menu
btn_div.addEventListener("click", () => {
    bar.classList.add("active");
    menu.classList.add("active");
});
// close the buttons menu
btn_close.addEventListener("click", close);


function close(){
    bar.classList.remove("active");
    menu.classList.remove("active");
    console.log("funfa");
}
// Buttons change

let slides = document.querySelectorAll(".slide");
let btn_slides = document.querySelectorAll(".btn-slide");
let arrowLeft = document.querySelector(".prev");
let arrowRight = document.querySelector(".next");
let current = 0;
 
// Clear all images
function reset() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        btn_slides[i].classList.remove("active");
    }
}
 
// Initial slide
function startSlide() {
    reset();
    slides[0].classList.add("active");
    btn_slides[0].classList.add("active");
}
 
// Show previous
function slideLeft() {
    reset();
    slides[current - 1].classList.add("active");
    btn_slides[current - 1].classList.add("active");
    current--;
}
 
// Show next
function slideRight() {
    reset();
    slides[current + 1].classList.add("active");
    btn_slides[current + 1].classList.add("active");
    current++;
}
 
// Left arrow click
arrowLeft.addEventListener("click", function () {
    if (current === 0) {
        current = slides.length;
    }
    slideLeft();
});
// Right arrow click
arrowRight.addEventListener("click", function () {
    if (current === slides.length - 1) {
        current = -1;
    }
    slideRight();
});
window.setInterval(() =>{
    if (current === slides.length - 1) {
        current = -1;
    }
    slideRight();  
}, 10000);
startSlide();

// btns icons
for (let i = 0; i < btn_slides.length; i++) {
    btn_slides[i].addEventListener("click", () =>{
        reset();
        current = i;
        btn_slides[current].classList.add("active");
        slides[current].classList.add("active");
    });
}