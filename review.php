<?php

class Review{
  private $_subjectId;
  private $_text;
  function __construct($id){
    $this->_subjectId = $id;
    $this->_text = "";
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
