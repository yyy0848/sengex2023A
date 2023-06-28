<?php
header('content-type: application/json; charset=UTF-8');
class Subject{

  public $data = array(1 => '科目１', 2 => '科目２', 3 => '科目３');

  public $title = array("Subject");

  public function getTitle($id)
  {
      return $this->data[$id];
  }
}

$sb = new Subject();

print_r($sb->title);
if(isset($_GET['method'])) {
    if ($_GET['method'] === "getTitle") {
        echo json_encode($sb->title);
        print_r($sb->title);
    }else {
      echo json_encode(array('error'=>"unknown_method"));
    }
}
print_r($sb->title);
exit();
