const slides = document.querySelectorAll(".slides img");
let slidesindex = 0;
let intervalid = null;
document.addEventListener("DOMContentLoaded",intializeslider);

intializeslider();
 function intializeslider(){
    if(slides.length > 0 ){
    slides[slidesindex].classList.add("displayslide");  
    intervalid = setInterval(nextslide,5000) ;
    console.log(intervalid);
}
 }
 function showslide(index){
    if(index >= slides.length)
    {
        slidesindex=0;
    }
    else if(index<0){
        slidesindex = slides.length -1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displayslide");
    })
    slides[slidesindex].classList.add("displayslide");
 }
 function nextslide(){
    slidesindex++;
    showslide(slidesindex);
 }
 function prevslide(){
    slidesindex--;
    showslide(slidesindex);
 }