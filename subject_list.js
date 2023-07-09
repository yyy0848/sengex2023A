import { show } from "./show_review.js";
import { newRev } from "./edit_review.js";

//document.addEventListener("DOMContentLoaded", function() {
  //function showList() {
    const showEl = document.getElementById('reviewed') ?? null;
    if (showEl)
      showEl.addEventListener('click', function () {
        location.href = './ShowReview.html'
        /* TODO:遷移先の科目のIDを動的に渡す */
        showReview(1);
      });
    //}

  //function newReview() {
const newReviewEl = document.getElementById('noReview') ?? null;
    if (newReviewEl)
      newReviewEl.addEventListener('click', function () {
        location.href = './ShowReview.html'
        /* TODO:遷移先の科目のIDを動的に渡す */
        newReview(1);
      });
  //}
//});

function SubjectList() { }

SubjectList.prototype.subjectList = function () {
  /* TODO:どのページでも呼ばれる問題 プロトタイプで書くのをやめる */
  showList();
}

const showEl = Array.from(document.getElementsByClassName('reviewed')) ?? null;
if (showEl)
  showEl.forEach(function (target) {
    target.addEventListener('click', function () {
      location = './ShowReview.html'
      /* TODO:遷移先の科目のIDを動的に渡す */
      showReview(1);
    });
  });

const newReviewEl = Array.from(document.getElementsByClassName('noReview')) ?? null;
if (newReviewEl)
  newReviewEl.forEach(function (target) {
    target.addEventListener('click', function () {
      location = './EditReview.html'
      /* TODO:遷移先の科目のIDを動的に渡す */
      newReview(1);
    });
  });



function showList() {
  //$("#subjects").append("<li> <a href=" + "#" + " class='noReview' id='"+1+"'>" + "test" + " </a> </li>");
  $.getJSON("student.php", { method: "subjects" }, function (json_id) {
    console.log("JSON Data: " + json_id);
    for (let id of json_id)
      $.getJSON("subject.php", { method: "getTitle", id: id }, function (json_title) {
        $("#subjects").append("<li> <a href=" + "#" + " class='noReview' id='"+id+"'>" + json_title + " </a> </li>");
      });
  });
}

function showReview(id) {
  show(id);

}

function newReview(id) {
  newRev(id);
}

SubjectList.prototype.subjectList = function () {
  //showList();
}

$(function () {
  const sl = new SubjectList();
  sl.subjectList();
});

export { showList };