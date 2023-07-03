import {show} from "./show_review.js";
import {newRev} from "./edit_review.js";

alert("wtf2")

//document.addEventListener("DOMContentLoaded", function() {
  //function showList() {
    const showEl = document.getElementById('show') ?? null;
    if (showEl)
      showEl.addEventListener('click', function () {
        location.href = './ShowReview.html'
        showReview(1);
      });
    //}

  //function newReview() {
    const newReviewEl = document.getElementById('newReview') ?? null;
    if (newReviewEl)
      newReviewEl.addEventListener('click', function () {
        location.href = './ShowReview.html'
        newReview(1);
      });
  //}
//});

function SubjectList() { }

function showList() {
  //subjectIDリストを取得する
  $.getJSON("student.php", { method: "subjects" }, function (json_id) {
    //subjectIDをgetTitleに渡して取得。for文で回して出力する
    for (let id of json_id)
      $.getJSON("subject.php", { method: "getTitle", id: id }, function (json_title) {
        $("#subjects").append("<li>" + json_title + "</li>");
      });

  });
}

function showReview(id) {
  /* TODO: showReviewCtrlのshowを呼び出す*/
  show(id);

}

function newReview(id) {
  /* TODO: editReviewCtrlのnewを呼び出す*/
  newRev(id)
}

SubjectList.prototype.subjectList = function () {
  console.log("fucking");
  showList();
}

$(function () {
  const sl = new SubjectList();
  sl.subjectList();
});

export { showList };