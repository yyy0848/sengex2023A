import {showList} from './subject_list.js';
import {edit} from './edit_review.js';

function ShowReview() {}

ShowReview.prototype.showReview = function() {

};

$(function() {
  var rv = new ShowReview();
  rv.showReview();
});

function show(subjectId) {
  $.getJSON("subject.php", { method: "getTitle", id: subjectId }, function (json) {
    console.log(json);
    //$('#title').append(json);
  });
  $.getJSON("student.php", { method: "getReviewText", id: subjectId }, function (json) {
    console.log(json);
    //$('#title').append(json);
  });
}

//document.addEventListener("DOMContentLoaded", function() {
//function editReview(subjectId) {
const editEl = document.getElementById('edit') ?? null;
if (editEl)
  editEl.addEventListener('click', function () {
    edit(1);
  });
//}

// closePage()が読み込まれるように出来たら、中身はshowList()だけでいい
  //function closePage() {
const closeEl = document.getElementById('close') ?? null;
if (closeEl)
  closeEl.addEventListener('click', function () {
      showList();
    });
  //}
//});

  //function editReview(subjectId) {
    var btn = document.getElementById('edit')
    if (btn) {
      btn.addEventListener('click', function () {
        edit(1);
      });
    }
//}

/*
addEventListener('DOMContentLoaded', ()=> {
  closePage();
})

document.getElementById("close").onclick = function() {
  console.log("wtf")
  document.location = './SubjectList.html';
}

 */

export {show};