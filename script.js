const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const card = document.querySelector(".card");

/* FUNCTION TO MOVE NO */
function moveNo() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

/* NO ESCAPES ALWAYS */
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("mousedown", moveNo);
noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("focus", moveNo);

/* EVEN IF SOMEHOW CLICKED */
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  moveNo();
  return false;
});

/* YES BUTTON */
yesBtn.addEventListener("click", () => {

  // Fullscreen only on YES
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  }

  // Remove NO completely
  noBtn.remove();

  // Full screen message
  card.innerHTML = `
    <div style="
      height:100vh;
      width:100vw;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      font-size:42px;
      color:#ff4d79;
      text-align:center;
    ">
      Yayyy ❤️<br>
      She said YES 🥹<br>
      Best day ever!
    </div>
  `;

  // Start call
  window.location.href = "tel:+919876543210";

  // Close after 7 minutes
  setTimeout(() => {
    window.close();
  }, 420000);
});
