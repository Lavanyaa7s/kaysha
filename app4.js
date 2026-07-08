/* ==========================================================================
   KAYSHA V4 — JAVASCRIPT & INTERACTIVE ANIMATIONS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Mobile Hamburger Toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 3. Smooth Scroll & Active Nav State on Scroll
  const sections = document.querySelectorAll('section[id], footer[id]');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
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

  // 4. Scroll Reveal Animations (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal-fade, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Unobserve to keep them visible once revealed
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // 5. Interactive Crisp Gallery Hover
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.borderColor = '#F26522';
    });
    item.addEventListener('mouseleave', () => {
      item.style.borderColor = '#FFFFFF';
    });
  });

  console.log(" KaySha V4 (Cream & Forest Green Bistro) Loaded Successfully!");
});
