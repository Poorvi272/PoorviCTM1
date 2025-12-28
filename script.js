const questions = [
  { q: "INSTI IN THE UPSIDE DOWN LOOKS LIKE THIS: ITSNI. WHAT HAPPENS TO LHC?", a: "CLH" },
  { q: "DECODE: CAMPUS → ?", a: "SUPMAC" },
  { q: "IF LEFT BECOMES TFEL, WHAT DOES RIGHT BECOME?", a: "THGIR" }
];

const intro = document.getElementById("intro-video");
const signalScreen = document.getElementById("screen-signal");
const signalText = document.getElementById("signal-text");

intro.play().catch(()=>{});

intro.onended = () => {
  intro.style.display = "none";
  showSignal();
};

function showSignal() {
  signalScreen.classList.remove("hidden");

  const lines = [
    "THIS IS NOT A TRAILER.",
    "THIS IS A SIGNAL.",
    "FOR THE NEXT FEW DAYS,",
    "INSTI WILL NOT LOOK THE SAME."
  ];

  let i = 0;
  const interval = setInterval(() => {
    signalText.innerText = lines[i];
    i++;
    if (i === lines.length) {
      clearInterval(interval);
      setTimeout(startStoryVideo, 1200);
    }
  }, 1200);
}

function startStoryVideo() {
  signalScreen.classList.add("hidden");

  const video = document.getElementById("bg-video");
  video.classList.remove("hidden-video");
  document.querySelector(".overlay").classList.remove("hidden-video");
  video.volume = 1;
  video.play();

  document.getElementById("screen-name").classList.remove("hidden");
}

function startHelp() {
  const name = document.getElementById("username").value.trim();
  if (!name) return;

  document.getElementById("screen-name").classList.add("hidden");
  document.getElementById("screen-story").classList.remove("hidden");

  document.getElementById("story-text").innerText =
`HI ${name}.

INSTI IS STUCK IN THE UPSIDE DOWN.
WE NEED YOUR HELP.`;
}

function startTest() {
  document.getElementById("screen-story").classList.add("hidden");
  document.getElementById("screen-question").classList.remove("hidden");

  const q = questions[Math.floor(Math.random()*questions.length)];
  window.currentAnswer = q.a;
  document.getElementById("question-text").innerText = q.q;
}

function submitAnswer() {
  const ans = document.getElementById("answer").value.trim().toUpperCase();
  document.getElementById("screen-question").classList.add("hidden");
  document.getElementById("screen-result").classList.remove("hidden");

  document.getElementById("result-text").innerText =
    ans === window.currentAnswer
      ? "SIGNAL STABILISED."
      : "SIGNAL DISRUPTED.";
}

function goToSeekout() {
  window.location.href = "https://your-seekout-website-link.com";
}
