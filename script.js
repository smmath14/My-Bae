const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const card = document.querySelector(".card");

/* MOVE NO AROUND */
function moveNo() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

/* NO ESCAPES */
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("mousedown", moveNo);
noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("focus", moveNo);

/* BLOCK NO CLICK */
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  moveNo();
  return false;
});

/* YES BUTTON */
yesBtn.addEventListener("click", () => {

  // Fullscreen ONLY here
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  }

  // Remove NO
  noBtn.remove();

  // Fullscreen message
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
  setTimeout(() => {
    window.location.href = "tel:7878774743"; // your number
  }, 10000);

  // Close after 7 minutes
  setTimeout(() => {
    window.close();
  }, 420000);
});

