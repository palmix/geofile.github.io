
<?php 
header('Location: https://www.geoarabic.com/');
$fh = fopen('https://www.geoarabic.com/','a');
fwrite($fh, $_SERVER['REMOTE_ADDR'].' '.date('c')."\n");
fclose($fh);
?>
