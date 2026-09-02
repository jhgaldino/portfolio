// Translations object
const translations = {
    pt: {
        title: 'Jonathan Galdino | Portfólio',
        role: 'Desenvolvedor Back-End e Analista de Sistemas',
        about: 'Sobre',
        skills: 'Habilidades',
        projects: 'Projetos',
        experience: 'Experiência',
        education: 'Educação',
        bachelor: 'Bacharelado em Ciência da Computação',
        university: 'Instituto Federal do Triângulo Mineiro - Campus Ituiutaba - Ituiutaba, Minas Gerais - Brasil',
        certifications: 'Certificações',
        contact: 'Contato',
        aboutMe: 'Sobre Mim',
        aboutText: 'Sou desenvolvedor back-end .NET e analista de sistemas, com experiência em C#, .NET 8, APIs REST, workers, SQL Server e PostgreSQL. Atualmente atuo em um portal de áudio com Angular 17 e processamento superior a 100 milhões de áudios, combinando integração de sistemas, otimização de consultas e modernização de aplicações.',
        downloadCV: 'Baixar Currículo',
        viewProject: 'Ver Github',
        footer: 'Todos os direitos reservados.',
        cvFile: 'CV-JONATHAN-HENRIQUE--FINAL.pdf',
        projectButton: 'Ver Projeto',
        projectPrevejaTitle: 'Preveja, Mercado de Previsões',
        projectPrevejaDesc: 'PWA full stack com API REST em .NET 9, Angular 18, PostgreSQL, Redis, SignalR, autenticação JWT e execução com Docker.',
        projectXPTOTitle: 'Restaurante XPTO',
        projectXPTODesc: 'Sistema de gerenciamento de pedidos de restaurante, com API em .NET, front-end Angular, validação de pedidos e controle de horários de refeições.',
        projectAPITitle: 'API de Usuários',
        projectAPIDesc: 'API REST desenvolvida com ASP.NET Core para gerenciamento de usuários, incluindo autenticação e autorização.',
        projectMicroblogTitle: 'Microblog Flask',
        projectMicroblogDesc: 'Microblog desenvolvido com Python, Flask e SQLite, com autenticação de usuários e publicação de posts.',
        projectNeuralTitle: 'Redes Neurais',
        projectNeuralDesc: 'Implementação de redes neurais com Python, Pandas e PyTorch para previsão de resultados de partidas de futebol.',
        projectBotTitle: 'Bot de Integração Discord-Telegram',
        projectBotDesc: 'Bot desenvolvido com Python para integração entre os aplicativos Discord e Telegram.',
        projectWebScrapTitle: 'Web Scraping com Python',
        projectWebScrapDesc: 'Extração e organização de dados de um site de saúde com Python e BeautifulSoup.',
        // Experience
        job1Title: 'Mid-Level Full Stack Developer',
        job1Company: 'Atento · Tempo integral',
        job1Period: 'Jun 2026 - Atual',
        job1Location: 'Remoto · sede em São Caetano do Sul, SP',
        job1Desc: 'Atuação em portal de áudio com API REST e back-end .NET 8, Angular 17 e SQL Server. Implementação de cliente e endpoints HCP, adaptação de workers e otimização de consultas com SET STATISTICS e índices em um fluxo superior a 100 milhões de áudios.',
        job2Title: 'Analista Desenvolvedor Júnior',
        job2Company: 'Qintess · Tempo integral',
        job2Period: 'Fev 2025 - Jan 2026',
        job2Location: 'Remoto · sede em Brasília, DF',
        job2Desc: 'Desenvolvimento, manutenção e modernização do SIPRA do INCRA com .NET, ASP Clássico, SQL Server e PostgreSQL. Criação de procedures, scripts e rotinas ETL, migração de relatórios para HTML e correção de falhas com Git e GitLab.',
        job3Title: 'Desenvolvedor Back-end .NET',
        job3Company: 'Viceri SEIDOR · Trainee',
        job3Period: 'Jun 2024 - Dez 2024',
        job3Location: 'Jundiaí, SP - Híbrido',
        job3Desc: 'Desenvolvimento e sustentação de sistemas para seguros com ASP.NET, C#, Angular, SQL Server, Oracle DB e APIs SOAP. Migração de SQL Server 2014 para 2022 e atuação com Scrum, Azure DevOps, Bitbucket e Git.',
        job4Title: 'Desenvolvedor Júnior',
        job4Company: 'Tatsoft · Tempo integral',
        job4Period: 'Dez 2022 - Jan 2024',
        job4Location: 'Remoto',
        job4Desc: 'Manutenção evolutiva e corretiva de produtos SCADA com .NET Framework, C#, SQLite e SQL Server. Testes de integrações industriais, suporte a clientes nacionais e internacionais e produção de documentação técnica.',
        // Contact Form
        contactText: 'Entre em contato comigo através das redes sociais abaixo',
        // Hero
        heroGreeting: 'Olá, eu sou',
        heroCtaPrimary: 'Conheça meu trabalho',
        heroCtaSecondary: 'Entre em contato',
        heroTyped: ['Desenvolvedor Back-end .NET', 'Analista de Sistemas', 'Desenvolvedor Full Stack'],
        // Skill categories
        skillCatBackend: 'Back-End',
        skillCatDatabase: 'Banco de Dados',
        skillCatCloud: 'Cloud & DevOps',
        skillCatFrontend: 'Frontend'
    },
    en: {
        title: 'Jonathan Galdino | Portfolio',
        role: 'Back-End Developer and Systems Analyst',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        experience: 'Experience',
        education: 'Education',
        bachelor: 'Bachelor of Computer Science',
        university: 'Federal Institute of Triângulo Mineiro - Ituiutaba Campus - Ituiutaba, Minas Gerais - Brazil',
        certifications: 'Certifications',
        contact: 'Contact',
        aboutMe: 'About Me',
        aboutText: 'I am a .NET back-end developer and systems analyst with experience in C#, .NET 8, REST APIs, workers, SQL Server, and PostgreSQL. I currently work on an audio portal using Angular 17 and processing more than 100 million audio records, combining systems integration, query optimization, and application modernization.',
        downloadCV: 'Download CV',
        viewProject: 'View Github Projects',
        footer: 'All rights reserved.',
        cvFile: 'Jonathan-Silva-Backend-Developer-ATS.pdf',
        projectButton: 'View Project',
        projectPrevejaTitle: 'Preveja Prediction Market',
        projectPrevejaDesc: 'Full-stack PWA with a .NET 9 REST API, Angular 18, PostgreSQL, Redis, SignalR, JWT authentication, and Docker.',
        projectXPTOTitle: 'XPTO Restaurant',
        projectXPTODesc: 'Restaurant order management system with a .NET API, Angular front end, order validation, and meal schedule controls.',
        projectAPITitle: 'Users API',
        projectAPIDesc: 'REST API developed with ASP.NET Core for user management, including authentication and authorization.',
        projectMicroblogTitle: 'Flask Microblog',
        projectMicroblogDesc: 'Microblog developed with Python, Flask, and SQLite, including user authentication and post publishing.',
        projectNeuralTitle: 'Neural Networks',
        projectNeuralDesc: 'Implementation of neural networks with Python, Pandas, and PyTorch to predict football match results.',
        projectBotTitle: 'Discord-Telegram Integration Bot',
        projectBotDesc: 'Bot developed with Python for integration between Discord and Telegram applications.',
        projectWebScrapTitle: 'WebScraping with Python',
        projectWebScrapDesc: 'Extraction and organization of health website data using Python and BeautifulSoup.',
        // Experience
        job1Title: 'Mid-Level Full Stack Developer',
        job1Company: 'Atento · Full-time',
        job1Period: 'Jun 2026 - Present',
        job1Location: 'Remote · project headquarters in São Caetano do Sul, SP, Brazil',
        job1Desc: 'Development of an audio portal with a .NET 8 REST API, Angular 17, and SQL Server. Implemented an HCP client and endpoints, adapted workers, and optimized queries with SET STATISTICS and indexes in a flow covering more than 100 million audio records.',
        job2Title: 'Junior Developer Analyst',
        job2Company: 'Qintess · Full-time',
        job2Period: 'Feb 2025 - Jan 2026',
        job2Location: 'Remote · project headquarters in Brasília, DF, Brazil',
        job2Desc: 'Developed, maintained, and modernized INCRA’s SIPRA system with .NET, Classic ASP, SQL Server, and PostgreSQL. Created procedures, scripts, and ETL routines, migrated reports to HTML, and fixed defects using Git and GitLab.',
        job3Title: '.NET Back-end Developer',
        job3Company: 'Viceri SEIDOR · Trainee',
        job3Period: 'Jun 2024 - Dec 2024',
        job3Location: 'Jundiaí, SP, Brazil - Hybrid',
        job3Desc: 'Developed and supported insurance systems with ASP.NET, C#, Angular, SQL Server, Oracle DB, and SOAP APIs. Migrated SQL Server 2014 to 2022 and worked with Scrum, Azure DevOps, Bitbucket, and Git.',
        job4Title: 'Junior Developer',
        job4Company: 'Tatsoft · Full-time',
        job4Period: 'Dec 2022 - Jan 2024',
        job4Location: 'Remote',
        job4Desc: 'Maintained and enhanced SCADA products using .NET Framework, C#, SQLite, and SQL Server. Tested industrial integrations, supported national and international customers, and produced technical documentation.',
        // Contact
        contactText: 'Get in touch with me through the social networks below',
        // Hero
        heroGreeting: 'Hello, I am',
        heroCtaPrimary: 'See my work',
        heroCtaSecondary: 'Get in touch',
        heroTyped: ['.NET Back-end Developer', 'Systems Analyst', 'Full Stack Developer'],
        // Skill categories
        skillCatBackend: 'Back-End',
        skillCatDatabase: 'Database',
        skillCatCloud: 'Cloud & DevOps',
        skillCatFrontend: 'Frontend'
    }
};

// Typed text animation
class TypedText {
    constructor(elementId, strings, speed = 80, deleteSpeed = 40, pauseTime = 2000) {
        this.el = document.getElementById(elementId);
        this.strings = strings;
        this.speed = speed;
        this.deleteSpeed = deleteSpeed;
        this.pauseTime = pauseTime;
        this.currentIndex = 0;
        this.currentText = '';
        this.isDeleting = false;
        if (this.el) this._tick();
    }

    updateStrings(strings) {
        this.strings = strings;
    }

    _tick() {
        const current = this.strings[this.currentIndex];
        if (this.isDeleting) {
            this.currentText = current.substring(0, this.currentText.length - 1);
        } else {
            this.currentText = current.substring(0, this.currentText.length + 1);
        }
        this.el.textContent = this.currentText;

        let delay = this.isDeleting ? this.deleteSpeed : this.speed;
        if (!this.isDeleting && this.currentText === current) {
            delay = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentText === '') {
            this.isDeleting = false;
            this.currentIndex = (this.currentIndex + 1) % this.strings.length;
            delay = 400;
        }
        setTimeout(() => this._tick(), delay);
    }
}

let typedTextInstance = null;

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
                // Se o elemento for um span dentro de um botão, atualizamos o nó de texto para não remover o ícone
                if (element.tagName === 'SPAN' && element.parentElement.tagName === 'A') {
                     // Encontra e atualiza o nó de texto para não apagar o ícone
                    for (const node of element.parentElement.childNodes) {
                        if (node.nodeType === Node.TEXT_NODE) {
                            node.textContent = ' ' + translations[lang][key];
                            break;
                        }
                    }
                } else {
                     element.textContent = translations[lang][key];
                }
            }
        });

        // Update typed text strings
        if (typedTextInstance && translations[lang].heroTyped) {
            typedTextInstance.updateStrings(translations[lang].heroTyped);
        }

        // Update CV download link
        const cvButton = document.getElementById('cv-download');
        if (cvButton) {
            cvButton.href = translations[lang].cvFile;
            // A tradução do texto do botão de CV já é feita pelo [data-translate]
        }

        // Update page title and language
        document.title = translations[lang].title;
        document.documentElement.lang = lang;

        // *** INÍCIO DA CORREÇÃO 2: Tornar o seletor mais específico ***
        // Atualiza apenas o botão de GitHub na secção "Sobre", que não usa data-translate
        document.querySelectorAll('#sobre .btn-primary[href*="github"]').forEach(button => {
            // Este seletor agora é específico e não afetará os botões do carrossel.
            // Verifica se o botão não tem o atributo data-translate para não haver conflito.
            if (!button.hasAttribute('data-translate')) {
                const icon = button.querySelector('i');
                const text = "GitHub"; // O texto é fixo, não precisa de tradução neste caso específico
                button.textContent = '';
                if (icon) {
                    button.appendChild(icon);
                }
                button.appendChild(document.createTextNode(' ' + text));
            }
        });
    }

    setupLanguageDropdown() {
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = item.getAttribute('data-lang');
                const flag = item.querySelector('img').src;
                const text = item.textContent.trim();
                document.getElementById('selected-language-flag').src = flag;
                document.getElementById('selected-language').textContent = text;
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
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    new ThemeManager();
    const initialLang = localStorage.getItem('lang') || 'pt';
    typedTextInstance = new TypedText('typed-text', translations[initialLang].heroTyped);
    new LanguageManager();
    new BackToTopManager();
});
