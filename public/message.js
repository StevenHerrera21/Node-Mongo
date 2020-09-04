function mostrar(){   
   $.ajax({
       url:'http://localhost:3000/user?',
       method: 'GET',
       success: function(res){  
           var js= res;
           var tabla;
           console.log(js)
           for (data of js.body){
            tabla+='<tr><td>'+data._id+'</td><td>'+data.user+'</td><td>'+data.name+'</td><td>'+data.lastname+'</td></tr>';
           }
           $('#tbody').html(tabla);
       }
   })
}