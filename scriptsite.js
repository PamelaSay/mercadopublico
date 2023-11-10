const btnMobile=document.getElementById("btn_mobile");

function toggleMenu(){
  const navbar=document.getElementById("navbar");
  nav.classList.toggleMenu("active");
}

btnMobile.addEventListener("click, togglerMenu")




function menuShow(){
  let menumobile = document.querySelector(".mobile_menu");
  if(menumobile.classList.contains("open")){
    menumobile.classList.remove("open");
    document.querySelector(".icone").src="iconemenu2.png";
  }else{
    menuMobile.classList.add("open");
    document.querySelector(".icon").src="iconemenu2.png";
    
  }
}
