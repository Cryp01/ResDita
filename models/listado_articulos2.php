<?php

require './conexion.php';
//----------DEPARTAMENTO DE CARNE
$carne = $pdo->query("SELECT A.AR_CODIGO,A.AR_DESCRI,A.AR_FOTO,A.AR_DESCOR,A.AR_PREDET,AR_SELECT,AR_DETALLE FROM IVBDARTI A
WHERE A.DE_CODIGO IN('135','B29','B28') AND A.AR_control='S' and a.ar_activado=' ' 
ORDER BY A.ar_cosfob asc");
$value = $carne->fetchAll(PDO::FETCH_ASSOC);
//----------DEPARTAMENTO DE EMBUTIDOS

$Embutidos = $pdo->query("SELECT A.AR_CODIGO,A.AR_DESCRI,A.AR_FOTO,A.AR_DESCOR,A.AR_PREDET,AR_SELECT,AR_DETALLE FROM IVBDARTI A
WHERE A.DE_CODIGO='B31' AND A.AR_control='S' and a.ar_activado=' ' 
ORDER BY A.ar_cosfob asc");
$value2 = $Embutidos->fetchAll(PDO::FETCH_ASSOC);

//----------DEPARTAMENTO DE PESCADOS Y MARISCO
$PESCADOS = $pdo->query("SELECT A.AR_CODIGO,A.AR_DESCRI,A.AR_FOTO,A.AR_DESCOR,A.AR_PREDET,AR_SELECT,AR_DETALLE FROM IVBDARTI A
WHERE A.DE_CODIGO='B30' AND A.AR_control='S' and a.ar_activado=' ' 
ORDER BY A.ar_cosfob asc");
$value3 = $PESCADOS->fetchAll(PDO::FETCH_ASSOC);

//----------DEPARTAMENTO DE SALSAS
$SALSAS = $pdo->query("SELECT A.AR_CODIGO,A.AR_DESCRI,A.AR_FOTO,A.AR_DESCOR,A.AR_PREDET,AR_SELECT,AR_DETALLE FROM IVBDARTI A
WHERE A.DE_CODIGO='B36' AND A.AR_control='S' and a.ar_activado=' ' 
ORDER BY A.ar_cosfob asc");
$value4 = $SALSAS->fetchAll(PDO::FETCH_ASSOC);

//----------DEPARTAMENTO DE SALSAS
$TRAGOS = $pdo->query("SELECT A.AR_CODIGO,A.AR_DESCRI,A.AR_FOTO,A.AR_DESCOR,A.AR_PREDET,AR_SELECT,AR_DETALLE FROM IVBDARTI A
WHERE A.DE_CODIGO='B14' AND A.AR_control='S' and a.ar_activado=' ' 
ORDER BY A.ar_cosfob asc");
$value5 = $TRAGOS->fetchAll(PDO::FETCH_ASSOC);

//----------DEPARTAMENTO DE COMBOS
$COMBOS = $pdo->query("SELECT A.AR_CODIGO,A.AR_DESCRI,A.AR_FOTO,A.AR_DESCOR,A.AR_PREDET,AR_SELECT,AR_DETALLE FROM IVBDARTI A
WHERE A.DE_CODIGO='B48' AND A.AR_control='S' and a.ar_activado=' ' 
ORDER BY A.ar_cosfob asc");
$value6 = $COMBOS->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(['carne' => $value,'embutido' => $value2, 'pescados' => $value3, 'salsas' => $value4,'tragos' => $value5,'combos' => $value6]);
?>


