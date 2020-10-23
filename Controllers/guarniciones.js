function articulo(codigo)
{

    $.ajax({

     type:"post",
     url:"../models/guarniciones.php",
     data: "arcodigo=" + codigo,
     success:function(e)
     {
         console.log(e);

     } 


    });
}

