<?php

$notes = $_POST["notes"];

$fp = fopen("notes.json", "w");
 
// записываем в файл текст
fwrite($fp, $notes);
 
// закрываем
fclose($fp);
?>