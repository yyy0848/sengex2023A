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
/*
function show(subjectId) {
  $.getJSON("subject.php", { method: "getTitle" }, function (json) {
    $('#title').append(json);
  });
}

function edit(subjectId) {

}

function close() {

}
*/