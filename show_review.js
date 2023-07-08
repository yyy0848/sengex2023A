import {edit} from './edit_review.js';

function ShowReview() {}

ShowReview.prototype.showReview = function () {
  show(id);
};
//前のページが指定したidを取得
const id = location.search.split('=')[1];

const editEl = document.getElementById('edit') ?? null;
if (editEl)
  editEl.addEventListener('click', function () {
    location.href = './EditReview.html?id='+id;
    edit(1);
  });

const closeEl = document.getElementById('close') ?? null;
if (closeEl)
  closeEl.addEventListener('click', function () {
    location.href = './SubjectList.html';
  });

//show(4); 
//show(subjectId)自体は上手く作動している
function show(subjectId) {
  
  /* TODO:  取得したタイトル、レビューテキストをshowReviewページの要素内にappendする*/
  /* jsonは配列（Array）なので、直接append(json)するのはできない→JSON.stringify(json)で解決 */
  $.getJSON("subject.php", { method: "getTitle", id: subjectId }, function (json) {
    console.log(json);
    $("#title").append("<h2> レビュー：" + JSON.stringify(json) + " </h2>");
    //$('#title').append(json);
  });

  $.getJSON("student.php", { method: "getReviewText", id: subjectId }, function (json) {
    console.log("review:" + json);
    $("#title").append("<textarea readonly row='" + 4 + "' col='" + 40 + "''>" + json + " </textarea>");
    //$('#title').append(json);
  });
}


$(function () {
  var rv = new ShowReview();
  rv.showReview();
});

export {show};