
function EditReview() {}

EditReview.prototype.editReview = function () {
  newRev(id);
};

//前のページが指定したidを取得
const id = location.search.split('=')[1];


/*save()*/
const saveEl = document.getElementById('save') ?? null;
if (saveEl)
  saveEl.addEventListener('click', function () {
    /* TODO: setReviewTextを使ってphpに入力をPOSTする
      $.post("student.php", {method:"setReviewText", id:2, text:"text"})動作はしてない
    */
    location.href = './SubjectList.html'
  });

  
/*実質cancel()*/
const cancelEl = document.getElementById('cancel') ?? null;
if (cancelEl)
  cancelEl.addEventListener('click', function () {
    location.href = './SubjectList.html'
  });


  /* TODO: prototypeに書いてるから毎回呼ばれるので、append先要素のidを調整するなどしてShowReviewに影響しないようにする →show_review.jsのimportを消した*/
function newRev(subjectID) {  
  $.getJSON("subject.php", { method: "getTitle", id: subjectID }, function (json_title) {
    console.log(json_title);
    $("#title").append("<h2> レビュー：" + json_title + " </h2>");
  });
  $.getJSON("student.php", { method: "getReviewText", id: id }, function (json_review) {
    if (json_review === "") {
      $("#title").append("<textarea rows='" + 16 + "' cols='" + 60 + "' >" + "ここにレビューを入力してください" + " </textarea>");
    } else {
      $("#title").append("<textarea rows='" + 16 + "' cols='" + 60 + "'>" + json_review + " </textarea>");
    }
  });
}

function edit(subjectID) {
  $.getJSON("subject.php", { method: "getTitle", id: subjectID }, function (json) {
    console.log(json);
  });
  $.getJSON("student.php", { method: "getReviewText", id: id }, function (json) {
    console.log(json);
  });

}

$(function () {
  var mt = new EditReview();
  mt.editReview();
});

export {newRev, edit};