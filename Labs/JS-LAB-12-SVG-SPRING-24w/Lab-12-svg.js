//LAB 12 - SVG OUTDOOR SCENE
window.onload = function() {
    var sun = document.getElementById("sun");
    var sky = document.getElementById("sky");
    var grass = document.getElementById("grass");
    var window = document.getElementById("window");
    var smoke = document.getElementById("smoke");
    var smokeTwo = document.getElementById("smoke-two");
    var smokeThree = document.getElementById("smoke-three");

    sun.addEventListener("click", function(){
        sun.style.fill= "#BCBCBC";
        sky.style.fill= "#00364D";
        window.style.fill= "yellow";
        grass.style.fill="#0F4A00";
        console.log("it's night now");
        smoke.style.display = "block";
        smokeTwo.style.display = "block";
        smokeThree.style.display = "block";
        smoke.classList.add("smoke-animated-one");
        smokeTwo.classList.add("smoke-animated-two");
        smokeThree.classList.add("smoke-animated-three");
    });
    
}