import show from "./show_review.js";

alert("wtf2")

export default function showList() {
  location.href = './SubjectList.html';
}

//function showList() {
  var btn = document.getElementById('show');
  btn.addEventListener('click', function () {
    show(1);
  });
//}

function newReview() {
  var btn = document.getElementById('newReview');
  btn.addEventListener('click', function () {
    show(1);
  });
}
