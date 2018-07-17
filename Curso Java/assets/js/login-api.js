//ESTA FUNCION OBTIENE EL VALOR
var LoginApi = (function () {
	//TODO: BASE_URL
	//http://192.168.200.63:8080
	var baseUrl = "http://192.168.200.108:8080";
	var PATH_LOGIN = "/login";
	var PATH_REGISTER = "/register";
	var PATH_LOGOUT = "/logout";

	return{

		login: function(email, password){
			return new Promise(function(resolve, reject){

			//CONSTRUIR JSON

			var ld = {
				email: email,
				password: password

			}
			
			$.ajax({
				method: 'POST',
				data: JSON.stringify(ld),
				url: baseUrl+PATH_LOGIN,
				success: function (data) {
					resolve(data);
				},
				error: function(error){
					reject(error);
				}
			});

		});
		},


		register: function(email, password, name){
			return new Promise(function(resolve, reject){

			//CONSTRUIR JSON

			var Ld = {
				email: email,
				password: password,
				name: name
			}

			//prueba
			//resolve(ld);


			$.ajax({
				method: 'POST',
				data: JSON.stringify(Ld),
				url: baseUrl+PATH_REGISTER,
				success: function (data) {
					resolve(data);
				},
				error: function(error){
					reject(error);
				}
			});
		});
		},


		logout: function(token){
			return new Promise(function(resolve, reject){

			//CONSTRUIR JSON
			
			$.ajax({
				method: 'DELETE',
				headers: {'Authorization' : 'Bearer '+token},
				url: baseUrl+PATH_LOGOUT,
				success: function (data) {
					resolve(data);
				},
				error: function(error){
					reject(error);
				}
			});

		});
		}

	}




})();














