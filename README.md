# Shivendra Jith — Portfolio

A premium, world-class developer portfolio.
React 19 · Vite · Tailwind CSS · Framer Motion · GSAP · Lenis smooth scroll.

## Run it
```bash
npm install
npm run dev
```
Open the printed URL (usually http://localhost:5173).
Do NOT open index.html directly — it must run through the dev server.

## Build for production
```bash
npm run build
npm run preview
```

## Sections (all complete)
1. Hero
2. About
3. Skills
4. Experience  (KodNest · Suffix E Solutions)
5. Featured Projects  (Shivora · TaskBuddy · Stranger Things)
6. GitHub Statistics  (live cards)
7. Education  (MCA · BCA)
8. Certifications
9. Contact  (working mailto form)
10. Footer

## Edit your content (no code digging needed)
- src/data/profile.js   — name, role, socials, email, location
- src/data/projects.js  — projects + live/GitHub links (swap thumbnails in public/projects/)
- src/data/skills.js    — skills & icons
- src/data/journey.js   — experience, education, certifications

## Notes
- GitHub stat cards pull live from github.com/shivendrajith08.
- The contact form opens the visitor's email client (mailto). To use a real
  backend later, swap the onSubmit in src/components/sections/Contact.jsx for
  Formspree / EmailJS / your API.
