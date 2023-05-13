let x = document.getElementById("login");
let y = document.getElementById("signup");
let z = document.getElementById("elegir");

function login(){
    x.style.left = "0";
    y.style.left = "450px";
    z.style.left = "0";
}
function signup(){
    x.style.left = "-450px";
    y.style.left = "0";
    z.style.left = "120px";
}

//scroll
const carrousel= document.querySelector(".carrousel");

let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) =>{
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carrousel.scrollLeft;

}
const dragging = (e) =>{
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carrousel.scrollLeft = prevScrollLeft - positionDiff;

}
const dragStop = ()=>{
    isDragStart = false;
}
carrousel.addEventListener( "mousedown" ,dragStart);
carrousel.addEventListener( "touchstart" ,dragStart);

carrousel.addEventListener( "mousemove" ,dragging) ;
carrousel.addEventListener( "touchmove" ,dragging) ;

carrousel.addEventListener( "mouseup" ,dragStop) ;