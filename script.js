const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const msg = document.getElementById("msg");

/* FULLSCREEN */
document.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  }
});

/* WARNING IF SHE TRIES TO LEAVE */
window.onbeforeunload = function () {
  return "Please decide first ❤️";
};

/* NO BUTTON RUNS AWAY */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* YES BUTTON */
yesBtn.addEventListener("click", () => {
  msg.innerHTML = "Yayyy ❤️ She said YES 🥹 Best day ever!";

  // Remove leave warning
  window.onbeforeunload = null;

  // Open call
  setTimeout(() => {
    window.location.href = "tel:7878774743"; // put your real number
  }, 1500);

  // Close page
  setTimeout(() => {
    window.close();
  }, 3000);
});
