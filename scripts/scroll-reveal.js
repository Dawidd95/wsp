function init() {
	var mobileViewport = window.matchMedia("screen and (max-width: 1023px)");
      
	if(mobileViewport.matches) {
	   	window.sr = ScrollReveal();   //deklaracja biblioteki
	    sr.reveal('.quotes__wrapper',{duration: 0});  //co chcemy animowac
	} else {
	    window.sr = ScrollReveal();   //deklaracja biblioteki
	    sr.reveal('.quotes__wrapper',{duration: 1000});  //co chcemy animowac
	}
}

document.addEventListener("DOMContentLoaded", init);