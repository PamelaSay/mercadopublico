
function menuShow(){
  let menuMobile= document.querySelector('.mobile_menu');
  if(menuMobile.classList.contaisn('open')){}
    menuMobile.classList.remove('open');
    document.querySelector('icon').src = "iconemenu2.png'";
  }else{
    menuMobile.classList.add("open");
    document.querySelector('icon').src = "iconemenu2.png'";
}
}



