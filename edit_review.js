import showList from "./subject_list.js";

function EditReview() {}

EditReview.prototype.editReview = function () {
  $.getJSON("student.php", { method: "subjects" }, function (json) {
    for (var s of json) {
      $("#subjects").append("<li>" + s + "</li>");
    }
  });
};

$(function () {
  var mt = new EditReview();
  mt.editReview();
});

function newReview(subjectID) {
  $.getJSON("subject.php", { method: "getTitle", id: subjectID }, function (json) {

  });
}

export default function edit(subjectID) {
  $.getJSON("subject.php", { method: "getTitle", id: subjectID }, function (json) {
    for (var s of json) {
      $("#subjects").append("<li>" + s + "</li>");
    }
  });
  $.getJSON("student.php", { method: "getReviewText", id: subjectID }, function (json) {
    //parse the Json
  });
}

function save(subjectID, reviewText) {
  $.getJSON("subject.php", { method: "setReviewText", id: subjectID, text: reviewText }, function (json) {
    var text = json.text;
  });
  showList();
}

function cancel() {
  showList();
}
