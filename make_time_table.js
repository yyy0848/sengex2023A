function MakeTimeTable() {}

MakeTimeTable.prototype.makeTimeTable = function () {
  $.getJSON("student.php", { method: "subjects" }, function (json) {
    for (let s of json) {
      $("#subjects").append("<li>" + s + "</li>");
    }
  });
};


$(function () {
  const mt = new MakeTimeTable();
  mt.makeTimeTable();
});
