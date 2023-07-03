function SubjectList() { }

function showList() {

}



function showReview(id) {
  /* TODO: showReviewCtrlのshowを呼び出す*/
}

function newReview(id) {
  /* TODO: editReviewCtrlのnewを呼び出す*/
}

SubjectList.prototype.subjectList = function () {
  //subjectIDリストを取得する
  $.getJSON("student.php", { method: "subjects" }, function (json_id) {
    console.log(json_id);
    for(let id of json_id)
    $.getJSON("subject.php", { method: "getTitle", id: id }, function (json_title) {
      console.log(json_title);
      $("#subjects").append("<li>" + json_title + "</li>");
    });

  });


  //subjectIDをgetTitleに渡して取得。for文で回して出力する









  //$.showList(); 以上の処理をshowListに移植する
};

$(function () {
  const sl = new SubjectList();
  sl.subjectList();
});
