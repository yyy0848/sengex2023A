import showList from "./subject_list.js";

function EditReview() {}

EditReview.prototype.editReview = function () {
  $.getJSON("student.php", { method: "subjects" }, function (json) {
    for (var s of json) {
      $("#subjects").append("<li>" + s + "</li>");
    }
  });
};


function newReview(subjectID) {
  $.getJSON("subject.php", { method: "getTitle", id: subjectID }, function (json) {

  });
}

export default function edit(subjectID) {
  $.getJSON("subject.php", { method: "getTitle", id: subjectID }, function (json) {
    console.log(json);
    for (var s of json) {
      $("#subjects").append("<li>" + s + "</li>");
    }
  });
  $.getJSON("student.php", { method: "getReviewText", id: subjectID }, function (json) {
    //parse the Json
  });
}

//document.addEventListener("DOMContentLoaded", function() {
//function save(subjectID, reviewText) {
  document.getElementById('save').addEventListener('click', function () {
    $.getJSON("subject.php", {method: "setReviewText", id: 1, text: "hogehuga"}, function (json) {
      var text = json.text;
    });
    showList();
  });
//}

//function cancel() {
  document.getElementById('cancel').addEventListener('click', function () {
    showList();
  });
//}
//});
$(function () {
  var mt = new EditReview();
  mt.editReview();
});
