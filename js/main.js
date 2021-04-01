const CarouselSlide = document.querySelector(".carousel-slide");
const CarouselImages = document.querySelectorAll(".carousel-slide img");

//buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//Counter
var counter = 1;
const size = CarouselImages[0].clientWidth;

CarouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

setInterval(function(){
    counter++;
    CarouselSlide.style.transition = 'transform 0.4s ease-in-out';
    CarouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
},5000);

nextBtn.addEventListener("click",function(){
    if(counter >= CarouselImages.length-1) return;
    CarouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    CarouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


prevBtn.addEventListener("click",function(){
    if(counter<=0) return;
    CarouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    CarouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

CarouselSlide.addEventListener("transitionend",function(){
    if(CarouselImages[counter].id == "lastClone"){
        CarouselSlide.style.transition = 'none';
        counter = CarouselImages.length-2;
        CarouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    else if(CarouselImages[counter].id == "firstClone"){
        CarouselSlide.style.transition = 'none';
        counter = CarouselImages.length-counter;
        CarouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})