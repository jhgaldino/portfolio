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
        aboutText: 'Sou um desenvolvedor back-end apaixonado por criar soluções tecnológicas eficientes e escaláveis. Atuação no desenvolvimento de software, priorizando soluções de alta performance. Experiência na criação de interfaces web responsivas, sempre focada na entrega de resultados alinhados às necessidades do negócio.',
        downloadCV: 'Baixar Currículo',
        viewProject: 'Ver Github',
        footer: 'Todos os direitos reservados.',
        cvFile: 'CV JONATHAN HENRIQUE - T.i.pdf',
        projectButton: 'Ver Projeto',
        projectXPTOTitle: 'Restaurante XPTO',
        projectXPTODesc: 'Sistema de Gerenciamento de Pedidos de Restaurante. Com validação de pedidos e controle de horário de refeições. Com API em .NET e Frontend em Angular.',
        projectAPITitle: 'API de Usuários',
        projectAPIDesc: 'API REST desenvolvida com ASP.NET Core para gerenciamento de usuários, incluindo autenticação e autorização.',
        projectMicroblogTitle: 'Microblog Flask',
        projectMicroblogDesc: 'Microblog desenvolvido com Flask, um framework de Python. Com autenticação de usuários e posts.',
        projectNeuralTitle: 'Redes Neurais',
        projectNeuralDesc: 'Implementação de Redes Neurais com Python, Pandas e Pytorch para previsão de resultados de partidas de futebol.',
        projectBotTitle: 'Bot de Integração Discord-Telegram',
        projectBotDesc: 'Bot desenvolvido com Python para integração entre os aplicativos Discord e Telegram.',
        projectWebScrapTitle: 'WebScrapping com Python',
        projectWebScrapDesc: 'WebScrapping de dados de um site de saúde com Python',
        // Experience
        job1Title: 'Analista Desenvolvedor I',
        job1Company: 'Qintess · Tempo integral',
        job1Period: 'Fev 2025 - Presente',
        job1Location: 'Brasília, DF - Remoto',
        job1Desc: 'Atuação no time do Instituto Nacional de Colonização e Reforma Agrária (Incra). Desenvolvimento, manutenção e aprimoramento de sistemas legado e banco de dados usando .NET, ASP Clássico, SQL Server, Oracle DB, Git e GitLab. CI/CD e integração contínua.',
        job2Title: 'Desenvolvedor Back End .NET',
        job2Company: 'Viceri-SEIDOR · Trainee',
        job2Period: 'Jun 2024 - Dez 2024 · 7 meses',
        job2Location: 'Jundiaí, SP - Híbrido',
        job2Desc: 'Desenvolvimento e manutenção de sistemas para o setor de seguros, utilizando .NET, C#, ASP Clássico, Oracle DB, SQL Server, Angular, Java e APIs SOAP. Atuação em projetos colaborativos com equipes multidisciplinares, empregando Azure DevOps, Bitbucket e Git, além de metodologias ágeis (Scrum).',
        // Contact Form
        contactText: 'Entre em contato comigo através das redes sociais abaixo'
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
        aboutText: 'I am a back-end developer passionate about creating efficient and scalable technological solutions. Experience in software development, prioritizing high-performance solutions. Experience in creating responsive web interfaces, always focused on delivering results aligned with business needs.',
        downloadCV: 'Download CV',
        viewProject: 'View Github Projects',
        footer: 'All rights reserved.',
        cvFile: 'JONATHAN GALDINO-ENGLISH.pdf',
        projectButton: 'View Project',
        projectXPTOTitle: 'XPTO Restaurant',
        projectXPTODesc: 'Restaurant Order Management System. With order validation and meal time control. With .NET API and Angular Frontend.',
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
        // Experience
        job1Title: 'Developer Analyst I',
        job1Company: 'Qintess · Full-time',
        job1Period: 'Feb 2025 - Present',
        job1Location: 'Brasília, DF - Remote',
        job1Desc: 'Working with the National Institute of Colonization and Agrarian Reform (Incra) team. Development, maintenance and improvement of legacy systems and databases using .NET, Classic ASP, SQL Server, Oracle DB, Git and GitLab. CI/CD and continuous integration.',
        job2Title: 'Back End .NET Developer',
        job2Company: 'Viceri-SEIDOR · Trainee',
        job2Period: 'Jun 2024 - Dec 2024 · 7 months',
        job2Location: 'Jundiaí, SP - Hybrid',
        job2Desc: 'Development and maintenance of systems for the insurance sector, using .NET, C#, Classic ASP, Oracle DB, SQL Server, Angular, Java and SOAP APIs. Working on collaborative projects with multidisciplinary teams, using Azure DevOps, Bitbucket and Git, as well as agile methodologies (Scrum).',
        // Contact
        contactText: 'Get in touch with me through the social networks below'
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
                button.innerHTML = ''; 
                if (icon) {
                    button.appendChild(icon);
                }
                button.innerHTML += ' ' + text;
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
    new LanguageManager();
    new BackToTopManager();
});