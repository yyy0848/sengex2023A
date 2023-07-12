
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
if (saveEl)
  const text = document.getElementById('reviewText')
  saveEl.addEventListener('click', function () {
    $.post("student.php", {method:"setReviewText", id:id , text:"text"})
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
  $.getJSON("student.php", { method: "getReviewText", id: id }, function (json_review) {
    console.log(json_review);
    //$("#textarea").append("<textarea rows='" + 16 + "' cols='" + 60 + "' ></textarea>");
  });
}

function edit(subjectID) {
  $.getJSON("subject.php", { method: "getTitle", id: subjectID }, function (json_title) {
    $("#title").append("<h2> レビュー：" + json_title + " </h2>");
  });
  $.getJSON("student.php", { method: "getReviewText", id: id }, function (json_review) {
    console.log(json_review);
    //$("#textarea").append("<textarea rows='" + 16 + "' cols='" + 60 + "' > " + json_review + "</textarea>");
    document.getElementById("reviewText").value = json_review
  });

}

$(function () {
  var mt = new EditReview();
  mt.editReview();
});

export {newRev, edit};