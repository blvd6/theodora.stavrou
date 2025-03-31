document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

const sections = document.querySelectorAll('section');
const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        if (section.getBoundingClientRect().top < triggerBottom) {
            section.classList.add('visible');
        }
    });
};

function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

window.addEventListener('scroll', debounce(revealOnScroll));
revealOnScroll();

document.querySelector('.hamburger').onclick = () => {
    document.querySelector('.nav-links').classList.toggle('active');
};

// Skills Chart Interaction
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseover', () => {
        const skillName = skill.getAttribute('data-skill');
        alert(`Information about ${skillName} skill goes here!`); // Replace with actual information display
    });
});

// Portfolio Modal (Example)
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        const projectName = project.getAttribute('data-project');
        alert(`More details about ${projectName} project!`); // Replace with a modal display
    });
});
