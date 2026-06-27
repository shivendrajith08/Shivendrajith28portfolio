<div align="center">

# Shivendra Jith — Developer Portfolio

A premium, world-class developer portfolio built with **React 19**, **Vite**, **Tailwind CSS**, **Framer Motion**, **GSAP**, and **Lenis** smooth scroll.

[**🌐 Live Site**](https://shivendrajith28portfolio.vercel.app) · [**GitHub**](https://github.com/shivendrajith08) · [**LinkedIn**](https://www.linkedin.com/in/shivendra-jith)

</div>

---

## ✨ Overview

This is my personal portfolio — a minimal-luxury, fully responsive single-page site designed to feel premium, modern, and memorable. It showcases who I am, the tools I build with, my experience, and the projects I've shipped.

Built from the ground up with a custom design system (no templates), an interactive aurora background, a magnetic cursor, scroll-triggered animations, and smooth page transitions.

## 🚀 Features

- **Animated hero** with kinetic name reveal and rotating role titles
- **Signature aurora background** — drifting mesh-gradient blobs that react to the cursor
- **Magnetic cursor** and magnetic buttons for a tactile, interactive feel
- **Smooth scrolling** powered by Lenis
- **Scroll-reveal animations** (fade, blur, scale, slide, stagger) via Framer Motion
- **Glassmorphism** cards, soft gradients, and modern shadows throughout
- **Live GitHub statistics** pulled directly from my profile
- **Fully responsive** — mobile, tablet, laptop, desktop, and ultrawide
- **Accessible & performant** — keyboard focus, reduced-motion support, lazy-loaded images, code splitting

## 🧩 Sections

1. Hero
2. About
3. Skills
4. Experience
5. Featured Projects
6. GitHub Statistics
7. Education
8. Certifications
9. Contact
10. Footer

## 🛠 Tech Stack

| Category | Tools |
|---|---|
| **Framework** | React 19 |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion, GSAP |
| **Smooth Scroll** | Lenis |
| **Icons** | React Icons, Lucide |
| **Deployment** | Vercel |

## 📂 Project Structure

```
src/
├─ main.jsx                 App entry
├─ App.jsx                  Root layout
├─ index.css               Global styles, fonts, design tokens
├─ data/                   All editable content (no code digging needed)
│  ├─ profile.js           Name, role, socials, contact
│  ├─ projects.js          Projects + live/GitHub links
│  ├─ skills.js            Skills & icons
│  └─ journey.js           Experience, education, certifications
├─ hooks/
│  ├─ useLenis.js          Smooth scroll
│  └─ useMousePosition.js
└─ components/
   ├─ layout/              Navbar, Footer
   ├─ sections/            Hero, About, Skills, Experience, Projects, etc.
   └─ ui/                  Reusable primitives (Cursor, MagneticButton, Reveal, etc.)
```

## 💻 Run Locally

> Requires Node.js 18+

```bash
# 1. Clone the repo
git clone https://github.com/shivendrajith08/Shivendrajith28portfolio.git
cd Shivendrajith28portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open the printed URL (usually `http://localhost:5173`).

> ⚠️ Don't open `index.html` directly — it must run through the dev server.

## 🏗 Build for Production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

## 🚢 Deployment

Deployed on **Vercel** with zero-config Vite detection. Every push to `main` triggers an automatic production deploy.

## 📬 Contact

- **Email:** shivendrajith@gmail.com
- **LinkedIn:** [in/shivendra-jith](https://www.linkedin.com/in/shivendra-jith)
- **GitHub:** [@shivendrajith08](https://github.com/shivendrajith08)

---

<div align="center">

Designed & built by **Shivendra Jith** with React, Tailwind & Framer Motion.

⭐ If you like this portfolio, consider giving it a star!

</div>
