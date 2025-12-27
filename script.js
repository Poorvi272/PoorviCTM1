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
// BACKGROUND AUDIO (PRE-RECORDED)
// ===============================
const backgroundAudio = new Audio("signal.mp3");
backgroundAudio.loop = true;
backgroundAudio.volume = 0;

// Mobile-friendly volume
const TARGET_VOLUME = window.innerWidth < 600 ? 0.35 : 0.5;

// ===============================
// AUDIO HELPERS
// ===============================
function fadeInAudio() {
  backgroundAudio.play();
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < TARGET_VOLUME) {
      vol += 0.05;
      backgroundAudio.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);
}

function fadeOutAudio() {
  let vol = backgroundAudio.volume;
  const fade = setInterval(() => {
    if (vol > 0.05) {
      vol -= 0.05;
      backgroundAudio.volume = vol;
    } else {
      backgroundAudio.pause();
      backgroundAudio.currentTime = 0;
      clearInterval(fade);
    }
  }, 200);
}

// ===============================
// START EXPERIENCE
// ===============================
function startSignal() {
  const name = document.getElementById("username").value.trim();
  if (!name) return;

  // ACTIVATE VIDEO MODE
  document.getElementById("bg-video").classList.remove("hidden-video");
  document.querySelector(".overlay").classList.remove("hidden-video");
  document.body.classList.add("video-active");

  // ▶️ AUDIO STARTS WITH VIDEO
  fadeInAudio();

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
// START QUESTION
// ===============================
function startTest() {

  // FADE OUT AUDIO BEFORE QUESTION
  fadeOutAudio();

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
