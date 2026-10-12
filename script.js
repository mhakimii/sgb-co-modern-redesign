const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
});

document.getElementById("menuBtn")?.addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("hidden");
});
document.querySelectorAll("#mobileMenu a").forEach(a => {
  a.addEventListener("click", () => document.getElementById("mobileMenu").classList.add("hidden"));
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(l => {
    l.classList.toggle("active", l.getAttribute("href") === `#${current}`);
  });
});

document.getElementById("contactForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const orig = btn.textContent;
  btn.textContent = currentLang === "fa" ? "در حال ارسال..." : "Sending...";
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = currentLang === "fa" ? "ارسال شد" : "Sent";
    btn.style.background = "#059669";
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.background = "";
      btn.disabled = false;
      e.target.reset();
    }, 2200);
  }, 1000);
});

// Subtle 3D tilt on hero card
const card = document.querySelector(".card-3d");
if (card) {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateY(-2deg) rotateX(2deg)";
  });
}
