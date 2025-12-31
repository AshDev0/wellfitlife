# WellFitLife - Fitness & Wellness Platform

> **A production-ready React fitness website with dynamic blog system, built with Vite, React 18+, and Tailwind CSS**

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-cyan.svg)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.11.0-red.svg)](https://reactrouter.com/)

---

## 🌟 **Features**

### **✅ Production-Ready Architecture**
- Clean, scalable folder structure
- Separation of concerns (components, pages, hooks, utils)
- Modular and maintainable codebase
- Ready for team collaboration

### **✅ Dynamic Blog System**
- 6 pre-built blog posts with rich content
- SEO-friendly URL slugs
- Category filtering (Fitness, Diet, Wellness)
- Related posts recommendation
- Author information and metadata
- Reading time estimation

### **✅ Advanced Routing**
- React Router v6+ with nested layouts
- Dynamic routes for blog posts (`/blog/:slug`)
- 404 error handling
- ScrollToTop on navigation
- Clean URL structure

### **✅ Production Features**
- Loading states with skeletons
- Error boundaries for crash prevention
- SEO optimization (meta tags, Open Graph)
- Responsive mobile-first design
- Performance optimized
- Accessible UI components

### **✅ Developer Experience**
- Custom React hooks (`useBlog`, `useFeaturedPosts`)
- Reusable components
- Centralized constants
- Comprehensive documentation
- Easy to extend and scale

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 18+ installed
- npm or yarn package manager

### **Installation**

```bash
# Clone the repository (or download)
cd wellfitlife

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
http://localhost:5173
```

### **Build for Production**

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

---

## 📁 **Project Structure**

```
wellfitlife/
│
├── public/
│   └── images/              # Static images
│
├── src/
│   ├── components/
│   │   ├── blog/           # Blog-specific components
│   │   │   └── BlogCard.jsx
│   │   ├── common/         # Reusable UI components
│   │   │   ├── ErrorBoundary.jsx
│   │   │   ├── LoadingSkeleton.jsx
│   │   │   └── SEO.jsx
│   │   └── layout/         # Layout components
│   │       ├── Layout.jsx
│   │       ├── Navbar.jsx
│   │       └── Footer.jsx
│   │
│   ├── pages/              # Page components (routes)
│   │   ├── Home.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   │
│   ├── hooks/              # Custom React hooks
│   │   └── useBlog.js
│   │
│   ├── utils/              # Utility functions
│   │   └── ScrollToTop.jsx
│   │
│   ├── data/               # Static data sources
│   │   └── blogPosts.js    # Blog content
│   │
│   ├── constants/          # App configuration
│   │   └── index.js
│   │
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
│
├── ARCHITECTURE.md         # Technical documentation
├── MIGRATION_GUIDE.md      # Upgrade guide
├── QUICK_START.md          # Quick reference
└── package.json
```

---

## 🎯 **Key Routes**

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/blog` | Blog listing with category filter |
| `/blog/:slug` | Individual blog post (e.g., `/blog/morning-exercise-routine-for-beginners`) |
| `/about` | About page |
| `/contact` | Contact page |
| `*` | 404 Not Found |

---

## 📝 **Adding a New Blog Post**

1. Open [src/data/blogPosts.js](src/data/blogPosts.js)
2. Add a new object to the `blogPosts` array:

```javascript
{
  id: "7",
  title: "Your Blog Title",
  slug: "your-blog-slug",  // SEO-friendly URL
  excerpt: "Short description for blog cards",
  content: `<h2>Your Content</h2><p>Full HTML content here...</p>`,
  image: hero1,
  author: {
    name: "Author Name",
    avatar: "../assets/author.jpg",
    bio: "Author bio"
  },
  publishedDate: "2025-01-20",
  category: "Fitness",  // Fitness | Diet | Wellness
  readingTime: "5 min read",
  tags: ["fitness", "workout"],
  featured: false,
  metaDescription: "SEO description",
  metaKeywords: "keywords, for, seo"
}
```

3. Save the file - your new blog post appears automatically!

---

## 🎨 **Customization**

### **Change Site Information**

Edit [src/constants/index.js](src/constants/index.js):

```javascript
export const SITE_CONFIG = {
  name: "WellFitLife",
  domain: "wellfitlife.in",
  tagline: "Your Journey to a Healthier Lifestyle",
  // ... update as needed
};
```

### **Modify Brand Colors**

Primary colors used:
- Green: `#22C55E` (primary brand color)
- Blue: `#0EA5E9` (accent color)
- Dark: `#1E293B` (text color)

Update Tailwind classes throughout components to change branding.

---

## 🔗 **API Integration (Future)**

The project is designed for easy migration to a backend API:

### **Current: Local Data**
```javascript
// src/hooks/useBlog.js
import { getAllBlogPosts } from "../data/blogPosts";
const data = getAllBlogPosts();
```

### **Future: REST API**
```javascript
// src/hooks/useBlog.js
const response = await fetch(`${API_CONFIG.baseURL}/blogs`);
const data = await response.json();
```

**Components don't need to change!** Just update the hooks.

### **Headless CMS Integration**

Compatible with:
- **Strapi** - Open-source headless CMS
- **Contentful** - Cloud-based CMS
- **Sanity** - Structured content platform
- **WordPress REST API** - WordPress as headless CMS

---

## 🛠 **Tech Stack**

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI library |
| Vite | 7.2.4 | Build tool & dev server |
| React Router DOM | 7.11.0 | Client-side routing |
| Tailwind CSS | 4.1.18 | Utility-first CSS |
| Lucide React | 0.562.0 | Icon library |
| Framer Motion | 12.23.26 | Animation library |

---

## 📦 **Available Scripts**

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 🌐 **Deployment**

### **Vercel (Recommended)**

```bash
npm install -g vercel
vercel deploy
```

### **Netlify**

1. Build: `npm run build`
2. Deploy `dist/` folder
3. Add `_redirects` file:
   ```
   /*    /index.html   200
   ```

### **Custom Server**

1. Build: `npm run build`
2. Upload `dist/` folder to server
3. Configure server for SPA routing

---

## 🔒 **Security Best Practices**

✅ No hardcoded secrets
✅ Environment variables for sensitive data
✅ Input sanitization
✅ Dependency updates
✅ HTTPS in production

---

## 📈 **Performance**

- ⚡ Fast initial load with Vite
- 📦 Code splitting with React Router
- 🎨 Utility-first CSS with Tailwind
- 🖼 Optimized images
- ⏱ Loading states for better UX

---

## 🧪 **Testing (Future Enhancement)**

Recommended testing setup:

```bash
# Unit & Component Tests
npm install -D vitest @testing-library/react

# E2E Tests
npm install -D playwright
```

---

## 📚 **Documentation**

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Complete technical documentation
- **[MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)** - Upgrade guide from static to dynamic
- **[QUICK_START.md](./QUICK_START.md)** - Quick reference guide

---

## 🗺 **Roadmap**

### **Phase 1: Core Features** ✅
- [x] Production-grade architecture
- [x] Dynamic blog system
- [x] SEO optimization
- [x] Responsive design
- [x] Error handling

### **Phase 2: Enhancements** 📋
- [ ] Search functionality
- [ ] Blog comments system
- [ ] Newsletter subscription
- [ ] Dark mode toggle
- [ ] Social sharing buttons

### **Phase 3: Advanced** 🚀
- [ ] User authentication
- [ ] Saved posts feature
- [ ] Blog analytics
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)

---

## 🤝 **Contributing**

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 **Author**

**Ashwani Gupta**
Founder, WellFitLife

- Website: [wellfitlife.in](https://wellfitlife.in)
- Email: contact@wellfitlife.in

---

## 🙏 **Acknowledgments**

- Built with React and Vite
- Styled with Tailwind CSS
- Icons by Lucide React
- Animations by Framer Motion

---

## 📞 **Support**

For questions or support:
- Open an issue on GitHub
- Email: contact@wellfitlife.in

---

**Made with ❤️ for fitness enthusiasts worldwide**

🏋️‍♂️ **Transform Your Health, One Blog Post at a Time** 💪
