// Smooth Scrolling for Internal Links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetID = this.getAttribute('href').slice(1); // Get the target section's ID
        const targetSection = document.getElementById(targetID);
        
        if (targetSection) {
            e.preventDefault(); // Prevent default link behavior (jumping)
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section smoothly
        }
    });
});

// Highlight Active Nav Link Based on Scroll Position
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // Check if the section is in the viewport
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    // Highlight the nav link that corresponds to the current section
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Toggle Active State for Navbar Links
document.querySelectorAll('.navbar-nav .nav-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.navbar-nav .nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
        item.classList.add('active');
    });
});

// Optional: Dynamically Changing Hero Section Text (Change Text Button)
document.getElementById('changeTextButton')?.addEventListener('click', function() {
    const heroTitle = document.querySelector('.hero-section h1');
    const heroDescription = document.querySelector('.hero-section p');

    if (heroTitle && heroDescription) {
        heroTitle.innerHTML = "Hello, I'm Kiran Suraj!";
        heroDescription.innerHTML = "Welcome to my professional site!";
    }
});

// Contact Form Validation (Optional) - Example of Client-side Form Validation
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!email || !message) {
        e.preventDefault(); // Prevent form submission if validation fails
        alert('Please fill in all fields!');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

// Log to confirm that the script is running correctly
console.log("JavaScript is running! All functionality should be working.");
