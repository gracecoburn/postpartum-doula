// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const menuToggle = document.querySelector('.menu-toggle');
    const navPanel = document.querySelector('.nav-panel');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactFormSubmit(this);
        });
    }

    if (menuToggle && navPanel) {
        menuToggle.addEventListener('click', function() {
            const isOpen = navPanel.classList.toggle('open');
            menuToggle.classList.toggle('open', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navPanel.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navPanel.classList.remove('open');
                menuToggle.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        document.addEventListener('click', function(event) {
            if (!navPanel.contains(event.target) && !menuToggle.contains(event.target)) {
                navPanel.classList.remove('open');
                menuToggle.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
});

function handleContactFormSubmit(form) {
    const formStatus = document.getElementById('formStatus');
    
    // Get form data
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Validate form
    if (!data.name || !data.email || !data.subject || !data.message) {
        showFormStatus('Please fill in all required fields.', 'error', formStatus);
        return;
    }
    
    // Validate email format
    if (!isValidEmail(data.email)) {
        showFormStatus('Please enter a valid email address.', 'error', formStatus);
        return;
    }
    
    // Submit form to email service
    submitFormToEmail(data, formStatus, form);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormStatus(message, type, element) {
    element.textContent = message;
    element.className = `form-status show ${type}`;
    
    // Auto-hide error messages after 5 seconds
    if (type === 'error') {
        setTimeout(() => {
            element.classList.remove('show');
        }, 5000);
    }
}

function submitFormToEmail(data, formStatus, form) {
    // IMPORTANT: This is a placeholder implementation
    // You will need to set up a backend service to handle email sending
    // See README.md for instructions on setting up email functionality
    
    // Option 1: Using FormSubmit.co (Free, no backend required)
    // Option 2: Using your own backend (Node.js, Python, etc.)
    // Option 3: Using a service like EmailJS
    
    // For now, show a temporary success message
    console.log('Form data:', data);
    
    showFormStatus(
        'Thank you for your message! I will get back to you soon.',
        'success',
        formStatus
    );
    
    // Reset form
    form.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        formStatus.classList.remove('show');
    }, 5000);
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});