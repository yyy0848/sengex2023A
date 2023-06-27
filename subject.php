<?php

class Subject{

  public $data = array(1 => '科目１', 2 => '科目２', 3 => '科目３');

  public $title = 'Subject';

  public function getTitle($id)
  {
      return $this->data[$id];
  }
}

$sb = new Subject();

if($_GET["method"] === "getTitle") {
    echo json_encode($sb->title);
}
exit();
