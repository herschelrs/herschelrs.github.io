const redirectList = {
  57: "practice-preliminaries.html",
  "practice-preliminaries": "practice-preliminaries.html",
  58: "practice-preliminaries.html#timeline-mindset-trajectory-harm",
  "timeline-mindset-trajectory-harm": "practice-preliminaries.html#timeline-mindset-trajectory-harm",
  59: "practice-preliminaries.html#raw-hours",
  "raw-hours": "practice-preliminaries.html#raw-hours",
  60: "practice-preliminaries.html#better-to-finish-and-smoothly",
  "better-to-finish-and-smoothly": "practice-preliminaries.html#better-to-finish-and-smoothly",
  61: "practice-preliminaries.html#a-failure-mode",
  "a-failure-mode": "practice-preliminaries.html#a-failure-mode",
  62: "practice-preliminaries.html#meditation-is-not-strength-training",
  "meditation-is-not-strength-training": "practice-preliminaries.html#meditation-is-not-strength-training",
  63: "practice-preliminaries.html#entrenchment-and-active-occlusion-layering",
  "entrenchment-and-active-occlusion-layering": "practice-preliminaries.html#entrenchment-and-active-occlusion-layering",
  64: "practice-preliminaries.html#extreme-skill-and-extreme-standards",
  "extreme-skill-and-extreme-standards": "practice-preliminaries.html#extreme-skill-and-extreme-standards",
  65: "practice-preliminaries.html#physical-sequelae",
  "physical-sequelae": "practice-preliminaries.html#physical-sequelae",
  66: "practice-preliminaries.html#the-end-of-your-world-after-adyashanti-maybe",
  "the-end-of-your-world-after-adyashanti-maybe": "practice-preliminaries.html#the-end-of-your-world-after-adyashanti-maybe",
  67: "practice-preliminaries.html#drama",
  "drama": "practice-preliminaries.html#drama",
  68: "practice-preliminaries.html#error-propagation-wayfinding-grace-of-what-minds-ar",
  "error-propagation-wayfinding-grace-of-what-minds-ar": "practice-preliminaries.html#error-propagation-wayfinding-grace-of-what-minds-ar",
  "68a": "practice-preliminaries.html#on-good-and-bad-draft",
  "on-good-and-bad-draft": "practice-preliminaries.html#on-good-and-bad-draft",
  69: "practice-preliminaries.html#conclusion",
  "conclusion": "practice-preliminaries.html#conclusion",
};

if (window.location.hash.slice(1) in redirectList) {
  window.location.replace(`./${redirectList[window.location.hash.slice(1)]}`);
}