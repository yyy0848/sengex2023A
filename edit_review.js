
function EditReview() {}

EditReview.prototype.editReview = function () {
  $.getJSON("student.php", { method: "getReviewText", id: id }, function (json_review) {
    if (json_review === "") 
      newRev(id);
    else
      edit(id);
  });
};

//前のページが指定したidを取得
const id = location.search.split('=')[1];


/*save()*/
const saveEl = document.getElementById('save') ?? null;
const reviewText = document.getElementById('reviewText');
if (saveEl)
  saveEl.addEventListener('click', function () {
    save(id, reviewText.value);
    location.href = './SubjectList.html'
  });


/*実質cancel()*/
const cancelEl = document.getElementById('cancel') ?? null;
if (cancelEl)
  cancelEl.addEventListener('click', function () {
    location.href = './SubjectList.html'
  });


function newRev(subjectID) {  
  $.getJSON("subject.php", { method: "getTitle", id: subjectID }, function (json_title) {
    $("#title").append("<h2> レビュー：" + json_title + " </h2>");
  });
}

function edit(subjectID) {
  $.getJSON("subject.php", { method: "getTitle", id: subjectID }, function (json_title) {
    $("#title").append("<h2> レビュー：" + json_title + " </h2>");
  });
  $.getJSON("student.php", { method: "getReviewText", id: id }, function (json_review) {
    document.getElementById("reviewText").value = json_review
  });
}

function save(id, text){
  $.post("student.php", { method: "setReviewText", id: id, text: text });

}

$(function () {
  const mt = new EditReview();
  mt.editReview();
});

export {newRev, edit, save};