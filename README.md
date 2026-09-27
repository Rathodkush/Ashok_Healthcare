# Ashok Home Healthcare Services — Web Portal

> **Bengaluru's Premier Home ICU, Nursing, Rehabilitation, and Medical Equipment Portal.**
> Supervised by former Apollo Hospitals clinical nurse leaders.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Technology Stack](#-technology-stack)
- [Prerequisites](#-prerequisites)
- [Quick Start (One-Command Startup)](#-quick-start-one-command-startup)
- [Available Scripts](#-available-scripts)
- [Cross-Platform Compatibility (Windows, macOS, Linux)](#-cross-platform-compatibility-windows-macos-linux)
- [Zero-Dependency Local Server Option](#-zero-dependency-local-server-option)
- [Project Directory Layout](#-project-directory-layout)
- [Environment Configuration](#-environment-configuration)
- [Production Build & Deployment](#-production-build--deployment)
- [Testing & Quality Assurance](#-testing--quality-assurance)

---

## 🏥 Overview

Ashok Home Healthcare Services delivers hospital-grade clinical treatments, 24/7 bedside nursing, critical care home ICU installations, motorized hospital beds, and neuro/orthopedic rehabilitation directly to patients across Yeshwanthpur and all of Bengaluru.

This repository contains the complete responsive web application, photo/video clinical gallery, assessment booking systems, and equipment rental portals.

---

## 🛠 Technology Stack

- **Markup & Structure**: Semantic HTML5 (W3C validated, accessibility-ready)
- **Styling**: Bootstrap 5.3 + Custom BEM CSS Design System (`assets/css/`)
- **Interactive Logic**: Vanilla JavaScript ES6+ (`assets/js/`)
- **Development & Bundling Tool**: [Vite](https://vitejs.dev/) v6.x (Multi-page configuration)
- **Runtime & Scripts**: Node.js (>= 18.0.0) & npm (>= 9.0.0)
- **Portability**: Standard relative paths, UTF-8 encoding, cross-platform file normalization

---

## ⚙️ Prerequisites

Ensure you have **Node.js** installed on your computer:

| Environment | Supported Versions | Check Version Command |
| :--- | :--- | :--- |
| **Node.js** | `>= 18.0.0` (LTS recommended) | `node -v` |
| **npm** | `>= 9.0.0` | `npm -v` |

> *Works on Windows 10/11, macOS (Intel & Apple Silicon), and all standard Linux distributions (Ubuntu, Debian, Fedora, Arch).*

---

## 🚀 Quick Start (One-Command Startup)

### 1. Clone or Download the Repository

```bash
git clone https://github.com/your-username/ashok-healthcare.git
cd ashok-healthcare
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open your browser to:
👉 **`http://localhost:3000/`** (or the port displayed in your terminal)

---

## 📜 Available Scripts

In the project root, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the high-speed Vite development server with live reload on `http://localhost:3000` |
| `npm run build` | Compiles and packages all HTML, CSS, JS, and media files into `dist/` |
| `npm run preview` | Previews the compiled `dist/` production build locally |
| `npm run serve` or `npm start` | Launches the native zero-dependency Node.js HTTP server on `http://localhost:8080` |
| `npm test` | Executes the cross-platform system compatibility verification suite (49 automated assertions) |
| `npm run validate` | Scans all 1,600+ links, images, scripts, and stylesheets for broken references |

---

## 🌐 Cross-Platform Compatibility (Windows, macOS, Linux)

This project has been engineered to run identically across all major operating systems:

1. **Relative Paths**: No absolute or operating system-specific paths (e.g. `C:\...` or `/home/...`). All resources use normalized relative paths (`./` and `../`).
2. **Case Sensitivity**: Filename casing is strictly synchronized to prevent 404 errors on case-sensitive Linux/macOS filesystems.
3. **HTTP Range Requests for Video**: The built-in server supports `206 Partial Content` (Range headers), ensuring smooth MP4 seeking and playback in Safari (macOS/iOS) and Chrome/Edge/Firefox.
4. **Automatic Port Fallback**: If port `8080` or `3000` is already in use by another application, the servers automatically detect the conflict and bind to the next available port.
5. **No Native Binaries**: Free of platform-specific C/C++ compilation tools (e.g., node-gyp or python-build).

---

## ⚡ Zero-Dependency Local Server Option

If you want to run the project immediately without running `npm install`, you can start the native Node.js static server:

```bash
node server.js
```

Or using Python:
```bash
# Python 3
python -m http.server 8080
```

---

## 📁 Project Directory Layout

```text
├── index.html              # Homepage with 24/7 emergency dispatch and clinical hero
├── about.html              # About Ashok Healthcare, clinical leadership and team
├── services.html           # Full clinical healthcare services directory
├── products.html           # Surgical equipment rental and sales catalog
├── gallery.html            # Photo & Video Gallery with separated filter and lightboxes
├── careers.html            # Nursing, physiotherapy, and medical caregiver hiring portal
├── blog.html               # Healthcare insights, clinical guides and patient advice
├── contact.html            # Yeshwanthpur clinical hub dispatch, map and contact form
├── privacy.html            # Privacy Policy
├── terms.html              # Terms of Service
├── 404.html                # Custom 404 error page
│
├── services/               # Clinical specialty detail pages
│   ├── home-nursing.html
│   ├── home-icu.html
│   ├── rehabilitation.html
│   ├── physiotherapy.html
│   ├── elder-care.html
│   ├── diagnostic-services.html
│   └── ambulance.html
│
├── blog/                   # Evidence-based clinical blog articles
│   ├── best-home-healthcare-services-in-bangalore.html
│   ├── home-nursing-services-in-bangalore-complete-guide.html
│   ├── bipap-machine-in-yeshwanthpur-expert-home-healthcare...html
│   ├── home-icu-setup-bangalore.html
│   ├── physiotherapy-at-home-after-surgery.html
│   └── elder-care-services-guide.html
│
├── Gallery/                # High-definition clinical photos and demo MP4 videos
│   ├── gallery_1/          # 81 photos + 13 clinical videos
│   ├── gallery_2/          # 22 photos + 1 clinical video
│   └── gallery_3/          # 5 photos
│
├── assets/
│   ├── css/                # Bootstrap 5 + custom production stylesheets
│   │   ├── style.css       # Core stylesheet & design tokens
│   │   └── components/     # Modular component CSS (header, cards, gallery, modals)
│   └── js/                 # Client-side scripts
│       ├── gallery.js      # Dynamic gallery data, filtering, and popup lightbox
│       ├── modals.js       # Global modal dialogs and form handlers
│       ├── navigation.js   # Desktop navbar and mobile drawer
│       ├── component-loader.js # In-memory and asynchronous component loader
│       └── forms.js        # Contact validation and WhatsApp dispatch
│
├── components/             # Reusable modular HTML snippets (header, footer, modals)
├── package.json            # Scripts, metadata, and dependencies
├── vite.config.js          # Cross-platform multi-page Vite build configuration
├── server.js               # Zero-dependency local Node.js HTTP server
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules for build and OS temporary files
└── test/
    └── check_compatibility.js # Automated verification test suite
```

---

## 🔒 Environment Configuration

To configure local ports or organizational parameters:

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Available variables:
   ```env
   PORT=8080
   HOST=0.0.0.0
   NODE_ENV=development
   SITE_URL=https://ashokhealthcare.in
   CONTACT_PHONE=+917829753538
   WHATSAPP_NUMBER=917829753538
   CONTACT_EMAIL=contact@ashokhealthcare.com
   ```

---

## 🚢 Production Build & Deployment

To generate an optimized production bundle:

```bash
npm run build
```

This compiles all HTML files, minifies stylesheets and assets, and packages all static directories (`Gallery/`, `images/`, `Bg_Banner/`, `components/`) into the `dist/` directory.

### Deploying the `dist/` Folder:
- **Vercel / Netlify / Cloudflare Pages**: Set build command to `npm run build` and publish directory to `dist`.
- **Apache / Nginx**: Copy the contents of `dist/` to your web root (`/var/www/html/`).
- **Static Hosting**: Upload `dist/` directly to AWS S3, Google Cloud Storage, or GitHub Pages.

---

## 🧪 Testing & Quality Assurance

Run the automated test suite to verify project integrity:

```bash
npm test
```

This checks:
- Node engine version compatibility
- Presence and non-emptiness of all 24 HTML pages
- Integrity of all client-side JavaScript modules
- Integrity of all CSS component stylesheets
- Existence of all media files and folders
- Absence of broken relative links across 1,600+ page references

---

## 📞 Support & Dispatch Desk

- **24/7 Emergency Helpline**: [+91 78297 53538](tel:+917829753538)
- **WhatsApp Support**: [+91 78297 53538](https://wa.me/917829753538)
- **Address**: 28, Ground Floor, 4th Cross Rd, A. T. Street, Dr. Ambedkar Nagar, Yeshwanthpur, Bengaluru, Karnataka 560022
- **Website**: [https://ashokhealthcare.in/](https://ashokhealthcare.in/)
