// QUESTION BANK (5 QUESTIONS)
const questions = [
  { q: "If LHC becomes SLH in the Upside Down, what does SOM become?", a: "MOS" },
  { q: "INSTI reversed is?", a: "ITSNI" },
  { q: "Which comes first in the Upside Down: H10 or H2?", a: "H2" },
  { q: "Decode: CAMPUS → ?", a: "SUPMAC" },
  { q: "If LEFT becomes TFEL, what does RIGHT become?", a: "THGIR" }
];

// START STORY
function startSignal() {
  const name = document.getElementById("username").value.trim();
  if (!name) return;

  localStorage.setItem("playerName", name);

  document.getElementById("screen-name").classList.add("hidden");
  document.getElementById("screen-story").classList.remove("hidden");

  document.getElementById("story-text").innerText =
    `Hi ${name}… 
There’s something strange happening at insti.
Patterns are repeating.
Clues don’t behave the way they should.
Nothing here is random.`;
}

// ASSIGN RANDOM QUESTION (ONLY ONCE)
function startTest() {
  document.getElementById("screen-story").classList.add("hidden");
  document.getElementById("screen-question").classList.remove("hidden");

  let savedQuestion = localStorage.getItem("assignedQuestion");

  if (!savedQuestion) {
    const random = questions[Math.floor(Math.random() * questions.length)];
    localStorage.setItem("assignedQuestion", JSON.stringify(random));
    savedQuestion = JSON.stringify(random);
  }

  const questionObj = JSON.parse(savedQuestion);
  document.getElementById("question-text").innerText = questionObj.q;
}

// CHECK ANSWER
function submitAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toUpperCase();
  const correct = JSON.parse(localStorage.getItem("assignedQuestion")).a;

  document.getElementById("screen-question").classList.add("hidden");

  if (userAnswer === correct) {
    document.getElementById("screen-success").classList.remove("hidden");
  } else {
    document.getElementById("screen-fail").classList.remove("hidden");
  }
}
