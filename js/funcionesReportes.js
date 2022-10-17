function getStatus(){
    $.ajax({
        url:"http://150.230.27.233:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            pintarStatus(respuesta);
        }
    });

}

function pintarStatus(respuesta){
    let myTable="<table>";
        myTable+="<tr>";
        myTable+="<td>"+"Reservas Completas: "+"</td>";
        myTable+="<td>"+respuesta.completed+"</td>";
        myTable+="<td>"+" - Reservas Canceladas: "+"</td>";
        myTable+="<td>"+respuesta.cancelled+"</td>";
        myTable+="</tr>";
    
    myTable+="</table>";
    $("#resultado1").html(myTable);

}

function getFechas(startDate,devolutionDate){
    $.ajax({
        url:"http://150.230.27.233:8080/api/Reservation/"+startDate+"/"+devolutionDate,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            pintarFechas(respuesta);
        }
    });
}
function pintarFechas(respuesta){
    let myTable="<table>";
        myTable+="<tr>";
        myTable+="<td>"+"Reservas Completas: "+"</td>";
        myTable+="<td>"+respuesta.idReservation+"</td>";
        myTable+="</tr>";
    
    myTable+="</table>";
    $("#resultado2").html(myTable);

}

function getClientes(){
    $.ajax({
        url:"http://150.230.27.233:8080/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            pintarClients(respuesta);
        }
    });
}
function pintarClients(respuesta){
    let myTable="<table>";
        myTable+="<tr>";
        myTable+="<td>"+"Cuenta Clientes: "+"</td>";
        myTable+="<td>"+respuesta.idClient+"</td>";
        
        myTable+="</tr>";
    
    myTable+="</table>";
    $("#resultado3").html(myTable);

}