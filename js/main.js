(function () {
  const config = window.siteConfig || {};

  document.querySelectorAll("[data-config]").forEach((node) => {
    const key = node.getAttribute("data-config");
    if (config[key]) node.textContent = config[key];
  });

  document.querySelectorAll("[data-config-href]").forEach((node) => {
    const key = node.getAttribute("data-config-href");
    if (config[key]) node.setAttribute("href", key === "email" ? `mailto:${config[key]}` : config[key]);
  });

  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.documentElement.classList.toggle("nav-open", isOpen);
    });
  }

  document.querySelectorAll("[data-services-toggle]").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const dropdown = toggle.closest(".nav-dropdown");
      if (!dropdown) return;
      const isOpen = dropdown.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  });

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const cookieBanner = document.querySelector("[data-cookie]");
  const cookieButton = document.querySelector("[data-cookie-accept]");
  if (cookieBanner && cookieButton && localStorage.getItem("hc-cookie-ok") !== "1") {
    cookieBanner.hidden = false;
    cookieButton.addEventListener("click", () => {
      localStorage.setItem("hc-cookie-ok", "1");
      cookieBanner.hidden = true;
    });
  }

  const approachContent = {
    strategy: {
      title: "Market Direction Before Channel Decisions",
      text:
        "We clarify the audience, offer, and funnel constraints before choosing tactics. That gives every campaign a reason to exist and a useful way to measure progress.",
      image: "img/Market-Direction.webp",
      alt: "Abstract visual for market direction planning"
    },
    partnership: {
      title: "Shared Context Across the Marketing Workflow",
      text:
        "We keep strategy, creative, media, and conversion work connected so teams are not guessing in separate rooms. Every recommendation is tied to a clear next action.",
      image: "img/Team-Alignment.webp",
      alt: "Abstract visual for connected marketing team alignment"
    },
    data: {
      title: "Decisions Grounded in Useful Marketing Signals",
      text:
        "We separate noisy numbers from the signals that actually guide growth. Campaign data, landing page behavior, and lead quality are reviewed together before changes are made.",
      image: "img/Signal-Led-Choices.webp",
      alt: "Abstract visual for signal-led marketing decisions"
    },
    agile: {
      title: "Short Campaign Sprints With Clear Priorities",
      text:
        "We organize execution into focused cycles so ideas can be launched, evaluated, and improved quickly. The process stays light while the work remains accountable.",
      image: "img/Sprint-Based-Delivery.webp",
      alt: "Abstract visual for sprint-based marketing delivery"
    },
    communication: {
      title: "Plain Reporting That Leads Somewhere",
      text:
        "Reports explain what changed, what it means, and what should happen next. The aim is to make performance conversations useful, not to bury decisions in dashboards.",
      image: "img/Clear-Reporting.webp",
      alt: "Abstract visual for clear campaign reporting"
    }
  };

  const approachTabs = document.querySelectorAll("[data-approach-tab]");
  const approachPanel = document.querySelector("[data-approach-panel]");
  const approachTitle = document.querySelector("[data-approach-title]");
  const approachText = document.querySelector("[data-approach-text]");
  const approachImage = document.querySelector("[data-approach-image]");

  if (approachTabs.length && approachPanel && approachTitle && approachText && approachImage) {
    approachTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const key = tab.getAttribute("data-approach-tab");
        const item = approachContent[key];
        if (!item) return;

        approachTabs.forEach((candidate) => {
          const isActive = candidate === tab;
          candidate.classList.toggle("is-active", isActive);
          candidate.setAttribute("aria-pressed", String(isActive));
        });

        approachPanel.classList.add("is-switching");
        window.setTimeout(() => {
          approachTitle.textContent = item.title;
          approachText.textContent = item.text;
          approachImage.src = item.image;
          approachImage.alt = item.alt;
          approachPanel.classList.remove("is-switching");
        }, 120);
      });
    });
  }

  const pricingValues = {
    monthly: {
      launch: "$99",
      growth: "$199",
      scale: "$399",
      period: "/ month",
      note: "<strong>Save 20%</strong> on yearly planning"
    },
    yearly: {
      launch: "$950",
      growth: "$1,910",
      scale: "$3,830",
      period: "/ year",
      note: "<strong>Yearly estimate</strong> shown with planning discount"
    }
  };

  const pricingButtons = document.querySelectorAll("[data-pricing-period]");
  const pricingNote = document.querySelector("[data-pricing-note]");
  const pricingCards = document.querySelectorAll(".price-card");

  if (pricingButtons.length && pricingNote) {
    pricingButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const periodKey = button.getAttribute("data-pricing-period");
        const values = pricingValues[periodKey];
        if (!values || button.classList.contains("is-active")) return;

        pricingButtons.forEach((candidate) => {
          const isActive = candidate === button;
          candidate.classList.toggle("is-active", isActive);
          candidate.setAttribute("aria-pressed", String(isActive));
        });

        pricingCards.forEach((card) => card.classList.add("is-switching"));
        pricingNote.classList.add("is-switching");

        window.setTimeout(() => {
          ["launch", "growth", "scale"].forEach((plan) => {
            const price = document.querySelector(`[data-price="${plan}"]`);
            const period = document.querySelector(`[data-period="${plan}"]`);
            if (price) price.textContent = values[plan];
            if (period) period.textContent = values.period;
          });

          pricingNote.innerHTML = values.note;
          pricingCards.forEach((card) => card.classList.remove("is-switching"));
          pricingNote.classList.remove("is-switching");
        }, 140);
      });
    });
  }

  const proofItems = [
    {
      text:
        "Heavy Cuddly helped us organize our campaign priorities and make reporting easier to act on. The work felt focused, transparent, and tied to real marketing decisions.",
      name: "Emily T.",
      role: "Growth Lead"
    },
    {
      text:
        "Their team gave us a clearer testing structure for paid campaigns. We stopped chasing every idea at once and started learning from each launch faster.",
      name: "Marcus L.",
      role: "Performance Manager"
    },
    {
      text:
        "The biggest change was clarity. Heavy Cuddly connected our analytics, landing page feedback, and creative direction into one practical workflow.",
      name: "Sofia R.",
      role: "Marketing Director"
    },
    {
      text:
        "We needed a partner who could challenge assumptions without slowing the team down. Their recommendations were direct, useful, and easy to translate into action.",
      name: "Daniel K.",
      role: "Founder"
    },
    {
      text:
        "Our reporting finally became something the team could use. The dashboards were simpler, the priorities were clearer, and campaign reviews became more productive.",
      name: "Nina P.",
      role: "Operations Lead"
    },
    {
      text:
        "Heavy Cuddly helped us tighten our messaging before scaling spend. The strategy work made our acquisition efforts feel more deliberate and much easier to manage.",
      name: "Oliver M.",
      role: "Head of Growth"
    }
  ];

  const proofCard = document.querySelector("[data-proof-card]");
  const proofText = document.querySelector("[data-proof-text]");
  const proofName = document.querySelector("[data-proof-name]");
  const proofRole = document.querySelector("[data-proof-role]");
  const proofPrev = document.querySelector("[data-proof-prev]");
  const proofNext = document.querySelector("[data-proof-next]");
  let proofIndex = 0;

  function renderProof(nextIndex) {
    if (!proofCard || !proofText || !proofName || !proofRole) return;
    proofIndex = (nextIndex + proofItems.length) % proofItems.length;
    const item = proofItems[proofIndex];

    proofCard.classList.add("is-switching");
    window.setTimeout(() => {
      proofText.textContent = item.text;
      proofName.textContent = item.name;
      proofRole.textContent = item.role;
      proofCard.classList.remove("is-switching");
    }, 130);
  }

  if (proofCard && proofPrev && proofNext) {
    proofPrev.addEventListener("click", () => renderProof(proofIndex - 1));
    proofNext.addEventListener("click", () => renderProof(proofIndex + 1));
  }

  const faqDetails = document.querySelectorAll(".faq-list details");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  faqDetails.forEach((detail) => {
    const summary = detail.querySelector("summary");
    if (!summary) return;

    summary.addEventListener("click", (event) => {
      event.preventDefault();
      if (detail.dataset.animating === "true") return;

      if (prefersReducedMotion) {
        detail.open = !detail.open;
        return;
      }

      const isOpen = detail.open;
      const startHeight = detail.offsetHeight;
      const closedHeight = summary.offsetHeight;

      detail.dataset.animating = "true";
      detail.style.overflow = "hidden";

      if (!isOpen) {
        detail.open = true;
      }

      const endHeight = isOpen ? closedHeight : detail.scrollHeight;
      const animation = detail.animate(
        {
          height: [`${startHeight}px`, `${endHeight}px`]
        },
        {
          duration: 280,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)"
        }
      );

      animation.onfinish = () => {
        if (isOpen) {
          detail.open = false;
        }
        detail.style.height = "";
        detail.style.overflow = "";
        delete detail.dataset.animating;
      };

      animation.oncancel = () => {
        detail.style.height = "";
        detail.style.overflow = "";
        delete detail.dataset.animating;
      };
    });
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
})();
