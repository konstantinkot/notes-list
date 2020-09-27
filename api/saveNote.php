<?php

$text = $_POST["text"];
$notes = $_POST["notes"];

// открываем файл, если файл не существует,
//делается попытка создать его
array_push($notes, [$text]);

$fp = fopen("notes.json", "w"); 
// записываем в файл текст
fwrite($fp, $notes);
 
// закрываем
fclose($fp);
?>