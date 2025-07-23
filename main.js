// Translations object
const translations = {
    pt: {
        title: 'Jonathan Galdino | Portfólio',
        role: 'Desenvolvedor Back-End e Analista de Sistemas',
        about: 'Sobre',
        skills: 'Habilidades',
        projects: 'Projetos',
        education: 'Educação',
        bachelor: 'Bacharelado em Ciência da Computação',
        university: 'Instituto Federal do Triângulo Mineiro - Campus Ituiutaba - Ituiutaba, Minas Gerais - Brasil',
        certifications: 'Certificações',
        contact: 'Contato',
        aboutMe: 'Sobre Mim',
        aboutText: 'Sou um desenvolvedor back-end apaixonado por criar soluções tecnológicas eficientes e escaláveis. Atuação no desenvolvimento de software, priorizando soluções de alta performance. Experiência na criação de interfaces web responsivas, sempre focada na entrega de resultados alinhados às necessidades do negócio.',
        downloadCV: 'Baixar Currículo',
        viewProject: 'Ver Github',
        footer: 'Todos os direitos reservados.',
        cvFile: 'CV JONATHAN HENRIQUE - T.i.pdf',
        contato: 'Contato'
    },
    en: {
        title: 'Jonathan Galdino | Portfolio',
        role: 'Back-End Developer and Systems Analyst',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        education: 'Education',
        bachelor: 'Bachelor of Computer Science',
        university: 'Federal Institute of Triângulo Mineiro - Ituiutaba Campus - Ituiutaba, Minas Gerais - Brazil',
        certifications: 'Certifications',
        contact: 'Contact',
        aboutMe: 'About Me',
        aboutText: 'I am a back-end developer passionate about creating efficient and scalable technological solutions. Experience in software development, prioritizing high-performance solutions. Experience in creating responsive web interfaces, always focused on delivering results aligned with business needs.',
        downloadCV: 'Download CV',
        viewProject: 'View Github Projects',
        footer: 'All rights reserved.',
        cvFile: 'JONATHAN GALDINO-ENGLISH.pdf',
        contato: 'Contact',
        projectXPTOTitle: 'XPTO Restaurant',
        projectXPTODesc: 'Restaurant Order Management System. With .NET API and Angular Frontend.',
        projectAPITitle: 'Users API',
        projectAPIDesc: 'REST API developed with ASP.NET Core for user management, including authentication and authorization.',
        projectMicroblogTitle: 'Flask Microblog',
        projectMicroblogDesc: 'Microblog developed with Flask, a Python framework. With user authentication and posts.',
        projectNeuralTitle: 'Neural Networks',
        projectNeuralDesc: 'Implementation of Neural Networks with Python, Pandas and Pytorch for predicting football match results.',
        projectBotTitle: 'Discord-Telegram Integration Bot',
        projectBotDesc: 'Bot developed with Python for integration between Discord and Telegram applications.',
        projectWebScrapTitle: 'WebScraping with Python',
        projectWebScrapDesc: 'Web scraping of health site data with Python',
        projectButton: 'View Project'
    }
};

// Theme Management
class ThemeManager {
    constructor() {
        this.toggleSwitch = document.getElementById('theme-toggle');
        this.init();
    }

    init() {
        this.loadSavedTheme();
        this.toggleSwitch.addEventListener('change', (e) => this.switchTheme(e));
    }

    switchTheme(e) {
        const theme = e.target.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    loadSavedTheme() {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            if (currentTheme === 'dark') {
                this.toggleSwitch.checked = true;
            }
        }
    }
}

// Language Management
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'pt';
        this.init();
    }

    init() {
        this.setupLanguageDropdown();
        this.loadSavedLanguage();
    }

    updateContent(lang) {
        // Update translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update CV download link
        const cvButton = document.getElementById('cv-download');
        if (cvButton) {
            cvButton.href = translations[lang].cvFile;
        }

        // Update page title and language
        document.title = translations[lang].title;
        document.documentElement.lang = lang;

        // Update project buttons
        document.querySelectorAll('.btn-primary[href*="github"]').forEach(button => {
            const icon = button.querySelector('i');
            const text = translations[lang].viewProject;
            button.innerHTML = '';
            button.appendChild(icon);
            button.innerHTML += ' ' + text;
        });
    }

    setupLanguageDropdown() {
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = item.getAttribute('data-lang');
                const flag = item.querySelector('img').src;
                const text = item.textContent.trim();
                
                // Update selected language display
                document.getElementById('selected-language-flag').src = flag;
                document.getElementById('selected-language').textContent = text;
                
                // Save and update language
                document.documentElement.setAttribute('data-lang', lang);
                localStorage.setItem('lang', lang);
                this.updateContent(lang);
            });
        });
    }

    loadSavedLanguage() {
        const langItem = document.querySelector(`[data-lang="${this.currentLang}"]`);
        if (langItem) {
            document.getElementById('selected-language-flag').src = langItem.querySelector('img').src;
            document.getElementById('selected-language').textContent = langItem.textContent.trim();
            document.documentElement.setAttribute('data-lang', this.currentLang);
            document.documentElement.lang = this.currentLang;
            this.updateContent(this.currentLang);
        }
    }
}

// Back to Top Button Management
class BackToTopManager {
    constructor() {
        this.button = document.getElementById('backToTop');
        this.init();
    }

    init() {
        if (this.button) {
            window.addEventListener('scroll', () => this.toggleButtonVisibility());
            this.button.addEventListener('click', () => this.scrollToTop());
        }
    }

    toggleButtonVisibility() {
        const shouldBeVisible = window.pageYOffset > 300;
        requestAnimationFrame(() => {
            if (shouldBeVisible) {
                this.button.classList.add('visible');
            } else {
                this.button.classList.remove('visible');
            }
        });
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new LanguageManager();
    new BackToTopManager();
});
