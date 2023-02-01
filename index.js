

var numberofdrums= document.querySelectorAll("button").length;
for(var i=0;i<numberofdrums;i++){
document.querySelectorAll("button")[i].addEventListener("click", function(){
    
    this.stl
    var btn=this.innerHTML;
    makesound(btn);
    animate(btn);
}
)}



document.addEventListener("keypress", function(event){
    makesound(event.key);
    animate(event.key);
    
})
    
function makesound(key){

    switch(key){
        case "w":
            var t1 = new Audio("sounds/tom-1.mp3");
            t1.play();
            
            break;
        case "a":
            var t2 = new Audio("sounds/tom-2.mp3");t2.play();
            break;
        case "s":
            var t3 = new Audio("sounds/tom-3.mp3");t3.play();
            break;
        case "d":
            var t4 = new Audio("sounds/tom-4.mp3");t4.play();
            break;
        case "j":
            var t5 = new Audio("sounds/tom-5.mp3");t5.play();
            break;
        case "k":
            var t6 = new Audio("sounds/tom-6.mp3");t6.play();
            break;
        case "l":
            var t7 = new Audio("sounds/tom-7.mp3");t7.play();
            break;
    }
    
}
function animate(currentkey){

    var activekey= document.querySelector("."+currentkey);
    activekey.classList.add("pressed");
    setTimeout(function(){
        activekey.classList.remove("pressed");
    },200);
}