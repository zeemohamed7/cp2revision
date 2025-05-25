import chapters from "./questions.js";
import examquestions from "./full-quiz-questions.js";

let questions = [];
let currentQuestion = 0;
let score = 0;
let wrongAnswers = [];
let selectedChapter = null;

// Fisher-Yates shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array; // Ensure the shuffled array is returned
}

function showHomePage() {
  document.getElementById("quiz").innerHTML = `
    <h1>Computer Programming 2 Revision</h1>
    <div id="home-buttons">
      <button id="chapters-quizzes-btn" class="chapter-btn">Chapters Quizzes</button>
      <button id="practice-exam-btn" class="chapter-btn">Practice Exam</button>
    </div>
  `;

  document.getElementById("chapters-quizzes-btn").addEventListener("click", showChaptersQuizzes);
  document.getElementById("practice-exam-btn").addEventListener("click", startPracticeExam);
}

function startChapterQuiz(chapterIdx) {
  selectedChapter = chapterIdx;
  questions = chapters[chapterIdx].questions.slice();
  shuffle(questions);
  currentQuestion = 0;
  score = 0;
  wrongAnswers = [];
  // Render a fresh quiz screen (not just update question)
  let videoRowHtml = "";
  const videos = chapters[chapterIdx].videos || [];
  if (videos.length > 0) {
    videoRowHtml = `<div id='chapter-videos-row-container' style='width:100%;margin-top:36px;'>
      <div style='font-size:1.15em;font-weight:600;color:#059669;margin-bottom:10px;text-align:left;'>YouTube Videos that helped me!</div>
      <div id='chapter-videos-row' style='display:flex;flex-direction:row;flex-wrap:nowrap;gap:24px;overflow-x:auto;padding-bottom:8px;'>
        ${videos
          .map((v) => {
            // Extract YouTube video ID
            const match =
              v.url.match(/[?&]v=([^&#]+)/) || v.url.match(/youtu.be\/(.+)$/);
            const vid = match ? match[1] : "";
            return `<div style='flex:0 0 340px;min-width:320px;max-width:420px;display:flex;flex-direction:column;align-items:center;background:#f8fafc;border-radius:10px;padding:10px 8px;'>
                <div style='font-size:1em;font-weight:500;margin-bottom:8px;text-align:center;'>${v.title}</div>
                <div style='aspect-ratio:16/9;width:100%;background:#eee;border-radius:8px;overflow:hidden;'>
                  <iframe width='100%' height='100%' src='https://www.youtube.com/embed/${vid}' frameborder='0' allowfullscreen style='border:0;width:100%;height:100%;'></iframe>
                </div>
              </div>`;
          })
          .join("")}
      </div>
    </div>`;
  }
  document.getElementById("quiz").innerHTML = `
    <button id="back-to-chapters" class="option-btn" style="width:auto;max-width:180px;margin-bottom:18px;">← Back to Chapters</button>
    <div id="scoreboard"></div>
    <div id="question"></div>
    <div id="options"></div>
    <div id="feedback"></div>
    ${videoRowHtml}
  `;
  document.getElementById("back-to-chapters").onclick = showHomePage;
  showQuestion();
}

function updateScoreboard() {
  let scoreboard = document.getElementById("scoreboard");
  if (!scoreboard) {
    scoreboard = document.createElement("div");
    scoreboard.id = "scoreboard";
    scoreboard.style.textAlign = "right";
    scoreboard.style.marginBottom = "10px";
    document
      .getElementById("quiz")
      .insertBefore(scoreboard, document.getElementById("question"));
  }
  scoreboard.textContent = `Score: ${score} / ${questions.length}`;
}

function renderQuestionWithCode(questionText) {
  // Detect code block (```...``` or indented)
  const codeBlockRegex = /```([\s\S]*?)```/g;
  let html = questionText.replace(codeBlockRegex, (match, code) => {
    return `<pre class="code-block"><code>${escapeHtml(
      code.trim()
    )}</code></pre>`;
  });
  return html;
}

function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function showQuestion() {
  const q = questions[currentQuestion];
  updateScoreboard();
  document.getElementById("question").innerHTML =
    `<span style='color:var(--primary);font-weight:bold;'>Q${
      currentQuestion + 1
    }.</span> ` + renderQuestionWithCode(q.question);
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "option-btn";
    btn.onclick = () => checkAnswer(idx, btn);
    optionsDiv.appendChild(btn);
  });
  document.getElementById("feedback").textContent = "";
}

function checkAnswer(selected, btnEl) {
  const q = questions[currentQuestion];
  const feedback = document.getElementById("feedback");
  const optionButtons = Array.from(document.querySelectorAll("#options .option-btn"));
  // Disable all buttons after answer
  optionButtons.forEach((b) => (b.disabled = true));
  if (selected === q.answer) {
    score++;
    feedback.textContent = "Correct!";
    feedback.style.color = "#15803d"; // green
    btnEl.style.background = "#d1fae5";
    btnEl.style.borderColor = "#15803d";
    btnEl.style.color = "#15803d";
    btnEl.style.fontWeight = "bold";
  } else {
    feedback.textContent = "Wrong!";
    feedback.style.color = "#b91c1c"; // red
    btnEl.style.background = "#fee2e2";
    btnEl.style.borderColor = "#b91c1c";
    btnEl.style.color = "#b91c1c";
    btnEl.style.fontWeight = "bold";
    // Highlight correct answer
    optionButtons[q.answer].style.background = "#d1fae5";
    optionButtons[q.answer].style.borderColor = "#15803d";
    optionButtons[q.answer].style.color = "#15803d";
    optionButtons[q.answer].style.fontWeight = "bold";
    wrongAnswers.push({
      index: currentQuestion,
      question: q.question,
      options: q.options,
      correct: q.options[q.answer],
      yourAnswer: q.options[selected],
      yourAnswerIdx: selected,
    });
  }
  updateScoreboard();
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  let html = `<h2>Quiz Complete!</h2><p>Your score: ${score} / ${questions.length}</p>`;
  html += `<button id="reviewBtn" class="chapter-btn" style="">Review Your Answers</button>`;
  document.getElementById("quiz").innerHTML = html;
  document.getElementById("reviewBtn").onclick = showReviewGrid;
}

function showReviewGrid() {
  let html = `<button id="back-to-chapters" class="option-btn" style="width:auto;max-width:180px;margin-bottom:18px;">← Back to Chapters</button>`;
  html += `<h2>Review Your Answers</h2><div id='review-container' style='display:flex;gap:32px;'>`;
  // Left: question/answer detail, Right: grid
  html += `<div id='review-detail' style='flex:2;min-width:0;'></div>`;
  html += `<div id='review-grid' style='flex:1;min-width:120px;display:flex;flex-direction:column;align-items:center;'>`;
  html += `<div style='font-weight:bold;margin-bottom:10px;'>Questions</div>`;
  html += `<div style='display:grid;grid-template-columns:repeat(3,36px);gap:10px;'>`;
  for (let i = 0; i < questions.length; i++) {
    let isWrong = wrongAnswers.find((w) => w.index === i);
    let color = isWrong ? "#e57373" : "#43c6ac";
    let icon = isWrong ? "✗" : "✓";
    html += `<button class='review-q-btn' data-q='${i}' style='width:36px;height:36px;border-radius:50%;border:2px solid ${color};background:#fff;font-weight:bold;color:${color};font-size:1.1em;cursor:pointer;'>${
      i + 1
    }<span style='font-size:1.2em;float:right;'>${icon}</span></button>`;
  }
  html += `</div></div></div>`;
  document.getElementById("quiz").innerHTML = html;
  document.getElementById("back-to-chapters").onclick = showHomePage;
  // Add click listeners
  document.querySelectorAll(".review-q-btn").forEach((btn) => {
    btn.onclick = function () {
      showReviewDetail(parseInt(this.getAttribute("data-q")));
    };
  });
  // Show first question by default
  showReviewDetail(0);
}

function showReviewDetail(idx) {
  const q = questions[idx];
  let wa = wrongAnswers.find((w) => w.index === idx);
  let html = `<div class='review-question-box'>`;
  html += `<div style='font-weight:bold;font-size:1.1em;margin-bottom:10px;'>Q${
    idx + 1
  }: ${q.question}</div>`;
  q.options.forEach((opt, i) => {
    let style = "padding:6px 0;display:block;";
    if (i === q.answer) style += "color:#15803d;font-weight:bold;"; // green for correct
    if (wa && wa.yourAnswerIdx === i && i !== q.answer)
      style += "color:#b91c1c;text-decoration:line-through;"; // red for wrong
    html += `<span style='${style}'>${opt}</span>`;
  });
  if (wa) {
    html += `<div class='review-wrong' style='color:#b91c1c;font-size:1.15em;font-weight:bold;margin-top:12px;'>Your answer was incorrect.</div>`;
    html += `<div class='review-correct' style='color:#15803d;font-size:1.15em;font-weight:bold;margin-top:12px;'>Correct answer: <b>${
      q.options[q.answer]
    }</b></div>`;
  } else {
    html += `<div class='review-correct' style='color:#15803d;font-size:1.15em;font-weight:bold;margin-top:12px;'>You answered correctly!</div>`;
  }
  html += `</div>`;
  document.getElementById("review-detail").innerHTML = html;
}

// Function to show the Chapters Quizzes page
function showChaptersQuizzes() {
    const chapterButtonsHtml = chapters.map((ch, i) => {
        return `<button class="chapter-btn" data-chapter="${i}">${ch.name}</button>`;
    }).join('');

    document.getElementById("quiz").innerHTML = `
        <button id="back-to-home" class="option-btn" style="width:auto;max-width:180px;margin-bottom:18px;">← Back to Home</button>
        <h2>Select a Chapter</h2>
        <div id="chapter-btns">${chapterButtonsHtml}</div>
    `;

    document.querySelectorAll(".chapter-btn").forEach((btn) => {
        btn.onclick = function () {
            startChapterQuiz(parseInt(this.getAttribute("data-chapter")));
        };
    });

    document.getElementById("back-to-home").onclick = showHomePage;
}

// Function to start the Practice Exam
function startPracticeExam() {
  // Create a copy of examquestions and shuffle it
  questions = shuffle([...examquestions]).slice(0, 30);

    currentQuestion = 0;
    score = 0;
    wrongAnswers = [];

    document.getElementById("quiz").innerHTML = `
        <button id="back-to-home" class="option-btn" style="width:auto;max-width:180px;margin-bottom:18px;">← Back to Home</button>
        <div id="scoreboard"></div>
        <div id="question"></div>
        <div id="options"></div>
        <div id="feedback"></div>
    `;

    document.getElementById("back-to-home").onclick = showHomePage;
    showQuestion();
}

document.addEventListener("DOMContentLoaded", showHomePage);
