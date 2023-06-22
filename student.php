<?php

class Student
{
  public $studentNo = 1;
  public $subjects = array(1, 2, 3, 4, 5);
  public $revs = array_map(function ($revId) {
    return new Review($revId);
  }, $revIds);

  function __construct()
  {
    print_r($this->revs);
  }

  public function subjects()
  {
    /* TODO: subjectのリストを返す  */
    return $this->subjects;
  }

  public function reviews($revId)
  {
    return new Review($revId);
  }

  public function getReviewText($id)
  {
    return $this->revs[$id]->getText();
  }

  public function setReviewText($id, $text)
  {
    /* TODO: レビューテキストをsetする */
    $this->revs[$id]->setText($text);
  }
}
