function SubjectList() {
}

SubjectList.prototype.subjectList = function () {
  showList();
}


function showList() {
  //$("#subjects").append("<li class='noReview' id='"+1+"'>" + "test" + " </a> </li>");
  $.getJSON("student.php", { method: "subjects" }, function (json_id) {
    //console.log("json_id: " + json_id);
    var parentEl = document.getElementById('subjects');
    for (let id of json_id) {
      $.getJSON("subject.php", { method: "getTitle", id: id }, function (json_title) {
        var childEl = document.createElement('li');
        childEl.id = id;
        childEl.textContent = json_title;
        parentEl.appendChild(childEl);
        childEl.addEventListener("click", function () {
          /* TODO: 使う関数を動的に指定する（showReviewとnewReview） */
          showReview(id);
        });

        });
        /* getJSONでネストするとうまく行かないぽい */
        // $.getJSON("student.php", { method: "getReviewText", id: id }, function (text) {
        //   console.log(text === "");
        //   var reviewState = (text === "") ? ("noReview") : ("reviewed");
        //   console.log(reviewState);
        //   childEl.class = reviewState;
        //   childEl.addEventListener("click", function () {
        //     if (reviewState) {
        //       newReview(id);
        //     } else {
        //       showReview(id);
        //     }
        //     /* 遷移先はここで決まる */
        //   });
        // });


      }
  });
  console.log(document);
}



function showReview(id) {
  //console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" + id);
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