/**
 * ORNELLAS CEOTTO ADVOCACIA - INTERACTIVITY & I18N APPLICATION LOGIC
 */

// Flag SVGs
const FLAGS = {
  pt: `<svg class="flag-icon" viewBox="0 0 24 16" width="20" height="13.3" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" rx="2" fill="#009B3A"/>
    <polygon points="12,2 21.5,8 12,14 2.5,8" fill="#FEDF01"/>
    <circle cx="12" cy="8" r="3.7" fill="#002776"/>
    <path d="M8.8 8.8 C10.2 7.3 13.8 7.3 15.2 8.8" stroke="#FFFFFF" stroke-width="0.7" fill="none"/>
  </svg>`,
  en: `<svg class="flag-icon" viewBox="0 0 24 16" width="20" height="13.3" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" rx="2" fill="#B22234"/>
    <path d="M0 2.46h24v2.46H0zm0 4.92h24v2.46H0zm0 4.92h24v1.24H0z" fill="#FFFFFF"/>
    <rect width="10" height="8.6" rx="1.5" fill="#3C3B6E"/>
    <circle cx="2.2" cy="2" r="0.6" fill="#FFFFFF"/>
    <circle cx="5" cy="2" r="0.6" fill="#FFFFFF"/>
    <circle cx="7.8" cy="2" r="0.6" fill="#FFFFFF"/>
    <circle cx="3.6" cy="3.5" r="0.6" fill="#FFFFFF"/>
    <circle cx="6.4" cy="3.5" r="0.6" fill="#FFFFFF"/>
    <circle cx="2.2" cy="5" r="0.6" fill="#FFFFFF"/>
    <circle cx="5" cy="5" r="0.6" fill="#FFFFFF"/>
    <circle cx="7.8" cy="5" r="0.6" fill="#FFFFFF"/>
    <circle cx="3.6" cy="6.5" r="0.6" fill="#FFFFFF"/>
    <circle cx="6.4" cy="6.5" r="0.6" fill="#FFFFFF"/>
  </svg>`
};

// Full Internationalization Dictionary
const translations = {
  pt: {
    meta: {
      title: "Ornellas Ceotto Advocacia | Recuperação de Crédito e Defesa Patrimonial",
      desc: "Escritório especializado em Recuperação de Crédito, Execuções, Defesa Patrimonial e Investigação Patrimonial. Atuação técnica e estratégica em todo o Brasil."
    },
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      contact: "Contato"
    },
    header: {
      contact_btn: "Fale Conosco"
    },
    hero: {
      badge: "ADVOCACIA ESTRATÉGICA",
      title: "Recuperação de Crédito, Execuções e Defesa Patrimonial<span class=\"dot\">.</span>",
      subtitle: "Atuação técnica e estratégica para proteger seus direitos e recuperar o que é seu."
    },
    about: {
      badge: "SOBRE NÓS",
      title: "COMPROMISSO COM<br>EXCELÊNCIA E RESULTADOS",
      p1: "<strong>ORNELLAS CEOTTO Sociedade Individual de Advocacia</strong> é um escritório especializado em Recuperação de Crédito, Execuções, Defesa Patrimonial e Investigação Patrimonial.",
      p2: "Atuamos com foco em resultados, estratégia jurídica e atendimento personalizado para empresas e pessoas físicas que precisam proteger seus direitos e recuperar o que é seu.",
      p3: "Com atuação técnica e estratégica em todo o Brasil, combinamos inteligência jurídica avançada, ferramentas forenses de localização de ativos e rigor processual para assegurar a máxima efetividade das medidas judiciais e extrajudiciais.",
      pillar1: "Rigor Técnico & Processual",
      pillar2: "Inteligência Investigativa",
      pillar3: "Atuação Nacional Estratégica",
      btn_expand: "Ler história completa",
      btn_collapse: "Recolher texto",
      cta: "Conheça nossas áreas de atuação"
    },
    services: {
      badge: "NOSSAS ÁREAS DE ATUAÇÃO",
      title: "SOLUÇÕES JURÍDICAS ESTRATÉGICAS",
      subtitle: "Atuação personalizada com alta precisão técnica para empresas e pessoas físicas em todo o Brasil.",
      btn_expand: "Conhecer atuação",
      btn_collapse: "Recolher detalhes",
      recuperacao: {
        title: "RECUPERAÇÃO DE CRÉDITO",
        desc: "Atuamos de forma estratégica para recuperar valores devidos com máxima celeridade e efetividade.",
        detail_title: "Nossa Atuação Estratégica Inclui:",
        item1: "Negociação extrajudicial e notificações notificatórias estratégicas.",
        item2: "Cobrança judicial de títulos de crédito (Cheques, Duplicatas, Promissórias).",
        item3: "Execução de Contratos e Títulos Executivos Extrajudiciais.",
        item4: "Localização estratégica de devedores e mapeamento patrimonial.",
        cta_hint: "Precisa recuperar ativos ou valores devidos à sua empresa?",
        cta_btn: "Falar com especialista"
      },
      defesa: {
        title: "DEFESA PATRIMONIAL",
        desc: "Protegemos seu patrimônio pessoal e empresarial contra constrições indevidas e riscos sucessórios.",
        detail_title: "Soluções e Medidas Protetivas:",
        item1: "Estruturação preventiva e planejamento sucessório e patrimonial.",
        item2: "Embargos à Execução e Embargos de Terceiro contra penhoras ilegítimas.",
        item3: "Proteção de bem de família e ativos empresariais indispensáveis.",
        item4: "Reestruturação preventiva de haveres e contratos societários.",
        cta_hint: "Deseja proteger seus bens e ativos com segurança jurídica?",
        cta_btn: "Falar com especialista"
      },
      investigacao: {
        title: "INVESTIGAÇÃO PATRIMONIAL",
        desc: "Investigamos minuciosamente bens, direitos e fraudes para viabilizar o recebimento de valores e instruir disputas.",
        detail_title: "Tecnologia & Inteligência Investigativa:",
        item1: "Pesquisa aprofundada de imóveis, veículos, embarcações e aeronaves.",
        item2: "Identificação de grupos econômicos de fato, empresas de fachada e laranjas.",
        item3: "Rastreamento de ativos no exterior e participações societárias ocultas.",
        item4: "Produção de relatórios probatórios robustos para instrução de processos.",
        cta_hint: "Precisa rastrear bens e localizar patrimônio oculto de devedores?",
        cta_btn: "Falar com especialista"
      }
    },
    contact: {
      title: "SOLICITE UM ATENDIMENTO",
      subtitle: "Preencha os campos abaixo para receber uma análise preliminar estratégica.",
      name_placeholder: "Nome completo",
      phone_placeholder: "Telefone",
      email_placeholder: "E-mail",
      msg_placeholder: "Como podemos ajudar?",
      submit: "Enviar mensagem",
      submitting: "Enviando mensagem...",
      success_title: "Mensagem enviada com sucesso!",
      success_desc: "Recebemos suas informações. Nossa equipe entrará em contato em breve.",
      error_title: "Erro ao enviar mensagem",
      error_desc: "Ocorreu um problema no envio. Por favor, tente novamente ou fale conosco pelo WhatsApp.",
      direct_channels_title: "CONTATOS IMEDIATOS",
      direct_channels_subtitle: "Fale diretamente com nossa equipe jurídica:",
      email_label: "E-mail Institucional",
      instagram_label: "Instagram Oficial",
      coverage_label: "Atuação Nacional",
      coverage_sub: "Atendimento em todo o Brasil",
      alert_missing: "Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Mensagem)."
    },
    footer: {
      brand_desc: "Especialistas em Recuperação de Crédito, Execuções, Defesa Patrimonial e Investigação Patrimonial. Atuação estratégica para proteger seus direitos e gerar resultados.",
      copyright: "&copy; 2024 Ornellas Ceotto Sociedade Individual de Advocacia. Todos os direitos reservados.",
      privacy: "Política de Privacidade",
      terms: "Termos de Uso"
    }
  },
  en: {
    meta: {
      title: "Ornellas Ceotto Law Firm | Debt Recovery & Asset Protection",
      desc: "Boutique law firm specializing in Credit Recovery, Judicial Enforcement, Asset Protection, and Asset Tracing. Strategic legal practice across Brazil and internationally."
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact"
    },
    header: {
      contact_btn: "Contact Us"
    },
    hero: {
      badge: "STRATEGIC LEGAL ADVOCACY",
      title: "Credit Recovery, Judicial Enforcement & Asset Defense<span class=\"dot\">.</span>",
      subtitle: "Technical and strategic legal practice dedicated to protecting your rights and recovering what is yours."
    },
    about: {
      badge: "ABOUT US",
      title: "COMMITTED TO<br>EXCELLENCE AND RESULTS",
      p1: "<strong>ORNELLAS CEOTTO Law Firm</strong> is a premier legal boutique specializing in Credit Recovery, Judicial Enforcement, Asset Protection, and Asset Tracing & Investigation.",
      p2: "We operate with a relentless focus on high-impact results, strategic jurisprudence, and personalized counsel for corporations and individuals seeking to secure their assets and uphold their rights.",
      p3: "Operating across all Brazilian jurisdictions, we combine advanced legal intelligence, forensic asset-tracing mechanisms, and procedural rigor to ensure maximum effectiveness in litigation and out-of-court settlements.",
      pillar1: "Technical & Procedural Rigor",
      pillar2: "Investigative Intelligence",
      pillar3: "Strategic Nationwide Reach",
      btn_expand: "Read full story",
      btn_collapse: "Show less",
      cta: "Explore our practice areas"
    },
    services: {
      badge: "OUR PRACTICE AREAS",
      title: "STRATEGIC LEGAL SOLUTIONS",
      subtitle: "Personalized advocacy with high technical precision for corporations and individuals nationwide.",
      btn_expand: "View practice details",
      btn_collapse: "Show less",
      recuperacao: {
        title: "CREDIT & DEBT RECOVERY",
        desc: "Technical and strategic legal practice dedicated to recovering outstanding debts swiftly and efficiently.",
        detail_title: "Our Strategic Scope Includes:",
        item1: "Extrajudicial settlement negotiations and formal legal notifications.",
        item2: "Judicial collection of credit instruments (checks, promissory notes, trade bills).",
        item3: "Judicial enforcement of commercial contracts and debt titles.",
        item4: "Strategic location of debtors and intelligence mapping of hidden wealth.",
        cta_hint: "Need to recover outstanding debts or commercial receivables?",
        cta_btn: "Speak with specialist"
      },
      defesa: {
        title: "ASSET PROTECTION & WEALTH DEFENSE",
        desc: "Safeguarding personal, corporate, and family assets against unlawful attachments and financial vulnerabilities.",
        detail_title: "Protective Solutions & Mechanisms:",
        item1: "Preventive corporate structuring, family estate planning, and succession governance.",
        item2: "Enforcement Objections and Third-Party Claims against wrongful seizures.",
        item3: "Protection of family homesteads and essential business assets.",
        item4: "Preventive restructuring of corporate interests and commercial agreements.",
        cta_hint: "Looking to protect your family and business assets with legal certainty?",
        cta_btn: "Speak with specialist"
      },
      investigacao: {
        title: "ASSET TRACING & INVESTIGATION",
        desc: "Thorough forensic investigation into assets, rights, and fraudulent conveyances to empower litigation outcomes.",
        detail_title: "Forensic Intelligence Capabilities:",
        item1: "In-depth tracing of real estate holdings, luxury vehicles, maritime vessels, and aircraft.",
        item2: "Identification of de facto economic conglomerates, nominee intermediaries, and shell entities.",
        item3: "Cross-border asset discovery and undisclosed equity interests.",
        item4: "Compilation of evidentiary audit reports for judicial submission.",
        cta_hint: "Need to trace hidden assets and pierce fraudulent corporate veils?",
        cta_btn: "Speak with specialist"
      }
    },
    contact: {
      title: "REQUEST A CONSULTATION",
      subtitle: "Fill in the fields below to receive a strategic preliminary case review.",
      name_placeholder: "Full name",
      phone_placeholder: "Phone number",
      email_placeholder: "Email address",
      msg_placeholder: "How can we help you?",
      submit: "Send message",
      submitting: "Sending message...",
      success_title: "Message sent successfully!",
      success_desc: "We received your information. Our legal team will reach out to you shortly.",
      error_title: "Error sending message",
      error_desc: "An issue occurred while sending. Please try again or reach out via WhatsApp.",
      direct_channels_title: "DIRECT CHANNELS",
      direct_channels_subtitle: "Connect directly with our legal team:",
      email_label: "Institutional Email",
      instagram_label: "Official Instagram",
      coverage_label: "National Practice",
      coverage_sub: "Legal services throughout Brazil",
      alert_missing: "Please fill in all required fields (Name, Email, and Message)."
    },
    footer: {
      brand_desc: "Specialists in Credit Recovery, Judicial Enforcement, Asset Protection, and Asset Tracing. Strategic legal counsel to protect your rights and deliver real results.",
      copyright: "&copy; 2024 Ornellas Ceotto Law Firm. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use"
    },
    modal: {
      whatsapp_btn: "Speak with a Specialist on WhatsApp"
    }
  }
};

// Service Modal Detailed Content (Bilingual)
const serviceData = {
  pt: {
    recuperacao: {
      title: "Recuperação de Crédito",
      body: `
        <p style="margin-bottom: 1rem; color: #475569; font-size: 0.95rem; line-height: 1.7;">Atuamos de forma técnica e estratégica para recuperar valores devidos a empresas e pessoas físicas, priorizando a celeridade e a efetividade das medidas.</p>
        <h4 style="font-family: 'Cinzel', serif; font-size: 1.05rem; color: #5C101C; margin-bottom: 0.5rem; margin-top: 1.25rem;">Nossa Atuação Inclui:</h4>
        <ul style="padding-left: 1.25rem; color: #475569; line-height: 1.8; font-size: 0.925rem;">
          <li>Negociação extrajudicial e notificações notificatórias estratégicas.</li>
          <li>Cobrança judicial de títulos de crédito (Cheques, Duplicatas, Promissórias).</li>
          <li>Execução de Contratos e Títulos Executivos Extrajudiciais.</li>
          <li>Localização estratégica de devedores e mapeamento patrimonial.</li>
        </ul>
      `
    },
    execucoes: {
      title: "Execuções Judiciais",
      body: `
        <p style="margin-bottom: 1rem; color: #475569; font-size: 0.95rem; line-height: 1.7;">Conduzimos processos de execução judicial com rigor técnico e agilidade para assegurar a satisfação integral do seu crédito reconhecido.</p>
        <h4 style="font-family: 'Cinzel', serif; font-size: 1.05rem; color: #5C101C; margin-bottom: 0.5rem; margin-top: 1.25rem;">Destaques da Atuação:</h4>
        <ul style="padding-left: 1.25rem; color: #475569; line-height: 1.8; font-size: 0.925rem;">
          <li>Penhora e bloqueio judicial de ativos e contas (SISBAJUD, RENAJUD, INFOJUD).</li>
          <li>Desconsideração da Personalidade Jurídica para responsabilizar sócios ocultos.</li>
          <li>Impugnações técnicas e defesas em execuções de grande porte.</li>
          <li>Acompanhamento presencial e despachos estratégicos diretos com magistrados.</li>
        </ul>
      `
    },
    defesa: {
      title: "Defesa Patrimonial",
      body: `
        <p style="margin-bottom: 1rem; color: #475569; font-size: 0.95rem; line-height: 1.7;">Protegemos seu patrimônio pessoal e empresarial contra constrições indevidas, penhoras ilegais e riscos operacionais e sucessórios.</p>
        <h4 style="font-family: 'Cinzel', serif; font-size: 1.05rem; color: #5C101C; margin-bottom: 0.5rem; margin-top: 1.25rem;">Soluções Estratégicas:</h4>
        <ul style="padding-left: 1.25rem; color: #475569; line-height: 1.8; font-size: 0.925rem;">
          <li>Estruturação preventiva e planejamento sucessório e patrimonial.</li>
          <li>Embargos à Execução e Embargos de Terceiro contra penhoras ilegítimas.</li>
          <li>Proteção de bem de família e ativos empresariais indispensáveis.</li>
          <li>Reestruturação preventiva de haveres e contratos societários.</li>
        </ul>
      `
    },
    investigacao: {
      title: "Investigação Patrimonial",
      body: `
        <p style="margin-bottom: 1rem; color: #475569; font-size: 0.95rem; line-height: 1.7;">Investigamos minuciosamente bens, direitos e fraudes patrimoniais para viabilizar o recebimento efetivo de valores e subsidiar disputas jurídicas complexas.</p>
        <h4 style="font-family: 'Cinzel', serif; font-size: 1.05rem; color: #5C101C; margin-bottom: 0.5rem; margin-top: 1.25rem;">Tecnologia & Inteligência Investigativa:</h4>
        <ul style="padding-left: 1.25rem; color: #475569; line-height: 1.8; font-size: 0.925rem;">
          <li>Pesquisa aprofundada de imóveis, veículos, embarcações e aeronaves.</li>
          <li>Identificação de grupos econômicos de fato, empresas de fachada e laranjas.</li>
          <li>Rastreamento de ativos no exterior e participações societárias ocultas.</li>
          <li>Produção de relatórios probatórios robustos para instrução de processos.</li>
        </ul>
      `
    }
  },
  en: {
    recuperacao: {
      title: "Credit & Debt Recovery",
      body: `
        <p style="margin-bottom: 1rem; color: #475569; font-size: 0.95rem; line-height: 1.7;">We operate with technical and strategic precision to recover debts owed to corporations and individuals, prioritizing speed, negotiation agility, and enforceable results.</p>
        <h4 style="font-family: 'Cinzel', serif; font-size: 1.05rem; color: #5C101C; margin-bottom: 0.5rem; margin-top: 1.25rem;">Our Practice Includes:</h4>
        <ul style="padding-left: 1.25rem; color: #475569; line-height: 1.8; font-size: 0.925rem;">
          <li>Extrajudicial settlement negotiations and formal legal notifications.</li>
          <li>Judicial collection of credit instruments (checks, promissory notes, trade bills).</li>
          <li>Judicial enforcement of commercial contracts and debt titles.</li>
          <li>Strategic location of debtors and intelligence mapping of hidden wealth.</li>
        </ul>
      `
    },
    execucoes: {
      title: "Judicial Debt Enforcement",
      body: `
        <p style="margin-bottom: 1rem; color: #475569; font-size: 0.95rem; line-height: 1.7;">We conduct judicial debt execution proceedings with technical rigor and speed to ensure full satisfaction and realization of your established claims.</p>
        <h4 style="font-family: 'Cinzel', serif; font-size: 1.05rem; color: #5C101C; margin-bottom: 0.5rem; margin-top: 1.25rem;">Practice Highlights:</h4>
        <ul style="padding-left: 1.25rem; color: #475569; line-height: 1.8; font-size: 0.925rem;">
          <li>Judicial asset freezing and attachment mechanisms (SISBAJUD, RENAJUD, INFOJUD).</li>
          <li>Piercing the corporate veil to hold concealed partners and beneficial owners accountable.</li>
          <li>High-stakes defense and objections in complex enforcement actions.</li>
          <li>Direct hearings and strategic coordination with presiding magistrates.</li>
        </ul>
      `
    },
    defesa: {
      title: "Asset Protection & Wealth Defense",
      body: `
        <p style="margin-bottom: 1rem; color: #475569; font-size: 0.95rem; line-height: 1.7;">We safeguard personal, corporate, and family assets against unlawful attachments, arbitrary levies, and market operational vulnerabilities.</p>
        <h4 style="font-family: 'Cinzel', serif; font-size: 1.05rem; color: #5C101C; margin-bottom: 0.5rem; margin-top: 1.25rem;">Strategic Solutions:</h4>
        <ul style="padding-left: 1.25rem; color: #475569; line-height: 1.8; font-size: 0.925rem;">
          <li>Preventive corporate structuring, family estate planning, and succession governance.</li>
          <li>Enforcement Objections (Embargos à Execução) and Third-Party Claims against wrongful seizures.</li>
          <li>Protection of family homesteads and essential business assets.</li>
          <li>Preventive restructuring of corporate interests and dispute-proof commercial agreements.</li>
        </ul>
      `
    },
    investigacao: {
      title: "Asset Tracing & Investigation",
      body: `
        <p style="margin-bottom: 1rem; color: #475569; font-size: 0.95rem; line-height: 1.7;">We conduct exhaustive investigations into assets, legal rights, and execution fraud to ensure effective debt recovery and provide decisive evidence for litigation.</p>
        <h4 style="font-family: 'Cinzel', serif; font-size: 1.05rem; color: #5C101C; margin-bottom: 0.5rem; margin-top: 1.25rem;">Investigation Intelligence:</h4>
        <ul style="padding-left: 1.25rem; color: #475569; line-height: 1.8; font-size: 0.925rem;">
          <li>In-depth tracing of real estate holdings, luxury vehicles, maritime vessels, and aircraft.</li>
          <li>Identification of de facto economic conglomerates, nominee intermediaries, and shell entities.</li>
          <li>Cross-border asset discovery and undisclosed equity interests.</li>
          <li>Compilation of evidentiary audit reports for direct submission to judicial proceedings.</li>
        </ul>
      `
    }
  }
};

// Current active language
let currentLang = localStorage.getItem('ornellas_lang') || 'pt';
let currentActiveServiceKey = null;

// Helper to get nested value from translations
function getTranslationValue(lang, path) {
  const keys = path.split('.');
  let current = translations[lang];
  for (const key of keys) {
    if (!current || current[key] === undefined) return null;
    current = current[key];
  }
  return current;
}

// Function to apply translation to DOM
function applyLanguage(lang, smooth = true) {
  currentLang = lang;
  localStorage.setItem('ornellas_lang', lang);

  const body = document.body;
  if (smooth) {
    body.classList.add('lang-fading');
  }

  setTimeout(() => {
    // 1. Update HTML lang and Document Title
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    const titleVal = getTranslationValue(lang, 'meta.title');
    if (titleVal) document.title = titleVal;

    const metaDesc = document.querySelector('meta[name="description"]');
    const descVal = getTranslationValue(lang, 'meta.desc');
    if (metaDesc && descVal) metaDesc.setAttribute('content', descVal);

    // 2. Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = getTranslationValue(lang, key);
      if (val !== null) {
        el.innerHTML = val;
      }
    });

    // 3. Update all data-i18n-placeholder elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = getTranslationValue(lang, key);
      if (val !== null) {
        el.setAttribute('placeholder', val);
      }
    });

    // 4. Update Language Switcher trigger button
    const currentFlagEl = document.getElementById('currentFlag');
    const currentLangCodeEl = document.getElementById('currentLangCode');
    if (currentFlagEl) {
      currentFlagEl.innerHTML = FLAGS[lang] || FLAGS.pt;
    }
    if (currentLangCodeEl) {
      currentLangCodeEl.textContent = lang.toUpperCase();
    }

    // 5. Update dropdown active options
    document.querySelectorAll('.lang-option').forEach(opt => {
      const optLang = opt.getAttribute('data-lang');
      if (optLang === lang) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });

    // 6. Update WhatsApp Header Link message
    const headerContactBtn = document.getElementById('headerContactBtn');
    if (headerContactBtn) {
      const waText = lang === 'pt' 
        ? "Olá! Gostaria de falar com um advogado especialista."
        : "Hello! I would like to speak with a specialized attorney.";
      headerContactBtn.href = `https://wa.me/5527999579004?text=${encodeURIComponent(waText)}`;
    }

    // 7. Update Open Modal if any
    // 8. Update About Expand Button Text if exists
    const aboutExpandBtnText = document.getElementById('aboutExpandBtnText');
    const aboutExpandableBox = document.getElementById('aboutExpandableBox');
    if (aboutExpandBtnText && aboutExpandableBox) {
      const dict = translations[lang] ? translations[lang].about : translations.pt.about;
      const isExpanded = aboutExpandableBox.classList.contains('expanded');
      aboutExpandBtnText.textContent = isExpanded ? dict.btn_collapse : dict.btn_expand;
    }

    // 9. Update Service Expandable Cards Toggle Button Texts
    document.querySelectorAll('.service-expandable-card').forEach(card => {
      const toggleText = card.querySelector('.service-toggle-text');
      const toggleBtn = card.querySelector('.btn-service-toggle');
      if (toggleText) {
        const dict = translations[lang] ? translations[lang].services : translations.pt.services;
        const isExpanded = card.classList.contains('expanded');
        toggleText.textContent = isExpanded ? dict.btn_collapse : dict.btn_expand;
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', isExpanded);
      }
    });

    if (smooth) {
      setTimeout(() => {
        body.classList.remove('lang-fading');
      }, 50);
    }
  }, smooth ? 120 : 0);
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Language
  applyLanguage(currentLang, false);

  // 2. About Section Expandable Box logic
  const aboutExpandBtn = document.getElementById('aboutExpandBtn');
  const aboutExpandableBox = document.getElementById('aboutExpandableBox');
  const aboutExpandBtnText = document.getElementById('aboutExpandBtnText');
  const aboutExpandBtnIcon = document.getElementById('aboutExpandBtnIcon');

  if (aboutExpandBtn && aboutExpandableBox) {
    aboutExpandBtn.addEventListener('click', () => {
      const isExpanded = aboutExpandableBox.classList.toggle('expanded');
      aboutExpandBtn.setAttribute('aria-expanded', isExpanded);
      
      const dict = translations[currentLang] ? translations[currentLang].about : translations.pt.about;
      if (aboutExpandBtnText) {
        aboutExpandBtnText.textContent = isExpanded ? dict.btn_collapse : dict.btn_expand;
      }
      if (aboutExpandBtnIcon) {
        aboutExpandBtnIcon.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    });
  }

  // 3. Language Switcher Dropdown Toggle Logic
  const langSwitcher = document.getElementById('langSwitcher');
  const langBtn = document.getElementById('langBtn');

  if (langSwitcher && langBtn) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langSwitcher.classList.toggle('open');
      langBtn.setAttribute('aria-expanded', isOpen);
    });

    // Option clicks
    document.querySelectorAll('.lang-option').forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = option.getAttribute('data-lang');
        if (selectedLang && selectedLang !== currentLang) {
          applyLanguage(selectedLang, true);
        }
        langSwitcher.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (!langSwitcher.contains(e.target)) {
        langSwitcher.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close dropdown on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && langSwitcher.classList.contains('open')) {
        langSwitcher.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
        langBtn.focus();
      }
    });
  }

  // 4. Dynamic Header Scroll Behavior:
  // - Hides on scroll down
  // - Smoothly reveals on scroll up
  // - Auto-hides if the user stops scrolling up away from the top
  // - Stays completely fixed & fully visible when at the top of the page
  const header = document.querySelector('.site-header');
  if (header) {
    let lastScrollY = window.scrollY;
    let hideTimer = null;
    let isHeaderHovered = false;

    // Hover listeners to prevent auto-hiding while mouse is over header
    header.addEventListener('mouseenter', () => {
      isHeaderHovered = true;
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
    });

    header.addEventListener('mouseleave', () => {
      isHeaderHovered = false;
      // If away from top and currently revealed, start the idle timer
      if (window.scrollY > 20 && header.classList.contains('header-revealed')) {
        startIdleHideTimer();
      }
    });

    const startIdleHideTimer = () => {
      if (hideTimer) clearTimeout(hideTimer);
      // If user is at top of page or hovering, never auto-hide
      if (window.scrollY <= 20 || isHeaderHovered) return;

      hideTimer = setTimeout(() => {
        // If not hovering and still away from top, hide smoothly
        if (!isHeaderHovered && window.scrollY > 20) {
          header.classList.remove('header-revealed');
          header.classList.add('header-hidden');
        }
      }, 2000); // 2 seconds idle threshold
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = currentScrollY - lastScrollY;

      // 1. AT TOP OF PAGE (scrollY <= 15) -> Completely fixed, normal position, no hidden class
      if (currentScrollY <= 15) {
        if (hideTimer) clearTimeout(hideTimer);
        header.classList.remove('header-hidden', 'header-revealed');
        header.classList.add('header-at-top');
        lastScrollY = currentScrollY;
        return;
      } else {
        header.classList.remove('header-at-top');
      }

      // 2. SCROLLING DOWN (Away from top) -> Hide header
      if (scrollDiff > 5 && currentScrollY > 70) {
        if (hideTimer) clearTimeout(hideTimer);

        // If language dropdown or mobile menu is open, close them on scroll down
        if (langSwitcher && langSwitcher.classList.contains('open')) {
          langSwitcher.classList.remove('open');
          if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
        }
        if (typeof closeMobileMenu === 'function') {
          closeMobileMenu();
        }

        header.classList.remove('header-revealed');
        header.classList.add('header-hidden');
      }
      // 3. SCROLLING UP -> Reveal header with smooth animation
      else if (scrollDiff < -5) {
        header.classList.remove('header-hidden');
        header.classList.add('header-revealed');

        // If user stops scrolling up, set timer to auto-hide
        startIdleHideTimer();
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
  }

  // 5. Mobile navigation menu toggle & interactions
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  const closeMobileMenu = () => {
    if (navLinks && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      if (mobileBtn) {
        mobileBtn.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
        mobileBtn.setAttribute('aria-label', currentLang === 'en' ? 'Open Menu' : 'Abrir Menu');
      }
    }
  };

  const openMobileMenu = () => {
    if (navLinks) {
      navLinks.classList.add('open');
      if (mobileBtn) {
        mobileBtn.classList.add('open');
        mobileBtn.setAttribute('aria-expanded', 'true');
        mobileBtn.setAttribute('aria-label', currentLang === 'en' ? 'Close Menu' : 'Fechar Menu');
      }
    }
  };

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close mobile menu when clicking any nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close mobile menu when clicking outside header
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileBtn.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close mobile menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    });

    // Close mobile menu on window resize above 768px
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    }, { passive: true });
  }

  // 6. Services are now permanently open vertical boxes (no accordion needed)

  // 7. Contact Form submission logic -> Sends via FormSubmit AJAX to email with visual feedback
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const formSubmitBtn = document.getElementById('formSubmitBtn');
  const formSubmitText = document.getElementById('formSubmitText');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('formName').value.trim();
      const phone = document.getElementById('formPhone').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const message = document.getElementById('formMessage').value.trim();

      const dict = translations[currentLang] ? translations[currentLang].contact : translations.pt.contact;

      if (!name || !email || !message) {
        if (formStatus) {
          formStatus.className = 'form-status-alert error';
          formStatus.innerHTML = `
            <svg class="form-status-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <div class="form-status-content">
              <span class="form-status-title">${dict.alert_missing}</span>
            </div>
          `;
          formStatus.style.display = 'flex';
        }
        return;
      }

      // 1. Loading State
      if (formSubmitBtn) {
        formSubmitBtn.disabled = true;
        if (formSubmitText) formSubmitText.textContent = dict.submitting;
        const iconEl = document.getElementById('formSubmitIcon');
        if (iconEl) {
          iconEl.outerHTML = `<span id="formSubmitIcon" class="form-submit-spinner"></span>`;
        }
      }

      if (formStatus) {
        formStatus.style.display = 'none';
      }

      const recipientEmail = 'jvgb.es@gmail.com';
      const payload = {
        name: name,
        phone: phone || (currentLang === 'pt' ? 'Não informado' : 'Not provided'),
        email: email,
        message: message,
        _subject: `Novo Contato do Site: ${name} - Ornellas Ceotto Advocacia`,
        _template: 'table',
        _captcha: 'false'
      };

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          // Success State
          if (formStatus) {
            formStatus.className = 'form-status-alert success';
            formStatus.innerHTML = `
              <svg class="form-status-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <div class="form-status-content">
                <span class="form-status-title">${dict.success_title}</span>
                <span class="form-status-desc">${dict.success_desc}</span>
              </div>
            `;
            formStatus.style.display = 'flex';
          }
          contactForm.reset();
        } else {
          throw new Error('Server returned non-200');
        }
      } catch (err) {
        console.error('Form submission error:', err);
        if (formStatus) {
          formStatus.className = 'form-status-alert error';
          formStatus.innerHTML = `
            <svg class="form-status-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
            <div class="form-status-content">
              <span class="form-status-title">${dict.error_title}</span>
              <span class="form-status-desc">${dict.error_desc}</span>
            </div>
          `;
          formStatus.style.display = 'flex';
        }
      } finally {
        // Restore Submit Button
        if (formSubmitBtn) {
          formSubmitBtn.disabled = false;
          if (formSubmitText) formSubmitText.textContent = dict.submit;
          const currentSpinner = document.getElementById('formSubmitIcon');
          if (currentSpinner) {
            currentSpinner.outerHTML = `
              <svg id="formSubmitIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            `;
          }
        }
      }
    });
  }
});
