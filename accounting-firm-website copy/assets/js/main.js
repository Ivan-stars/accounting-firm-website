document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Submenu Toggle for Mobile
    const hasSubmenu = document.querySelectorAll('.has-submenu');
    
    hasSubmenu.forEach(item => {
        // Create toggle element for mobile view
        const submenuToggle = document.createElement('span');
        submenuToggle.className = 'submenu-toggle';
        item.appendChild(submenuToggle);
        
        // Handle toggle click
        submenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const parent = this.parentElement;
            parent.classList.toggle('show-submenu');
        });
    });
    
    // Language Switcher Toggle
    const langSwitcher = document.querySelector('.current-lang');
    const langDropdown = document.querySelector('.lang-dropdown');
    
    if (langSwitcher) {
        langSwitcher.addEventListener('click', function() {
            langDropdown.classList.toggle('show');
        });
        
        // Close language dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.language-switcher')) {
                langDropdown.classList.remove('show');
            }
        });
    }
    
    // Header Scroll Effect
    const siteHeader = document.getElementById('site-header');
    
    if (siteHeader) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        });
    }
    
    // Hero Carousel Initialization (if exists)
    const swiperElement = document.querySelector('.swiper');
    
    if (swiperElement && typeof Swiper !== 'undefined') {
        const heroSwiper = new Swiper('.swiper', {
            slidesPerView: 1,
            speed: 1000,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
    
    // Service Cards Toggle
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceCard = this.closest('.service-card');
            serviceCard.classList.toggle('show-details');
            
            // Change text
            if (serviceCard.classList.contains('show-details')) {
                this.textContent = '收起';
            } else {
                this.textContent = '了解更多';
            }
        });
    });
    
    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    
    function animateCounter() {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const count = parseInt(counter.innerText);
            const increment = Math.ceil(target / 50);
            
            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(animateCounter, 40);
            } else {
                counter.innerText = target;
            }
        });
    }
    
    // Start counter animation when in viewport
    const counterSection = document.querySelector('.counter-container');
    
    if (counterSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounter();
                observer.unobserve(counterSection);
            }
        }, { threshold: 0.5 });
        
        observer.observe(counterSection);
    }
    
    // Client Logo Carousel (Auto Scroll)
    const logoContainer = document.querySelector('.client-logos');
    
    if (logoContainer) {
        // Clone logos for infinite scroll effect
        const logos = logoContainer.querySelectorAll('.logo-item');
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            logoContainer.appendChild(clone);
        });
        
        // Start the automatic scroll
        let scrollPos = 0;
        const scrollSpeed = 1;
        const containerWidth = logoContainer.scrollWidth / 2;
        
        function autoScroll() {
            scrollPos += scrollSpeed;
            if (scrollPos >= containerWidth) {
                scrollPos = 0;
            }
            logoContainer.style.transform = `translateX(-${scrollPos}px)`;
            requestAnimationFrame(autoScroll);
        }
        
        autoScroll();
    }
    
    // Service Tabs (for services.html)
    const tabLinks = document.querySelectorAll('.tab-link');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all tabs
            tabLinks.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Scroll to the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = siteHeader.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form Validation & Submission
    const contactForm = document.querySelector('.contact-form');
    const successMessage = document.querySelector('.form-success-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic Form Validation
            const requiredFields = contactForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // If email field exists, validate email format
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    isValid = false;
                    emailField.classList.add('error');
                }
            }
            
            // Form submission (in a real project, you would send data to server here)
            if (isValid) {
                // Simulate form submission with a delay
                contactForm.classList.add('submitting');
                
                setTimeout(() => {
                    contactForm.classList.remove('submitting');
                    contactForm.style.display = 'none';
                    
                    if (successMessage) {
                        successMessage.style.display = 'block';
                    }
                    
                    // Reset form
                    contactForm.reset();
                }, 1500);
            }
        });
        
        // Clear error state on input
        const formInputs = contactForm.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                this.classList.remove('error');
            });
        });
    }
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not(.tab-link)');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (targetId === '#' || !targetId) return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                const headerHeight = siteHeader.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                history.pushState(null, null, targetId);
            }
        });
    });
});
