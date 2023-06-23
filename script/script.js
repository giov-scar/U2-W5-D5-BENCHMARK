let className = "white";
let classButton = 'green'
let scrollTrigger = 360;

window.onscroll = function() {
  if (window.scrollY >= scrollTrigger ) {
    document.getElementsByTagName("nav")[0].classList.add(className)
    document.getElementsByTagName("button")[0].classList.add(classButton);
  } else {
    document.getElementsByTagName("nav")[0].classList.remove(className);
    document.getElementsByTagName("button")[0].classList.remove(classButton);
  }
};



