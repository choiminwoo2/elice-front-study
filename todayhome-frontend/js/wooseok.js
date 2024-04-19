
const slideInner = document.querySelector(".inner");
const maxContentLen = 10;

let currentIndex = 0;
function sliderEffect(){
    currentIndex++;

    slideInner.style.transition = "all 0.6s";
    slideInner.style.transform = "translateY(-"+48*currentIndex+"px)";

    if(currentIndex == maxContentLen){
        setTimeout(()=>{
            slideInner.style.transition = "0s";
            slideInner.style.transform = "translateY(0px)";
        },500)  
        currentIndex=0;
    }
}

setInterval(sliderEffect,3000);