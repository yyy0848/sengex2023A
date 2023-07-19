function SubjectList() {}

SubjectList.prototype.subjectList = function () {
  showList();
}

function showList() {
  $.getJSON("student.php", { method: "subjects" }, function (json_id) {
    var parentEl = document.getElementById('subjects');
    iterateIds(json_id, parentEl);
  });
}

function iterateIds(ids, parentEl) {
  if (ids.length === 0) {
    // 全てのIDを処理した場合、終了する
    return;
  }
  var id = ids.shift();
  $.getJSON("subject.php", { method: "getTitle", id: id }, function (json_title) {
    var childEl = document.createElement('li');
    childEl.id = id;
    childEl.textContent = json_title;
    parentEl.appendChild(childEl);
    childEl.addEventListener("click", function () {
      $.getJSON("student.php", { method: "getReviewText", id: id }, function (json_review) {
        if (json_review === "") {
          newReview(id);
        } else {
          showReview(id);
        }
      });
    });
    parentEl.appendChild(childEl);
    //レビュー状態要素を追加
    $.getJSON("student.php", { method: "getReviewText", id: id }, function (text) {
      if (text !== "") {
        var reviewStateEl = document.createElement('div');
        reviewStateEl.className = "reviewed";
        parentEl.append(reviewStateEl);
      }
    });
    // 次のIDを処理するために再帰的に呼び出す
    iterateIds(ids, parentEl);
  });
}

function showReview(id) {
  location = './ShowReview.html?id=' + id;
}

function newReview(id) {
  location = './EditReview.html?id=' + id;
}

$(function () {
  const sl = new SubjectList();
  sl.subjectList();
});

export { showList };