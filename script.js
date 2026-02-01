const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const msg = document.getElementById("msg");
const card = document.querySelector(".card");

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
  // Remove leave warning
  window.onbeforeunload = null;

  // Hide NO and card
  noBtn.style.display = "none";
  card.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      font-size:40px;
      color:#ff4d79;
    ">
      Yayyy ❤️<br>
      She said YES 🥹<br>
      Best day ever!
    </div>
  `;

  // Open call
  setTimeout(() => {
    window.location.href = "tel:+919876543210";
  }, 2000);

  // Close page
  setTimeout(() => {
    window.close();
  }, 4000);
});
