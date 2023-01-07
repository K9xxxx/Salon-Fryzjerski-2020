let iconNav = document.querySelector(".nav-burger")
let iconClose = document.querySelector(".close-con-icon")
let offerDiv = document.querySelectorAll(".offer")


const tl=new TimelineMax();
const tlNavScene=new TimelineMax();
const tlInitial=new TimelineMax();
const tlOpacityOffer=new TimelineMax();


tlNavScene.to(".navigation", 0.3,{height:"70px"});
tlNavScene.to(".logo-container", 0.3,{height:"50px",width:"50px"},"-=0.3");
tlNavScene.to(".anchor-flex>a", 0.3,{fontSize:"15px"},"-=0.3");
tlNavScene.to(".call-con-fit a", 0.3,{fontSize:"15px"},"-=0.3");
tlNavScene.to(".call-con-anchor a", 0.3,{fontSize:"13px"},"-=0.3");

tlInitial.to(".quick-info h2",0,{opacity:0})
tlInitial.to(".quick-info p",0,{opacity:0})


$(document).ready(function(){
  tlInitial.to(".quick-info h2",0.5,{opacity:1, delay:0.4})
  tlInitial.to(".quick-info p",0.5,{opacity:1, delay:0.4})

  let controller=new ScrollMagic.Controller();

  $('.offer').each(function(){
    let offerLoop=new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook:0.90,
      reverse:false
    })
    .setClassToggle(this,'fade-in')
    .addTo(controller);
  });

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
