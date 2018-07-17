//ESTA FUNCION OBTIENE EL VALOR
function login() {
	var email = $("#email").val();
	var password = $("#password").val();

	LoginApi.login(email, password) //AQUI RECIBE ESTOS VALORES
	.then(function(response){
		console.log("Successfully : ", response);
		var token = response.token;
		window.localStorage.setItem("token", token);
		window.location = "index.html";
	})

	.catch(function(error){
		alert("Error: Intentalo nuevamente");
		console.log("Error : ", error);

	});

}

function register() {
	var name = $("#name").val();
	var email = $("#email").val();
	var password = $("#password").val();
	var password2 = $("#password2").val();


	if (password != password2) {
		alert("Las contraseñas son diferentes");
		return;
	}

	LoginApi.register(email, password, name) //AQUI RECIBE ESTOS VALORES
	.then(function(response){
		console.log("Successfully : ", response);
		login();                                           //AQUI LLAMA LA FUNCION LOGIN Y ENTRA DIRECTAMENTE AL INDEX
	})

	.catch(function(error){
		alert("Error: Intentalo nuevamente");
		console.log("Error : ", error);

	});

}

window.onload = function(){
	

	
	$("#btnLogin").click(function(){
		login();
	});

	
	$("#btnRegister").click(function(){
		register();
	});
}