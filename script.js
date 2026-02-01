const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const msg = document.getElementById("msg");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  msg.innerHTML = "Yayyy ❤️ She said YES 🥹Best day ever! ";
    setTimeout(() => {
    window.location.href = "tel:+917878774743";
  }, 1500);

});


