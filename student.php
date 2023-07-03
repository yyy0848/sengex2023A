<?php

require 'review.php';
require 'subject.php';

class Student
{
  private $studentNo = 1;
  private $subjectIds = array(1, 2, 3, 4, 5);
  private $reviews;
  public $subjects;

  function __construct()
  {
    $this->reviews = array_map([$this, 'getReview'], $this->subjectIds);
    $this->subjects = array_map([$this, 'getSubject'], $this->subjectIds);
  }

  public function getReview($revId)
  {
    return new Review($revId);
  }

  public function getSubject($subId)
  {
    return new Subject($subId);
  }

  public function subjects() {
    return $this->subjectIds;
  }

  public function getReviewText($id)
  {
    return $this->reviews[$id]->getText();
  }

  public function setReviewText($id, $text)
  {
    /* TODO: レビューテキストをsetする */
    $this->reviews[$id]->setText($text);
  }
}
/* 
$sbs = $st->subjects;
$json = json_encode($st->subjects);
print_r($sbs.''); 
echo $json;
*/




$st = new Student();

if($_GET['method'] === "subjects"){
  echo json_encode($st->subjects());
}else{
  echo json_encode(array('error'=>"unknown_method"));
} 
exit();
?>