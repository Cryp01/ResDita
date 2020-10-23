<?php

require './conexion.php';
//----------DEPARTAMENTO DE ENTRADAS 
$carne = $pdo->query("SELECT TOP 5 rtrim(A.AR_CODIGO) as codigo,A.AR_DESCRI,A.AR_FOTO,A.AR_DESCOR,A.AR_PREDET,AR_SELECT,AR_DETALLE FROM IVBDARTI A
WHERE A.DE_CODIGO='01'  AND A.AR_control='S' and a.ar_activado=' ' 
ORDER BY A.ar_cosfob asc");
$value = $carne->fetchAll(PDO::FETCH_ASSOC);
//----------DEPARTAMENTO DE ENSALADAS

$Embutidos = $pdo->query("SELECT TOP 5 rtrim(A.AR_CODIGO) as codigo,A.AR_DESCRI,A.AR_FOTO,A.AR_DESCOR,A.AR_PREDET,AR_SELECT,AR_DETALLE FROM IVBDARTI A
WHERE A.DE_CODIGO='04' AND A.AR_control='S' and a.ar_activado=' ' 
ORDER BY A.ar_cosfob asc");
$value2 = $Embutidos->fetchAll(PDO::FETCH_ASSOC);

//----------DEPARTAMENTO DE AVES 
$PESCADOS = $pdo->query("SELECT TOP 5 rtrim(A.AR_CODIGO) as codigo,A.AR_DESCRI,A.AR_FOTO,A.AR_DESCOR,A.AR_PREDET,AR_SELECT,AR_DETALLE FROM IVBDARTI A
WHERE A.DE_CODIGO='05' AND A.AR_control='S' and a.ar_activado=' ' 
ORDER BY A.ar_cosfob asc");
$value3 = $PESCADOS->fetchAll(PDO::FETCH_ASSOC);

//----------DEPARTAMENTO DE CARNES
$SALSAS = $pdo->query("SELECT TOP 5 rtrim(A.AR_CODIGO) as codigo,A.AR_DESCRI,A.AR_FOTO,A.AR_DESCOR,A.AR_PREDET,AR_SELECT,AR_DETALLE FROM IVBDARTI A
WHERE A.DE_CODIGO='06' AND A.AR_control='S' and a.ar_activado=' ' 
ORDER BY A.ar_cosfob asc");
$value4 = $SALSAS->fetchAll(PDO::FETCH_ASSOC);

//----------DEPARTAMENTO DE MARISCOS
$TRAGOS = $pdo->query("SELECT TOP 5 rtrim(A.AR_CODIGO) as codigo,A.AR_DESCRI,A.AR_FOTO,A.AR_DESCOR,A.AR_PREDET,AR_SELECT,AR_DETALLE FROM IVBDARTI A
WHERE A.DE_CODIGO='07' AND A.AR_control='S' and a.ar_activado=' ' 
ORDER BY A.ar_cosfob asc");
$value5 = $TRAGOS->fetchAll(PDO::FETCH_ASSOC);

//----------DEPARTAMENTO DE PASTAS
$COMBOS = $pdo->query("SELECT TOP 5 rtrim(A.AR_CODIGO) as codigo,A.AR_DESCRI,A.AR_FOTO,A.AR_DESCOR,A.AR_PREDET,AR_SELECT,AR_DETALLE FROM IVBDARTI A
WHERE A.DE_CODIGO='08' AND A.AR_control='S' and a.ar_activado=' ' 
ORDER BY A.ar_cosfob asc");
$value6 = $COMBOS->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(['entradas' => $value,'ensaladas' => $value2, 'aves' => $value3, 'carnes' => $value4,'mariscos' => $value5,'pastas' => $value6]);
?>


