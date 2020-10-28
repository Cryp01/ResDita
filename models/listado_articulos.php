<?php

require './conexion.php';








//----------DEPARTAMENTO DE ENTRADAS 
$carne = $pdo->query("SELECT top 5 rtrim(a.AR_CODIGO) as  codigo, a.AR_DESCRI,a.AR_ITBIS,a.AR_DESCU,a.AR_DETALLE, 
a.AR_PREDET,a.AL_CODIGO,
CASE
    WHEN isnull(pv_desc,0) = 0 and isnull(pv_precio,0) = 0 and isnull(PV_2X1,0) = 0 THEN 'N'
    ELSE isnull(a.AR_OFERTA,'N')
END AS AR_OFERTA, 
isnull(b.OF_CANTID ,0) as OF_CANTID  ,isnull(c.pV_2X1,0)   as PV_2X1,
isnull(c.pv_precio,0)  as PV_PRECIO  ,isnull(c.pv_desc ,0) as PV_DESC
,A.AR_REFER,a.AR_UNIDAD
FROM IVBDARTI as a
full join 
ivbdofer  as b on a.AR_CODIGO =b.AR_CODIGO
full join 
PVBDDIARTI as c on a.AR_CODIGO=c.AR_CODIGO and PV_DIA ='We'
AND GETDATE() BETWEEN pv_horaI AND pv_horaf
WHERE a.AR_control='S' and a.ar_activado=' ' and A.DE_CODIGO='B21' order by ar_cosfob asc");
$value = $carne->fetchAll(PDO::FETCH_ASSOC);
//----------DEPARTAMENTO DE ENSALADAS

$Embutidos = $pdo->query("SELECT top 5 rtrim(a.AR_CODIGO) as  codigo, a.AR_DESCRI,a.AR_ITBIS,a.AR_DESCU,a.AR_DETALLE, 
a.AR_PREDET,a.AL_CODIGO,
CASE
    WHEN isnull(pv_desc,0) = 0 and isnull(pv_precio,0) = 0 and isnull(PV_2X1,0) = 0 THEN 'N'
    ELSE isnull(a.AR_OFERTA,'N')
END AS AR_OFERTA, 
isnull(b.OF_CANTID ,0) as OF_CANTID  ,isnull(c.pV_2X1,0)   as PV_2X1,
isnull(c.pv_precio,0)  as PV_PRECIO  ,isnull(c.pv_desc ,0) as PV_DESC
,A.AR_REFER,a.AR_UNIDAD
FROM IVBDARTI as a
full join 
ivbdofer  as b on a.AR_CODIGO =b.AR_CODIGO
full join 
PVBDDIARTI as c on a.AR_CODIGO=c.AR_CODIGO and PV_DIA ='We'
AND GETDATE() BETWEEN pv_horaI AND pv_horaf
WHERE a.AR_control='S' and a.ar_activado=' ' and A.DE_CODIGO='B36' order by ar_cosfob asc");
$value2 = $Embutidos->fetchAll(PDO::FETCH_ASSOC);






//----------DEPARTAMENTO DE AVES 
$PESCADOS = $pdo->query("SELECT top 5 rtrim(a.AR_CODIGO) as  codigo, a.AR_DESCRI,a.AR_ITBIS,a.AR_DESCU,a.AR_DETALLE, 
a.AR_PREDET,a.AL_CODIGO,
CASE
    WHEN isnull(pv_desc,0) = 0 and isnull(pv_precio,0) = 0 and isnull(PV_2X1,0) = 0 THEN 'N'
    ELSE isnull(a.AR_OFERTA,'N')
END AS AR_OFERTA, 
isnull(b.OF_CANTID ,0) as OF_CANTID  ,isnull(c.pV_2X1,0)   as PV_2X1,
isnull(c.pv_precio,0)  as PV_PRECIO  ,isnull(c.pv_desc ,0) as PV_DESC
,A.AR_REFER,a.AR_UNIDAD
FROM IVBDARTI as a
full join 
ivbdofer  as b on a.AR_CODIGO =b.AR_CODIGO
full join 
PVBDDIARTI as c on a.AR_CODIGO=c.AR_CODIGO and PV_DIA ='We'
AND GETDATE() BETWEEN pv_horaI AND pv_horaf
WHERE a.AR_control='S' and a.ar_activado=' ' and A.DE_CODIGO='B29' order by ar_cosfob asc");
$value3 = $PESCADOS->fetchAll(PDO::FETCH_ASSOC);







//----------DEPARTAMENTO DE CARNES
$SALSAS = $pdo->query("SELECT top 5 rtrim(a.AR_CODIGO) as  codigo, a.AR_DESCRI,a.AR_ITBIS,a.AR_DESCU,a.AR_DETALLE, 
a.AR_PREDET,a.AL_CODIGO,
CASE
    WHEN isnull(pv_desc,0) = 0 and isnull(pv_precio,0) = 0 and isnull(PV_2X1,0) = 0 THEN 'N'
    ELSE isnull(a.AR_OFERTA,'N')
END AS AR_OFERTA, 
isnull(b.OF_CANTID ,0) as OF_CANTID  ,isnull(c.pV_2X1,0)   as PV_2X1,
isnull(c.pv_precio,0)  as PV_PRECIO  ,isnull(c.pv_desc ,0) as PV_DESC
,A.AR_REFER,a.AR_UNIDAD
FROM IVBDARTI as a
full join 
ivbdofer  as b on a.AR_CODIGO =b.AR_CODIGO
full join 
PVBDDIARTI as c on a.AR_CODIGO=c.AR_CODIGO and PV_DIA ='We'
AND GETDATE() BETWEEN pv_horaI AND pv_horaf
WHERE a.AR_control='S' and a.ar_activado=' ' and A.DE_CODIGO='135' order by ar_cosfob asc");
$value4 = $SALSAS->fetchAll(PDO::FETCH_ASSOC);

//----------DEPARTAMENTO DE MARISCOS
$TRAGOS = $pdo->query("SELECT top 5 rtrim(a.AR_CODIGO) as  codigo, a.AR_DESCRI,a.AR_ITBIS,a.AR_DESCU,a.AR_DETALLE, 
a.AR_PREDET,a.AL_CODIGO,
CASE
    WHEN isnull(pv_desc,0) = 0 and isnull(pv_precio,0) = 0 and isnull(PV_2X1,0) = 0 THEN 'N'
    ELSE isnull(a.AR_OFERTA,'N')
END AS AR_OFERTA, 
isnull(b.OF_CANTID ,0) as OF_CANTID  ,isnull(c.pV_2X1,0)   as PV_2X1,
isnull(c.pv_precio,0)  as PV_PRECIO  ,isnull(c.pv_desc ,0) as PV_DESC
,A.AR_REFER,a.AR_UNIDAD
FROM IVBDARTI as a
full join 
ivbdofer  as b on a.AR_CODIGO =b.AR_CODIGO
full join 
PVBDDIARTI as c on a.AR_CODIGO=c.AR_CODIGO and PV_DIA ='We'
AND GETDATE() BETWEEN pv_horaI AND pv_horaf
WHERE a.AR_control='S' and a.ar_activado=' ' and A.DE_CODIGO='B30' order by ar_cosfob asc");
$value5 = $TRAGOS->fetchAll(PDO::FETCH_ASSOC);

//----------DEPARTAMENTO DE PASTAS
$COMBOS = $pdo->query("SELECT top 5 rtrim(a.AR_CODIGO) as  codigo, a.AR_DESCRI,a.AR_ITBIS,a.AR_DESCU,a.AR_DETALLE, 
a.AR_PREDET,a.AL_CODIGO,
CASE
    WHEN isnull(pv_desc,0) = 0 and isnull(pv_precio,0) = 0 and isnull(PV_2X1,0) = 0 THEN 'N'
    ELSE isnull(a.AR_OFERTA,'N')
END AS AR_OFERTA, 
isnull(b.OF_CANTID ,0) as OF_CANTID  ,isnull(c.pV_2X1,0)   as PV_2X1,
isnull(c.pv_precio,0)  as PV_PRECIO  ,isnull(c.pv_desc ,0) as PV_DESC
,A.AR_REFER,a.AR_UNIDAD
FROM IVBDARTI as a
full join 
ivbdofer  as b on a.AR_CODIGO =b.AR_CODIGO
full join 
PVBDDIARTI as c on a.AR_CODIGO=c.AR_CODIGO and PV_DIA ='We'
AND GETDATE() BETWEEN pv_horaI AND pv_horaf
WHERE a.AR_control='S' and a.ar_activado=' ' and A.DE_CODIGO='B49' order by ar_cosfob asc");
$value6 = $COMBOS->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(['entradas' => $value,'ensaladas' => $value2, 'aves' => $value3, 'carnes' => $value4,'mariscos' => $value5,'pastas' => $value6]);
?>


