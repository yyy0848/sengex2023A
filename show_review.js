import showList from './subject_list.js';
import edit from './edit_review.js';

function ShowReview() {}

ShowReview.prototype.showReview = function() {
  $.getJSON("subject.php", { method: "getTitle", id: 1 }, function (json) {
    //console.log(json);
    $('div').append('<p>' + json + '</p>');
    // $('#title').append('<p>' + json + '</p>');
  });
};

$(function() {
  var rv = new ShowReview();
  rv.showReview();
});

function show(subjectId) {
  $.getJSON("subject.php", { method: "getTitle" }, function (json) {
    $('#title').append(json);
  });
}

function editReview(subjectId) {
  edit(subjectId);
}

//function closePage() {
  var btn = document.getElementById('close');
  btn.addEventListener('click', function() {
  showList();
  });
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
