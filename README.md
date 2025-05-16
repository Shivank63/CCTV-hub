# CCTC-Hub - Premium CCTV & Surveillance Solutions


A modern, responsive website for a CCTV camera provider company built with Next.js, Tailwind CSS, and Framer Motion. This website showcases premium surveillance solutions with stunning visual effects and smooth animations.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Following 2025 design trends with glassmorphism, gradients, and micro-interactions
- **Interactive Elements**: Eye-catching hover effects and animations
- **Smooth Scrolling**: Section-based navigation with smooth scrolling
- **Performance Optimized**: Fast loading and rendering
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Ready**: Optimized metadata and structure

## 🛠️ Technologies Used

- **Next.js 14+**: React framework for production
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **Radix UI**: Accessible UI components
- **TypeScript**: Type-safe JavaScript
- **Shadcn/UI**: Component library

## 📋 Sections

1. **Hero Section**: Full-screen introduction with call-to-action buttons
2. **Services Grid**: Showcase of surveillance services offered
3. **Why Choose Us**: Company benefits and unique selling points
4. **Trusted Brands**: Marquee of partner brands
5. **Process Timeline**: Step-by-step service process
6. **FAQ Accordion**: Frequently asked questions
7. **Contact Form**: Interactive contact form with validation
8. **Footer**: Site navigation and contact information

## 🔧 Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/infotechistan.git
   cd CCTV-hub
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🎨 Customization

### Changing Colors

The primary colors are defined in the `tailwind.config.ts` file. You can modify the color scheme by updating the colors in this file:

\`\`\`typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "#3b82f6", // Change this for primary color
        // ...other shades
      },
      secondary: {
        DEFAULT: "#a855f7", // Change this for secondary color
        // ...other shades
      },
      // ...other colors
    },
  },
},
\`\`\`

### Adding New Sections

To add a new section:

1. Create a new component in the `components` directory
2. Import and add the component to `app/page.tsx`
3. Add navigation link in the `Navbar` component if needed

### Replacing Images

Replace the placeholder images with your own:

1. Add your images to the `public` directory
2. Update the image paths in the components

## 📁 Project Structure

\`\`\`
infotechistan/
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── hero-section.tsx  # Hero section component
│   ├── navbar.tsx        # Navigation component
│   └── ...               # Other components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind CSS configuration
└── ...                   # Other configuration files
\`\`\`

## 🔍 SEO Optimization

The website is optimized for search engines with:

- Proper meta tags in `app/layout.tsx`
- Semantic HTML structure
- Optimized image loading with Next.js Image component
- Proper heading hierarchy

## 🌐 Deployment

This project can be easily deployed on Vercel:

1. Push your code to a GitHub repository
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy with a single click

## 📱 Mobile Responsiveness

The website is fully responsive with:

- Mobile-first design approach
- Responsive navigation menu
- Fluid typography and spacing
- Optimized layouts for all screen sizes

## 🔒 Security Features

- Form validation to prevent spam
- CSRF protection
- XSS prevention
- Secure contact form handling

## 📈 Performance Optimization

- Code splitting and lazy loading
- Optimized images
- Minimal CSS with Tailwind
- Server-side rendering with Next.js

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Shadcn/UI](https://ui.shadcn.com/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/infotechistan/issues).

## 📧 Contact

For any inquiries, please contact:

- Email: info@cctv.hub.com
- Website: [www.cctchub.com](https://www.cctvhub.com)

---

Made with ❤️ for security
