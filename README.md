# Zohar Media Portfolio

A modern Next.js 15 application migrated from a Bootstrap 4 HTML template, featuring professional videography and media services.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Bootstrap 4 Integration**: Maintains original Bootstrap 4 styling and components
- **Modern React**: Built with Next.js 15 and React 19
- **TypeScript**: Full TypeScript support for better development experience
- **Component-Based Architecture**: Modular, reusable components
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📁 Project Structure

```
zohar-media-portfolio/
├── public/
│   ├── css/           # Bootstrap 4 CSS files
│   ├── fonts/         # Font files
│   ├── img/           # All images and assets
│   └── js/            # JavaScript libraries
├── src/
│   ├── app/           # Next.js app router pages
│   │   ├── about/     # About page
│   │   ├── blog/      # Blog page
│   │   ├── contact/   # Contact page
│   │   ├── portfolio/ # Portfolio page
│   │   ├── services/  # Services page
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx # Root layout
│   │   └── page.tsx   # Home page
│   ├── components/    # React components
│   │   ├── Layout.tsx # Main layout wrapper
│   │   ├── Header.tsx # Navigation header
│   │   ├── Footer.tsx # Site footer
│   │   ├── Hero.tsx   # Hero section
│   │   ├── AboutSection.tsx # About section
│   │   ├── ServicesSection.tsx # Services section
│   │   └── CallToAction.tsx # Call to action section
│   └── styles/        # Additional styles
└── package.json       # Dependencies and scripts
```

## 🛠️ Components

### Core Components

- **Layout**: Main layout wrapper with header, footer, and meta tags
- **Header**: Responsive navigation with mobile menu support
- **Footer**: Site footer with contact info and newsletter signup
- **Hero**: Hero section with carousel functionality
- **AboutSection**: Company information and team showcase
- **ServicesSection**: Services overview with icons and descriptions
- **CallToAction**: Call-to-action section for lead generation

### Pages

- **Home** (`/`): Landing page with hero, about, services, and CTA
- **About** (`/about`): Company information and team details
- **Portfolio** (`/portfolio`): Work showcase with filtering
- **Services** (`/services`): Detailed services and process
- **Contact** (`/contact`): Contact form and company information
- **Blog** (`/blog`): Blog posts and articles

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd zohar-media-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Styling

The project maintains the original Bootstrap 4 styling while adding custom CSS for React components:

- **Bootstrap 4.6.2**: Core framework styles
- **Font Awesome**: Icon library
- **Custom CSS**: Component-specific styles and responsive improvements
- **Responsive Design**: Mobile-first approach with breakpoints

## 📱 Responsive Features

- Mobile-friendly navigation with hamburger menu
- Responsive grid layouts using Bootstrap classes
- Optimized images and assets for all screen sizes
- Touch-friendly interface elements

## 🔧 Customization

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Use the `Layout` component as a wrapper
4. Import and use existing components as needed

### Modifying Components

1. Locate the component in `src/components/`
2. Make your changes
3. The component will automatically update across all pages

### Styling Changes

1. Modify `src/styles/globals.css` for global styles
2. Update component-specific styles in the component files
3. Bootstrap classes can be modified in the public CSS files

## 📦 Dependencies

- **Next.js 15**: React framework
- **React 19**: UI library
- **TypeScript**: Type safety
- **Bootstrap 4.6.2**: CSS framework
- **jQuery 3.6.0**: JavaScript library (for legacy plugins)
- **Popper.js**: Bootstrap dependency

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with polyfills)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions, please contact:

- Email: info@zoharmedia.net
- Phone: +1 (555) 123-4567

---

**Note**: This project was migrated from a Bootstrap 4 HTML template to Next.js 15 while maintaining all original styling and functionality.
