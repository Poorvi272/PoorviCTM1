// ===============================
// QUESTION BANK
// ===============================
const questions = [
  { q: "IF LHC BECOMES SLH IN THE UPSIDE DOWN, WHAT DOES SOM BECOME?", a: "MOS" },
  { q: "INSTI REVERSED IS?", a: "ITSNI" },
  { q: "WHICH COMES FIRST IN THE UPSIDE DOWN: H10 OR H2?", a: "H2" },
  { q: "DECODE: CAMPUS → ?", a: "SUPMAC" },
  { q: "IF LEFT BECOMES TFEL, WHAT DOES RIGHT BECOME?", a: "THGIR" }
];

// ===============================
// BACKGROUND AUDIO (CONTINUOUS)
// ===============================
const backgroundAudio = new Audio("signal.mp3");
backgroundAudio.loop = true;
backgroundAudio.volume = 1.0; // 🔊 FULL VOLUME

// ===============================
// START EXPERIENCE
// ===============================
function startSignal() {
  const name = document.getElementById("username").value.trim();
  if (!name) return;

  // SHOW VIDEO + OVERLAY
  document.getElementById("bg-video").classList.remove("hidden-video");
  document.querySelector(".overlay").classList.remove("hidden-video");
  document.body.classList.add("video-active");

  // ▶️ START AUDIO WITH VIDEO
  backgroundAudio.play();

  // MOVE TO STORY SCREEN
  document.getElementById("screen-name").classList.add("hidden");
  document.getElementById("screen-story").classList.remove("hidden");

  document.getElementById("story-text").innerText =
`HI ${name}…

SOMETHING IS WRONG AT INSTI.
SIGNALS ARE BLEEDING THROUGH.
THIS IS WHERE IT BEGINS.`;
}

// ===============================
// START QUESTION (AUDIO CONTINUES)
// ===============================
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

// ===============================
// CHECK ANSWER
// ===============================
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
