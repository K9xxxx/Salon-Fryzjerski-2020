let iconNav = document.querySelector(".nav-burger")
let iconClose = document.querySelector(".close-con-icon")


const tl=new TimelineMax();
const tlNavScene=new TimelineMax();
const tlInitial=new TimelineMax();


tlNavScene.to(".navigation", 0.3,{height:"70px"});
tlNavScene.to(".logo-container", 0.3,{height:"50px",width:"50px"},"-=0.3");
tlNavScene.to(".anchor-flex>a", 0.3,{fontSize:"15px"},"-=0.3");
tlNavScene.to(".call-con-fit a", 0.3,{fontSize:"15px"},"-=0.3");
tlNavScene.to(".call-con-anchor a", 0.3,{fontSize:"13px"},"-=0.3");


$(document).ready(function(){
  let controller=new ScrollMagic.Controller();

  let navScene=new ScrollMagic.Scene({
    triggerHook:0,
    offset:150,
    reverse:true
  })
  .setTween(tlNavScene)
  .addTo(controller);
})


iconNav.addEventListener('click',()=>{
  tl.to('.navigation-mobile-active',0.3,{right:0});
})
iconClose.addEventListener('click',()=>{
  tl.to('.navigation-mobile-active',0.3,{right:"-100%"});
})