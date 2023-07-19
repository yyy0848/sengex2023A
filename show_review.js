function ShowReview() {}

ShowReview.prototype.showReview = function () {
  show(id);
};
/*前のページが指定したidを取得*/
const id = location.search.split('=')[1];

/*edit()を動かすための動作*/
const editEl = document.getElementById('edit') ?? null;
if (editEl)
  editEl.addEventListener('click', function () {
    location.href = './EditReview.html?id='+id;
  });

/*実質close()*/
const closeEl = document.getElementById('close') ?? null;
if (closeEl)
  closeEl.addEventListener('click', function () {
    location.href = './SubjectList.html';
  });

/*取得したタイトル、レビューテキストを表示*/
function show(subjectId) {
  $.getJSON("subject.php", { method: "getTitle", id: subjectId }, function (json_title) {
    $("#title").append("<h1> レビュー：" + json_title + " </h1>");
  });
  $.getJSON("student.php", { method: "getReviewText", id: subjectId }, function (json_review) {
    $("#textarea").append("<textarea readonly rows='" + 16 + "' cols='" + 60 + "''>" + json_review + " </textarea>");
  });
  $.getJSON("student.php", { method: "getReviewText", id: subjectId }, function (json) {
    console.log("review:" + json);
    document.getElementById("textarea").value = json;
  });
}

$(function () {
  const rv = new ShowReview();
  rv.showReview();
});

export { show };