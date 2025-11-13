// Floating hearts animation 💖
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 800);
});
