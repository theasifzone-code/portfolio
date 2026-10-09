const roles = ["Full Stack Developer", "MERN Stack Developer", "Python & FastAPI Developer", "AI Integration"];
const el = document.getElementById("typed");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let r = 0, c = 0, del = false;
function tick() {
  const word = roles[r];
  el.textContent = word.slice(0, c);
  if (!del && c === word.length) { del = true; return setTimeout(tick, 1600); }
  if (del && c === 0) { del = false; r = (r + 1) % roles.length; }
  c += del ? -1 : 1;
  setTimeout(tick, del ? 40 : 80);
}
if (el) { reduce ? (el.textContent = roles[0]) : tick(); }

// mobile menu
const burger = document.querySelector(".burger"), menu = document.getElementById("menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", e => {
  if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); }
});