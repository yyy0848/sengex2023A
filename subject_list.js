import { show } from "./show_review.js";
import { newRev } from "./edit_review.js";

function SubjectList() { }

SubjectList.prototype.subjectList = function () {
  /* TODO:どのページでも呼ばれる問題 プロトタイプで書くのをやめる */
  showList();
}

const showEl = Array.from(document.getElementsByClassName('reviewed')) ?? null
if (showEl)
  //console.log(document.getElementById('reviewed'));
  showEl.forEach(function (target) {
    target.addEventListener('click', function () {
      /* TODO:遷移先の科目のIDを動的に渡す */
      showReview(5);
    });
  });

const newReviewEl = Array.from(document.getElementsByClassName('noReview')) ?? null;
if (newReviewEl)
  newReviewEl.forEach(function (target) {
    target.addEventListener('click', function () {
      
      /* TODO:遷移先の科目のIDを動的に渡す */
      newReview(5);
    });
  });



function showList() {
  //$("#subjects").append("<li class='noReview' id='"+1+"'>" + "test" + " </a> </li>");
  $.getJSON("student.php", { method: "subjects" }, function (json_id) {
    //console.log("json_id: " + json_id);
    for (let id of json_id)
      $.getJSON("subject.php", { method: "getTitle", id: id }, function (json_title) {
        $("#subjects").append("<li> <a href='#' class='reviewed' id='"+id+"'>" + json_title + " </a></li>");
      });
  });
}

function showReview(id) {
  //console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" + id);
  location = './ShowReview.html?id=' +id;

}

function newReview(id) {
  location = './EditReview.html?id=' + id;
}

$(function () {
  const sl = new SubjectList();
  sl.subjectList();
});

export { showList };