import showList from './subject_list.js';
import edit from './edit_review.js';

function ShowReview() {}
/*
ShowReview.prototype.showReview = function() {
  $.getJSON("subject.php", { method: "getTitle", id: 1 }, function (json) {
    // console.log(json);
    $('div').append('<p>' + json + '</p>');
    // $('#title').append('<p>' + json + '</p>');
  });
};

$(function() {
  var rv = new ShowReview();
  rv.showReview();
});

 */

export default function show(subjectId) {
  $.getJSON("subject.php", { method: "getTitle", id: subjectId }, function (json) {
    console.log(json);
    //$('#title').append(json);
  });
  $.getJSON("student.php", { method: "getReviewText", id: subjectId }, function (json) {
    console.log(json);
    //$('#title').append(json);
  });
}

//function editReview(subjectId) {
  var btn = document.getElementById('edit');
  btn.addEventListener('click', function() {
    edit(1);
  });
//}

// closePage()が読み込まれるように出来たら、中身はshowList()だけでいい
// function closePage() {
  var btn = document.getElementById('close');
  btn.addEventListener('click', function() {
    showList();
  });
// }

/*
addEventListener('DOMContentLoaded', ()=> {
  closePage();
})

document.getElementById("close").onclick = function() {
  console.log("wtf")
  document.location = './SubjectList.html';
}

 */
