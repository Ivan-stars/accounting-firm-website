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
        
        // 翻译服务页面内容
        translateServicesContent(lang);
    }
    
    // 翻译服务页面的硬编码内容
    function translateServicesContent(lang) {
        // 检查是否是服务页面
        if (window.location.pathname.includes('services.html')) {
            // 服务页面标题翻译
            const serviceHeaders = {
                'audit': {
                    'zh-CN': '审计鉴证',
                    'zh-HK': '審計鑒證',
                    'en': 'Audit & Assurance'
                },
                'tax': {
                    'zh-CN': '税务筹划',
                    'zh-HK': '稅務籌劃',
                    'en': 'Tax Planning'
                },
                'consulting': {
                    'zh-CN': '企业咨询',
                    'zh-HK': '企業諮詢',
                    'en': 'Business Consulting'
                },
                'risk': {
                    'zh-CN': '风险管理',
                    'zh-HK': '風險管理',
                    'en': 'Risk Management'
                }
            };
            
            // 服务介绍段落翻译
            const serviceIntros = {
                'audit': {
                    'zh-CN': '作为专业的审计鉴证服务提供者，我们致力于帮助企业提升财务信息的透明度和可信度。在香港，审计鉴证不仅是法律的要求，更是企业赢得投资者信任、稳健发展的关键。我们严格遵循香港会计师公会（HKICPA）制定的《香港审计及鉴证准则》，确保每一份审计报告都符合国际标准，体现最高的独立性和专业水准。<br><br>无论是法定财务审计，还是内部控制审核、财务预测鉴证等多样化服务，我们都以严谨细致的态度，获取充分的审计证据，帮助客户准确反映财务状况，满足监管和市场的多重需求。我们的团队深谙香港公司条例及相关法规，确保审计流程合规高效，助力企业稳健运营。',
                    'zh-HK': '作為專業的審計鑒證服務提供者，我們致力於幫助企業提升財務信息的透明度和可信度。在香港，審計鑒證不僅是法律的要求，更是企業贏得投資者信任、穩健發展的關鍵。我們嚴格遵循香港會計師公會（HKICPA）制定的《香港審計及鑒證準則》，確保每一份審計報告都符合國際標準，體現最高的獨立性和專業水準。<br><br>無論是法定財務審計，還是內部控制審核、財務預測鑒證等多樣化服務，我們都以嚴謹細緻的態度，獲取充分的審計證據，幫助客戶準確反映財務狀況，滿足監管和市場的多重需求。我們的團隊深諳香港公司條例及相關法規，確保審計流程合規高效，助力企業穩健運營。',
                    'en': 'As a professional audit assurance service provider, we are committed to helping businesses enhance the transparency and credibility of their financial information. In Hong Kong, audit assurance is not only a legal requirement but also key to winning investor trust and sustainable development. We strictly adhere to the Hong Kong Standards on Auditing and Assurance established by the Hong Kong Institute of Certified Public Accountants (HKICPA), ensuring that every audit report meets international standards with the highest level of independence and professionalism.<br><br>Whether it\'s statutory financial audits, internal control reviews, or financial forecast assurance, we approach each service with rigorous attention to detail, gathering sufficient audit evidence to help clients accurately reflect their financial position and meet various regulatory and market requirements. Our team is well-versed in the Hong Kong Companies Ordinance and related regulations, ensuring efficient and compliant audit processes that support stable business operations.'
                },
                'tax': {
                    'zh-CN': '我们的税务团队由在本地与国际税法领域具有丰富经验的专业人士组成，能够为您提供全面的税务筹划与遵从服务。了解当地与全球不断变化的税收环境，是优化企业税务架构、减轻税务负担的关键。<br><br>无论您是本地企业还是跨国集团，我们都能根据您的具体情况，提供量身定制的税务解决方案，帮助您在遵守法规的同时，合理规划税务，最大化企业利益。我们的专业知识涵盖企业所得税、个人税、跨境税务以及转让定价等多个领域，确保为您提供全方位的税务支持。',
                    'zh-HK': '我們的稅務團隊由在本地與國際稅法領域具有豐富經驗的專業人士組成，能夠為您提供全面的稅務籌劃與遵從服務。了解當地與全球不斷變化的稅收環境，是優化企業稅務架構、減輕稅務負擔的關鍵。<br><br>無論您是本地企業還是跨國集團，我們都能根據您的具體情況，提供量身定制的稅務解決方案，幫助您在遵守法規的同時，合理規劃稅務，最大化企業利益。我們的專業知識涵蓋企業所得稅、個人稅、跨境稅務以及轉讓定價等多個領域，確保為您提供全方位的稅務支持。',
                    'en': 'Our tax team consists of professionals with extensive experience in both local and international tax law, providing comprehensive tax planning and compliance services. Understanding the constantly changing tax environment locally and globally is key to optimizing corporate tax structures and reducing tax burdens.<br><br>Whether you are a local business or a multinational group, we can provide tailored tax solutions based on your specific circumstances, helping you to plan your taxes reasonably while complying with regulations to maximize business benefits. Our expertise covers corporate income tax, personal tax, cross-border taxation, transfer pricing, and many other areas, ensuring all-round tax support for you.'
                },
                'consulting': {
                    'zh-CN': '在瞬息万变的商业环境中，企业需要专业的商业咨询服务，以保持竞争优势并实现可持续发展。我们的咨询团队提供全面的企业咨询服务，从公司成立、商业模式优化到业务拓展策略，助力企业在各个发展阶段取得成功。<br><br>我们深入了解不同行业的特点与挑战，能够为客户提供符合行业特性的解决方案。通过与客户紧密合作，我们帮助他们制定明确的发展路径，识别潜在的业务机会，并克服成长过程中的障碍，实现业务目标。',
                    'zh-HK': '在瞬息萬變的商業環境中，企業需要專業的商業諮詢服務，以保持競爭優勢並實現可持續發展。我們的諮詢團隊提供全面的企業諮詢服務，從公司成立、商業模式優化到業務拓展策略，助力企業在各個發展階段取得成功。<br><br>我們深入了解不同行業的特點與挑戰，能夠為客戶提供符合行業特性的解決方案。通過與客戶緊密合作，我們幫助他們制定明確的發展路徑，識別潛在的業務機會，並克服成長過程中的障礙，實現業務目標。',
                    'en': 'In a rapidly changing business environment, companies need professional business consulting services to maintain a competitive edge and achieve sustainable development. Our consulting team provides comprehensive enterprise consulting services, from company establishment and business model optimization to business expansion strategies, helping businesses succeed at every stage of development.<br><br>We have a deep understanding of the characteristics and challenges of different industries and can provide solutions that match industry-specific needs. By working closely with our clients, we help them establish clear development paths, identify potential business opportunities, and overcome obstacles in the growth process to achieve their business goals.'
                },
                'risk': {
                    'zh-CN': '有效的风险管理是企业稳健运营的基石。我们提供全方位的风险管理服务，帮助企业识别、评估和管理各类风险，包括战略风险、运营风险、财务风险以及合规风险。<br><br>通过建立健全的风险管理框架与内控系统，我们协助企业预防潜在风险，减少损失，并在发生意外情况时能够迅速响应。我们的专业团队具备丰富的行业经验，熟悉香港及国际的监管要求，能够为企业提供切实可行的风险管理方案，助力企业长期稳健发展。',
                    'zh-HK': '有效的風險管理是企業穩健運營的基石。我們提供全方位的風險管理服務，幫助企業識別、評估和管理各類風險，包括戰略風險、運營風險、財務風險以及合規風險。<br><br>通過建立健全的風險管理框架與內控系統，我們協助企業預防潛在風險，減少損失，並在發生意外情況時能夠迅速響應。我們的專業團隊具備豐富的行業經驗，熟悉香港及國際的監管要求，能夠為企業提供切實可行的風險管理方案，助力企業長期穩健發展。',
                    'en': 'Effective risk management is the cornerstone of stable business operations. We provide comprehensive risk management services to help businesses identify, assess, and manage various risks, including strategic, operational, financial, and compliance risks.<br><br>By establishing sound risk management frameworks and internal control systems, we assist businesses in preventing potential risks, reducing losses, and responding quickly when unexpected situations occur. Our professional team has rich industry experience and is familiar with Hong Kong and international regulatory requirements, enabling us to provide practical risk management solutions that support long-term stable business development.'
                }
            };
            
            // 审计服务内容翻译
            const auditServiceItems = {
                0: { // 法定审计
                    'zh-CN': '法定审计',
                    'zh-HK': '法定審計',
                    'en': 'Statutory Audit'
                },
                1: { // 内部审计
                    'zh-CN': '内部审计',
                    'zh-HK': '內部審計',
                    'en': 'Internal Audit'
                },
                2: { // 特殊目的审计
                    'zh-CN': '特殊目的审计',
                    'zh-HK': '特殊目的審計',
                    'en': 'Special Purpose Audit'
                },
                3: { // IPO准备审计
                    'zh-CN': 'IPO准备审计',
                    'zh-HK': 'IPO準備審計',
                    'en': 'IPO Preparation Audit'
                }
            };
            
            // 税务服务内容翻译
            const taxServiceItems = {
                0: { // 企业所得税筹划
                    'zh-CN': '企业所得税筹划',
                    'zh-HK': '企業所得稅籌劃',
                    'en': 'Corporate Income Tax Planning'
                },
                1: { // 跨境税务规划
                    'zh-CN': '跨境税务规划',
                    'zh-HK': '跨境稅務規劃',
                    'en': 'Cross-border Tax Planning'
                },
                2: { // 个人税务顾问
                    'zh-CN': '个人税务顾问',
                    'zh-HK': '個人稅務顧問',
                    'en': 'Personal Tax Advisory'
                },
                3: { // 税务合规服务
                    'zh-CN': '税务合规服务',
                    'zh-HK': '稅務合規服務',
                    'en': 'Tax Compliance Services'
                }
            };
            
            // 咨询服务内容翻译
            const consultingServiceItems = {
                0: { // 企业架构规划
                    'zh-CN': '企业架构规划',
                    'zh-HK': '企業架構規劃',
                    'en': 'Corporate Structure Planning'
                },
                1: { // 商业计划书撰写
                    'zh-CN': '商业计划书撰写',
                    'zh-HK': '商業計劃書撰寫',
                    'en': 'Business Plan Writing'
                },
                2: { // 财务管理优化
                    'zh-CN': '财务管理优化',
                    'zh-HK': '財務管理優化',
                    'en': 'Financial Management Optimization'
                },
                3: { // 业务流程重组
                    'zh-CN': '业务流程重组',
                    'zh-HK': '業務流程重組',
                    'en': 'Business Process Restructuring'
                }
            };
            
            // 风险管理服务内容翻译
            const riskServiceItems = {
                0: { // 企业风险评估
                    'zh-CN': '企业风险评估',
                    'zh-HK': '企業風險評估',
                    'en': 'Enterprise Risk Assessment'
                },
                1: { // 内控体系设计
                    'zh-CN': '内控体系设计',
                    'zh-HK': '內控體系設計',
                    'en': 'Internal Control System Design'
                },
                2: { // 合规咨询
                    'zh-CN': '合规咨询',
                    'zh-HK': '合規諮詢',
                    'en': 'Compliance Consulting'
                },
                3: { // 危机管理
                    'zh-CN': '危机管理',
                    'zh-HK': '危機管理',
                    'en': 'Crisis Management'
                }
            };
            
            // 翻译服务标题
            const serviceSections = document.querySelectorAll('.service-section');
            serviceSections.forEach(section => {
                const sectionId = section.id;
                const headerTitle = section.querySelector('h2');
                
                if (headerTitle && serviceHeaders[sectionId] && serviceHeaders[sectionId][lang]) {
                    headerTitle.textContent = serviceHeaders[sectionId][lang];
                }
                
                // 翻译服务介绍段落
                const introText = section.querySelector('.service-intro');
                if (introText && serviceIntros[sectionId] && serviceIntros[sectionId][lang]) {
                    introText.innerHTML = serviceIntros[sectionId][lang];
                }
                
                // 根据服务类型翻译对应的服务项目
                let serviceItems;
                switch(sectionId) {
                    case 'audit':
                        serviceItems = auditServiceItems;
                        break;
                    case 'tax':
                        serviceItems = taxServiceItems;
                        break;
                    case 'consulting':
                        serviceItems = consultingServiceItems;
                        break;
                    case 'risk':
                        serviceItems = riskServiceItems;
                        break;
                }
                
                if (serviceItems) {
                    const items = section.querySelectorAll('.service-item h3');
                    items.forEach((item, index) => {
                        if (serviceItems[index] && serviceItems[index][lang]) {
                            item.textContent = serviceItems[index][lang];
                        }
                    });
                }
            });
        }
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
