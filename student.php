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
    $this->reviews = array_map([$this, 'getReviews'], $this->subjectIds);
    var_dump($this->reviews);
    $this->subjects = array_map([$this, 'getSubjects'], $this->subjectIds);
    var_dump($this->subjects);
  }

  public function getReviews($revId)
  {
    return new Review($revId);
  }

  public function getSubjects($subId)
  {
    return new Subject($subId);
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

$st = new Student();

if($_GET['method'] === "subjects") {
  echo json_encode($st->subjects);
} else {
  echo json_encode(array('error' => "unknown_method"));
}
exit();
?>