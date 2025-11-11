# BURGMEN - Deployment Checklist

## ✅ Pre-Deployment Provera

### 1. Build test
```bash
npm run build
npm run preview
```

### 2. GitHub Setup
```bash
git init
git add .
git commit -m "Initial commit - BURGMEN website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/burgmen.git
git push -u origin main
```

### 3. Vercel Deployment

#### Automatski (Preporučeno):
1. Idi na [vercel.com](https://vercel.com)
2. Klikni "Add New Project"
3. Import GitHub repo
4. Vercel će automatski detektovati Vite
5. Klikni "Deploy"

#### Preko CLI:
```bash
npm i -g vercel
vercel login
vercel
```

## 📋 Konfigurisano

✅ `vercel.json` - Routing i cache optimizacija
✅ `.gitignore` - Ignoriše build fajlove i env
✅ Build komande u `package.json`
✅ Sve slike i video u `/public` folderu

## 🎯 Finalne Provjere

- [ ] Sve lokalne slike rade (`/classicburger.png`, `/burger3.png`, etc.)
- [ ] Video pozadina (`/pozadinastranice.mp4`) učitava
- [ ] Nema hardcoded localhost URL-ova
- [ ] Sve animacije rade
- [ ] Responsive design testiran
- [ ] Browser compatibility provjeren

## 🚀 Vercel će automatski:
- Buildati projekat sa `npm run build`
- Servirati fajlove iz `dist/` foldera
- Cachirati slike i video (1 godina)
- Redirect sve rute na `index.html` (SPA routing)

## ⚡ Performance
- Video postavljen na `opacity: 40%` za performanse
- GPU accelerated animacije
- Lazy loading za slike
- Optimizovani gradijenti i blurs
