function ShowReview() {}

ShowReview.prototype.showReview = function() {
  $.getJSON("subject.php", {method: "getTitle"}, function (json) {
    for (let s of json) {
      console.log(s)
      $("#title").append("<li>" + s + "</li>");
    }
  });
}

$(function () {
  const rv = new ShowReview();
  rv.showReview();
});
/*
function show(subjectId) {
  $.getJSON("subject.php", { method: "getTitle" }, function (json) {
    $("#title").append(json);
  });
}

function edit(subjectId) {

}

function close() {

}

 */