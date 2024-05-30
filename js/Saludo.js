function Fecha(){
	var var_saludo;
	var hora = new Date().getHours();
	

	if ( hora <= 6) {
		var_saludo="¡Hola de madrugada! - Good early morning.!";


	}else if ( hora <= 12){
		var_saludo="¡Buenos días! - Good morning!";

	}else if ( hora <= 19){
		var_saludo="¡Buenas tardes! - Good afternoon!"
	}
	else{
		var_saludo ="¡Buenas noches! - Good night!";
	
	}

	document.getElementById("Saludo").innerHTML=var_saludo;





}