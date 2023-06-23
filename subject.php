<?php

class Subject{

  public $data = array(1 => '科目１', 2 => '科目２', 3 => '科目３');

  public function getTitle($id)
  {
      return $this->data[$id];
  }
}

