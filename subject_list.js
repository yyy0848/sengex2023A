function SubjectList() { }

function showList() {
  //subjectIDリストを取得する
  $.getJSON("student.php", { method: "subjects" }, function (json_id) {
    //subjectIDをgetTitleに渡して取得。for文で回して出力する
    for (let id of json_id)
      $.getJSON("subject.php", { method: "getTitle", id: id }, function (json_title) {
        $("#subjects").append("<li>" + json_title + "</li>");
      });

  });
}

function showReview(id) {
  /* TODO: showReviewCtrlのshowを呼び出す*/

}

function newReview(id) {
  /* TODO: editReviewCtrlのnewを呼び出す*/

}

SubjectList.prototype.subjectList = function () {
  showList();
};

$(function () {
  const sl = new SubjectList();
  sl.subjectList();
});