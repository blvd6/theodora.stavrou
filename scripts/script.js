// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Reveal sections on scroll
const sections = document.querySelectorAll('section.card');
const revealOnScroll = () => {
  const triggerPoint = window.innerHeight * 0.85;
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < triggerPoint) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Toggle mobile (hamburger) navigation
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});
