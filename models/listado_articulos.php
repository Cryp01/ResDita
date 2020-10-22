<?php

require './conexion.php';

$select = $pdo->query("SELECT A.AR_CODIGO,A.AR_DESCRI,A.AR_FOTO,A.AR_DESCOR,A.AR_PREDET,AR_SELECT,AR_DETALLE FROM IVBDARTI A
WHERE A.DE_CODIGO='B24' AND A.AR_control='S' and a.ar_activado=' ' 
ORDER BY A.ar_cosfob asc");

$value = $select->fetchAll(PDO::FETCH_ASSOC);


?>

<div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             CARNES
            </button>
            </h5>
          </div>
      
          <?php 

foreach($value as $key => $fila):

?>
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
            <?= $fila['AR_DESCRI']; ?>
            </div>
          </div>
        </div>
        
    </div>

    <?php endforeach ?>