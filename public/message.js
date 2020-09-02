function mostrar(){
    let filtro= document.getElementById("filtro").value;
    var tabla;
    console.log(filtro)
    fetch('http://localhost:3000/message?user='+filtro)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        for (data of myJson.body){
            tabla+='<tr><td>'+data._id+'</td><td>'+data.user+'</td><td>'+data.message+'</td><td>'+data.date+'</td></tr>';
        }
        $('#tbody').html(tabla);
    });
}