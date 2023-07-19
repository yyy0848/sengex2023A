<?php
header('content-type: application/json; charset=UTF-8');

class Subject
{
  public function getTitle($id)
  {
    $title = $this->getDummyData($id);
    return $title;
  }

  private function getDummyData($id)
  {
    $data = array(1 => 'インターネット技術', 2 => '情報システム基盤技術', 3 => 'ウェブデザイン演習', 4 => 'プログラミング言語', 5 => 'HCIデザイン');
    return $data[$id];
  }
}

$subject = new Subject();
if (isset($_GET["method"])) {
  if ($_GET['method'] === "getTitle") {
    echo json_encode($subject->getTitle($_GET["id"]));
  }
}
