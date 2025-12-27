const questions = [
  { q: "IF LHC BECOMES SLH IN THE UPSIDE DOWN, WHAT DOES SOM BECOME?", a: "MOS" },
  { q: "INSTI REVERSED IS?", a: "ITSNI" },
  { q: "WHICH COMES FIRST IN THE UPSIDE DOWN: H10 OR H2?", a: "H2" },
  { q: "DECODE: CAMPUS → ?", a: "SUPMAC" },
  { q: "IF LEFT BECOMES TFEL, WHAT DOES RIGHT BECOME?", a: "THGIR" }
];

function startSignal() {
  const name = document.getElementById("username").value.trim();
  if (!name) return;

  localStorage.setItem("playerName", name);

  // SHOW VIDEO + OVERLAY
  document.getElementById("bg-video").classList.remove("hidden-video");
  document.querySelector(".overlay").classList.remove("hidden-video");

  // REMOVE FOG BACKGROUND
  document.body.classList.add("video-active");

  document.getElementById("screen-name").classList.add("hidden");
  document.getElementById("screen-story").classList.remove("hidden");

  document.getElementById("story-text").innerText =
`HI ${name}…

SOMETHING IS WRONG AT INSTI.
SIGNALS ARE BLEEDING THROUGH.
THIS IS WHERE IT BEGINS.`;
}

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
