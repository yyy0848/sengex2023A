import {showList} from "./subject_list.js";

function EditReview() {}

EditReview.prototype.editReview = function () {

};

const saveEl = document.getElementById('save') ?? null;
if (saveEl)
  saveEl.addEventListener('click', function () {
    /* TODO: setReviewTextを使ってphpに入力をPOSTする
      $.post("student.php", {method:"setReviewText", id:2, text:"text"})動作はしてない
    */
    location.href = './SubjectList.html'
    showList();
  });

const cancelEl = document.getElementById('cancel') ?? null;
if (cancelEl)
  cancelEl.addEventListener('click', function () {
    location.href = './SubjectList.html'
    showList();
  });


function newRev(subjectID) {  
  $.getJSON("subject.php", { method: "getTitle", id: subjectID }, function (json) {
    console.log(json);
  });
}

function edit(subjectID) {
  $.getJSON("subject.php", { method: "getTitle", id: subjectID }, function (json) {
    console.log(json);
  });
  $.getJSON("student.php", { method: "getReviewText", id: subjectID }, function (json) {
      console.log(json);
  });

}

$(function () {
  var mt = new EditReview();
  mt.editReview();
});

export {newRev, edit};