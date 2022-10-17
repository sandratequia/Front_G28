function getMensajes(){
    $.ajax({
        url:"http://150.230.27.233:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            pintarReservaciones(respuesta);
            console.log(respuesta);
        }
    });
}




function getCliente_Mensajes(){
    $.ajax({
        url:"http://150.230.27.233:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
           console.log(respuesta);
            let $select = $("#select-client");
           $.each(respuesta, function(id, name){
            $select.append('<option value='+name.idClient+'>'+name.name+'</option>')
           })
        }
    });
}

function getRoom_Mensajes(){
    $.ajax({
        url:"http://150.230.27.233:8080/api/Room/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
           console.log(respuesta);
            let $select = $("#select-room");
           $.each(respuesta, function(id, name){
            $select.append('<option value='+name.id+'>'+name.name+'</option>')
           })
        }
    });
}

