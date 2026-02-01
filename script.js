const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const card = document.querySelector(".card");

/* COMPLETELY DISABLE NO */
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
});

/* NO RUNS FOREVER */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 400 - 200;
  const y = Math.random() * 400 - 200;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* YES BUTTON */
yesBtn.addEventListener("click", () => {

  // Fullscreen ONLY on YES
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

  // Start call (no timeout)
  window.location.href = "tel:+919876543210";

  // Close tab after 7 minutes
  setTimeout(() => {
    window.close();
  }, 420000); // 7 minutes
});
