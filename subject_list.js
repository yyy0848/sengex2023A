import show from "./show_review.js";

alert("wtf2")

export default function showList() {
  location.href = './SubjectList.html';
}

//document.addEventListener("DOMContentLoaded", function() {
//function showList() {
  document.getElementById('show').addEventListener('click', function () {
    show(1);
  });

//}

  //function newReview() {
    document.getElementById('newReview').addEventListener('click', function () {
      show(1);
    });
  //}
//});
