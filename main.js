const translations = {
    pt: {
        title: 'Jonathan Galdino | Desenvolvedor Back-End .NET & Sistemas',
        cvFile: 'CV-JONATHAN-HENRIQUE--FINAL.pdf',
        // Navigation
        about: 'sobre',
        experience: 'experiência',
        projects: 'projetos',
        skills: 'stack',
        education: 'formação',
        contact: 'contato',
        // Hero & Telemetry
        heroStatus: 'BACK-END .NET & SISTEMAS // JUNDIAÍ, SP · REMOTO',
        heroTyped: [
            'Desenvolvedor Back-end .NET',
            'Desenvolvedor Full Stack Pleno',
            'Analista de Sistemas'
        ],
        aboutText:
            'Desenvolvedor back-end .NET com experiência em C#, .NET 8 e 9, APIs REST e bancos relacionais. Atuo na Atento na evolução e otimização de um portal de áudio que processa mais de 100 milhões de registros com .NET 8, workers assíncronos, SQL Server e Angular 17. Tenho experiência prática na modernização de sistemas governamentais (INCRA), plataformas de seguros e softwares industriais SCADA.',
        downloadCV: 'Baixar Currículo (PDF)',
        heroCtaPrimary: 'Ver arquitetura de projetos',
        profileDegree: 'B.Sc. Ciência da Computação · IFTM',
        telVolLabel: 'VOLUME EM PRODUÇÃO',
        telVolVal: '+100 milhões de áudios (workers + SQL Server)',
        telStackLabel: 'ECOSSISTEMA PRINCIPAL',
        telDbLabel: 'BANCOS DE DADOS',
        telCloudLabel: 'CREDENCIAL CLOUD',
        // Experience section
        railExpTag: '[02] // PRODUÇÃO',
        experienceTitle: 'Experiência Profissional',
        railExpNote:
            'Atuação contínua desde 2022 em sistemas corporativos, governo, seguros e automação industrial.',
        job1Period: 'Jun 2026 - Atual',
        job1Location: 'Remoto · São Caetano do Sul, SP',
        job1Title: 'Desenvolvedor Full Stack Pleno',
        job1Company: 'Atento · Tempo integral',
        job1Bullet1:
            'Evolução de portal de áudio com API REST em .NET 8, front-end em Angular 17 e persistência em SQL Server.',
        job1Bullet2:
            'Implementação de cliente e endpoints HCP para localizar e consumir áudios via links HCP, substituindo o fluxo anterior baseado em pastas NAS.',
        job1Bullet3:
            'Adaptação de workers de extração, metadados e compactação em um fluxo superior a 100 milhões de áudios, apoiado por filas no SQL Server e leitura de XML.',
        job1Bullet4:
            'Consultas de descoberta e listagem em três bancos de origem, análise de leituras com SET STATISTICS e criação de índices para reduzir o tempo de resposta.',
        job2Period: 'Fev 2025 - Jan 2026',
        job2Location: 'Remoto · Brasília, DF',
        job2Title: 'Analista Desenvolvedor Júnior',
        job2Company: 'Qintess · Tempo integral',
        job2Bullet1:
            'Desenvolvimento, manutenção e modernização do sistema SIPRA do INCRA com .NET, ASP Clássico, SQL Server e PostgreSQL.',
        job2Bullet2:
            'Criação de procedures, scripts e rotinas ETL para padronização, integridade e confiabilidade de dados cadastrais.',
        job2Bullet3:
            'Migração de relatórios gerenciais de Crystal Reports para HTML e análise e correção de falhas com Git e GitLab.',
        tagClassicAsp: 'ASP Clássico',
        job3Period: 'Jun 2024 - Dez 2024',
        job3Location: 'Jundiaí, SP · Híbrido',
        job3Title: 'Desenvolvedor Back-end .NET Trainee',
        job3Company: 'Viceri SEIDOR · Trainee',
        job3Bullet1:
            'Desenvolvimento e sustentação de sistemas do setor de seguros com ASP.NET, C#, Angular, SQL Server, Oracle DB e APIs SOAP em ambiente Scrum.',
        job3Bullet2:
            'Migração de banco SQL Server 2014 para 2022 com Data Migration Assistant e reestruturação de views, triggers e procedures.',
        job3Bullet3:
            'Solução para padronizar nomes e extensões de arquivos que impediam a abertura de documentos no sistema.',
        tagSoapApis: 'APIs SOAP',
        job4Period: 'Dez 2022 - Jan 2024',
        job4Location: 'Remoto',
        job4Title: 'Desenvolvedor Júnior',
        job4Company: 'Tatsoft · Tempo integral',
        job4Bullet1:
            'Manutenção evolutiva e corretiva de software industrial SCADA com .NET Framework 4.6.2, C#, SQLite e SQL Server.',
        job4Bullet2:
            'Testes de integrações industriais com protocolos Modbus, MQTT Sparkplug B, CTC e ControlLogix, com suporte técnico a clientes nacionais e internacionais.',
        job4Bullet3:
            'Produção de vídeos e documentação técnica padronizada sobre Unified Namespace e arquitetura de integrações.',
        job5Period: 'Mai 2022 - Ago 2022',
        job5Location: 'Jundiaí, SP',
        job5Title: 'Estagiário de Desenvolvimento de Software',
        job5Company: 'Scope Systems · Estágio',
        job5Bullet1:
            'Análise de requisitos, implementação de funcionalidades, correção de defeitos e suporte técnico com C# e SQL Server.',
        // Projects section
        railProjTag: '[03] // ENGENHARIA',
        projectsTitle: 'Projetos Selecionados',
        railProjNote:
            'Arquitetura completa nos projetos principais e repositório de experimentos e utilitários logo abaixo.',
        proj1Meta: 'ARQUITETURA EM DESTAQUE // 01',
        projectPrevejaTitle: 'Preveja: Plataforma de Mercado de Previsões',
        projectPrevejaDesc:
            'Aplicação full stack em Clean Architecture para negociação e acompanhamento de mercados preditivos em tempo real, empacotada com Docker.',
        proj1Spec1Label: 'BACK-END & PERSISTÊNCIA',
        proj1Spec1Desc:
            'API REST em .NET 9 e ASP.NET Core, Entity Framework Core, PostgreSQL, Identity/JWT e cache com Redis.',
        proj1Spec2Label: 'TEMPO REAL & DEPLOY',
        proj1Spec2Desc:
            'Atualizações via SignalR, PWA em Angular 18 com TypeScript, containerização Docker e deploy na Railway.',
        proj2Meta: 'AUTOMAÇÃO & CLOUD // 02',
        projectBotTitle: 'Bot de Integração Discord-Telegram',
        projectBotDesc:
            'Serviço em Python para ponte de mensagens entre Discord e Telegram, com autenticação via QR Code/2FA, gerenciamento de canais e execução contínua como serviço em instância AWS EC2.',
        proj3Meta: 'FULL STACK .NET // 03',
        projectXPTOTitle: 'Restaurante XPTO',
        projectXPTODesc:
            'Sistema de pedidos e operações de restaurante com API REST em .NET e C#, front-end em Angular, validação de regras de negócio de pedidos e controle de janelas de horário por refeição.',
        archiveTitle: 'ARQUIVO // OUTROS PROJETOS E EXPERIMENTOS',
        projectAPITitle: 'API de Usuários',
        projectAPIDesc:
            'API REST em ASP.NET Core para gestão de usuários, autenticação e autorização.',
        projectNeuralTitle: 'Redes Neurais (Futebol)',
        projectNeuralDesc:
            'Modelo preditivo de resultados de partidas de futebol com PyTorch e Pandas.',
        projectMicroblogTitle: 'Microblog Flask',
        projectMicroblogDesc:
            'Aplicação web com autenticação de usuários e publicação de posts.',
        projectWebScrapTitle: 'Web Scraping Saúde',
        projectWebScrapDesc:
            'Extração e organização estruturada de dados de portal de saúde.',
        // Technical matrix
        railStackTag: '[04] // MATRIZ TÉCNICA',
        skillsTitle: 'Stack & Ferramentas',
        railStackNote:
            'Tecnologias aplicadas em ambiente de produção e projetos independentes.',
        skillCatBackend: 'Back-end & APIs',
        skillCatDatabase: 'Dados & Persistência',
        skillCatProcessing: 'Processamento & Integração',
        skillCatFrontend: 'Front-end',
        skillCatCloud: 'Cloud & Engenharia',
        tagRestSoap: 'APIs REST & SOAP',
        tagSqlQueues: 'Filas SQL Server',
        // Education & Certifications
        railEduTag: '[05] // BASE & CREDENCIAIS',
        educationTitle: 'Formação & Certificações',
        eduAcademicHeader: 'FORMAÇÃO ACADÊMICA',
        bachelor: 'Bacharelado em Ciência da Computação',
        university: 'Instituto Federal do Triângulo Mineiro (IFTM) · Campus Ituiutaba, MG',
        technicalSchool: 'Ensino Médio Técnico em Informática',
        technicalSchoolPlace: 'ETEC Vasco Antônio Venchiarutti · Jundiaí, SP',
        certHeader: 'CERTIFICAÇÕES',
        certCloudBadge: 'CLOUD',
        // Contact & Footer
        railContactTag: '[06] // CONTATO DIRETO',
        contactTitle: 'Canais & Currículo',
        contactText:
            'Disponível para oportunidades back-end .NET, full stack e projetos de arquitetura ou integração de sistemas.',
        channelEmail: 'E-MAIL',
        channelLinkedin: 'LINKEDIN',
        channelGithub: 'GITHUB',
        channelWhatsapp: 'WHATSAPP',
        channelCv: 'CURRÍCULO (PDF)',
        footerRights: 'Todos os direitos reservados.',
        footerLoc: 'Jundiaí, SP · Brasil'
    },
    en: {
        title: 'Jonathan Galdino | .NET Back-End & Systems Developer',
        cvFile: 'Jonathan-Silva-Backend-Developer-ATS.pdf',
        // Navigation
        about: 'about',
        experience: 'experience',
        projects: 'projects',
        skills: 'stack',
        education: 'education',
        contact: 'contact',
        // Hero & Telemetry
        heroStatus: 'BACK-END .NET & SYSTEMS // JUNDIAÍ, SP · REMOTE',
        heroTyped: [
            '.NET Back-end Developer',
            'Mid-Level Full Stack Developer',
            'Systems Analyst'
        ],
        aboutText:
            '.NET back-end developer with experience in C#, .NET 8 and 9, REST APIs, and relational databases. At Atento, I work on evolving and optimizing an audio portal processing over 100 million records with .NET 8, async workers, SQL Server, and Angular 17. I also have hands-on experience modernizing government systems (INCRA), insurance platforms, and industrial SCADA software.',
        downloadCV: 'Download Resume (PDF)',
        heroCtaPrimary: 'See project architecture',
        profileDegree: 'B.Sc. Computer Science · IFTM',
        telVolLabel: 'PRODUCTION VOLUME',
        telVolVal: '+100M audio records (workers + SQL Server)',
        telStackLabel: 'CORE ECOSYSTEM',
        telDbLabel: 'DATABASES',
        telCloudLabel: 'CLOUD CREDENTIAL',
        // Experience section
        railExpTag: '[02] // PRODUCTION',
        experienceTitle: 'Professional Experience',
        railExpNote:
            'Continuous hands-on work since 2022 across enterprise, government, insurance, and industrial automation systems.',
        job1Period: 'Jun 2026 - Present',
        job1Location: 'Remote · São Caetano do Sul, SP',
        job1Title: 'Mid-Level Full Stack Developer',
        job1Company: 'Atento · Full-time',
        job1Bullet1:
            'Development of an audio portal with a .NET 8 REST API, Angular 17 front end, and SQL Server persistence.',
        job1Bullet2:
            'Implemented an HCP client and dedicated endpoints to locate and retrieve audio via HCP links, replacing the previous NAS-folder flow.',
        job1Bullet3:
            'Adapted extraction, metadata, and compression workers in a flow covering over 100 million audio records, backed by SQL Server queues and XML parsing.',
        job1Bullet4:
            'Built discovery and listing queries across three source databases, analyzed reads with SET STATISTICS, and created indexes to improve response times.',
        job2Period: 'Feb 2025 - Jan 2026',
        job2Location: 'Remote · Brasília, DF',
        job2Title: 'Junior Developer Analyst',
        job2Company: 'Qintess · Full-time',
        job2Bullet1:
            "Developed, maintained, and modernized INCRA's SIPRA system with .NET, Classic ASP, SQL Server, and PostgreSQL.",
        job2Bullet2:
            'Created stored procedures, scripts, and ETL routines focused on registry data standardization, integrity, and reliability.',
        job2Bullet3:
            'Migrated management reports from Crystal Reports to HTML and investigated defects using Git and GitLab.',
        tagClassicAsp: 'Classic ASP',
        job3Period: 'Jun 2024 - Dec 2024',
        job3Location: 'Jundiaí, SP · Hybrid',
        job3Title: '.NET Back-end Developer Trainee',
        job3Company: 'Viceri SEIDOR · Trainee',
        job3Bullet1:
            'Developed and supported insurance systems with ASP.NET, C#, Angular, SQL Server, Oracle DB, and SOAP APIs in a Scrum workflow.',
        job3Bullet2:
            'Migrated SQL Server 2014 to 2022 using Data Migration Assistant and restructured views, triggers, and procedures.',
        job3Bullet3:
            'Implemented file name and extension standardization to fix broken document previews in the platform.',
        tagSoapApis: 'SOAP APIs',
        job4Period: 'Dec 2022 - Jan 2024',
        job4Location: 'Remote',
        job4Title: 'Junior Developer',
        job4Company: 'Tatsoft · Full-time',
        job4Bullet1:
            'Maintained and enhanced SCADA industrial software using .NET Framework 4.6.2, C#, SQLite, and SQL Server.',
        job4Bullet2:
            'Tested industrial integrations with Modbus, MQTT Sparkplug B, CTC, and ControlLogix protocols, supporting national and international customers.',
        job4Bullet3:
            'Produced videos and standardized technical documentation on Unified Namespace and integration architecture.',
        job5Period: 'May 2022 - Aug 2022',
        job5Location: 'Jundiaí, SP',
        job5Title: 'Software Development Intern',
        job5Company: 'Scope Systems · Internship',
        job5Bullet1:
            'Requirements analysis, feature implementation, defect fixes, and technical support using C# and SQL Server.',
        // Projects section
        railProjTag: '[03] // ENGINEERING',
        projectsTitle: 'Selected Projects',
        railProjNote:
            'Full architecture breakdown on core projects, followed by an archive of focused tools and experiments.',
        proj1Meta: 'FEATURED ARCHITECTURE // 01',
        projectPrevejaTitle: 'Preveja: Prediction Market Platform',
        projectPrevejaDesc:
            'Full-stack Clean Architecture application for trading and tracking prediction markets in real time, packaged with Docker.',
        proj1Spec1Label: 'BACK-END & PERSISTENCE',
        proj1Spec1Desc:
            '.NET 9 and ASP.NET Core REST API, Entity Framework Core, PostgreSQL, Identity/JWT, and Redis caching.',
        proj1Spec2Label: 'REAL-TIME & DEPLOY',
        proj1Spec2Desc:
            'Real-time updates over SignalR, Angular 18 PWA with TypeScript, Docker containers, and Railway deployment.',
        proj2Meta: 'AUTOMATION & CLOUD // 02',
        projectBotTitle: 'Discord-Telegram Integration Bot',
        projectBotDesc:
            'Python service bridging messages between Discord and Telegram, with QR code/2FA authentication, channel management, and continuous daemon execution on an AWS EC2 instance.',
        proj3Meta: 'FULL STACK .NET // 03',
        projectXPTOTitle: 'XPTO Restaurant',
        projectXPTODesc:
            'Restaurant order and operations system with a .NET and C# REST API, Angular front end, order business-rule validation, and meal schedule controls.',
        archiveTitle: 'ARCHIVE // OTHER PROJECTS & EXPERIMENTS',
        projectAPITitle: 'Users API',
        projectAPIDesc:
            'ASP.NET Core REST API for user management, authentication, and authorization.',
        projectNeuralTitle: 'Neural Networks (Football)',
        projectNeuralDesc:
            'Predictive model for football match outcomes built with PyTorch and Pandas.',
        projectMicroblogTitle: 'Flask Microblog',
        projectMicroblogDesc:
            'Web application with user authentication and post publishing.',
        projectWebScrapTitle: 'Health Web Scraping',
        projectWebScrapDesc:
            'Structured extraction and organization of health portal data.',
        // Technical matrix
        railStackTag: '[04] // TECH MATRIX',
        skillsTitle: 'Stack & Tooling',
        railStackNote:
            'Technologies applied across production environments and independent projects.',
        skillCatBackend: 'Back-end & APIs',
        skillCatDatabase: 'Data & Persistence',
        skillCatProcessing: 'Processing & Integration',
        skillCatFrontend: 'Front-end',
        skillCatCloud: 'Cloud & Engineering',
        tagRestSoap: 'REST & SOAP APIs',
        tagSqlQueues: 'SQL Server Queues',
        // Education & Certifications
        railEduTag: '[05] // EDUCATION & CREDENTIALS',
        educationTitle: 'Education & Certifications',
        eduAcademicHeader: 'ACADEMIC EDUCATION',
        bachelor: 'Bachelor of Computer Science',
        university: 'Federal Institute of Triângulo Mineiro (IFTM) · Ituiutaba, MG',
        technicalSchool: 'Technical High School in Information Technology',
        technicalSchoolPlace: 'ETEC Vasco Antônio Venchiarutti · Jundiaí, SP',
        certHeader: 'CERTIFICATIONS',
        certCloudBadge: 'CLOUD',
        // Contact & Footer
        railContactTag: '[06] // DIRECT CONTACT',
        contactTitle: 'Channels & Resume',
        contactText:
            'Available for .NET back-end, full-stack, and systems architecture or integration roles.',
        channelEmail: 'EMAIL',
        channelLinkedin: 'LINKEDIN',
        channelGithub: 'GITHUB',
        channelWhatsapp: 'WHATSAPP',
        channelCv: 'RESUME (PDF)',
        footerRights: 'All rights reserved.',
        footerLoc: 'Jundiaí, SP · Brazil'
    }
};

class TypedText {
    constructor(elementId, strings, speed = 65, deleteSpeed = 32, pauseTime = 2000) {
        this.el = document.getElementById(elementId);
        this.strings = strings;
        this.speed = speed;
        this.deleteSpeed = deleteSpeed;
        this.pauseTime = pauseTime;
        this.currentIndex = 0;
        this.currentText = '';
        this.isDeleting = false;
        this.timerId = null;

        if (this.el && Array.isArray(this.strings) && this.strings.length > 0) {
            this._tick();
        }
    }

    updateStrings(strings) {
        if (!Array.isArray(strings) || strings.length === 0) return;
        this.strings = strings;
        this.currentIndex = 0;
        this.currentText = '';
        this.isDeleting = false;
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
        }
        if (this.el) {
            this.el.textContent = '';
            this._tick();
        }
    }

    _tick() {
        const current = this.strings[this.currentIndex] || '';
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
            delay = 350;
        }
        this.timerId = setTimeout(() => this._tick(), delay);
    }
}

class ThemeManager {
    constructor() {
        this.button = document.getElementById('theme-toggle');
        this.icon = document.getElementById('theme-icon');
        this.label = document.getElementById('theme-label');
        this.init();
    }

    init() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.applyTheme(savedTheme);

        if (this.button) {
            this.button.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme') || 'dark';
                const next = current === 'dark' ? 'light' : 'dark';
                this.applyTheme(next);
                localStorage.setItem('theme', next);
            });
        }
    }

    applyTheme(theme) {
        const safeTheme = theme === 'light' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', safeTheme);

        if (this.icon) {
            this.icon.className = safeTheme === 'dark' ? 'ph ph-sun' : 'ph ph-moon';
        }
        if (this.label) {
            this.label.textContent = safeTheme === 'dark' ? 'LIGHT' : 'DARK';
        }
    }
}

class LanguageManager {
    constructor(typedInstance) {
        this.typedInstance = typedInstance;
        const saved = localStorage.getItem('lang');
        this.currentLang = saved === 'en' || saved === 'pt' ? saved : 'pt';
        this.buttons = document.querySelectorAll('.lang-btn[data-lang]');
        this.init();
    }

    init() {
        this.buttons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                if (lang && translations[lang] && lang !== this.currentLang) {
                    this.currentLang = lang;
                    localStorage.setItem('lang', lang);
                    this.applyLanguage(lang);
                }
            });
        });

        this.applyLanguage(this.currentLang);
    }

    applyLanguage(lang) {
        const dict = translations[lang];
        if (!dict) return;

        document.querySelectorAll('[data-translate]').forEach((el) => {
            const key = el.getAttribute('data-translate');
            if (Object.prototype.hasOwnProperty.call(dict, key)) {
                el.textContent = dict[key];
            }
        });

        if (this.typedInstance && dict.heroTyped) {
            this.typedInstance.updateStrings(dict.heroTyped);
        }

        const cvHero = document.getElementById('cv-download');
        if (cvHero && dict.cvFile) {
            cvHero.setAttribute('href', dict.cvFile);
        }

        const cvFooter = document.getElementById('cv-download-footer');
        if (cvFooter && dict.cvFile) {
            cvFooter.setAttribute('href', dict.cvFile);
        }

        const cvLabel = document.getElementById('cv-filename-label');
        if (cvLabel && dict.cvFile) {
            cvLabel.textContent = dict.cvFile;
        }

        document.title = dict.title;
        document.documentElement.lang = lang === 'pt' ? 'pt-br' : 'en';

        this.buttons.forEach((btn) => {
            const isSelected = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('active', isSelected);
            btn.setAttribute('aria-pressed', String(isSelected));
        });
    }
}

class MobileNavManager {
    constructor() {
        this.toggle = document.getElementById('mobile-menu-toggle');
        this.nav = document.getElementById('site-nav');
        this.init();
    }

    init() {
        if (!this.toggle || !this.nav) return;

        this.toggle.addEventListener('click', () => {
            const isOpen = this.nav.classList.toggle('open');
            this.setExpanded(isOpen);
        });

        this.nav.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', () => this.close());
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.nav.classList.contains('open')) {
                this.close();
            }
        });
    }

    setExpanded(isOpen) {
        this.toggle.setAttribute('aria-expanded', String(isOpen));
        const icon = this.toggle.querySelector('i');
        if (icon) {
            icon.className = isOpen ? 'ph ph-x' : 'ph ph-list';
        }
    }

    close() {
        this.nav.classList.remove('open');
        this.setExpanded(false);
    }
}

class BackToTopManager {
    constructor() {
        this.button = document.getElementById('backToTop');
        this.init();
    }

    init() {
        if (!this.button) return;
        window.addEventListener('scroll', () => this.toggleVisibility(), { passive: true });
        this.button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    toggleVisibility() {
        const visible = window.scrollY > 360;
        this.button.classList.toggle('visible', visible);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const initialLang = localStorage.getItem('lang') === 'en' ? 'en' : 'pt';
    const typedInstance = new TypedText('typed-text', translations[initialLang].heroTyped);

    new ThemeManager();
    new LanguageManager(typedInstance);
    new MobileNavManager();
    new BackToTopManager();
});
