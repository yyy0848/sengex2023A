<?php

class Review{
  private $_subjectId;
  private $_text;
  function __construct($id){
    $this->_subjectId = $id;
    $this->_text = "test";
  }

  public function getText()
  {
    return $this->_text;
  }
  public function setText($text)
  {
    $this->_text = $text;
  }
}
