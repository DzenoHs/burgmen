# 🍔 BURGER BAR - Showcase Website

**Brutalni showcase website za burger bar** kreiran sa React + Vite + Tailwind CSS + Framer Motion.

**VAŽNO:** Ovo je **PREZENTACIONA stranica** (showcase only) - BEZ ordering sistema, shopping cart-a ili e-commerce funkcionalnosti. Fokus je na vizuelnom impaktu i luksuznim animacijama.

## ✨ Key Features

### 🎨 Visual Design
- **Pure Black Background** - Čista crna (#000) sa animated grain texture
- **Floating Gradient Orbs** - 5 orba (red/orange/yellow) sa slow float animacijama
- **Glassmorphism Navbar** - Transparent blur → solid effect nakon scroll-a
- **Massive Typography** - text-[10rem] na desktop, font-black, brutalno

### 🎭 Brutalne Animacije
- **Hero**: Word-by-word stagger reveal (3D perspective)
- **Burgers**: Alternating slide-in (lijevo-desno-lijevo) sa Intersection Observer
- **Parallax**: Scroll-triggered reveal animacije
- **Hover**: Scale, glow borders, smooth transitions
- **Background**: Continuous floating orbs (20-25s loops)
- **Grain**: Animated noise texture (subtle movement)

### 📱 Sections

1. **Hero** - Fullscreen sa "LEGENDARY BURGERS" title, scroll indicator
2. **Burger Showcase** - 8 burgera, alternating 50/50 split layout
3. **About** - Story + animated stats (Since 2025, 100% Fresh, Legendary Taste)
4. **Gallery** - Masonry grid sa lightbox modal
5. **Contact** - Dark card sa info, social links, "Visit Us" CTA
6. **Footer** - Minimal, copyright, social icons

### 🚫 ŠTO NIJE UKLJUČENO (BY DESIGN):
- ❌ Ordering system
- ❌ Shopping cart
- ❌ "Add to Cart" buttons
- ❌ Price display
- ❌ Menu filters
- ❌ E-commerce funkcionalnost

## 🛠️ Tech Stack

```json
{
  "react": "^18.x",
  "vite": "^5.x",
  "tailwindcss": "^3.x",
  "framer-motion": "^11.x",
  "lucide-react": "^0.x",
  "react-intersection-observer": "^9.x",
  "postcss": "^8.x"
}
```

## 📦 Installation

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 🎨 Color Palette

```css
burger-black: #000000      /* Pure black background */
burger-charcoal: #1A1A1A   /* Cards, containers */
burger-dark: #0D0D0D       /* Subtle variations */
burger-red: #FF0050        /* Primary accent */
burger-neon-red: #E63946   /* Hover states */
burger-orange: #FF6B35     /* Gradient middle */
burger-yellow: #FFD700     /* Highlights, titles */
burger-bun: #D2691E        /* Unused (decorative) */
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Glassmorphism navbar
│   ├── Hero.jsx                # Fullscreen hero sa massive title
│   ├── AnimatedBackground.jsx  # Grain + floating orbs
│   ├── BurgerShowcase.jsx      # Main burgers section
│   ├── BurgerCard.jsx          # 50/50 split card (NO CART)
│   ├── AboutSection.jsx        # Story + stats
│   ├── Gallery.jsx             # Masonry + lightbox
│   ├── ContactSection.jsx      # Contact info
│   └── Footer.jsx              # Minimal footer
├── App.jsx
├── main.jsx
└── index.css                   # Custom keyframes
```

## 🎬 Animation Details

### Background System:
```jsx
// Pure black base
// Animated grain texture (subtle)
// 5 floating gradient orbs (blur-[90-120px])
// Mix-blend-mode: screen
// Duration: 18-25s per orb
```

### CSS Keyframes:
- `@keyframes grain` - Texture movement (8s, steps(10))
- `@keyframes float-slow` - Orb floating (20s ease-in-out)
- `@keyframes float-slow-reverse` - Reverse direction (25s)

### Scroll Animations:
- **Intersection Observer** za burger cards
- **Threshold**: 0.2-0.3 za rani trigger
- **TriggerOnce**: true za performanse
- **Stagger delay**: 0.2s između image i text

## 🍔 Burger Data Structure

```javascript
{
  id: 1,
  name: "CLASSIC BEAST",
  description: "Double beef patty with aged cheddar...",
  ingredients: ["100% Beef", "Cheddar", "Bacon"],
  image: "https://images.unsplash.com/..."
}
```

**8 burgera total:**
- Classic Beast
- Inferno Heat
- BBQ Bacon Supreme
- Truffle Deluxe
- Mushroom Swiss
- Blue Cheese Power
- California Dreamin'
- The Texan

## 🚀 Performance

- ✅ LazyMotion for Framer Motion optimization
- ✅ Image lazy loading
- ✅ CSS transforms (ne position)
- ✅ Intersection Observer za on-demand animations
- ✅ Reduce motion support
- ✅ 60fps animations (GPU-accelerated)

## 📱 Responsive Breakpoints

- **Mobile** (< 768px): Stack vertically, smaller text
- **Tablet** (768-1024px): Side-by-side, medium text
- **Desktop** (> 1024px): Full layout, text-[10rem]

## 🌟 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 💡 Customization

### Dodaj novi burger:
```javascript
// BurgerShowcase.jsx
const burgers = [
  // ... existing
  {
    id: 9,
    name: "YOUR BURGER",
    description: "...",
    ingredients: [...],
    image: "..."
  }
];
```

### Promijeni boje:
```javascript
// tailwind.config.js
colors: {
  'burger-custom': '#YOUR_COLOR',
}
```

## 📄 License

MIT License

## 🎯 Use Cases

Idealno za:
- Restaurant showcase websites
- Portfolio projects
- Food photography galleries
- Brand presentations
- Design inspiration

**NIJE** za:
- E-commerce (nema cart)
- Online ordering (showcase only)
- Menu management systems

---

**Made with 🔥 for burger lovers** - Showcase, not shopping!

## ✨ Features

### 🎨 Design
- **Dark + Neon Aesthetic** - Crna pozadina sa crvenim/narančastim neon akcentima
- **Brutalne Animacije** - Framer Motion za sve smooth transitions i micro-interactions
- **Fully Responsive** - Mobile-first pristup, radi savršeno na svim uređajima
- **Custom Color Palette** - Profesionalno odabrane burger boje

### 🚀 Sections
1. **Hero Section** - Fullscreen sa animated text reveal, floating burger emojis, parallax efekti
2. **Featured Burgers** - 3 top burgera sa hover effects i scroll animations
3. **Full Menu** - Filterable burger grid (All, Classic, Spicy, Vegan, Premium)
4. **About Section** - Story + animated stats counter (scroll-triggered)
5. **Gallery** - Masonry layout sa lightbox funkcijom
6. **Contact** - Info card sa social links i neon border effects
7. **Footer** - Newsletter signup + quick links

### 🎭 Animations
- **Page Load**: Staggered reveal animacije
- **Scroll**: Parallax effects, fade-in na scroll into view
- **Hover**: Scale, glow, tilt, magnetic effects
- **Continuous**: Floating burgers, pulsating buttons, gradient backgrounds
- **3D Effects**: Tilting cards na mouse move

### ⚡ Tech Stack
- **React 18** - UI framework
- **Vite** - Build tool (super brz!)
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Production-ready animacije
- **Lucide React** - Beautiful ikone
- **PostCSS** - CSS processing

## 🛠️ Installation

```bash
# Clone repo
git clone <your-repo-url>

# Install dependencies
npm install

# Start dev server
npm run dev
```

Server će biti dostupan na `http://localhost:5173` (ili 5174 ako je 5173 zauzet).

## 📦 Dependencies

```json
{
  "framer-motion": "^11.x",
  "lucide-react": "^0.x",
  "react": "^18.x",
  "react-dom": "^18.x"
}
```

## 🎨 Color Palette

```css
burger-black: #000000
burger-charcoal: #1A1A1A
burger-dark: #0D0D0D
burger-red: #FF0050
burger-neon-red: #E63946
burger-orange: #FF6B35
burger-yellow: #FFD700
burger-bun: #D2691E
burger-white: #FFFFFF
burger-gray: #CCCCCC
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Sticky navbar sa scroll effect
│   ├── Hero.jsx                # Fullscreen hero sa animacijama
│   ├── AnimatedBackground.jsx  # Gradient mesh pozadina
│   ├── FeaturedBurgers.jsx     # Top 3 burgera
│   ├── BurgerCard.jsx          # Reusable card komponenta
│   ├── MenuSection.jsx         # Filterable menu grid
│   ├── AboutSection.jsx        # About + stats counter
│   ├── Gallery.jsx             # Masonry gallery sa lightbox
│   ├── ContactSection.jsx      # Contact info
│   └── Footer.jsx              # Footer sa newsletterom
├── App.jsx                     # Main app komponenta
├── main.jsx                    # Entry point
└── index.css                   # Global styles + Tailwind
```

## 🎯 Key Features Implementation

### Scroll Progress Bar
Navbar ima progress bar koji prati scroll progress kroz stranicu.

### Smooth Scroll
Svi anchor linkovi imaju smooth scroll behavior.

### Lazy Loading
Images koriste lazy loading za optimizaciju performansi.

### Accessibility
- ARIA labels na svim interaktivnim elementima
- Keyboard navigation support
- Focus visible states
- Reduced motion support za accessibility

### Performance
- CSS transforms umjesto position properties
- Optimized re-renders
- Framer Motion reduce-motion queries
- Lazy loaded images sa shimmer placeholder

## 🔥 Customization

### Zamjena Slika
Trenutno se koriste Unsplash placeholder slike. Zamijeni ih sa pravim burger slikama:

```jsx
// U BurgerCard.jsx ili bilo gdje
image: 'https://source.unsplash.com/...' 
// Zamijeni sa:
image: '/public/images/burger-1.jpg'
```

### Dodavanje Novih Burgera
Idi u `MenuSection.jsx` ili `FeaturedBurgers.jsx` i dodaj novi objekt u `burgers` array:

```javascript
{
  id: 10,
  name: 'Your Burger Name',
  description: 'Awesome description',
  price: 12.99,
  rating: 4.9,
  category: 'Classic', // Classic, Spicy, Vegan, Premium
  image: 'your-image-url',
  ingredients: ['Ingredient 1', 'Ingredient 2'],
}
```

### Promjena Boja
Edituj `tailwind.config.js` i promijeni custom boje u `theme.extend.colors`.

## 🚀 Build for Production

```bash
npm run build
```

Build output će biti u `/dist` folderu, spreman za deployment.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3 columns, full animations)

## 🌟 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - slobodno koristi za komercijalne i personalne projekte!

## 💡 Credits

Inspirisano Kuma's Corner dizajnom + Awwwards winning dark restaurant sites.

Kreirao: **Your Name**

---

**Enjoy the burgers!** 🍔🔥

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
