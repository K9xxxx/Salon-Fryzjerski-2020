let iconNav = document.querySelector(".nav-burger")
let iconClose = document.querySelector(".close-con-icon")

let infoContainerHlp = document.querySelectorAll(".info-container-main .container-hlp")
let containerOffImg = document.querySelectorAll(".info-container-main .container-hlp .container-off img")
let containerOffP = document.querySelectorAll(".info-container-main .container-hlp .container-off p")
let infoContainerOn = document.querySelectorAll(".info-container-main .container-on")
let containerOnImg = document.querySelectorAll(".info-container-main .container-on img")
let containerOnP = document.querySelectorAll(".info-container-main .container-on p")


const tl=new TimelineMax();
const tlNavScene=new TimelineMax();
const tlInitial=new TimelineMax();

tlInitial.to(containerOnImg,0,{opacity:0})
tlInitial.to(containerOnP,0,{opacity:0})

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


infoContainerHlp[0].addEventListener('click',()=>{
  const tl=new TimelineMax();
  tl.to(containerOffImg[0],0.3,{opacity:0,x:10})
  tl.to(containerOffP[0],0.3,{opacity:0,x:10},"-=0.3")
  tl.to(infoContainerOn[0],0.3,{left:'0'},"-=0.3")
  tl.to(containerOnImg[0],0.3,{opacity:1},"-=0.2")
  tl.to(containerOnImg[1],0.3,{opacity:1},"-=0.2")
  tl.to(containerOnP[0],0.3,{opacity:1},"-=0.2")
  tl.to(containerOnP[1],0.3,{opacity:1},"-=0.2")
})
infoContainerOn[0].addEventListener('click',()=>{
  const tl=new TimelineMax();
  tl.to(containerOnImg[0],0.3,{opacity:0})
  tl.to(containerOnP[0],0.3,{opacity:0},"-=0.3")
  tl.to(containerOnImg[1],0.3,{opacity:0},"-=0.3")
  tl.to(containerOnP[1],0.3,{opacity:0},"-=0.3")
  tl.to(infoContainerOn[0],0.3,{left:'-100%'},"-=0.3")
  tl.to(containerOffImg[0],0.3,{opacity:1,x:0},"-=0.3")
  tl.to(containerOffP[0],0.3,{opacity:1,x:0},"-=0.3")
  
})


infoContainerHlp[1].addEventListener('click',()=>{
  const tl=new TimelineMax();
  tl.to(containerOffImg[1],0.3,{opacity:0,y:10})
  tl.to(containerOffP[1],0.3,{opacity:0,y:10},"-=0.3")
  tl.to(infoContainerOn[1],0.3,{top:'0'},"-=0.3")
  tl.to(infoContainerOn[1],0.3,{left:'0'},"-=0.3")
  tl.to(infoContainerOn[1],0.3,{right:'0'},"-=0.3")
  tl.to(containerOnImg[2],0.3,{opacity:1},"-=0.2")
  tl.to(containerOnP[2],0.3,{opacity:1},"-=0.2")
})
infoContainerOn[1].addEventListener('click',()=>{
  const tl=new TimelineMax();
  tl.to(containerOnImg[2],0.3,{opacity:0})
  tl.to(containerOnP[2],0.3,{opacity:0},"-=0.3")
  tl.to(infoContainerOn[1],0.3,{top:'-100%'},"-=0.3")
  tl.to(containerOffImg[1],0.3,{opacity:1,y:0},"-=0.2")
  tl.to(containerOffP[1],0.3,{opacity:1,y:0},"-=0.3")
})


infoContainerHlp[2].addEventListener('click',()=>{
  const tl=new TimelineMax();
  tl.to(containerOffImg[2],0.3,{opacity:0,x:-10})
  tl.to(containerOffP[2],0.3,{opacity:0,x:-10},"-=0.3")
  tl.to(infoContainerOn[2],0.3,{left:'0'},"-=0.2")
  tl.to(containerOnImg[3],0.3,{opacity:1},"-=0.2")
  tl.to(containerOnP[3],0.3,{opacity:1},"-=0.2")
})
infoContainerOn[2].addEventListener('click',()=>{
  const tl=new TimelineMax();
  tl.to(containerOnImg[3],0.3,{opacity:0})
  tl.to(containerOnP[3],0.3,{opacity:0},"-=0.3")
  tl.to(infoContainerOn[2],0.3,{left:'100%'},"-=0.3")
  tl.to(containerOffImg[2],0.3,{opacity:1,x:0},"-=0.2")
  tl.to(containerOffP[2],0.3,{opacity:1,x:0},"-=0.3")
})

iconNav.addEventListener('click',()=>{
  tl.to('.navigation-mobile-active',0.3,{right:0});
})
iconClose.addEventListener('click',()=>{
  tl.to('.navigation-mobile-active',0.3,{right:"-100%"});
})

///////////////////











const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});
//wyjasnienie czym jest error i jak ma działąc
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

// czym jest sukces i co ma sie dziac 
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

//sprawdzanie zapisania poprawnosci maila
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();


    //sprawdzanie danych i przypisywanie im odpowienich wartosci - sukces albo error
    if(nameValue === '') {
        setError(name, 'Prosze podać Imie');
    } else {
        setSuccess(name);
    }

    if(emailValue === '') {
        setError(email, 'Prosze podać E-mail');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Prosze podać prawidłowy E-mail');
    } else {
        setSuccess(email);
    }


    if(messageValue === '') {
        setError(message, 'Brak treści');
    } else {
        setSuccess(message);
    }

};
