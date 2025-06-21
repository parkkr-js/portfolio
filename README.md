# Aabid Ahmed - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Framer Motion. This project showcases professional experience, projects, and skills with beautiful animations and interactions.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by modern portfolio websites
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive UI**: Engaging user interactions and hover effects
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Performance Optimized**: Optimized for fast loading and smooth performance

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ToolsSection.tsx
│   │   ├── BlogSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   ├── tools.ts
│   └── blog.ts
├── hooks/
│   └── useScrollAnimation.ts
├── types/
│   └── index.ts
└── utils/
```

## 🎨 Sections

1. **Hero Section** - Introduction with animated stats
2. **Projects** - Showcase of recent work
3. **Experience** - Professional timeline
4. **Tools** - Technologies and tools used
5. **Blog** - Design thoughts and articles
6. **Contact** - Contact form and information

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## 🎯 Key Features

### Animations
- Scroll-triggered animations using Intersection Observer
- Smooth page transitions
- Hover effects and micro-interactions
- Staggered animations for lists

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions

### Performance
- Lazy loading for images
- Optimized animations
- Efficient re-renders with React.memo
- Code splitting ready

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
  }
}
```

### Content
Update the data files in `src/data/` to customize:
- Projects in `projects.ts`
- Experience in `experience.ts`
- Tools in `tools.ts`
- Blog posts in `blog.ts`

### Styling
- Global styles in `src/index.css`
- Component-specific styles using Tailwind classes
- Custom CSS classes for complex animations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [Lucide React](https://lucide.dev/)
- Animation library [Framer Motion](https://www.framer.com/motion/)
- CSS framework [Tailwind CSS](https://tailwindcss.com/)

---

Made with ❤️ by Aabid Ahmed
