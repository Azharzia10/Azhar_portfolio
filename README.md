# Azhar Zia — Portfolio

A single-page portfolio built with **Vite + React + Tailwind CSS**, styled as a
"blueprint / technical drawing" system — grid paper, dimension-line headings,
schematic project cards, and a title-block hero.

## 1. Setup

```bash
# create the project (already scaffolded here — skip if using these files directly)
npm create vite@latest azhar-portfolio -- --template react
cd azhar-portfolio

# install dependencies
npm install

# install & init Tailwind (already configured in this project)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then copy the contents of this project (`src/`, `public/`, `tailwind.config.js`,
`postcss.config.js`, `index.html`) into your scaffolded app, overwriting the defaults.

## 2. Run locally

```bash
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## 3. Add your profile picture (optional but recommended)

The hero section shows a circular portrait, centered above your name. Add a
square photo (500×500px or larger works best) to `public/` named:

```
profile.jpg
```

```
azhar-portfolio/
├── public/
│   └── profile.jpg   ← put your photo here
```

If no `profile.jpg` is found, the hero automatically falls back to an "AZ"
initials badge, so the layout never breaks — the image path is set in
`src/components/Hero.jsx` via the `PROFILE_IMAGE` constant if you want to
rename it or point elsewhere.

## 4. Add your resume PDF — REQUIRED

The download button links to a file that must be named **exactly**:

```
Azhar_Zia_Resume_ATS (1).pdf
```

**Place that file directly inside the `public/` folder**, at the project root:

```
azhar-portfolio/
├── public/
│   └── Azhar_Zia_Resume_ATS (1).pdf   ← put it here
├── src/
└── ...
```

Vite copies everything inside `public/` to the root of the built site
untouched (no bundling/hashing), so this file becomes available at:

```
/Azhar_Zia_Resume_ATS (1).pdf
```

The button in `src/components/ResumeDownload.jsx` already points to this
exact path (URL-encoded for the space):

```jsx
const RESUME_PATH = '/Azhar_Zia_Resume_ATS%20(1).pdf'

<a href={RESUME_PATH} download="Azhar_Zia_Resume_ATS (1).pdf">
  Download Resume (PDF)
</a>
```

No further code changes are needed — just drop the PDF into `public/` and it
will work in both `npm run dev` and the production build.

## 5. Build for production

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## 6. Before you deploy — personalize these

- `src/components/Hero.jsx` — update the LinkedIn/GitHub URLs in `SOCIALS`
- `src/components/Footer.jsx` — same social links, duplicated in the footer
- `public/favicon.svg` — swap for your own mark if you'd like
- Delete `public/PUT_RESUME_PDF_HERE.txt` once the real PDF is in place

## Project structure

```
azhar-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   ├── profile.jpg                    ← you add this
│   └── Azhar_Zia_Resume_ATS (1).pdf   ← you add this
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── ResumeDownload.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Education.jsx
        └── Footer.jsx
```
