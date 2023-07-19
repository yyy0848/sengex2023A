<?php
require "student.php";

$st = new Student();

//科目のID獲得
$ids = $st->subjects();
print_r($ids);
