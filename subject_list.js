function SubjectList() {
}

SubjectList.prototype.subjectList = function () {
  showList();
}


function showList() {
  $.getJSON("student.php", { method: "subjects" }, function (json_id) {
    var parentEl = document.getElementById('subjects');
    for (let id of json_id) {
      $.getJSON("subject.php", { method: "getTitle", id: id }, function (json_title) {
        var childEl = document.createElement('li');
        childEl.id = id;
        childEl.textContent = json_title;
        parentEl.appendChild(childEl);
        childEl.addEventListener("click", function () {

          $.getJSON("student.php", { method: "getReviewText", id: id }, function (json_review) {
            console.log("review:" + json_review);
            $("#title").append("<textarea readonly row='" + 4 + "' col='" + 40 + "''>" + json_review + " </textarea>");
            /*使う関数を動的に指定する（showReviewとnewReview）*/
          if (json_review === "") {
            newReview(id);
          } else {
            showReview(id);
          }
          });
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