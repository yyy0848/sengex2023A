function MakeTimeTable() {}

MakeTimeTable.prototype.makeTimeTable = function () {
  $.getJSON("student.php", { method: "subjects" }, function (json) {
    for (var s of json) {
      $("#subjects").append("<li>" + s + "</li>");
    }
  });
};

$(function () {
  var mt = new MakeTimeTable();
  mt.makeTimeTable();
});
