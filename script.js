// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 25, 47, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'rgba(10, 25, 47, 0.85)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Add animation to sections when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});

// Charts initialization using Chart.js
document.addEventListener('DOMContentLoaded', function() {
    // Language Skills Chart
    const languagesCtx = document.getElementById('languagesChart').getContext('2d');
    const languagesChart = new Chart(languagesCtx, {
        type: 'radar',
        data: {
            labels: ['C', 'C++', 'Python', 'JavaScript', 'Java'],
            datasets: [{
                label: 'Programming Languages',
                data: [90, 80, 70, 60, 40],
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                borderColor: 'rgba(16, 185, 129, 1)',
                pointBackgroundColor: 'rgba(16, 185, 129, 1)',
                pointBorderColor: '#fff',
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    pointLabels: {
                        color: '#e6f1ff',
                        font: {
                            size: 14
                        }
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {
                        stepSize: 20,
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#e6f1ff'
                    }
                }
            }
        }
    });

    // Web Technologies Chart
    const webTechCtx = document.getElementById('webTechChart').getContext('2d');
    new Chart(webTechCtx, {
        type: 'bar',
        data: {
            labels: ['HTML/CSS', 'Bootstrap', 'Express', 'MongoDB'],
            datasets: [{
                label: 'Web Technologies',
                data: [90, 85, 70, 60],
                backgroundColor: 'rgba(100, 255, 218, 0.2)',
                borderColor: 'rgba(100, 255, 218, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#e6f1ff'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#e6f1ff'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#e6f1ff'
                    }
                }
            }
        }
    });
});

// Animate roadmap items on scroll
const roadmapItems = document.querySelectorAll('.roadmap-item');
const roadmapObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('roadmap-animate');
        }
    });
}, {
    threshold: 0.2
});

roadmapItems.forEach(item => {
    roadmapObserver.observe(item);
});

// Progress bar animation
const progressBars = document.querySelectorAll('.progress-bar');
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0%';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
        }
    });
}, {
    threshold: 0.2
});

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// Add typing effect to hero section
const heroText = document.querySelector('.hero-content h2');
const text = heroText.textContent;
heroText.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect when page loads
window.addEventListener('load', typeWriter);

// Add this to your existing script.js
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('active');
    });
});

// Enhanced scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}); 