function ShowList() {

}
function Show(id) { 
  /* TODO: showReviewCtrlのshowを呼び出す*/
}
/* new　が予約語やった */
function Make(id) { 
  /* TODO: editReviewCtrlのnewを呼び出す*/
}

ShowList.prototype.showList = function () {
  $.getJSON("student.php", { method: "subjects" }, function (json) {
    for (let s of json) {
      $("#subjects").append("<li>" + s + "</li>");
    }
  });
};

$(function () {
  const sl = new ShowList();
  sl.showList();
});
