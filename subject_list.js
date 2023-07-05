import {show} from "./show_review.js";
import {newRev} from "./edit_review.js";

alert("wtf2")

//document.addEventListener("DOMContentLoaded", function() {
  //function showList() {
    const showEl = Array.from(document.getElementsByClassName('reviewed')) ?? null;
    if (showEl)
    showEl.forEach(function(target) {
      target.addEventListener('click', function () {
        location = './ShowReview.html'
        /* TODO:遷移先の科目のIDを動的に渡す */
        showReview(1);
      });
    });
    //}

  //function newReview() {
const newReviewEl = Array.from(document.getElementsByClassName('noReview')) ?? null;
    if (newReviewEl)
    newReviewEl.forEach(function(target) {
      target.addEventListener('click', function () {
        location = './EditReview.html'
        /* TODO:遷移先の科目のIDを動的に渡す */
        newReview(1);
      });
    });
  //}
//});

function SubjectList() { }

function showList() {
  //subjectIDリストを取得する
  console.log("showList");
  $.getJSON("student.php", { method: "subjects" }, function (json_id) {
    //subjectIDをgetTitleに渡して取得。for文で回して出力する
    for (let id of json_id)
      $.getJSON("subject.php", { method: "getTitle", id: id }, function (json_title) {
        $("#subjects").append("<li class='noReview' id='"+id+"'>" + json_title + "</li>");
      });

  });
}

function showReview(id) {
  /* TODO: showReviewCtrlのshowを呼び出す*/
  show(id);

}

function newReview(id) {
  /* TODO: editReviewCtrlのnewを呼び出す*/
  newRev(id);
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