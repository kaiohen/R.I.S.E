// Smooth scrolling para links de navegação
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Animação de entrada dos elementos
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Aplicar animação aos elementos
document.querySelectorAll(".section, .feature-card, .step").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease";
  observer.observe(el);
});

// Highlight da navegação ativa
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

    // Seleciona todos os steps
    const steps = document.querySelectorAll('.step');

    // Adiciona evento de click para cada step
    steps.forEach(step => {
        const stepHeader = step.querySelector('.step-header');
        
        stepHeader.addEventListener('click', () => {
            // Toggle apenas do step clicado (não afeta os outros)
            step.classList.toggle('active');
        });

        // Efeitos de hover
        step.addEventListener('mouseenter', () => {
            if (!step.classList.contains('active')) {
                step.style.transform = 'translateY(-2px)';
            }
        });

        step.addEventListener('mouseleave', () => {
            if (!step.classList.contains('active')) {
                step.style.transform = 'translateY(0)';
            }
        });
    });
