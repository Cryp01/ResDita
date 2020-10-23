<?php 
require 'conexion.php';

//---INSERT INTO IVBDINGREARTI VALUES ('B1152 ','20') --ingredientes 
//--INSERT INTO IVBDARTITERMINOS VALUES ('1000594','') --termino
//--INSERT INTO PVBDGUARNI VALUES ('B1154 ','01','AROS DE CEBOLLA','1')--GUARNICIONES 

$articulo = $_POST['arcodigo'];

$guarniciones = $pdo->query("SELECT * FROM PVBDGUARNI  where ar_codigo='".$articulo."'");
$value  = $guarniciones->fetchAll(PDO::FETCH_ASSOC);
$contaguarniciones = $guarniciones->rowCount();


$ingredientes = $pdo->query("SELECT A.AR_CODIGO,A.IN_CODIGO,B.IN_DESCRI 
FROM IVBDINGREARTI A INNER JOIN PVBDINGRE B ON A.IN_codigo=B.In_Codigo
 WHERE A.AR_CODIGO='".$articulo."'");
$value2  = $ingredientes->fetchAll(PDO::FETCH_ASSOC);
$containgredientes = $ingredientes->rowCount();


$termino = $pdo->query("SELECT A.AR_CODIGO,A.TE_CODIGO,B.TE_DESCRI 
FROM IVBDARTITERMINOS A 
INNER JOIN IVBDTERMINOS B ON A.TE_CODIGO=B.TE_CODIGO
WHERE A.AR_CODIGO='".$articulo."'");
$value3  = $termino->fetchAll(PDO::FETCH_ASSOC);
$contatermino = $termino->rowCount();



if($contaguarniciones != 0 || $containgredientes || 0 && $contatermino || 0)
{
    echo json_encode(['guarniciones' => $value,'ingredientes' => $value2,'termino' => $value3]);
}




?>

