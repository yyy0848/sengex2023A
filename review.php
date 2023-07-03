<?php

class Review{
  private $_subjectId;
  function __construct($id){
    $this->_subjectId = $id;
  }
  private $_text = "";

  public function getText()
  {
    return $this->_text;
  }
  public function setText($text)
  {
    $this->_text = $text;
  }
}
