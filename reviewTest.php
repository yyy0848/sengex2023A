<?php
require "review.php";

function console_log($data){
  echo json_encode($data);
}

//getText
$id = 0;
$rev = new Review($id);

$revText = $rev->getText();
console_log("getText(): ");
console_log($revText == "");
console_log(", ");


//setText
$id = 0;
$rev = new Review($id);
$text = "test";

$rev->setText($text);
console_log("setText(): ");
console_log($rev->getText() == "test");

