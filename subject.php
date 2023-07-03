<?php

class Subject{
  
  public function getTitle($id)
  {
    $title = $this->getDummyData($id);
    return $title;
  
  }

  private function getDummyData($id){
    $data = array(1 => 'インターネット技術', 2 => '情報システム基盤技術', 3 => 'ウェブデザイン演習', 4 => 'プログラミング言語', 5 => 'HCIデザイン',);
    return $data[$id];
  }
}