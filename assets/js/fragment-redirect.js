const redirectList = {
  57: "timeline-mindset-trajectory-harm.html",
  "practice-preliminaries": "timeline-mindset-trajectory-harm.html",
  58: "timeline-mindset-trajectory-harm.html#timeline-mindset-trajectory-harm",
  "timeline-mindset-trajectory-harm": "timeline-mindset-trajectory-harm.html#timeline-mindset-trajectory-harm",
  59: "timeline-mindset-trajectory-harm.html#raw-hours",
  "raw-hours": "timeline-mindset-trajectory-harm.html#raw-hours",
  60: "timeline-mindset-trajectory-harm.html#better-to-finish-and-smoothly",
  "better-to-finish-and-smoothly": "timeline-mindset-trajectory-harm.html#better-to-finish-and-smoothly",
  61: "timeline-mindset-trajectory-harm.html#a-failure-mode",
  "a-failure-mode": "timeline-mindset-trajectory-harm.html#a-failure-mode",
  62: "timeline-mindset-trajectory-harm.html#meditation-is-not-strength-training",
  "meditation-is-not-strength-training": "timeline-mindset-trajectory-harm.html#meditation-is-not-strength-training",
  63: "timeline-mindset-trajectory-harm.html#entrenchment-and-active-occlusion-layering",
  "entrenchment-and-active-occlusion-layering": "timeline-mindset-trajectory-harm.html#entrenchment-and-active-occlusion-layering",
  64: "timeline-mindset-trajectory-harm.html#extreme-skill-and-extreme-standards",
  "extreme-skill-and-extreme-standards": "timeline-mindset-trajectory-harm.html#extreme-skill-and-extreme-standards",
  65: "timeline-mindset-trajectory-harm.html#physical-sequelae",
  "physical-sequelae": "timeline-mindset-trajectory-harm.html#physical-sequelae",
  66: "timeline-mindset-trajectory-harm.html#the-end-of-your-world-after-adyashanti-maybe",
  "the-end-of-your-world-after-adyashanti-maybe": "timeline-mindset-trajectory-harm.html#the-end-of-your-world-after-adyashanti-maybe",
  67: "timeline-mindset-trajectory-harm.html#drama",
  "drama": "timeline-mindset-trajectory-harm.html#drama",
  68: "timeline-mindset-trajectory-harm.html#error-propagation-wayfinding-grace-of-what-minds-ar",
  "error-propagation-wayfinding-grace-of-what-minds-ar": "timeline-mindset-trajectory-harm.html#error-propagation-wayfinding-grace-of-what-minds-ar",
  "68a": "timeline-mindset-trajectory-harm.html#on-good-and-bad-draft",
  "on-good-and-bad-draft": "timeline-mindset-trajectory-harm.html#on-good-and-bad-draft",
  69: "timeline-mindset-trajectory-harm.html#conclusion",
  "conclusion": "timeline-mindset-trajectory-harm.html#conclusion",
};

if (window.location.hash.slice(1) in redirectList) {
  window.location.replace(`./${redirectList[window.location.hash.slice(1)]}`);
}
