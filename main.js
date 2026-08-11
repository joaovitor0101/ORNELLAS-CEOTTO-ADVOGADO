/**
 * ORNELLAS CEOTTO ADVOGADO - INTERACTIVITY & APPLICATION LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile navigation menu toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when clicking link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // 3. FAQ Accordion logic
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      const isActive = faqItem.classList.contains('active');

      // Close all other FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });

      // Toggle current
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });

  // 4. Service details modal logic
  const modalOverlay = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  const serviceData = {
    recuperacao: {
      title: "Recuperação de Crédito",
      body: `
        <p style="margin-bottom: 1rem; color: #475569;">Atuamos de forma técnica e estratégica para recuperar valores devidos a empresas e pessoas físicas, priorizando a celeridade e a efetividade das medidas.</p>
        <h4 style="font-family: 'Cinzel', serif; font-size: 1.1rem; color: #9E1B22; margin-bottom: 0.5rem; margin-top: 1rem;">Nossa Atuação Inclui:</h4>
        <ul style="padding-left: 1.25rem; color: #475569; line-height: 1.8;">
          <li>Negociação extrajudicial e notificações notificatórias.</li>
          <li>Cobrança judicial de títulos de crédito (Cheques, Duplicatas, Promissórias).</li>
          <li>Execução de Contratos e Títulos Executivos Extras Judiciais.</li>
          <li>Localização estratégica de devedores e bens ocultados.</li>
        </ul>
      `
    },
    execucoes: {
      title: "Execuções Judiciais",
      body: `
        <p style="margin-bottom: 1rem; color: #475569;">Conduzimos processos de execução judicial com rigor técnico e agilidade para assegurar a satisfação do seu crédito já reconhecido.</p>
        <h4 style="font-family: 'Cinzel', serif; font-size: 1.1rem; color: #9E1B22; margin-bottom: 0.5rem; margin-top: 1rem;">Destaques do Serviço:</h4>
        <ul style="padding-left: 1.25rem; color: #475569; line-height: 1.8;">
          <li>Penhora e bloqueio judicial de ativos (SISBAJUD, RENAJUD, INFOJUD).</li>
          <li>Desconsideração da Personalidade Jurídica para alcançar sócios ocultos.</li>
          <li>Impugnações e defesas em execuções de grande porte.</li>
          <li>Acompanhamento presencial e despachos estratégicos com magistrados.</li>
        </ul>
      `
    },
    defesa: {
      title: "Defesa Patrimonial",
      body: `
        <p style="margin-bottom: 1rem; color: #475569;">Protegemos seu patrimônio pessoal e empresarial contra constrições indevidas, penhoras ilegais e riscos operacionais do mercado.</p>
        <h4 style="font-family: 'Cinzel', serif; font-size: 1.1rem; color: #9E1B22; margin-bottom: 0.5rem; margin-top: 1rem;">Soluções Estratégicas:</h4>
        <ul style="padding-left: 1.25rem; color: #475569; line-height: 1.8;">
          <li>Blindagem preventiva e planejamento sucessório e patrimonial.</li>
          <li>Embargos à Execução e Embargos de Terceiro contra penhoras indevidas.</li>
          <li>Proteção de bem de família e ativos empresariais indispensáveis.</li>
          <li>Reestruturação de haveres e contratos preventivos.</li>
        </ul>
      `
    },
    investigacao: {
      title: "Investigação Patrimonial",
      body: `
        <p style="margin-bottom: 1rem; color: #475569;">Investigamos minuciosamente bens, direitos e fraudes à execução para viabilizar o recebimento efetivo de valores e fortalecer disputas judiciais.</p>
        <h4 style="font-family: 'Cinzel', serif; font-size: 1.1rem; color: #9E1B22; margin-bottom: 0.5rem; margin-top: 1rem;">Tecnologia & Inteligência:</h4>
        <ul style="padding-left: 1.25rem; color: #475569; line-height: 1.8;">
          <li>Pesquisa aprofundada de imóveis, veículos, embarcações e aeronaves.</li>
          <li>Identificação de empresas ligadas, laranjas e blindagem patrimonial espúria.</li>
          <li>Rastreamento de ativos no exterior e participações societárias.</li>
          <li>Produção de pareceres e relatórios probatórios para instrução de processos.</li>
        </ul>
      `
    }
  };

  document.querySelectorAll('.service-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceKey = link.getAttribute('data-service');
      const data = serviceData[serviceKey];
      if (data && modalOverlay) {
        modalTitle.textContent = data.title;
        modalBody.innerHTML = data.body;
        modalOverlay.classList.add('open');
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('open');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('open');
      }
    });
  }

  // 5. Contact Form submission logic -> Opens formatted WhatsApp message directly!
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName').value.trim();
      const phone = document.getElementById('formPhone').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const message = document.getElementById('formMessage').value.trim();

      if (!name || !message) {
        alert('Por favor, preencha seu nome e a mensagem.');
        return;
      }

      // Format WhatsApp message
      const targetPhone = '5527999579004';
      const text = `Olá! Meu nome é *${name}*.\n` +
                   `Telefone: ${phone || 'Não informado'}\n` +
                   `E-mail: ${email || 'Não informado'}\n\n` +
                   `*Mensagem:* ${message}`;

      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodedText}`;

      // Redirect user to WhatsApp
      window.open(whatsappUrl, '_blank');
    });
  }
});
