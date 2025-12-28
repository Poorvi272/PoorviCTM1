const intro = document.getElementById("intro-video");
const bg = document.getElementById("bg-video");

const screens = [
  "screen-1",
  "screen-2",
  "screen-name",
  "screen-help",
  "screen-question",
  "screen-result"
];

const question = {
  q: "INSTI IN THE UPSIDE DOWN LOOKS LIKE THIS: ITSNI. WHAT HAPPENS TO LHC?",
  a: "CLH"
};

// START STORY VIDEO IMMEDIATELY (MUTED FOR AUTOPLAY)
bg.play().catch(()=>{});

// PLAY INTRO
intro.play().catch(()=>{});

// WHEN INTRO ENDS → REMOVE IT, SHOW STORY FLOW
intro.onended = () => {
  intro.remove();

  showScreen("screen-1");

  setTimeout(() => showScreen("screen-2"), 2500);
  setTimeout(() => showScreen("screen-name"), 5000);
};

function showScreen(id) {
  screens.forEach(s => document.getElementById(s).classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

let userName = "";

function saveName() {
  userName = document.getElementById("username").value.trim();
  if (!userName) return;

  document.getElementById("help-text").innerText =
    `HI ${userName}.\n\nINSTI NEEDS YOU.\nREADY TO HELP?`;

  showScreen("screen-help");
}

function showQuestion() {
  document.getElementById("question-text").innerText = question.q;
  showScreen("screen-question");
}

function submitAnswer() {
  const ans = document.getElementById("answer").value.trim().toUpperCase();

  document.getElementById("result-text").innerText =
    ans === question.a ? "SIGNAL STABILISED." : "SIGNAL DISRUPTED.";

  showScreen("screen-result");
}
