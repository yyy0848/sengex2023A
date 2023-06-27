function ShowReview() {}

ShowReview.prototype.showReview = function() {
    $.getJSON("subject.php", { method: "getTitle" }, function (json) {
        $("#title").append(json);
    });
}

$(function() {
   const rv = new ShowReview();
   rv.showReview();
});

function show(subjectId) {
    $.getJSON("subject.php", { method: "getTitle" }, function (json) {
        $("#title").append(json);
    });
}

function edit(subjectId) {

}

function close() {

}