[README.md](https://github.com/user-attachments/files/26608453/README.md)
# Engineering Portfolio — Setup & Editing Guide

A clean, dark-themed personal engineering portfolio built with HTML, CSS, and vanilla JavaScript.
No frameworks. No build tools. Works on GitHub Pages out of the box.

---

## 📁 File Structure

```
portfolio-site/
├── index.html          ← All page structure and content
├── styles.css          ← All styling (variables, layout, animations)
├── script.js           ← Interactions (nav, reveal, expand, image fallback)
├── README.md           ← This file
└── assets/
    ├── images/
    │   ├── profile.jpg     ← Your profile/hero photo
    │   ├── about.jpg       ← Lab/workshop/working photo
    │   ├── project1.jpg    ← Mazda rebuild photo
    │   ├── project2.jpg    ← Gearbox CAD or photo
    │   ├── project3.jpg    ← Thermal FEA screenshot
    │   └── project4.jpg    ← Arduino rover photo
    └── resume.pdf          ← Your resume PDF
```

---

## 🚀 Running Locally

1. Download or clone the project folder
2. Open `index.html` in any browser
3. That's it — no server needed

---

## 🌐 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click **New repository**
3. Name it: `your-username.github.io` (for a personal site)
   - OR any name like `portfolio` (site will be at `your-username.github.io/portfolio`)
4. Set to **Public**, click **Create repository**

### Step 2: Upload Your Files
**Option A — GitHub Web UI (easiest):**
1. Click **uploading an existing file** on the repo page
2. Drag all your files and folders into the upload area
3. Click **Commit changes**

**Option B — Git CLI:**
```bash
git init
git add .
git commit -m "Initial portfolio upload"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select `main` branch and `/ (root)` folder
3. Click **Save**
4. Your site will be live at `https://your-username.github.io` within ~60 seconds

---

## ✏️ How to Edit Content

### Change Your Name
In `index.html`, search for `Your Name` — appears in:
- Line ~24 (nav logo initials `YN.` — change to your initials)
- Line ~46 (hero heading)
- Line ~170 (footer)

### Add Your Email & Links
Search for these placeholders in `index.html`:
```html
href="mailto:your.email@example.com"
href="https://linkedin.com/in/yourprofile"
href="https://github.com/yourusername"
```

### Link Your Resume
**To view online** (e.g. Google Drive):
1. Upload PDF to Google Drive
2. Right-click → Share → Anyone with the link can view
3. Copy the link
4. In `index.html`, find `id="resumeViewBtn"` and replace `href="#"` with your link

**To download from GitHub:**
1. Put your `resume.pdf` in the `assets/` folder
2. The download button already points to `assets/resume.pdf`

### Replace Images
Just drop your files into `assets/images/` with these exact names:
- `profile.jpg` — hero photo
- `about.jpg` — about section photo  
- `project1.jpg` — Mazda rebuild
- `project2.jpg` — Gearbox
- `project3.jpg` — Brake rotor thermal
- `project4.jpg` — Arduino rover

**If your photos have different names**, update the `src` attributes in `index.html`.

---

## ➕ Adding a New Project

1. Copy a project card block from `index.html` (search for `PROJECT 1`, `PROJECT 2`, etc.)
2. Paste it inside `.projects-grid` after the last card
3. Change the `data-project="5"` attribute and all `id="details-5"` references to `5`
4. Update the `onclick="toggleProject(5)"` to match
5. Add your image as `assets/images/project5.jpg`
6. Update the title, description, and tech tags

---

## 🎨 Changing Colors & Fonts

All design variables are at the top of `styles.css`:

```css
:root {
  --accent: #d4872a;    /* amber/brass — change to any color */
  --bg:     #0d0d0d;    /* main background */
  --text:   #e8e4dc;    /* main text color */
}
```

To change fonts, update the Google Fonts `<link>` in `index.html`'s `<head>` and the font variables in `:root`.

---

## 🔧 Quick Edits Cheat Sheet

| What to change | Where to find it |
|---|---|
| Your name | `index.html` — search "Your Name" |
| Email | `index.html` — search "your.email@example.com" |
| LinkedIn | `index.html` — search "yourprofile" |
| GitHub | `index.html` — search "yourusername" |
| Resume link | `index.html` — `id="resumeViewBtn"` |
| Project text | `index.html` — inside each `.project-card` |
| Skills list | `index.html` — `.skills-grid` section |
| Accent color | `styles.css` — `--accent:` variable |
| Background | `styles.css` — `--bg:` variable |

---

## 📱 Mobile Support

The site is fully responsive:
- Nav collapses to hamburger menu below 768px
- Hero switches to single column below 900px
- Projects stack to single column below 840px
- Experience stacks to single column below 700px

No extra work needed.
