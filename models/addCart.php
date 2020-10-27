<?php
    

    $guarnicion = $_POST['guarnicion'];
    $ingrediente = $_POST['ingrediente'];
    $termino = $_POST['termino'];
    $cantidad = $_POST['cantidad'];
    $precio = $_POST['precio'];
    $name = $_POST['name'];



    $Datos = [
    
      
        'guarnicion'  => $guarnicion,
        'ingrediente' =>  $ingrediente,
        'termino' => $termino ,
        'cantidad ' =>  $cantidad,
        'precio' =>  $precio,
        'name'  =>  $name
     


    ];


echo json_encode($Datos);
?>