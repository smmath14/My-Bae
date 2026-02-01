const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const msg = document.getElementById("msg");
const card = document.querySelector(".card");

/* NO BUTTON RUNS AWAY */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* YES BUTTON */
yesBtn.addEventListener("click", () => {

  // Fullscreen ONLY on YES
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  }

  // Remove NO
  noBtn.style.display = "none";

  // Replace card with full screen message
  card.innerHTML = `
    <div style="
      height:100vh;
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

  // Start call (NO timeout)
  window.location.href = "tel:+7878774743"; // put your number

  // Close page AFTER 7 minutes (420000 ms)
  setTimeout(() => {
    window.close();
  }, 420000);
});
