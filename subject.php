<?php

class Subject{
  private $id;
  private $title;


  function __construct($id)
  {
    $this->id = $id;
    $this->title = $this->getDummyData($id);
  }
  
  public function getTitle($id)
  {
      return $this->title;
  }

  private function getDummyData($id){
    $data = array(1 => 'インターネット技術', 2 => '情報システム基盤技術', 3 => 'ウェブデザイン演習', 4 => 'プログラミング言語', 5 => 'HCIデザイン',);
    return $data[$id];
  }
}