const questions = [
  { q: "IF LHC BECOMES SLH IN THE UPSIDE DOWN, WHAT DOES SOM BECOME?", a: "MOS" },
  { q: "INSTI REVERSED IS?", a: "ITSNI" },
  { q: "WHICH COMES FIRST IN THE UPSIDE DOWN: H10 OR H2?", a: "H2" },
  { q: "DECODE: CAMPUS → ?", a: "SUPMAC" },
  { q: "IF LEFT BECOMES TFEL, WHAT DOES RIGHT BECOME?", a: "THGIR" }
];

const introVideo = document.getElementById("intro-video");

// Try playing intro (may need tap on iOS)
introVideo.play().catch(() => {});

introVideo.onended = () => {
  introVideo.style.display = "none";
  document.getElementById("screen-name").classList.remove("hidden");
};

function startSignal() {
  const name = document.getElementById("username").value.trim();
  if (!name) return;

  const video = document.getElementById("bg-video");

  video.classList.remove("hidden-video");
  document.querySelector(".overlay").classList.remove("hidden-video");
  document.body.classList.add("video-active");

  video.volume = 1.0;
  video.play();

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

  const q = questions[Math.floor(Math.random() * questions.length)];
  document.getElementById("question-text").innerText = q.q;
}

function submitAnswer() {
  document.getElementById("screen-question").classList.add("hidden");
  document.getElementById("screen-success").classList.remove("hidden");
}
