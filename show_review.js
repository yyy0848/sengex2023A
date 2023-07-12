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

function show(subjectId) {
  
  /*取得したタイトル、レビューテキストをshowReviewページの要素内にappendする*/
  $.getJSON("subject.php", { method: "getTitle", id: subjectId }, function (json_title) {
    console.log(json_title);
    $("#title").append("<h2> レビュー：" + json_title + " </h2>");
  });

  $.getJSON("student.php", { method: "getReviewText", id: subjectId }, function (json) {
    console.log("review:" + json);
    //$("#title").append("<textarea readonly rows='" + 16 + "' cols='" + 60 + "''>" + json + " </textarea>");
    document.getElementById("reviewText").value = json
  });
}

$(function () {
  var rv = new ShowReview();
  rv.showReview();
});

export {show};