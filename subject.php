<?php
header('content-type: application/json; charset=UTF-8');
class Subject{
  public $data = array(1 => '科目１', 2 => '科目２', 3 => '科目３');
  public $title = "Subject";

  public function getTitle($id) {
      return $this->data[$id];
  }
}

$sb = new Subject();

if(isset($_GET['method'])) {
    if ($_GET['method'] === "getTitle") {
        echo json_encode($sb->getTitle($_GET['id']));
    /*
    }else if($_GET['method'] === "subject") {
        echo json_encode($sb->data);
    */
    }else {
      echo json_encode(array('error'=>"unknown_method"));
    }
}
exit();
