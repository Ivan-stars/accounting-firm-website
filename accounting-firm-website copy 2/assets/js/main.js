document.addEventListener('DOMContentLoaded', function() {
    // 设置当前语言
    let currentLang = localStorage.getItem('language') || 'en';
    
    // 更新页面上的所有文本
    applyLanguage(currentLang);
    
    // 语言切换
    const langSwitcherLinks = document.querySelectorAll('.lang-dropdown li');
    const currentLangEl = document.querySelector('.current-lang');
    
    // 设置当前语言显示
    updateCurrentLanguageDisplay(currentLang);
    
    langSwitcherLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            currentLang = lang;
            localStorage.setItem('language', lang);
            applyLanguage(lang);
            updateCurrentLanguageDisplay(lang);
            
            // 隐藏下拉菜单
            const langDropdown = document.querySelector('.lang-dropdown');
            langDropdown.classList.remove('show');
        });
    });
    
    // 更新当前语言显示
    function updateCurrentLanguageDisplay(lang) {
        const flag = currentLangEl.querySelector('img');
        const text = currentLangEl.querySelector('span');
        
        if (lang === 'zh-HK') {
            flag.src = 'assets/images/flag-hk.png';
            flag.alt = '繁體中文';
            text.textContent = window.getTranslation('lang_zh_hk', lang);
        } else if (lang === 'zh-CN') {
            flag.src = 'assets/images/flag-cn.png';
            flag.alt = '简体中文';
            text.textContent = window.getTranslation('lang_zh_cn', lang);
        } else if (lang === 'en') {
            flag.src = 'assets/images/flag-en.png';
            flag.alt = 'English';
            text.textContent = window.getTranslation('lang_en', lang);
        }
        
        // 确保国旗和文本紧密结合
        currentLangEl.innerHTML = '';
        currentLangEl.appendChild(flag);
        currentLangEl.appendChild(text);
    }
    
    // 应用语言翻译
    function applyLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (window.getTranslation) {
                el.textContent = window.getTranslation(key, lang);
            }
        });
        
        // 更新 HTML 标签的 lang 属性
        document.documentElement.lang = lang;
    }
    
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
                this.textContent = window.getTranslation('collapse', currentLang);
            } else {
                this.textContent = window.getTranslation('learn_more', currentLang);
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
    
    // Initialize Service Circles
    initServiceCircles();
});

// Service Circles Highlighting
function initServiceCircles() {
    const serviceCircles = document.querySelectorAll('.circle-link');
    if (serviceCircles.length === 0) return;
    
    // Highlight initial circle based on URL hash
    const hash = window.location.hash;
    if (hash) {
        serviceCircles.forEach(circle => {
            if (circle.getAttribute('href') === hash) {
                circle.querySelector('.circle-icon').style.borderColor = 'var(--primary-color)';
                circle.querySelector('.circle-icon').style.backgroundColor = 'rgba(26, 62, 111, 0.05)';
                circle.querySelector('h3').style.color = 'var(--accent-color)';
            }
        });
    } else {
        // If no hash, highlight the first one
        const firstCircle = serviceCircles[0];
        firstCircle.querySelector('.circle-icon').style.borderColor = 'var(--primary-color)';
        firstCircle.querySelector('.circle-icon').style.backgroundColor = 'rgba(26, 62, 111, 0.05)';
        firstCircle.querySelector('h3').style.color = 'var(--accent-color)';
    }
    
    // Add scroll event to highlight the current section
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.service-section');
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        if (currentSectionId) {
            serviceCircles.forEach(circle => {
                // Reset all
                circle.querySelector('.circle-icon').style.borderColor = 'transparent';
                circle.querySelector('.circle-icon').style.backgroundColor = 'var(--white)';
                circle.querySelector('h3').style.color = 'var(--primary-color)';
                
                // Highlight current
                if (circle.getAttribute('href') === `#${currentSectionId}`) {
                    circle.querySelector('.circle-icon').style.borderColor = 'var(--primary-color)';
                    circle.querySelector('.circle-icon').style.backgroundColor = 'rgba(26, 62, 111, 0.05)';
                    circle.querySelector('h3').style.color = 'var(--accent-color)';
                }
            });
        }
    });
    
    // Add smooth scrolling for service circles
    serviceCircles.forEach(circle => {
        circle.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(circle.getAttribute('href'));
            if (!target) return;
            
            const headerOffset = 100;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Update URL hash without scrolling
            history.pushState(null, null, circle.getAttribute('href'));
        });
    });
}
