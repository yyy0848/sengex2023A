<?php
require "subject.php";
require "review.php";
class Student
{
  private $studentNo = 1;
  public $subjectIds = array(1, 2, 3, 4, 5);
  private $reviews;

  function __construct()
  {
    $this->reviews = array_map([$this, "getReview"], $this->subjectIds);
  }

  public function getReview($revId)
  {
    return new Review($revId);
  }

  public function subjects()
  {
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

$st = new Student();

if (isset($_GET["method"])) {
  if ($_GET["method"] === "subjects") {
    echo json_encode($st->subjects());
  } else if ($_GET["method"] === "getReviewText") {
    echo json_encode($st->getReviewText($_GET["id"]));
  }else {
    //echo json_encode(array("error" => "unknown_method"));
  }
}

