let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let scrollBar = document.querySelector('.scroll-bar');

menu.addEventListener('click',() =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('nav-toggle');
});

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('nav-toggle');
  scrollIndicator();
}

function scrollIndicator(){

  let maxHeight = window.document.body.scrollHeight - window.innerHeight;
  let percentage = ((window.scrollY) / maxHeight) * 100;
  scrollBar.style.width = percentage + '%';

}

var mysong = document.getElementById("mysong");
var icon = document.getElementById("icon");

icon.onclick = function() {
    if(mysong.paused){
      mysong.play();
      icon.src = "/image/Pause.png";
    }else{
      mysong.pause(); 
      icon.src ="/image/Play.png";
    }
}
