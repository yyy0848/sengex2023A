<?php
require "subject.php";

function console_log($data){
  echo json_encode($data);
}

//getText
$subject = new Subject();
$expectedResult = array(
  '','インターネット技術', '情報システム基盤技術', 'ウェブデザイン演習', 'プログラミング言語', 'HCIデザイン'
);

console_log("getTitle(): ");
  $idList = array(1, 2, 3, 4,5);
foreach ($idList as &$id) {
  $title = $subject->getTitle($id);
  if($title != $expectedResult[$id]){
    console_log(false);
    exit();
  }
}
console_log(true);


