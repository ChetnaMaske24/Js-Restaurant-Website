let slides = document.querySelectorAll(".slide");
console.log(slides);
let count = 0;

slides.forEach(function(slide, index){
    slide.style.left=`${index*100}%`;
})



function slider(){
    slides.forEach(function(curVal){
        curVal.style.transform = `translateX(-${count*100}%)`;
        console.log(curVal);
    }) 
}

setInterval(function(){
    count++;
    if(count == slides.length){
        count=0;
     }
    
    slider();
},2000)



