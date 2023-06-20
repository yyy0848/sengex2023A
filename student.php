<?php
header('content-type: application/json; charset=utf-8');

class Student {
  public $subjects = array("科目1", "科目2", "科目3");
  public function vote() {
    return array('vote' => "dummy_string");
  }
}

$st = new Student();

if($_GET['method'] === "subjects"){
  echo json_encode($st->subjects);
}else if($_GET['method'] === "vote"){
  echo json_encode($st->vote());
}else{
  echo json_encode(array('error'=>"unknown_method"));
}
exit();
?>
