<?php

require './conexion.php';

$select = $pdo->query("SELECT A.AR_CODIGO,A.AR_DESCRI,A.AR_FOTO,A.AR_DESCOR,A.AR_PREDET,AR_SELECT,AR_DETALLE FROM IVBDARTI A
WHERE A.DE_CODIGO IN('135','B29','B28') AND A.AR_control='S' and a.ar_activado=' ' 
ORDER BY A.ar_cosfob asc");

$value = $select->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($value);
?>


