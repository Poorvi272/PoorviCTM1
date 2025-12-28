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
// INTRO VIDEO FLOW
// ===============================
const introVideo = document.getElementById("intro-video");
const bgVideo = document.getElementById("bg-video");

window.onload = () => {
  introVideo.volume = 1.0;
  introVideo.play();
};

introVideo.onended = () => {
  introVideo.style.display = "none";
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

  bgVideo.volume = 1.0;
  bgVideo.play();

  document.getElementById("screen-name").classList.add("hidden");
  document.getElementById("screen-story").classList.remove("hidden");

  document.getElementById("story-text").innerText =
`HI ${name}…

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
  document.getElementById("question-text").innerText = random.q;
}

// ===============================
// ANSWER
// ===============================
function submitAnswer() {
  document.getElementById("screen-question").classList.add("hidden");
  document.getElementById("screen-success").classList.remove("hidden");
}
