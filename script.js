/* ===================================================================
   EEAPA, S.A. — interactions: i18n (ES/EN), mobile nav, footer year
   =================================================================== */

const I18N = {
  en: {
    "brand.sub": "Energy Efficiency & Environment of Panama",
    "nav.services": "Services",
    "nav.method": "Method",
    "nav.packages": "Packages",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Request assessment",

    "hero.eyebrow": "Energy efficiency · Environment · Remote sensing",
    "hero.title": "We turn unmanaged night-light into measurable energy and environmental performance.",
    "hero.lead": "We build instruments, control systems, data platforms and technical methodologies to quantify energy waste and the impacts of excess artificial light — using ground instrumentation and remote sensing.",
    "hero.ctaPrimary": "View service packages",
    "hero.ctaSecondary": "How we work",
    "hero.stat1": "instrumental techniques",
    "hero.stat2": "continuous monitoring",
    "hero.stat3": "estimated savings",

    "trust.lead": "Target clients:",
    "trust.1": "Private communities",
    "trust.2": "Ports & logistics",
    "trust.3": "Shopping centers",
    "trust.4": "Heavy industry",
    "trust.5": "Critical infrastructure",

    "services.eyebrow": "Business lines",
    "services.title": "What we do",
    "services.sub": "Four integrated lines covering everything from the initial diagnosis to continuous monitoring and custom software.",
    "services.1.title": "Energy saving & efficiency consulting",
    "services.1.body": "We establish the baseline night-lighting and night-sky conditions per site or region, as a technical reference for future assessments, investments and audits.",
    "services.1.deliver": "Deliverable: diagnostic report, compliance score and lighting-technology recommendations.",
    "services.2.title": "Light & energy monitoring kits",
    "services.2.body": "Low-cost modular kits (Raspberry Pi, all-sky camera and controllers) with open connectivity, for 24/7 operations and sites with high energy demand.",
    "services.2.deliver": "Model: one-time sale with optional support & installation · USD 1,000–3,000 by configuration.",
    "services.3.title": "Regional data & monitoring platform",
    "services.3.body": "Active night photometry and spectrometry instrumentation to characterize, track and verify lighting-system performance, with before/after comparison.",
    "services.3.deliver": "For audits, ESG governance, boards and regulatory readiness.",
    "services.4.title": "Custom scientific software",
    "services.4.body": "Drivers and instrumentation for photometry and spectrometry, image analysis, scenario simulation and a digital console to monitor and optimize consumption.",
    "services.4.deliver": "Revenue from consulting and technical customization of the digital console.",

    "method.eyebrow": "Methodology",
    "method.title": "From measurement to decision",
    "method.sub": "We combine five instrumental techniques on the ground and in orbit to produce defensible energy and environmental diagnostics.",
    "method.1.title": "Broadband photometry",
    "method.1.body": "TESS-W photometer for zenith sky brightness and color (mag/arcsec²).",
    "method.2.title": "All-sky imaging",
    "method.2.body": "All-sky camera for the angular distribution of brightness and clouds.",
    "method.3.title": "Night spectrometry",
    "method.3.body": "Spectral power distribution and luminaire technology.",
    "method.4.title": "Drone photogrammetry",
    "method.4.body": "3D geometry, luminaire inventory and wasted upward flux.",
    "method.5.title": "Orbital remote sensing",
    "method.5.body": "Satellite, ISS and VIIRS products for the regional radiance context.",
    "method.6.title": "Energy & cost diagnostics",
    "method.6.body": "Estimated savings in kWh, cost and CO₂ emissions, with before/after verification.",

    "pkg.eyebrow": "Service packages",
    "pkg.title": "Remote sensing & environmental assessment",
    "pkg.sub": "The client selects one option. Public-image download through our automated system is free of charge; the fee covers the scientific design, analysis and technical responsibility.",
    "pkg.1.name": "Package 1",
    "pkg.1.tag": "Remote sensing analysis",
    "pkg.1.desc": "Full analysis based on public satellite imagery or client-provided imagery. Appropriate when no field campaign is required.",
    "pkg.1.f1": "Public-image download (free of charge)",
    "pkg.1.f2": "Preprocessing, reprojection and georeferencing",
    "pkg.1.f3": "Spatial analysis of brightness and environmental context",
    "pkg.1.f4": "Maps and concise technical interpretation",
    "pkg.2.name": "Package 2",
    "pkg.2.tag": "Ground + satellite",
    "pkg.2.desc": "Adds field observations to the satellite analysis. For an environmental diagnosis backed by local measurements.",
    "pkg.2.f1": "Everything in Package 1",
    "pkg.2.f2": "Experimental design and field protocol",
    "pkg.2.f3": "Site visit, notes and photographic documentation",
    "pkg.2.f4": "Ground–satellite comparison and integrated interpretation",
    "pkg.3.name": "Package 3",
    "pkg.3.tag": "Ground + satellite + drone",
    "pkg.3.desc": "Adds drone-supported aerial context for a higher-resolution spatial description of light sources and infrastructure.",
    "pkg.3.f1": "Everything in Package 2",
    "pkg.3.f2": "Drone mission design and flight plan",
    "pkg.3.f3": "Aerial acquisition and image quality control",
    "pkg.3.f4": "Drone–satellite–ground integration in final report",
    "pkg.popular": "Most requested",
    "pkg.choose": "Choose package",
    "pkg.note": "Amounts in USD · 30-day validity · Totals are not cumulative unless an expanded scope is requested.",

    "about.eyebrow": "About",
    "about.title": "Applied environmental science, from Panama",
    "about.p1": "EEAPA, S.A. is a Panamanian company dedicated to energy efficiency and the environment. We operate a regional data platform based on active instrumentation, and offer recurring service schemes without proportionally increasing operating costs.",
    "about.p2": "For scientific research and social responsibility, properly referenced aggregated data will be openly available to the academic community, without compromising sensitive or commercial information.",
    "about.v1.t": "Evidence.",
    "about.v1.b": "Reproducible measurements and before/after verification.",
    "about.v2.t": "Independence.",
    "about.v2.b": "Scientific direction that protects the client from products with weak methodology.",
    "about.v3.t": "Openness.",
    "about.v3.b": "Open academic data; commercial services by subscription.",
    "about.team": "Leadership",
    "about.ceo": "Chief Executive Officer (CEO)",
    "about.admin": "Administration & Human Resources",

    "contact.eyebrow": "Contact",
    "contact.title": "Request an initial assessment",
    "contact.sub": "Tell us about your site and goals. We will reply with the recommended package and next steps.",
    "contact.name": "Name",
    "contact.org": "Organization",
    "contact.email": "Email",
    "contact.interest": "Interest",
    "contact.opt1": "Package 1 — Remote sensing (USD 4,000)",
    "contact.opt2": "Package 2 — Ground + satellite (USD 7,000)",
    "contact.opt3": "Package 3 — Ground + satellite + drone (USD 10,500)",
    "contact.opt4": "Monitoring kits",
    "contact.opt5": "Other / not sure",
    "contact.msg": "Message",
    "contact.send": "Send request",
    "contact.hint": "Your email app will open with the message ready to send.",
    "contact.direct": "Direct contact",
    "contact.general": "Inquiries & projects",
    "contact.adminLabel": "Administration & payments",
    "contact.addressLabel": "Office",
    "contact.address": "El Cangrejo, Panama City, Panama",

    "footer.tag": "Energy Efficiency & Environment of Panama",
    "footer.rights": "All rights reserved."
  }
};

// Spanish is the source language (text already in the HTML), so we only
// need a dictionary for English. We snapshot the original ES text on load.
const ES_CACHE = {};

function applyLang(lang) {
  const nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!(key in ES_CACHE)) ES_CACHE[key] = el.textContent;
    if (lang === "en" && I18N.en[key] != null) {
      el.textContent = I18N.en[key];
    } else {
      el.textContent = ES_CACHE[key];
    }
  });
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-opt").forEach((s) =>
    s.classList.toggle("active", s.dataset.lang === lang)
  );
  try { localStorage.setItem("eeapa-lang", lang); } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Language: stored pref, else browser, else ES
  let lang = "es";
  try { lang = localStorage.getItem("eeapa-lang") || (navigator.language || "es").slice(0, 2); } catch (e) {}
  if (lang !== "en") lang = "es";
  applyLang(lang);

  document.getElementById("langToggle").addEventListener("click", () => {
    applyLang(document.documentElement.lang === "en" ? "es" : "en");
  });

  // Mobile nav
  const burger = document.getElementById("navBurger");
  const nav = document.querySelector(".main-nav");
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    })
  );
});
