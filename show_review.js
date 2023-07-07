import {showList} from './subject_list.js';
import {edit} from './edit_review.js';

function ShowReview() {}

ShowReview.prototype.showReview = function() {
};


const editEl = document.getElementById('edit') ?? null;
if (editEl)
  editEl.addEventListener('click', function () {
    location.href = './EditReview.html'
    edit(1);
  });

const closeEl = document.getElementById('close') ?? null;
if (closeEl)
  closeEl.addEventListener('click', function () {
    location.href = './SubjectList.html'
    showList();
  });

function show(subjectId) {
  console.log("ここまではいってる");
  
  /* TODO:  取得したタイトル、レビューテキストをshowReviewページの要素内にappendする*/
  /* jsonは配列（Array）なので、直接append(json)するのはできない */
  $.getJSON("subject.php", { method: "getTitle", id: subjectId }, function (json) {
    console.log(json);
    $("#title").append("<h2> レビュー：" + json_title + " </h2>");
    //$('#title').append(json);
  });

  $.getJSON("student.php", { method: "getReviewText", id: subjectId }, function (json) {
    console.log(json);
    $("#title").append("<textarea readonly row='" + 4 + "' col='" + 40 + "''>" + json_title + " </textarea>");
    //$('#title').append(json);
  });
}


$(function () {
  var rv = new ShowReview();
  rv.showReview();
});

export {show};