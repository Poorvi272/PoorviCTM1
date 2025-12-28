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
// VIDEO REFERENCES
// ===============================
const intro1 = document.getElementById("intro-video-1");
const intro2 = document.getElementById("intro-video-2");
const bgVideo = document.getElementById("bg-video");

// ===============================
// INTRO FLOW
// ===============================
window.onload = () => {
  intro1.volume = 1;
  intro1.play();
};

intro1.onended = () => {
  intro1.style.display = "none";
  intro2.classList.remove("hidden-video");
  intro2.volume = 1;
  intro2.play();
};

intro2.onended = () => {
  intro2.style.display = "none";
  document.getElementById("content").classList.remove("hidden");
};

// ===============================
// START MAIN EXPERIENCE
// ===============================
function startSignal() {
  const name = document.getElementById("username").value.trim();
  if (!name) return;

  bgVideo.classList.remove("hidden-video");
  document.querySelector(".overlay").classList.remove("hidden-video");
  document.body.classList.add("video-active");

  bgVideo.volume = 1;
  bgVideo.play();

  document.getElementById("screen-name").classList.add("hidden");
  document.getElementById("screen-story").classList.remove("hidden");

  document.getElementById("story-text").innerText =
`HI ${name},

SOMETHING IS WRONG AT INSTI.
SIGNALS ARE BLEEDING THROUGH.
THIS IS WHERE IT BEGINS.`;
}

// ===============================
// QUESTION
// ===============================
function startTest() {
  document.getElementById("screen-story").classList.add("hidden");
  document.getElementById("screen-question").classList.remove("hidden");

  const random = questions[Math.floor(Math.random() * questions.length)];
  localStorage.setItem("answer", random.a);
  document.getElementById("question-text").innerText = random.q;
}

// ===============================
// ANSWER CHECK
// ===============================
function submitAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toUpperCase();
  const correct = localStorage.getItem("answer");

  document.getElementById("screen-question").classList.add("hidden");

  if (userAnswer === correct) {
    document.getElementById("screen-success").classList.remove("hidden");
  } else {
    document.getElementById("screen-fail").classList.remove("hidden");
  }
}
