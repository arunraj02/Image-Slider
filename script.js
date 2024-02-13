let slidesCount = 0;
showSlides(slidesCount);

let previousBtn = document.querySelector(".pre-btn");
previousBtn.addEventListener("click",function(){
    showSlides((slidesCount -= 1));  //updating slidescount
});

let nextBtn = document.querySelector(".next-btn");
nextBtn.addEventListener("click",function(){
    showSlides((slidesCount += 1)); //updating slidescount
});

// n(index) = parameter
function showSlides(n){
    let sliders = document.querySelectorAll(".slider-content");
    console.log(sliders.length);

    if (n >= sliders.length){
        slidesCount = 0;
    } else if(n < 0){
        slidesCount = sliders.length -1
    }   
    
    for (i = 0; i<sliders.length; i++){
        sliders[i].style.display = "none";
    }

    console.log(slidesCount)
    sliders[slidesCount].style.display = "block";
}


//custom attribute method for dots click function
// s1: to get all span elements
let dots = document.querySelectorAll(".dot")
console.log(dots);
//s2: iterate span elements and convert it into clickable navigation
dots.forEach(function(ele){
    ele.addEventListener("click", function(e){
        //to get attribute of span element
        let value = e.target.getAttribute("data-slide-count");
        console.log(value);
        dotSlide(value);
    })
})

function dotSlide(n){
    let sliders = document.querySelectorAll(".slider-content");
    
    for (i = 0; i<sliders.length; i++){
        sliders[i].style.display = "none";
    }

    console.log(n)
    sliders[n-1].style.display = "block";
}

//Autoplay 
const container = document.querySelector("#carousel-container");
let currentIndex = 0;
const slides = document.querySelectorAll(".slider-content");
const totalSlides = slides.length;

function nextSlide(){
    slides[currentIndex].style.display = "none";
    currentIndex = (currentIndex +1) % totalSlides;
    slides[currentIndex].style.display = "block";
}

setInterval(nextSlide,3000);