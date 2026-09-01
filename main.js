/**
 * ORNELLAS CEOTTO ADVOCACIA - INTERACTIVITY & I18N APPLICATION LOGIC
 */

// Flag SVGs
const FLAGS = {
  pt: `<svg class="flag-icon" viewBox="0 0 24 16" width="20" height="13.3" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" rx="4" fill="#009B3A"/>
    <polygon points="12,2 21.5,8 12,14 2.5,8" fill="#FEDF01"/>
    <circle cx="12" cy="8" r="3.7" fill="#002776"/>
    <path d="M8.8 8.8 C10.2 7.3 13.8 7.3 15.2 8.8" stroke="#FFFFFF" stroke-width="0.7" fill="none"/>
  </svg>`,
  en: `<svg class="flag-icon" viewBox="0 0 24 16" width="20" height="13.3" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" rx="4" fill="#B22234"/>
    <path d="M0 2.46h24v2.46H0zm0 4.92h24v2.46H0zm0 4.92h24v1.24H0z" fill="#FFFFFF"/>
    <rect width="10" height="8.6" rx="2" fill="#3C3B6E"/>
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
      international: "Clientes Internacionais",
      contact: "Contato"
    },
    header: {
      contact_btn: "Fale Conosco",
      lang_label: "Idioma / Language:"
    },
    hero: {
      cta_headline: "INICIATIVA<span class=\"dot\">.</span> PROFICIÊNCIA<span class=\"dot\">.</span> PERSISTÊNCIA<span class=\"dot\">.</span>",
      cta_subline: "ADVOCACIA ESTRATÉGICA &bull; RECUPERAÇÃO DE CRÉDITO &bull; DEFESA PATRIMONIAL",
      scroll_explore: "Role para explorar a página"
    },
    about: {
      badge: "SOBRE NÓS",
      title: "Iniciativa<span class=\"dot\">.</span><br>Proficiência<span class=\"dot\">.</span><br>Persistência<span class=\"dot\">.</span>",
      seal1_label: "Rigor Técnico",
      seal1_desc: "Processual e estratégico em todas as instâncias",
      seal2_label: "Inteligência Forense",
      seal2_desc: "Localização e rastreamento de ativos ocultos",
      seal3_label: "Atuação Nacional",
      seal3_desc: "Em todo o território brasileiro",
      lead: "A <strong>Ornellas Ceotto Advocacia</strong> é um escritório brasileiro voltado ao atendimento de clientes nacionais e estrangeiros, com atuação concentrada em execuções, recuperação e rastreamento de ativos.",
      intro_p2: "Atuamos na execução de obrigações decorrentes de contratos, títulos extrajudiciais e decisões judiciais e arbitrais, bem como na adoção de medidas destinadas à localização e recuperação de ativos.",
      intro_p3: "Nossa atuação compreende, ainda, a prevenção, a identificação e o enfrentamento de fraudes patrimoniais e financeiras, no contexto de proteção do crédito e do interesse de seus titulares.",
      intro_p4: "Com conhecimento consolidado do ramo corporativo, societário e de consumo, a Ornellas Ceotto atua na preservação do patrimônio de empresas, investidores e demais credores, em todo o território brasileiro.",
      btn_expand: "Conheça nossa história e valores",
      btn_collapse: "Recolher história",
      hist_title: "Nossa História & Valores",
      hist_p1: "A Ornellas Ceotto Advocacia foi fundada em 2026 pelo advogado Gabriel Ornellas Ceotto, com o propósito de oferecer uma atuação especializada em demandas de elevada complexidade processual relacionada a recuperação de ativos e demandas patrimoniais.",
      hist_p2: "Desde sua origem, o escritório foi estruturado para atender clientes nacionais e estrangeiros, com atendimento completo em português e em inglês, oferecendo suporte jurídico a empresas, investidores e demais titulares de crédito que necessitem recuperar ativos ou fazer cumprir obrigações no território brasileiro.",
      hist_full_continuous: "A Ornellas Ceotto parte da compreensão de que a recuperação de crédito moderna não se limita ao ajuizamento de uma ação ou à adoção isolada de medidas executivas. A efetividade exige análise patrimonial, investigação, conhecimento processual, definição de estratégia e acompanhamento persistente diante de estruturas societárias complexas, dispersão de ativos e práticas destinadas à ocultação patrimonial. Em um ambiente marcado por elevada inadimplência e pela crescente sofisticação de fraudes, acreditamos que a proteção do crédito desempenha papel relevante na preservação da segurança das relações econômicas. Por isso, o escritório busca oferecer uma atuação personalizada, tecnicamente qualificada e orientada à efetiva recuperação de ativos, observadas as particularidades de cada caso.",
      values_intro: "Essa forma de atuação é sintetizada nos três valores que orientam o escritório: iniciativa, proficiência técnica e persistência.",
      values_continuous: "A <strong>iniciativa</strong> é necessária e traduz nossa postura ativa diante da inadimplência e das dificuldades inerentes à recuperação de ativos. A <strong>proficiência</strong> decorre da necessidade de atualização constante do Direito, da jurisprudência e dos instrumentos e tecnologias disponíveis para a solução de cada caso. A <strong>persistência</strong>, por sua vez, é o que sustenta uma atuação contínua e determinada na busca pela efetiva recuperação do crédito.",
      cta: "Conheça nossas áreas de atuação"
    },
    services: {
      title: "NOSSAS ÁREAS DE ATUAÇÃO",
      ativos: {
        title: "RECUPERAÇÃO DE ATIVOS",
        item1: "Execuções de obrigações de pagar, fazer, não fazer e entregar coisa",
        item2: "Cumprimento de decisões judiciais e arbitrais",
        item3: "Ações de cobrança e monitórias",
        item4: "Direitos decorrentes de títulos de crédito e valores mobiliários",
        item5: "Investigação patrimonial",
        item6: "Rastreamento e localização de ativos",
        item7: "Prevenção e repressão à fraude contra credores e à fraude à execução",
        item8: "Medidas cautelares e constritivas",
        item9: "Desconsideração da personalidade jurídica e responsabilização patrimonial"
      },
      empresarial: {
        title: "ASSESSORIA EMPRESARIAL E GESTÃO DE RECEBÍVEIS",
        item1: "Assessoria jurídica continuada para gestão e proteção de recebíveis",
        item2: "Revisão e estruturação de contratos e instrumentos de crédito",
        item3: "Estruturação e análise de garantias",
        item4: "Fortalecimento da exequibilidade contratual",
        item5: "Gestão jurídica de carteiras",
        item6: "Cobrança extrajudicial e negociação de obrigações",
        item7: "Análise jurídica e patrimonial de contrapartes",
        item8: "Defesa em execuções e medidas constritivas",
        item9: "Consultoria jurídica empresarial"
      },
      contencioso: {
        title: "CONTENCIOSO ESTRATÉGICO",
        item1: "Disputas contratuais",
        item2: "Responsabilidade civil e demandas indenizatórias",
        item3: "Litígios empresariais e societários",
        item4: "Controvérsias complexas envolvendo relações de consumo",
        item5: "Tutelas de urgência e medidas cautelares",
        item6: "Negociação e resolução estratégica de conflitos",
        item7: "Outros litígios estratégicos"
      }
    },
    international: {
      badge: "ATUAÇÃO GLOBAL & CROSS-BORDER",
      title: "CLIENTES INTERNACIONAIS",
      p1: "A Ornellas Ceotto oferece atendimento personalizado a clientes e escritórios de advocacia estrangeiros com interesses jurídicos no Brasil, especialmente em demandas relacionadas à recuperação e rastreamento de ativos.",
      p2: "Com atendimento integral em inglês, buscamos oferecer ao cliente internacional um ponto de contato jurídico no país, com comunicação direta, acompanhamento próximo e compreensão das particularidades envolvidas em demandas transnacionais.",
      p3: "Nossa proposta é proporcionar uma experiência jurídica personalizada, permitindo que empresas, investidores, credores e escritórios estrangeiros conduzam seus interesses no Brasil com clareza, segurança e proximidade, independentemente de onde estejam localizados.",
      loc_taipei: "Taipei 101 - Taiwan",
      loc_tokyo: "Prédios em Tokyo",
      loc_newyork: "New York Downtown",
      loc_frankfurt: "Frankfurt, Alemanha"
    },
    contact: {
      title: "SOLICITE UM ATENDIMENTO",
      subtitle: "Nos envie uma mensagem para que possamos conhecer a sua demanda",
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
      direct_channels_title: "FALE CONOSCO",
      direct_channels_subtitle: "Fale diretamente com nossa equipe jurídica:",
      email_label: "E-MAIL INSTITUCIONAL",
      whatsapp_label: "TELEFONE / WHATSAPP",
      whatsapp_badge: "Atendimento Imediato",
      alert_missing: "Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Mensagem)."
    },
    footer: {
      address: "Ocean Ville Corporate Center • Rua Henrique Moscoso, 90 • Praia da Costa, Vila Velha - ES, 29101-330, Sala 620",
      social_title: "Conecte-se conosco",
      copyright: "&copy; 2026 Ornellas Ceotto Sociedade Individual de Advocacia. Todos os direitos reservados.",
      privacy: "Política de Privacidade & LGPD",
      terms: "Cookies & Termos"
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
      international: "International Clients",
      contact: "Contact"
    },
    header: {
      contact_btn: "Contact Us",
      lang_label: "Language / Idioma:"
    },
    hero: {
      cta_headline: "INITIATIVE<span class=\"dot\">.</span> PROFICIENCY<span class=\"dot\">.</span> PERSISTENCE<span class=\"dot\">.</span>",
      cta_subline: "STRATEGIC ADVOCACY &bull; CREDIT RECOVERY &bull; ASSET PROTECTION",
      scroll_explore: "Scroll to explore"
    },
    about: {
      badge: "ABOUT US",
      title: "Initiative<span class=\"dot\">.</span><br>Proficiency<span class=\"dot\">.</span><br>Persistence<span class=\"dot\">.</span>",
      seal1_label: "Technical Rigor",
      seal1_desc: "Procedural and strategic precision across all courts",
      seal2_label: "Forensic Intelligence",
      seal2_desc: "Tracing and recovery of concealed assets",
      seal3_label: "National Reach",
      seal3_desc: "Legal practice throughout Brazil",
      lead: "<strong>Ornellas Ceotto</strong> is a Brazilian law firm focused on enforcement, asset recovery and asset tracing for Brazilian and international clients.",
      intro_p2: "We help clients enforce contracts, enforceable instruments, court judgments and arbitral awards, while pursuing the legal measures needed to locate and recover assets throughout Brazil.",
      intro_p3: "Our work also includes identifying and responding to asset concealment, fraudulent transfers and financial fraud, with a focus on protecting creditor rights and preserving value.",
      intro_p4: "With a strong background in corporate, business and consumer matters, Ornellas Ceotto represents companies, investors and other creditors in complex disputes and recovery efforts across Brazil.",
      btn_expand: "Our Story & Values",
      btn_collapse: "Show less",
      hist_title: "Our Story & Values",
      hist_p1: "Ornellas Ceotto was founded in 2026 by Brazilian attorney Gabriel Ornellas Ceotto to handle complex enforcement and asset recovery matters in Brazil.",
      hist_p2: "From day one, the firm was built to serve both Brazilian and international clients. We work in Portuguese and English and represent companies, investors and creditors that need to locate assets, enforce obligations or pursue recovery in Brazil.",
      hist_full_continuous: "Asset recovery rarely ends with filing a lawsuit. Difficult cases may involve complex corporate structures, dispersed assets, fraudulent transfers, asset concealment and multiple enforcement measures. Our role is to understand the asset picture and identify the right legal tools to keep the matter moving. When default or fraud puts recovery at risk, effective enforcement matters the most. That is why we combine close client communication, rigorous legal analysis and a practical focus on recovery, always adapting the strategy to the circumstances of each matter.",
      values_intro: "Our work is guided by three core values: Initiative. Technical Proficiency. Persistence.",
      values_continuous: "<strong>Initiative</strong> means acting early and decisively when a claim or asset is at risk. <strong>Technical Proficiency</strong> means staying current with the law, case law and investigative tools and technologies that may affect the outcome of a case. <strong>Persistence</strong> means continuing to pursue viable recovery paths specially when the obvious fail.",
      cta: "Explore our practice areas"
    },
    services: {
      title: "OUR PRACTICE AREAS",
      ativos: {
        title: "ASSET RECOVERY",
        item1: "Enforcement of Monetary and Non-Monetary Obligations",
        item2: "Judgment and Arbitral Award Enforcement",
        item3: "Debt Collection and Payment Claims",
        item4: "Enforcement of Rights under Negotiable Instruments and Securities",
        item5: "Asset Investigations",
        item6: "Asset Tracing and Recovery",
        item7: "Fraudulent Transfers and Creditor Protection",
        item8: "Interim, Freezing and Attachment Measures",
        item9: "Piercing the Corporate Veil and Related Liability Claims"
      },
      empresarial: {
        title: "BUSINESS ADVISORY & RECEIVABLES MANAGEMENT",
        item1: "Ongoing Legal Counsel for Receivables Management and Protection",
        item2: "Contract and Credit Documentation Review & Structuring",
        item3: "Collateral and Guarantee Structuring",
        item4: "Enhancing contract enforceability and execution strength",
        item5: "Legal portfolio governance and credit management",
        item6: "Out-of-Court Collections and Debt Negotiations",
        item7: "Counterparty Legal and Asset Due Diligence",
        item8: "Defense in Enforcement and Attachment Proceedings",
        item9: "General Business Legal Advisory"
      },
      contencioso: {
        title: "COMPLEX LITIGATION & DISPUTE RESOLUTION",
        item1: "Contract Disputes",
        item2: "Tort and Damages Claims",
        item3: "Business and Corporate Disputes",
        item4: "Complex Consumer Disputes",
        item5: "Interim and Injunctive Relief",
        item6: "Settlement Negotiations and Dispute Resolution",
        item7: "Other Complex and High-Stakes Disputes"
      }
    },
    international: {
      badge: "CROSS-BORDER LEGAL PRACTICE",
      title: "INTERNATIONAL CLIENTS",
      p1: "<strong>Ornellas Ceotto</strong> represents international clients and foreign law firms in Brazil, with a particular focus on asset recovery, asset tracing and enforcement matters.",
      p2: "We provide English-language legal support and act as a direct point of contact for matters in Brazil, combining clear communication, close case management and practical guidance on Brazilian law and procedure.",
      p3: "Our approach is hands-on and tailored to each matter. We help companies, investors, creditors and foreign counsel navigate Brazilian legal proceedings with clarity and confidence, wherever they are based.",
      loc_taipei: "Taipei 101 - Taiwan",
      loc_tokyo: "Buildings in Tokyo",
      loc_newyork: "New York Downtown",
      loc_frankfurt: "Frankfurt, Germany"
    },
    contact: {
      title: "REQUEST A CONSULTATION",
      subtitle: "Send us a message so we can understand your legal needs",
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
      direct_channels_title: "GET IN TOUCH",
      direct_channels_subtitle: "Connect directly with our legal team:",
      email_label: "INSTITUTIONAL EMAIL",
      whatsapp_label: "PHONE / WHATSAPP",
      whatsapp_badge: "Immediate Response",
      alert_missing: "Please fill in all required fields (Name, Email, and Message)."
    },
    footer: {
      address: "Ocean Ville Corporate Center • Rua Henrique Moscoso, 90 • Praia da Costa, Vila Velha - ES, 29101-330, Suite 620",
      social_title: "Connect with us",
      copyright: "&copy; 2026 Ornellas Ceotto Law Firm. All rights reserved.",
      privacy: "Privacy Policy & LGPD",
      terms: "Cookies & Terms"
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

    // 6. Update WhatsApp Header and Mobile Link messages
    const headerContactBtn = document.getElementById('headerContactBtn');
    const mobileContactBtn = document.getElementById('mobileContactBtn');
    const waText = lang === 'pt' 
      ? "Olá! Gostaria de falar com um advogado especialista."
      : "Hello! I would like to speak with a specialized attorney.";
    const waHref = `https://wa.me/5527999579004?text=${encodeURIComponent(waText)}`;
    if (headerContactBtn) headerContactBtn.href = waHref;
    if (mobileContactBtn) mobileContactBtn.href = waHref;

    // 7. Update Open Modal if any
    // 8. Update About Expand Button Text if exists
    const aboutExpandBtnText = document.getElementById('aboutExpandBtnText');
    const aboutExpandableBox = document.getElementById('aboutExpandableBox');
    if (aboutExpandBtnText && aboutExpandableBox) {
      const dict = translations[lang] ? translations[lang].about : translations.pt.about;
      const isExpanded = aboutExpandableBox.classList.contains('expanded');
      aboutExpandBtnText.textContent = isExpanded ? dict.btn_collapse : dict.btn_expand;
    }



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
    });

    const aboutBottomExpandBtn = document.getElementById('aboutBottomExpandBtn');
    if (aboutBottomExpandBtn) {
      aboutBottomExpandBtn.addEventListener('click', () => {
        aboutExpandableBox.classList.remove('expanded');
        aboutExpandBtn.setAttribute('aria-expanded', 'false');
        const dict = translations[currentLang] ? translations[currentLang].about : translations.pt.about;
        if (aboutExpandBtnText) {
          aboutExpandBtnText.textContent = dict.btn_expand;
        }
        const sobreSection = document.getElementById('sobre');
        if (sobreSection) {
          sobreSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
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

  // 6. International Clients Image Carousel (3s Auto-advance with Location Captions)
  const intlCarousel = document.getElementById('intlCarousel');
  if (intlCarousel) {
    const slides = intlCarousel.querySelectorAll('.intl-slide');
    const dots = intlCarousel.querySelectorAll('.intl-dot');
    let currentSlide = 0;
    let carouselInterval = null;

    const showSlide = (index) => {
      slides.forEach((s, i) => {
        s.classList.toggle('active', i === index);
      });
      dots.forEach((d, i) => {
        d.classList.toggle('active', i === index);
      });
      currentSlide = index;
    };

    const nextSlide = () => {
      const nextIndex = (currentSlide + 1) % slides.length;
      showSlide(nextIndex);
    };

    const startCarousel = () => {
      if (carouselInterval) clearInterval(carouselInterval);
      carouselInterval = setInterval(nextSlide, 3000);
    };

    const stopCarousel = () => {
      if (carouselInterval) clearInterval(carouselInterval);
    };

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'), 10);
        showSlide(index);
        startCarousel();
      });
    });

    intlCarousel.addEventListener('mouseenter', stopCarousel);
    intlCarousel.addEventListener('mouseleave', startCarousel);

    startCarousel();
  }

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

      const recipientEmail = 'contact@ornellasceotto.com.br';
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

  // 8. Cookie Consent Banner (LGPD Compliant)
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieAcceptBtn = document.getElementById('cookieAcceptBtn');
  const cookieEssentialBtn = document.getElementById('cookieEssentialBtn');

  if (cookieBanner) {
    const consent = localStorage.getItem('ornellas_cookie_consent');
    if (!consent) {
      setTimeout(() => {
        cookieBanner.classList.add('visible');
      }, 700);
    }

    const dismissCookieBanner = (type) => {
      localStorage.setItem('ornellas_cookie_consent', type);
      cookieBanner.classList.remove('visible');
    };

    if (cookieAcceptBtn) {
      cookieAcceptBtn.addEventListener('click', () => dismissCookieBanner('all'));
    }
    if (cookieEssentialBtn) {
      cookieEssentialBtn.addEventListener('click', () => dismissCookieBanner('essential'));
    }
  }
});
