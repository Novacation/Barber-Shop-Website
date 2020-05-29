var btn_burguer = document.getElementsByClassName("menu-burguer");

var mid_bar = document.getElementById("mid-bar");

var nav_bar = document.getElementById("nav-bar");

var burguer_container = document.getElementById("burguer-container").querySelectorAll("span");

var top_bar = burguer_container[0];
var bot_bar = burguer_container[2];

//Controle de opacidade da barra do meio do 'menu burger' e controle de posicionamento da ul de navegação.
btn_burguer[0].addEventListener("click", function (event) {
  console.log(mid_bar);

  if (mid_bar.classList.contains("mid-bar-op-1")) {
    
    top_bar.classList.remove("reset-transform");
    top_bar.classList.add("top-bar");

    bot_bar.classList.remove("reset-transform");
    bot_bar.classList.add("bot-bar");

    mid_bar.classList.remove("mid-bar-op-1");
    mid_bar.classList.add("mid-bar-op-0");

    nav_bar.classList.remove("ul-off");
    nav_bar.classList.add("ul-on");
  } else {

    top_bar.classList.add("reset-transform");
    top_bar.classList.remove("top-bar");

    bot_bar.classList.add("reset-transform");
    bot_bar.classList.remove("bot-bar");

    mid_bar.classList.remove("mid-bar-op-0");
    mid_bar.classList.add("mid-bar-op-1");

    nav_bar.classList.remove("ul-on");
    nav_bar.classList.add("ul-off");
  }

});


//hiddenButton.addEventListener("click", verifyInvi);
