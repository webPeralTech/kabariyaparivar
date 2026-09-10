# Kabariya Parivar Web Application (Next.js)

A modern, high-performance web application for **Kabariya Parivar** and **Mataji Madh (Randal Maa – Khodal Mataji)** at Savarkundla, Gujarat.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Vanilla CSS Design System**.

---

## 🚀 Quick Start (Development)

Inside the `kabariya-parivar-web` directory, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```text
kabariya-parivar-web/
├── app/
│   ├── layout.tsx         # Root layout with fonts, metadata, Header & Footer
│   ├── page.tsx           # Home page (Hero, Welcome, Bhuva Shree, Quick Links)
│   ├── darshan/page.tsx   # YouTube Live Darshan & Aarti Schedule
│   ├── donation/page.tsx  # Bank Details, Interactive Copy, QR Code & Paytm
│   ├── event/page.tsx     # Annual Yagna, Navratri, Parivar Milan
│   ├── gallery/page.tsx   # Year-wise Gallery (1995-2021) with Fullscreen Lightbox
│   ├── prayers/page.tsx   # Aarti & Stuti with Gujarati and English transliterations
│   ├── trustee/page.tsx   # Trustee Committee & Bhuva Shree Directories
│   ├── location/page.tsx  # Google Maps, Address & Travel Guide
│   ├── not-found.tsx      # Custom Devotional 404
│   └── globals.css        # Devotional design tokens, typography & styles
├── components/
│   ├── Header.tsx         # Sticky glassmorphic navbar with mobile menu
│   ├── Footer.tsx         # Multi-column footer with contact and social links
│   ├── LanguageSwitcher.tsx # Instant EN | ગુ toggle
│   ├── TempleMark.tsx     # Sacred mandir spire SVG
│   ├── BankDetailsCard.tsx# One-click copy bank transfer card
│   ├── EventCard.tsx      # Upcoming event card
│   ├── PersonCard.tsx     # Trustee and Bhuva Shree portrait card
│   ├── LightboxModal.tsx  # Fullscreen image viewer
│   └── SectionHeader.tsx  # Consistent section title with eyebrow mark
├── context/
│   └── LanguageContext.tsx# Bilingual state provider
└── data/
    ├── siteConfig.ts      # Contact, phone, email, socials, bank info
    ├── translations.ts    # English and Gujarati dictionaries
    ├── galleryData.ts     # Photo and video lists by year
    ├── trusteeData.ts     # Bhuva Shree & Trustee members
    ├── eventsData.ts      # Upcoming events
    └── prayersData.ts     # Aarti lyrics & stuti verses
```

---

## 📸 How to Add Photos & Videos

Edit `data/galleryData.ts`:

### 1. Adding Photos (Cloudinary)
1. Upload your photo to [Cloudinary](https://cloudinary.com) (free).
2. Copy the Image URL (`https://res.cloudinary.com/...`).
3. Add it to the desired year in `data/galleryData.ts`:
```ts
photos: [
  { url: "https://res.cloudinary.com/xxx/yagna1.jpg", caption: "Yagna Mandap" }
]
```

### 2. Adding Videos (YouTube)
1. Upload your video to YouTube.
2. Copy the Video ID (e.g. `dQw4w9WgXcQ`).
3. Add it to `data/galleryData.ts`:
```ts
videos: [
  { youtubeId: "dQw4w9WgXcQ", caption: "Yagna Highlights" }
]
```

---

## 👥 How to Add / Edit Trustees & Bhuva Shree

Edit `data/trusteeData.ts`:
```ts
{
  name: "Vallabhabhai Dayabhai Kabariya",
  nameGu: "વલ્લભભાઈ દયાળભાઈ કબરિયા",
  role: "Bhuva Shree",
  roleGu: "ભુવા શ્રી",
  photo: "https://res.cloudinary.com/xxx/photo.jpg" // Or leave empty "" for fallback
}
```

---

## 🌐 How to Edit English & Gujarati Texts

Edit `data/translations.ts`. Both `en` and `gu` objects contain all phrases used across the site.

---

## ☁️ Deploying to Vercel (Free & Instant)

1. Push this folder to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your repository, set the root directory to `kabariya-parivar-web` (if in a subfolder), and click **Deploy**.
4. Your site is live on a free `.vercel.app` domain or your custom domain!
