/* Reusable retrieval-practice quiz widget for the HoTT course.
   Markup convention (see lessons):

   <div class="quiz">
     <p class="q">Question…</p>
     <ol class="options">
       <li data-correct="false">Wrong option</li>
       <li data-correct="true">Right option</li>
     </ol>
     <p class="explain" hidden>Why the right answer is right.</p>
   </div>

   Behaviour: one commit per question. On click we lock the quiz, mark the
   chosen option correct/incorrect, always reveal the correct option, and
   show the explanation. Retrieval first, feedback immediately after. */
(function () {
  function wire(quiz) {
    var options = Array.prototype.slice.call(quiz.querySelectorAll('ol.options > li'));
    var explain = quiz.querySelector('.explain');
    options.forEach(function (li) {
      var mark = document.createElement('span');
      mark.className = 'mark';
      li.appendChild(mark);
      li.addEventListener('click', function () {
        if (quiz.classList.contains('answered')) return;
        quiz.classList.add('answered');
        var correct = li.getAttribute('data-correct') === 'true';
        li.classList.add('chosen', correct ? 'correct' : 'incorrect');
        li.querySelector('.mark').textContent = correct ? '✓' : '✗';
        options.forEach(function (other) {
          if (other !== li && other.getAttribute('data-correct') === 'true') {
            other.classList.add('reveal-correct');
            other.querySelector('.mark').textContent = '✓';
          }
        });
        if (explain) explain.hidden = false;
      });
    });
  }
  function init() {
    Array.prototype.slice.call(document.querySelectorAll('.quiz')).forEach(wire);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
