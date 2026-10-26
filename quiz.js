// 퀴즈: 보기를 누르면 정답 표시와 해설을 보여 준다.
document.querySelectorAll(".quiz-q").forEach(function (q) {
  var buttons = q.querySelectorAll(".choices button");
  var feedback = q.querySelector(".feedback");
  var answered = false;

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (answered) return;
      answered = true;

      var isRight = btn.dataset.correct === "true";

      buttons.forEach(function (b) {
        if (b.dataset.correct === "true") {
          b.classList.add("right");
          b.textContent = "✓ " + b.textContent;
        } else if (b === btn) {
          b.classList.add("wrong");
          b.textContent = "✗ " + b.textContent;
        }
        b.disabled = true;
      });

      feedback.textContent = (isRight ? "맞았습니다. " : "아쉽습니다. ") + feedback.textContent;
      feedback.classList.add("show");
    });
  });
});
