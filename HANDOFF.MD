**Handoff Summary**

**Current Project State**

- Active project: `e:\lp\HEAVY CUDDLY`
- Brand/company: `HEAVY CUDDLY s.r.o.`
- Domain: `heavycuddly.com`
- Email: `support@heavycuddly.com`
- Site is a new lightweight static/PHP base, intentionally without heavy final content.
- No phone number is included.

**Implemented Structure**

- Home page: `index.html`
- Services hub: `services.html`
- Five service detail pages:
  - `strategy-consulting.html`
  - `performance-marketing.html`
  - `creative-systems.html`
  - `marketing-operations.html`
  - `conversion-intelligence.html`
- About page: `about.html`
- Contact page: `contact.html`
- Legal pages:
  - `privacy.html`
  - `terms.html`
  - `cookie-policy.html`
- SEO basics:
  - `robots.txt`
  - `sitemap.xml`
- PHP form handler:
  - `contact-submit.php`

**Architecture**

- Central company data lives in `js/site-config.js`.
- Footer/company/email/domain/address/company ID use `data-config` and JS replacement.
- Address and company ID are placeholders: `XXXXXXXXXXXXX`.
- Contact form posts to `contact-submit.php`; PHP reads recipient/company/domain from `js/site-config.js`.
- No frameworks. Static HTML/CSS/vanilla JS plus Lucide icons CDN and Google Fonts.

**Design Direction From Reference**

- Dark digital agency base: deep navy/charcoal backgrounds.
- Bright royal blue CTA accents with cyan supporting color.
- Large bold Inter-style typography.
- Fixed translucent header, simple custom wordmark, big hero image treatment.
- Rounded but restrained cards and panels.
- Trust/rating strip and service cards are scaffolded on the home page.

**Important Constraints**

- Keep content light until the user provides more design references/copy direction.
- Do not add phone numbers.
- Keep company/domain/email centralized through `js/site-config.js`.
- Preserve five-service structure unless user changes scope.
- Use `support@heavycuddly.com` everywhere email is needed.

**Pending Useful Work**

- Browser QA pass on desktop and mobile once the user approves the base direction.
- Replace remote temporary hero/story photos with project-local final assets if desired.
- Expand sections and service-page content based on the next visual references.
- Replace address/company ID placeholders if real details become available.
