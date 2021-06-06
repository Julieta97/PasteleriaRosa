//Menú fijo 
let windowHeight = $(window).height();
let barraAltura = $('.contenedor').innerHeight();

//console.log(barraAltura);
//console.log(windowHeight);
$(window).scroll(function() {
	let scroll = $(window).scrollTop();
	if(scroll > windowHeight) {
		console.log("Pasaste la altura");
	} else {
		console.log("aun no");
	}


	//console.log(scroll);
});