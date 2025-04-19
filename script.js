// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Enhanced navbar background change on scroll with parallax effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        navbar.style.backdropFilter = 'blur(15px)';
        navbar.classList.add('scrolled');
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.6)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.classList.remove('scrolled');
    }
    
    // Parallax effect for sections
    document.querySelectorAll('section').forEach(section => {
        const distance = section.getBoundingClientRect().top;
        const sectionImages = section.querySelectorAll('img');
        const sectionHeadings = section.querySelectorAll('h2, h3');
        
        if (sectionImages.length) {
            sectionImages.forEach(img => {
                // Subtle parallax for images
                img.style.transform = `translateY(${distance * 0.05}px)`;
            });
        }
        
        if (sectionHeadings.length) {
            sectionHeadings.forEach(heading => {
                // Subtle parallax for headings
                heading.style.transform = `translateY(${distance * 0.03}px)`;
            });
        }
    });
});

// Enhanced animation for sections with reveal effects
const fadeOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px"
};

const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px"
};

// Fade in sections
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            fadeObserver.unobserve(entry.target);
        }
    });
}, fadeOptions);

// Card reveal staggered animation
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Staggered animations
            setTimeout(() => {
                entry.target.classList.add('fade-in');
            }, index * 150);
            cardObserver.unobserve(entry.target);
        }
    });
}, appearOptions);

// Animate section titles
const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const title = entry.target;
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
            titleObserver.unobserve(title);
        }
    });
}, {
    threshold: 0.8,
    rootMargin: "0px 0px -100px 0px"
});

// Observe all sections for fade-in
document.querySelectorAll('section').forEach((section) => {
    fadeObserver.observe(section);
    
    // Add initial styles to section titles for animation
    const sectionTitle = section.querySelector('.section-title');
    if (sectionTitle) {
        sectionTitle.style.opacity = '0';
        sectionTitle.style.transform = 'translateY(30px)';
        sectionTitle.style.transition = 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)';
        titleObserver.observe(sectionTitle);
    }
});

// Observe all cards for staggered animations
document.querySelectorAll('.project-card, .skill-category, .skill-chart, .contact-card').forEach((card) => {
    cardObserver.observe(card);
});

// Add active class to navigation links based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Enhanced Charts initialization using Chart.js with animations
document.addEventListener('DOMContentLoaded', function() {
    // Web Technologies Chart with enhanced animations
    const webTechCtx = document.getElementById('webTechChart').getContext('2d');
    new Chart(webTechCtx, {
        type: 'bar',
        data: {
            labels: ['HTML/CSS', 'Bootstrap', 'Express', 'MongoDB'],
            datasets: [{
                label: 'Web Technologies',
                data: [90, 85, 70, 60],
                backgroundColor: [
                    'rgba(255, 193, 7, 0.7)',
                    'rgba(255, 107, 107, 0.7)',
                    'rgba(78, 205, 196, 0.7)',
                    'rgba(255, 193, 7, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 193, 7, 1)',
                    'rgba(255, 107, 107, 1)',
                    'rgba(78, 205, 196, 1)',
                    'rgba(255, 193, 7, 1)'
                ],
                borderWidth: 2,
                borderRadius: 8,
                hoverBackgroundColor: [
                    'rgba(255, 193, 7, 0.9)',
                    'rgba(255, 107, 107, 0.9)',
                    'rgba(78, 205, 196, 0.9)',
                    'rgba(255, 193, 7, 0.9)'
                ],
                hoverBorderColor: [
                    'rgba(255, 193, 7, 1)',
                    'rgba(255, 107, 107, 1)',
                    'rgba(78, 205, 196, 1)',
                    'rgba(255, 193, 7, 1)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        color: '#2d3748',
                        font: {
                            family: 'Poppins',
                            size: 12
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#2d3748',
                        font: {
                            family: 'Poppins',
                            size: 12
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    titleColor: '#333',
                    bodyColor: '#333',
                    bodyFont: {
                        family: 'Poppins'
                    },
                    titleFont: {
                        family: 'Poppins',
                        weight: 'bold'
                    },
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    borderWidth: 1,
                    cornerRadius: 8,
                    boxPadding: 10,
                    displayColors: false
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart',
                delay: function(context) {
                    return context.dataIndex * 200;
                }
            }
        }
    });

    // Create Programming Languages Chart
    const langCtx = document.getElementById('languagesChart').getContext('2d');
    new Chart(langCtx, {
        type: 'radar',
        data: {
            labels: ['C', 'C++', 'Python', 'Java', 'JavaScript'],
            datasets: [{
                label: 'Skill Level',
                data: [75, 80, 85, 70, 90],
                backgroundColor: 'rgba(255, 107, 107, 0.4)',
                borderColor: 'rgba(255, 107, 107, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 107, 107, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 107, 107, 1)',
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    pointLabels: {
                        color: '#2d3748',
                        font: {
                            family: 'Poppins',
                            size: 12
                        }
                    },
                    ticks: {
                        backdropColor: 'transparent',
                        color: '#2d3748',
                        font: {
                            family: 'Poppins',
                            size: 10
                        }
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    titleColor: '#333',
                    bodyColor: '#333',
                    bodyFont: {
                        family: 'Poppins'
                    },
                    titleFont: {
                        family: 'Poppins',
                        weight: 'bold'
                    },
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    borderWidth: 1,
                    cornerRadius: 8,
                    boxPadding: 10,
                    displayColors: false
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    });

    // Initialize tilt effect
    initTiltEffect();
});

// Enhanced roadmap item animations
const roadmapItems = document.querySelectorAll('.roadmap-item');
const roadmapObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('roadmap-animate');
            }, index * 300); // Increased stagger time
        }
    });
}, {
    threshold: 0.2
});

roadmapItems.forEach(item => {
    roadmapObserver.observe(item);
});

// Enhanced Progress bar animation
const progressBars = document.querySelectorAll('.progress-bar');
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.getAttribute('data-width') || entry.target.style.width;
            entry.target.style.width = '0%';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 300);
        }
    });
}, {
    threshold: 0.5
});

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// Enhanced typing effect for hero section with cursor
document.addEventListener('DOMContentLoaded', function() {
    const heroText = document.querySelector('.hero-content h2');
    if (heroText) {
        const text = heroText.textContent;
        heroText.innerHTML = '<span class="typing-text"></span><span class="cursor">|</span>';
        const typingText = heroText.querySelector('.typing-text');
        const cursor = heroText.querySelector('.cursor');
        let i = 0;
        
        // Add cursor style
        cursor.style.display = 'inline-block';
        cursor.style.marginLeft = '2px';
        cursor.style.fontWeight = '100';
        cursor.style.animation = 'blink 1s infinite';
        
        // Add @keyframes for cursor blink animation
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        function typeWriter() {
            if (i < text.length) {
                typingText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, Math.random() * 50 + 80); // Varied typing speed for realism
            }
        }
        
        // Start typing effect with a delay
        setTimeout(typeWriter, 1000);
    }
});

// Enhanced mobile menu toggle with animation
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
    
    // Add scale animation
    document.querySelectorAll('.nav-links li').forEach((link, index) => {
        if (navLinks.classList.contains('active')) {
            link.style.animation = `fadeInDown 0.5s ease forwards ${index * 0.1 + 0.2}s`;
            link.style.opacity = '0';
        } else {
            link.style.animation = 'none';
            link.style.opacity = '1';
        }
    });
});

// Add @keyframes for menu animation
const menuStyle = document.createElement('style');
menuStyle.innerHTML = `
    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(menuStyle);

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('active');
    });
});

// Enhanced parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.4}px`;
    }
});

// Initialize 3D tilt effect
function initTiltEffect() {
    const tiltCards = document.querySelectorAll('.project-card, .skill-card, .tilt-effect');
    
    tiltCards.forEach(card => {
        // Add inner element for 3D transform
        const inner = document.createElement('div');
        inner.className = 'js-tilt-inner';
        
        // Move all children to inner element
        while (card.firstChild) {
            inner.appendChild(card.firstChild);
        }
        
        // Add glare effect
        const glare = document.createElement('div');
        glare.className = 'js-tilt-glare';
        inner.appendChild(glare);
        
        // Add inner to card
        card.appendChild(inner);
        
        // Add event listeners
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
    });
    
    function handleTilt(e) {
        const card = this;
        const inner = card.querySelector('.js-tilt-inner');
        const glare = card.querySelector('.js-tilt-glare');
        const { width, height, left, top } = card.getBoundingClientRect();
        
        // Calculate tilt
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        // Calculate rotation and shift
        const tiltX = (y - 0.5) * 20; // 20 degree max tilt
        const tiltY = (0.5 - x) * 20; // 20 degree max tilt
        
        // Apply transform
        inner.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(0)`;
        
        // Update glare position
        glare.style.opacity = '0.7';
        glare.style.transform = `translateX(${x * 100}%) translateY(${y * 100}%)`;
    }
    
    function resetTilt() {
        const inner = this.querySelector('.js-tilt-inner');
        const glare = this.querySelector('.js-tilt-glare');
        
        inner.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
        glare.style.opacity = '0';
    }
}

// Create custom cursor effect for links
document.addEventListener('DOMContentLoaded', function() {
    // Create custom cursor elements
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    // Add cursor style
    const cursorStyle = document.createElement('style');
    cursorStyle.innerHTML = `
        .custom-cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: rgba(255, 193, 7, 0.3);
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: width 0.2s, height 0.2s, background-color 0.2s;
            mix-blend-mode: exclusion;
        }
        
        .cursor-grow {
            width: 40px;
            height: 40px;
            background-color: rgba(255, 193, 7, 0.2);
            mix-blend-mode: difference;
        }
        
        a, button, .project-card, .skill-items span, .contact-card {
            cursor: none;
        }
    `;
    document.head.appendChild(cursorStyle);
    
    // Move custom cursor with mouse
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-items span, .contact-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            cursor.classList.add('cursor-grow');
        });
        el.addEventListener('mouseleave', function() {
            cursor.classList.remove('cursor-grow');
        });
    });
});

// Animate numbers with count-up effect
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const countElement = entry.target;
            const targetCount = parseInt(countElement.getAttribute('data-count'));
            const duration = 2000; // ms
            const frameRate = 40; // fps
            const totalFrames = duration * frameRate / 1000;
            let frame = 0;
            
            const counter = setInterval(() => {
                frame++;
                const progress = frame / totalFrames;
                const currentCount = Math.round(progress * targetCount);
                
                // Use easing function for smoother animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const easedCount = Math.round(easeOutQuart * targetCount);
                
                if (frame === totalFrames) {
                    clearInterval(counter);
                    countElement.textContent = targetCount;
                } else {
                    countElement.textContent = easedCount;
                }
            }, 1000 / frameRate);
            
            counterObserver.unobserve(countElement);
        }
    });
}, {
    threshold: 0.5
});

// Observe all elements with count-up animation
document.querySelectorAll('[data-count]').forEach(counter => {
    counterObserver.observe(counter);
});

// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Initialize dark mode based on user preference or localStorage
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    
    // Set theme based on stored preference or system preference
    if (storedTheme === 'dark' || (!storedTheme && prefersDarkMode)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateDarkModeIcon(true);
    }
    
    // Add click event listener to the toggle button
    darkModeToggle.addEventListener('click', function() {
        // Get current theme
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const isDark = currentTheme === 'dark';
        
        // Add transition class for smooth theme change
        document.body.classList.add('theme-transition');
        document.querySelectorAll('section, .navbar, .project-card, .skill-category, .roadmap-content, .education-card, .exp-card, .achievement-item, .contact-card, footer')
            .forEach(element => {
                element.classList.add('theme-transition');
            });
        
        // Toggle theme
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        
        // Update toggle icon
        updateDarkModeIcon(!isDark);
        
        // Remove transition class after animation
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
            document.querySelectorAll('.theme-transition').forEach(element => {
                element.classList.remove('theme-transition');
            });
        }, 500);
    });
    
    // Function to update the toggle icon
    function updateDarkModeIcon(isDark) {
        const moonIcon = document.createElement('i');
        moonIcon.className = 'fas fa-moon';
        
        const sunIcon = document.createElement('i');
        sunIcon.className = 'fas fa-sun';
        
        darkModeToggle.innerHTML = '';
        darkModeToggle.appendChild(isDark ? sunIcon : moonIcon);
    }
});

// Add particle animation to the hero section
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        createParticles(hero);
    }
    
    // Initialize animations for timeline items
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.2
    });
    
    document.querySelectorAll('.timeline-item').forEach(item => {
        timelineObserver.observe(item);
    });
    
    // Initialize animations for scrolling elements
    initScrollAnimations();
    
    // Initialize text scramble effect for section titles
    initTextScramble();
    
    // Add floating effect to icons
    animateIcons();
    
    // Add mouse move parallax effect to hero section
    addHeroParallax();
});

// Create particles for hero background
function createParticles(container) {
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        let particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.1;
        const animDuration = Math.random() * 20 + 10;
        const animDelay = Math.random() * 10;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.opacity = opacity;
        particle.style.animation = `float ${animDuration}s infinite ease-in-out ${animDelay}s`;
        
        // Random color
        const colors = [
            'rgba(255, 193, 7, 0.6)',  // Yellow
            'rgba(255, 107, 107, 0.6)', // Pink
            'rgba(78, 205, 196, 0.6)'   // Teal
        ];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Append to container
        container.appendChild(particle);
    }
}

// Initialize text scramble effect
function initTextScramble() {
    class TextScramble {
        constructor(el) {
            this.el = el;
            // Only use letters instead of symbols
            this.chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            this.update = this.update.bind(this);
        }
        
        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => this.resolve = resolve);
            this.queue = [];
            
            // Store the original element content to restore later
            this.originalContent = this.el.innerHTML;
            
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 20); // Reduced scramble time
                const end = start + Math.floor(Math.random() * 20);
                this.queue.push({ from, to, start, end });
            }
            
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }
        
        update() {
            let output = '';
            let complete = 0;
            
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];
                
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        // Only use letters that are in the final word when possible
                        if (to && to.match(/[a-zA-Z]/)) {
                            // 70% chance to use a letter from the actual word
                            if (Math.random() < 0.7) {
                                const chars = this.chars.split('');
                                char = chars[Math.floor(Math.random() * chars.length)];
                            } else {
                                char = to; // Sometimes show the actual letter
                            }
                        } else {
                            char = from; // Keep non-letter characters the same
                        }
                        this.queue[i].char = char;
                    }
                    output += `<span class="scramble-char">${char}</span>`;
                } else {
                    output += from;
                }
            }
            
            this.el.innerHTML = output;
            
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
        
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
    }
    
    // Add text scramble to section titles on hover
    document.querySelectorAll('.section-title').forEach(title => {
        const scrambler = new TextScramble(title);
        const originalText = title.innerText;
        
        title.addEventListener('mouseover', () => {
            scrambler.setText(originalText);
        });
        
        // Make sure to restore original text when mouse leaves
        title.addEventListener('mouseleave', () => {
            setTimeout(() => {
                title.innerHTML = originalText;
            }, 500);
        });
    });
    
    // Exclude name element from scramble effect
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        nameElement.classList.add('no-scramble');
    }
}

// Initialize scroll-based animations
function initScrollAnimations() {
    // Add scroll-triggered animations to all sections
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a reveal animation to all direct children
                entry.target.querySelectorAll(':scope > div, :scope > h2, :scope > h3, :scope > p').forEach((element, index) => {
                    element.style.opacity = '0';
                    element.style.animation = `fadeInUp 0.8s forwards ${index * 0.2}s`;
                    element.style.opacity = '1';
                });
                
                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Animate icons with continuous effects
function animateIcons() {
    const icons = document.querySelectorAll('.edu-icon i, .exp-icon i, .achievement-icon i, .contact-icon i');
    
    icons.forEach(icon => {
        // Random animation
        const animations = ['pulse', 'bounce', 'rotate'];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        const animationDuration = Math.random() * 2 + 3;
        
        icon.style.animation = `${randomAnimation} ${animationDuration}s infinite ease-in-out`;
        icon.style.animationDelay = `${Math.random() * 2}s`;
    });
}

// Add parallax effect to hero section on mouse move
function addHeroParallax() {
    const hero = document.querySelector('.hero');
    const shapes = document.querySelectorAll('.shape');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && shapes.length) {
        hero.addEventListener('mousemove', (e) => {
            const { offsetWidth: width, offsetHeight: height } = hero;
            const { clientX, clientY } = e;
            
            const xPos = (clientX / width - 0.5) * 30;
            const yPos = (clientY / height - 0.5) * 30;
            
            shapes.forEach((shape, index) => {
                const factor = (index + 1) * 0.2;
                shape.style.transform = `translate(${xPos * factor}px, ${yPos * factor}px)`;
            });
            
            // Subtle movement of hero content
            if (heroContent) {
                heroContent.style.transform = `translate(${xPos * 0.05}px, ${yPos * 0.05}px)`;
            }
        });
    }
}

// Add CSS for particle animation
const particleStyles = document.createElement('style');
particleStyles.innerHTML = `
    .particle {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
    }
    
    .scramble-char {
        display: inline-block;
        color: var(--accent);
    }
    
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0);
        }
        25% {
            transform: translate(10px, 10px);
        }
        50% {
            transform: translate(20px, 0);
        }
        75% {
            transform: translate(10px, -10px);
        }
    }
`;
document.head.appendChild(particleStyles); 