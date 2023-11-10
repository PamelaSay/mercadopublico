const btnMobile = document.getElementById("btn_mobile");

function toggleMenu(event){
  if(event.type ==="touchstart") event.preventDefault();
  const navbar = document.getElementById("navbar");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click, togglerMenu");
btnMobile.addEventListener("touchstart", togglerMenu");

  }
}
