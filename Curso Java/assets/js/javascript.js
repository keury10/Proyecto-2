var storage = window.localStorage;
var Token = storage.getItem("Token");

$.ajax({
    method: 'GET',
    url:"http://localhost:8080/users",
    headers: {'Authorization' : 'Bearer '+Token},
    success: function(data){
        var table = $("#tabla_usuario");
        data.forEach(usuario => {
            var tr = document.createElement("tr");
            var tdId = document.createElement("td");
            var tdName = document.createElement("td");
            var tdEmail = document.createElement("td");

            tdId.textContent = usuario.id;
            tdName.textContent = usuario.name;
            tdEmail.textContent = usuario.email;
            
            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdEmail);

            table.append(tr);
        });
    },
    error: function(error){
        console.log(error);
    }
});