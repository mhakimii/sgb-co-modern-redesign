// ========== Navbar scroll effect ==========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ========== Mobile menu ==========
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// ========== Active nav link ==========
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ========== Counter animation ==========
const animateCounters = () => {
  const counters = document.querySelectorAll('[data-count]');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-count');
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const update = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current).toLocaleString('fa-IR');
        requestAnimationFrame(update);
      } else {
        counter.textContent = target.toLocaleString('fa-IR') + (target >= 100 ? '+' : '+');
      }
    };
    update();
  });
};

// Intersection Observer for stats
const statsSection = document.getElementById('stats');
let counted = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !counted) {
      counted = true;
      document.querySelectorAll('.stat-item').forEach((item, i) => {
        setTimeout(() => item.classList.add('visible'), i * 150);
      });
      animateCounters();
    }
  });
}, { threshold: 0.3 });

if (statsSection) observer.observe(statsSection);

// ========== Contact form ==========
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent = 'در حال ارسال...';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = '✓ پیام ارسال شد';
    btn.style.background = 'linear-gradient(to left, #059669, #10b981)';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
      e.target.reset();
    }, 2500);
  }, 1200);
});

// ========== Smooth reveal on scroll ==========
const revealElements = document.querySelectorAll('.service-card, .glass-card, .project-card');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});
