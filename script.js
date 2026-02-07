/* ===================================================== */
/* ================= MAIN SITE SCRIPT ================== */
/* ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  enableSmoothScroll();
  observeSections();
  revealOnScroll();
});

/* ===================================================== */
/* ================= Smooth Scroll ===================== */
/* ===================================================== */
function enableSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");

      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

/* ===================================================== */
/* ============ Active Section Highlight =============== */
/* ===================================================== */
function observeSections() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a[href^='#']");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${entry.target.id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    {
      threshold: 0.4
    }
  );

  sections.forEach(section => observer.observe(section));
}

/* ===================================================== */
/* ============ Subtle Scroll Reveal =================== */
/* ===================================================== */
function revealOnScroll() {
  const revealItems = document.querySelectorAll(
    ".workflow-card, .data-card, .prediction-card, .decision-card, .maintenance-card"
  );

  revealItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach(item => observer.observe(item));
}

/* ===================================================== */
/* ============ Dashboard Placeholder ================== */
/* ===================================================== */
/*
  This function is intentionally empty for now.
  You can later use it to:
  - Check Power BI iframe load
  - Show fallback message
  - Open dashboard in new tab
*/
function dashboardFallback() {
  // reserved for future use
}
