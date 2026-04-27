# Sabores de la Noche – Nocturnal Gastronomic Festival

A fully responsive landing page for a nocturnal gastronomic festival, built with semantic HTML5, CSS3, and vanilla JavaScript.

---

## Description

Sabores de la Noche is an event landing page designed to promote a gastronomic festival that tours multiple Colombian cities. The page communicates the festival's identity through a dark, atmospheric visual style, showcases upcoming event dates, highlights thematic food zones, and provides a gallery of the festival experience.

---

## Technologies Used

- **HTML5** – semantic structure using `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`, `<table>`
- **CSS3** – custom properties (variables), Flexbox, CSS Grid, media queries, animations, and transitions
- **Vanilla JavaScript** – hamburger menu, scroll effects, active nav link, newsletter validation, IntersectionObserver animations
- **Ionicons 7** – SVG icon set loaded via CDN
- **Google Fonts** – Bebas Neue, Playfair Display, DM Sans

---

## Project Structure

```
festival-landing/
│
├── index.html          # Main HTML document
├── css/
│   └── styles.css      # All styles – mobile-first approach
├── js/
│   └── main.js         # Vanilla JS interactions
├── assets/
│   ├── images/
│   │   ├── hero-bg.jpg         # Hero section background
│   │   ├── about-dish.jpg      # About section dish photo
│   │   ├── gallery-1.jpg       # Gallery images (1–5)
│   │   ├── gallery-2.jpg
│   │   ├── gallery-3.jpg
│   │   ├── gallery-4.jpg
│   │   ├── gallery-5.jpg
│   │   ├── sponsor-1.png       # Sponsor logos (1–4)
│   │   ├── sponsor-2.png
│   │   ├── sponsor-3.png
│   │   └── sponsor-4.png
│   └── icons/                  # Reserved for any local icon assets
└── README.md
```

---

## Features

- **Mobile-first responsive design** – adapts from 320 px to wide desktops
- **Sticky header** with transparent-to-solid scroll effect
- **Animated hero** with staggered title reveal and CSS zoom on background
- **HTML Table** with proper `<thead>`, `<tbody>`, `<th>`, `<td>` for event dates
- **Semantic list** `<ul>` / `<li>` for festival experiences
- **CSS Grid** used in Zones and Gallery sections
- **Flexbox** used in Header, Footer, social links, and newsletter form
- **Hamburger menu** for mobile navigation with smooth slide-in drawer
- **Scroll-triggered animations** via IntersectionObserver
- **Hover interactions** on cards, gallery images, nav links, and social icons
- **Newsletter form** with basic email validation
- **Sponsors** bonus section
- **CSS animations** – hero zoom, light flicker, fade-up entrance effects
- `prefers-reduced-motion` support for accessibility

---

## How to Run Locally

1. Clone or download the repository.
2. Add your images to `assets/images/` using the file names listed in the project structure above.
3. Open `index.html` directly in any modern browser — no build step or server required.

```bash
# Optional: serve with a simple local server (Python 3)
python -m http.server 8080
# Then visit http://localhost:8080
```

---

## Color Palette

| Role | Value |
|---|---|
| Background | `#0a0610` |
| Surface | `#110d1a` |
| Accent (gold) | `#f5c400` |
| Text | `#f0e8d0` |
| Muted text | `#9e8fa8` |

---

## Responsive Breakpoints

| Breakpoint | Target |
|---|---|
| `< 600px` | Mobile |
| `≥ 600px` | Tablet |
| `≥ 1024px` | Desktop |

---

## Credits

- Fonts: [Google Fonts](https://fonts.google.com)
- Icons: [Ionicons](https://ionic.io/ionicons)
- Project: HTML & CSS Module 2 – Performance Test
