// 语言定义
const translations = {
    // 简体中文
    'zh-CN': {
        // 语言名称
        'lang_en': 'English',
        'lang_zh_hk': '繁體中文',
        'lang_zh_cn': '简体中文',
        
        // 导航
        'nav_home': '首页',
        'nav_about': '关于我们',
        'nav_services': '专业服务',
        'nav_contact': '联络我们',
        'nav_company_intro': '公司简介',
        'nav_team': '团队介绍',
        'nav_certificates': '资质证书',
        'nav_audit': '审计鉴证',
        'nav_tax': '税务筹划',
        'nav_consulting': '企业咨询',
        'nav_risk': '风险管理',

        // 轮播图
        'slide1_title': '专业会计解决方案',
        'slide1_desc': '为您的企业提供全面、精准的财务支持',
        'slide1_btn': '了解服务',
        'slide2_title': '精准税务规划',
        'slide2_desc': '量身定制的税务策略，合法合理优化税负',
        'slide2_btn': '咨询专家',
        'slide3_title': '30年本地经验',
        'slide3_desc': '扎根本土，深度了解本地商业环境与法规',
        'slide3_btn': '关于我们',

        // 核心服务
        'core_services': '核心服务',
        'core_services_subtitle': '为您提供全方位的专业会计及商业咨询服务',
        'service_audit': '审计鉴证',
        'service_audit_desc': '专业审计报告，确保财务透明与合规',
        'service_tax': '税务筹划',
        'service_tax_desc': '优化税务结构，合法最大化税收利益',
        'service_consulting': '企业咨询',
        'service_consulting_desc': '战略性商业建议，助力企业稳健发展',
        'view_all_services': '查看全部服务',
        'learn_more': '了解更多',
        'collapse': '收起',

        // 服务详情
        'service_audit_1': '法定审计',
        'service_audit_2': '内部审计',
        'service_audit_3': '特殊目的审计',
        'service_audit_4': 'IPO准备审计',
        'service_tax_1': '企业所得税筹划',
        'service_tax_2': '跨境税务规划',
        'service_tax_3': '个人税务顾问',
        'service_tax_4': '税务合规服务',
        'service_consulting_1': '企业架构规划',
        'service_consulting_2': '商业计划书撰写',
        'service_consulting_3': '财务管理优化',
        'service_consulting_4': '业务流程重组',

        // 信任背书
        'trust_title': '值得信赖的专业团队',
        'counter_clients': '服务企业数',
        'counter_experience': '专业经验(年)',
        'counter_team': '专业团队人数',
        'counter_satisfaction': '客户满意度(%)',

        // 联系我们
        'contact_cta_title': '需要专业财务建议？',
        'contact_cta_desc': '联系我们的顾问团队，获取量身定制的专业解决方案',
        'contact_cta_btn': '立即咨询',

        // 页脚
        'footer_desc': '提供卓越会计与税务服务30年，为企业与个人提供全面财务解决方案。',
        'footer_links': '快速链接',
        'footer_contact': '联系方式',
        'copyright': '© 2023 Raymond C W Tam and Co. 保留所有权利。',
        
        // 关于我们页面
        'about_our_story': '我们的故事',
        'about_story_content': '创立于1993年，我们是香港一家领先的专业会计师事务所，专注于为本地及国际客户提供高质量的会计、审计、税务及商业咨询服务。',
        'about_our_mission': '我们的使命',
        'about_mission_content': '致力于通过专业知识与创新服务，协助客户解决复杂财务问题，实现业务目标与持续增长。',
        'about_core_values': '核心价值观',
        'about_value_integrity': '诚信',
        'about_value_integrity_desc': '坚持最高道德标准，保持专业操守',
        'about_value_professional': '专业',
        'about_value_professional_desc': '不断提升专业知识，追求卓越服务质量',
        'about_value_innovation': '创新',
        'about_value_innovation_desc': '采用先进技术与方法，提供创新解决方案',
        'about_value_client': '客户至上',
        'about_value_client_desc': '深入了解客户需求，提供定制化服务',
        'about_milestones': '发展历程',
        'about_milestone_1': '公司创立，开始提供基础会计服务',
        'about_milestone_2': '业务扩展到审计与税务服务领域',
        'about_milestone_3': '成立国际业务部门，开始服务跨国企业',
        'about_milestone_4': '引入数字化转型服务，帮助客户实现财务数字化',
        'about_milestone_5': '成立ESG咨询团队，助力企业可持续发展',
        'about_team_subtitle': '我们拥有一支经验丰富、专业素养高的精英团队'
    },
    
    // 繁体中文
    'zh-HK': {
        // 语言名称
        'lang_en': 'English',
        'lang_zh_hk': '繁體中文',
        'lang_zh_cn': '简体中文',
        
        // 导航
        'nav_home': '首頁',
        'nav_about': '關於我們',
        'nav_services': '專業服務',
        'nav_contact': '聯絡我們',
        'nav_company_intro': '公司簡介',
        'nav_team': '團隊介紹',
        'nav_certificates': '資質證書',
        'nav_audit': '審計鑒證',
        'nav_tax': '稅務籌劃',
        'nav_consulting': '企業諮詢',
        'nav_risk': '風險管理',

        // 轮播图
        'slide1_title': '專業會計解決方案',
        'slide1_desc': '為您的企業提供全面、精準的財務支持',
        'slide1_btn': '了解服務',
        'slide2_title': '精準稅務規劃',
        'slide2_desc': '量身定制的稅務策略，合法合理優化稅負',
        'slide2_btn': '諮詢專家',
        'slide3_title': '30年本地經驗',
        'slide3_desc': '扎根本土，深度了解本地商業環境與法規',
        'slide3_btn': '關於我們',

        // 核心服务
        'core_services': '核心服務',
        'core_services_subtitle': '為您提供全方位的專業會計及商業諮詢服務',
        'service_audit': '審計鑒證',
        'service_audit_desc': '專業審計報告，確保財務透明與合規',
        'service_tax': '稅務籌劃',
        'service_tax_desc': '優化稅務結構，合法最大化稅收利益',
        'service_consulting': '企業諮詢',
        'service_consulting_desc': '戰略性商業建議，助力企業穩健發展',
        'view_all_services': '查看全部服務',
        'learn_more': '了解更多',
        'collapse': '收起',

        // 服务详情
        'service_audit_1': '法定審計',
        'service_audit_2': '內部審計',
        'service_audit_3': '特殊目的審計',
        'service_audit_4': 'IPO準備審計',
        'service_tax_1': '企業所得稅籌劃',
        'service_tax_2': '跨境稅務規劃',
        'service_tax_3': '個人稅務顧問',
        'service_tax_4': '稅務合規服務',
        'service_consulting_1': '企業架構規劃',
        'service_consulting_2': '商業計劃書撰寫',
        'service_consulting_3': '財務管理優化',
        'service_consulting_4': '業務流程重組',

        // 信任背书
        'trust_title': '值得信賴的專業團隊',
        'counter_clients': '服務企業數',
        'counter_experience': '專業經驗(年)',
        'counter_team': '專業團隊人數',
        'counter_satisfaction': '客戶滿意度(%)',

        // 联系我们
        'contact_cta_title': '需要專業財務建議？',
        'contact_cta_desc': '聯系我們的顧問團隊，獲取量身定制的專業解決方案',
        'contact_cta_btn': '立即諮詢',

        // 页脚
        'footer_desc': '提供卓越會計與稅務服務30年，為企業與個人提供全面財務解決方案。',
        'footer_links': '快速鏈接',
        'footer_contact': '聯系方式',
        'copyright': '© 2023 Raymond C W Tam and Co. 保留所有權利。',
        
        // 关于我们页面
        'about_our_story': '我們的故事',
        'about_story_content': '創立於1993年，我們是香港一家領先的專業會計師事務所，專注於為本地及國際客戶提供高質量的會計、審計、稅務及商業諮詢服務。',
        'about_our_mission': '我們的使命',
        'about_mission_content': '致力於通過專業知識與創新服務，協助客戶解決複雜財務問題，實現業務目標與持續增長。',
        'about_core_values': '核心價值觀',
        'about_value_integrity': '誠信',
        'about_value_integrity_desc': '堅持最高道德標準，保持專業操守',
        'about_value_professional': '專業',
        'about_value_professional_desc': '不斷提升專業知識，追求卓越服務質量',
        'about_value_innovation': '創新',
        'about_value_innovation_desc': '採用先進技術與方法，提供創新解決方案',
        'about_value_client': '客戶至上',
        'about_value_client_desc': '深入了解客戶需求，提供定製化服務',
        'about_milestones': '發展歷程',
        'about_milestone_1': '公司創立，開始提供基礎會計服務',
        'about_milestone_2': '業務擴展到審計與稅務服務領域',
        'about_milestone_3': '成立國際業務部門，開始服務跨國企業',
        'about_milestone_4': '引入數字化轉型服務，幫助客戶實現財務數字化',
        'about_milestone_5': '成立ESG諮詢團隊，助力企業可持續發展',
        'about_team_subtitle': '我們擁有一支經驗豐富、專業素養高的精英團隊'
    },
    
    // 英文
    'en': {
        // 语言名称
        'lang_en': 'English',
        'lang_zh_hk': 'Traditional Chinese',
        'lang_zh_cn': 'Simplified Chinese',
        
        // 导航
        'nav_home': 'Home',
        'nav_about': 'About Us',
        'nav_services': 'Services',
        'nav_contact': 'Contact',
        'nav_company_intro': 'Company Profile',
        'nav_team': 'Our Team',
        'nav_certificates': 'Certifications',
        'nav_audit': 'Audit & Assurance',
        'nav_tax': 'Tax Planning',
        'nav_consulting': 'Business Consulting',
        'nav_risk': 'Risk Management',

        // 轮播图
        'slide1_title': 'Professional Accounting Solutions',
        'slide1_desc': 'Comprehensive and precise financial support for your business',
        'slide1_btn': 'Our Services',
        'slide2_title': 'Precise Tax Planning',
        'slide2_desc': 'Tailored tax strategies to legally optimize your tax burden',
        'slide2_btn': 'Consult Experts',
        'slide3_title': '30 Years of Local Experience',
        'slide3_desc': 'Deep understanding of local business environment and regulations',
        'slide3_btn': 'About Us',

        // 核心服务
        'core_services': 'Core Services',
        'core_services_subtitle': 'Providing comprehensive professional accounting and business consulting services',
        'service_audit': 'Audit & Assurance',
        'service_audit_desc': 'Professional audit reports ensuring financial transparency and compliance',
        'service_tax': 'Tax Planning',
        'service_tax_desc': 'Optimize tax structures to legally maximize tax benefits',
        'service_consulting': 'Business Consulting',
        'service_consulting_desc': 'Strategic business advice for stable corporate development',
        'view_all_services': 'View All Services',
        'learn_more': 'Learn More',
        'collapse': 'Collapse',

        // 服务详情
        'service_audit_1': 'Statutory Audit',
        'service_audit_2': 'Internal Audit',
        'service_audit_3': 'Special Purpose Audit',
        'service_audit_4': 'IPO Preparation Audit',
        'service_tax_1': 'Corporate Income Tax Planning',
        'service_tax_2': 'Cross-border Tax Planning',
        'service_tax_3': 'Personal Tax Advisory',
        'service_tax_4': 'Tax Compliance Services',
        'service_consulting_1': 'Corporate Structure Planning',
        'service_consulting_2': 'Business Plan Writing',
        'service_consulting_3': 'Financial Management Optimization',
        'service_consulting_4': 'Business Process Restructuring',

        // 信任背书
        'trust_title': 'Trusted Professional Team',
        'counter_clients': 'Clients Served',
        'counter_experience': 'Years of Experience',
        'counter_team': 'Professional Staff',
        'counter_satisfaction': 'Client Satisfaction(%)',

        // 联系我们
        'contact_cta_title': 'Need Professional Financial Advice?',
        'contact_cta_desc': 'Contact our advisory team for tailored professional solutions',
        'contact_cta_btn': 'Contact Now',

        // 页脚
        'footer_desc': 'Providing excellent accounting and tax services for 30 years, offering comprehensive financial solutions for businesses and individuals.',
        'footer_links': 'Quick Links',
        'footer_contact': 'Contact Information',
        'copyright': '© 2023 Raymond C W Tam and Co. All rights reserved.',
        
        // 关于我们页面
        'about_our_story': 'Our Story',
        'about_story_content': 'Founded in 1993, we are a leading professional accounting firm in Hong Kong, focusing on providing high-quality accounting, auditing, tax and business consulting services to local and international clients.',
        'about_our_mission': 'Our Mission',
        'about_mission_content': 'We are committed to helping clients solve complex financial issues and achieve business goals through professional knowledge and innovative services.',
        'about_core_values': 'Core Values',
        'about_value_integrity': 'Integrity',
        'about_value_integrity_desc': 'Adhering to the highest ethical standards and maintaining professional conduct',
        'about_value_professional': 'Professionalism',
        'about_value_professional_desc': 'Continuously improving professional knowledge and pursuing service excellence',
        'about_value_innovation': 'Innovation',
        'about_value_innovation_desc': 'Adopting advanced technologies and methods to provide innovative solutions',
        'about_value_client': 'Client-Centric',
        'about_value_client_desc': 'Deeply understanding client needs and providing customized services',
        'about_milestones': 'Milestones',
        'about_milestone_1': 'Company founded, started providing basic accounting services',
        'about_milestone_2': 'Business expanded to audit and tax services',
        'about_milestone_3': 'Established international business department, serving multinational enterprises',
        'about_milestone_4': 'Introduced digital transformation services, helping clients achieve financial digitalization',
        'about_milestone_5': 'Established ESG consulting team, supporting corporate sustainable development',
        'about_team_subtitle': 'We have a team of experienced professionals with high professional standards'
    }
};

// 导出函数，供其他文件使用
window.getTranslation = function(key, lang) {
    if (!translations[lang] || !translations[lang][key]) {
        // 如果没有找到翻译，返回简体中文或键名
        return translations['zh-CN'][key] || key;
    }
    return translations[lang][key];
};

// 导出翻译对象
window.translations = translations; 