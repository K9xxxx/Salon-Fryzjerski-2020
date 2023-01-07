let iconNav = document.querySelector(".nav-burger")
let iconClose = document.querySelector(".close-con-icon")
let icons=document.querySelectorAll(".icon-div")
let sectionFourP=document.querySelectorAll(".section-four p")
let ozdobaImg=document.querySelectorAll(".ozdobaImg")
let goldenPMob=document.querySelectorAll(".golden-p")
let goldenP=document.querySelectorAll(".contact-con-abs-main.ccMobile .golden-p")
let vBorderMob=document.querySelectorAll(".contact-con-abs-main.ccMobile .vertical-border")
let vBorder=document.querySelectorAll(".vertical-border")
let aboutUsInfoP=document.querySelectorAll(".about-us-info p")



const tl=new TimelineMax();
const tlIcons=new TimelineMax();
const tlNavScene=new TimelineMax();
const tlInitial=new TimelineMax();
const tlPos=new TimelineMax();
const tlMobCen=new TimelineMax();
let tlSwiper=new TimelineMax();


tlNavScene.to(".navigation", 0.3,{height:"70px"});
tlNavScene.to(".logo-container", 0.3,{height:"50px",width:"50px"},"-=0.3");
tlNavScene.to(".anchor-flex>a", 0.3,{fontSize:"15px"},"-=0.3");
tlNavScene.to(".call-con-fit a", 0.3,{fontSize:"15px"},"-=0.3");
tlNavScene.to(".call-con-anchor a", 0.3,{fontSize:"13px"},"-=0.3");

tlIcons.to(icons[0],.2,{opacity:1})
tlIcons.to(icons[1],.2,{opacity:1})
tlIcons.to(icons[2],.2,{opacity:1})
tlIcons.to(icons[3],.2,{opacity:1})
tlIcons.to(icons[4],.2,{opacity:1})

tlMobCen.to('.cennik-banner.px800 .cennik-for',.3,{opacity:1})
tlMobCen.to('.cennik-banner.px800 .cennik-square',.3,{opacity:1},"+=0.3")


tlInitial.to(".abs.text-container-1",0,{x:"-100%", opacity:0})
tlInitial.to(".abs.text-container-2",0,{x:"100px", opacity:0})
tlInitial.to(".abs.text-container-3",0,{opacity:0})
tlInitial.to(".abs.background-container",0,{rotate:"50deg"})
tlInitial.to(".img-container-after",0,{opacity:0})
tlInitial.to(".about-us-info p",0,{opacity:0})
tlInitial.to(".cennik-square p",0,{opacity:0})
tlInitial.to(".cennik-square a",0,{opacity:0})
tlInitial.to(".section-two h3",0,{opacity:0})
tlInitial.to(".section-two h2",0,{opacity:0})
tlInitial.to(".specjalizacje-main p:nth-child(1)",0,{opacity:0})
tlInitial.to(".specjalizacje-main p:nth-child(2)",0,{opacity:0})
tlInitial.to(".section-four h3",0,{opacity:0})
tlInitial.to(".section-four h2",0,{opacity:0})
tlInitial.to(".section-five h3",0,{opacity:0})
tlInitial.to(".section-five h2",0,{opacity:0})
tlInitial.to(".contact-con-rel-main h3",0,{opacity:0})
tlInitial.to(".salon-g-o",0,{opacity:0})
tlInitial.to(".logo-abs-div",0,{opacity:0})
tlInitial.to(".short-p article",0,{opacity:0})
tlInitial.to(".icon-div",0,{opacity:0})
tlInitial.to(sectionFourP[0],0,{opacity:0})
tlInitial.to(sectionFourP[1],0,{opacity:0})
tlInitial.to(ozdobaImg[0],0,{opacity:0})
tlInitial.to(ozdobaImg[1],0,{opacity:0})
tlInitial.to('.ig-button',0,{opacity:0})
tlInitial.to('.swiper.articles',0,{opacity:0})
tlInitial.to('.golden-p',0,{opacity:0})
tlInitial.to('.vertical-border',0,{opacity:0})
tlInitial.to('.short-p',0,{y:"100%"})
tlInitial.to('.cennik-banner.px800 .cennik-for',0,{opacity:0})
tlInitial.to('.cennik-banner.px800 .cennik-square',0,{opacity:0})
tlInitial.to('.cennik-banner.px800 .cennik-square p',0,{opacity:0})
tlInitial.to('.cennik-banner.px800 .cennik-square a',0,{opacity:0})

tlPos.to('.short-p',.3,{y:0})
tlPos.to('.short-p',.3,{y:0})
tlSwiper.to(".swiper.articles",.5,{opacity:1})

$(document).ready(function(){
  let controller=new ScrollMagic.Controller();

  const tlScene1=new TimelineMax();


  tlScene1.to(".abs.text-container-1",.6,{x:0,opacity:1,delay:0.2})
  tlScene1.to(".abs.text-container-2",.9,{x:0, opacity:1},"-=.2")
  tlScene1.to(".abs.text-container-3",.4,{opacity:1},"-=.4")
  tlScene1.to(".abs.background-container",3,{rotate:"90deg"},"-=1.3")
  tlScene1.to(".img-container-after",.7,{opacity:1},"-=2")



  let navScene=new ScrollMagic.Scene({
    triggerHook:0,
    offset:150,
    reverse:true

  })
  .setTween(tlNavScene)
  .addTo(controller);



  let sec1text1=new ScrollMagic.Scene({
    triggerElement:".section-two h3",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle('.section-two h3','sm-left')
  .addTo(controller);

  let sec1text2=new ScrollMagic.Scene({
    triggerElement:".section-two h2",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle('.section-two h2','sm-left')
  .addTo(controller);




  let sec3text=new ScrollMagic.Scene({
    triggerElement:".specjalizacje-main p:nth-child(1)",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle('.specjalizacje-main p:nth-child(1)','sm-top')
  .addTo(controller);
  let sec3text1=new ScrollMagic.Scene({
    triggerElement:".specjalizacje-main p:nth-child(2)",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle('.specjalizacje-main p:nth-child(2)','sm')
  .addTo(controller);






  
  let sec4text1=new ScrollMagic.Scene({
    triggerElement:".section-four h3",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle('.section-four h3','sm-right')
  .addTo(controller);

  let sec4text2=new ScrollMagic.Scene({
    triggerElement:".section-four h2",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle('.section-four h2','sm')
  .addTo(controller);







  let sec5text1=new ScrollMagic.Scene({
    triggerElement:".section-five h3",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle('.section-five h3','sm-top')
  .addTo(controller);

  let sec5text2=new ScrollMagic.Scene({
    triggerElement:".section-five h2",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle('.section-five h2','sm')
  .addTo(controller);






  let sec6text1=new ScrollMagic.Scene({
    triggerElement:".section-six",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle('.contact-con-rel-main h3','sm-left')
  .addTo(controller);






  let text1=new ScrollMagic.Scene({
    triggerElement:".about-us-info p",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle('.about-us-info p:nth-child(1), .about-us-info p:nth-child(2), .about-us-info p:nth-child(3), .about-us-info p:nth-child(4), .about-us-info p:nth-child(5)','sm')
  .addTo(controller);

  let text2=new ScrollMagic.Scene({
    triggerElement:".about-us-info p",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle('.about-us-info p:nth-child(6)','sm')
  .addTo(controller);


  let text3=new ScrollMagic.Scene({
    triggerElement:".about-us-info p",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle('.about-us-info p:nth-child(7)','sm')
  .addTo(controller);

  let text4=new ScrollMagic.Scene({
    triggerElement:".cennik-square p",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle('.cennik-square p','sm')
  .addTo(controller);

  let text5=new ScrollMagic.Scene({
    triggerElement:".cennik-square p",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle('.cennik-square a','sm')
  .addTo(controller);

  let text6=new ScrollMagic.Scene({
    triggerElement:".salon-g-o",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle('.salon-g-o','sm')
  .addTo(controller);
  
  let logo1=new ScrollMagic.Scene({
    triggerElement:".salon-g-o",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle('.logo-abs-div','sm')
  .addTo(controller);

  let text7=new ScrollMagic.Scene({
    triggerElement:".salon-g-o",
    triggerHook:0.8,
    offset:60,
    reverse:false
  })
  .setClassToggle('.short-p article','sm')
  .addTo(controller);









  let icon1=new ScrollMagic.Scene({
    triggerElement:".icon-div",
    triggerHook:0.8,
    reverse:false
  })
  .setTween(tlIcons)
  .addTo(controller);



  let text8=new ScrollMagic.Scene({
    triggerElement:sectionFourP[0],
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle(sectionFourP[0],'sm')
  .addTo(controller);

  let text9=new ScrollMagic.Scene({
    triggerElement:sectionFourP[1],
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle(sectionFourP[1],'sm')
  .addTo(controller);

  let Icon2=new ScrollMagic.Scene({
    triggerElement:sectionFourP[0],
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle(ozdobaImg[0],'sm')
  .addTo(controller);

  let Icon3=new ScrollMagic.Scene({
    triggerElement:sectionFourP[1],
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle(ozdobaImg[1],'sm')
  .addTo(controller);

  let text10=new ScrollMagic.Scene({
    triggerElement:".ig-button",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle(".ig-button",'sm')
  .addTo(controller);


  let text11=new ScrollMagic.Scene({
    triggerElement:".swiper.articles",
    triggerHook:0.8,
    reverse:false
  })
  .setTween(tlSwiper)
  .addTo(controller);













  let text12=new ScrollMagic.Scene({
    triggerElement:".section-six",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle(goldenP[0],'sm')
  .addTo(controller);

  let text13=new ScrollMagic.Scene({
    triggerElement: goldenP[1],
    triggerHook:0.9,
    reverse:false
  })
  .setClassToggle(goldenP[1],'sm')
  .addTo(controller);

  let text12Mob1=new ScrollMagic.Scene({
    triggerElement:".section-six",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle(goldenPMob[0],'sm')
  .addTo(controller);

  let text12Mob2=new ScrollMagic.Scene({
    triggerElement:goldenPMob[1],
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle(goldenPMob[1],'sm')
  .addTo(controller);

  let Border1=new ScrollMagic.Scene({
    triggerElement:".section-six",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle(vBorder[0],'sm')
  .addTo(controller);

  let Border2=new ScrollMagic.Scene({
    triggerElement:vBorder[1],
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle(vBorder[1],'sm')
  .addTo(controller);

  let Border1Mob1=new ScrollMagic.Scene({
    triggerElement:".section-six",
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle(vBorderMob[0],'sm')
  .addTo(controller);

  let Border1Mob2=new ScrollMagic.Scene({
    triggerElement:vBorderMob[1],
    triggerHook:0.8,
    reverse:false
  })
  .setClassToggle(vBorderMob[1],'sm')
  .addTo(controller);






  let fixText=new ScrollMagic.Scene({
    triggerElement:aboutUsInfoP[5],
    triggerHook:0.9,
    reverse:false
  })
  .setClassToggle(aboutUsInfoP[5],'sm')
  .addTo(controller);

  let fixText2=new ScrollMagic.Scene({
    triggerElement:aboutUsInfoP[6],
    triggerHook:0.9,
    reverse:false
  })
  .setClassToggle(aboutUsInfoP[6],'sm')
  .addTo(controller);

  let changePos1=new ScrollMagic.Scene({
    triggerElement:'.cennik-banner',
    triggerHook:0.9,
    duration:600,
    reverse:false
  })
  .setTween(tlPos)
  .addTo(controller);

  let mobcennik=new ScrollMagic.Scene({
    triggerElement:'.cennik-banner.px800 .cennik-for',
    triggerHook:0.8,
    reverse:false
  })
  .setTween(tlMobCen)
  .addTo(controller);

})






iconNav.addEventListener('click',()=>{
  tl.to('.navigation-mobile-active',0.3,{right:0});
})
iconClose.addEventListener('click',()=>{
  tl.to('.navigation-mobile-active',0.3,{right:"-100%"});
})



var swiper = new Swiper(".articles", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".galery-fe", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    clickable: true,
  },
});
var swiper = new Swiper(".galery-ma", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    clickable: true,
  },
});
