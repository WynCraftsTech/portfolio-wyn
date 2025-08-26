# Personal Portfolio Website

A modern, responsive, and fully functional personal portfolio website built with React and Vite. Features a beautiful design, smooth animations, and comprehensive sections to showcase your skills, projects, and experience.

## ✨ Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Components**: 
  - Animated typing effect in hero section
  - Tabbed about section with experience timeline
  - Interactive skills display with animated progress bars
  - Project showcase with filtering and modal details
  - Functional contact form
- **Smooth Scrolling**: Navigation between sections
- **Loading Screen**: Professional loading animation
- **Mobile-First**: Optimized for mobile devices
- **SEO Ready**: Proper meta tags and semantic HTML

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   # If you have git installed
   git clone <your-repo-url>
   cd my-app
   
   # Or simply download and extract the ZIP file
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎨 Customization Guide

### 1. Personal Information

#### Update Hero Section (`src/components/Hero.jsx`)
```jsx
// Change the name
<h1 className="hero-title">
  Hi, I'm <span className="highlight">Your Actual Name</span>
</h1>

// Update the typing text
const texts = [
  "Your Role 1",
  "Your Role 2", 
  "Your Role 3",
  "Your Role 4"
];

// Update description
<p className="hero-description">
  Your personal description here...
</p>
```

#### Update About Section (`src/components/About.jsx`)
```jsx
// Personal information
<div className="info-item">
  <span className="info-label">Name:</span>
  <span className="info-value">Your Actual Name</span>
</div>
<div className="info-item">
  <span className="info-label">Email:</span>
  <span className="info-value">your.actual.email@example.com</span>
</div>
<div className="info-item">
  <span className="info-label">Location:</span>
  <span className="info-value">Your City, Country</span>
</div>

// Update experience and education
// Modify the timeline items in the experience tab
// Modify the education items in the education tab
```

### 2. Skills & Expertise

#### Update Skills (`src/components/Skills.jsx`)
```jsx
const skillCategories = {
  frontend: [
    { name: 'Your Skill 1', level: 90 },
    { name: 'Your Skill 2', level: 85 },
    // Add more skills...
  ],
  backend: [
    { name: 'Your Backend Skill 1', level: 80 },
    // Add more skills...
  ],
  // Add more categories...
};
```

### 3. Projects

#### Update Projects (`src/components/Projects.jsx`)
```jsx
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Your project description...',
    image: '🛒', // You can use emojis or replace with actual images
    category: 'frontend', // or 'backend', 'fullstack'
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://your-project-url.com',
    githubUrl: 'https://github.com/yourusername/project',
    featured: true // Set to true for featured projects
  },
  // Add more projects...
];
```

### 4. Contact Information

#### Update Contact Details (`src/components/Contact.jsx`)
```jsx
const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    value: 'your.actual.email@example.com',
    link: 'mailto:your.actual.email@example.com'
  },
  {
    icon: '📱',
    title: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  // Update other contact info...
];

const socialLinks = [
  { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/yourprofile' },
  // Add more social links...
];
```

### 5. Colors & Styling

#### Update Color Scheme (`src/App.css`)
```css
:root {
  --primary-color: #6366f1;    /* Main brand color */
  --primary-dark: #4f46e5;     /* Darker shade */
  --secondary-color: #f59e0b;  /* Accent color */
  --accent-color: #ec4899;     /* Highlight color */
  /* Update other colors as needed */
}
```

### 6. Images & Assets

#### Replace Placeholder Images
- **Hero Section**: Replace the emoji placeholder with your actual photo
- **About Section**: Replace the placeholder with your image
- **Projects**: Replace emojis with actual project screenshots

```jsx
// Instead of emoji placeholders, use actual images
<img src="/path/to/your/image.jpg" alt="Your Name" />
```

### 7. Meta Information

#### Update HTML Meta (`index.html`)
```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your actual description here" />
```

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- **Mobile-first approach**
- **Breakpoints**: 480px, 768px, 1024px
- **Touch-friendly interactions**
- **Optimized layouts for all screen sizes**

## 🚀 Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deploy Options
1. **Netlify**: Drag and drop the `dist` folder
2. **Vercel**: Connect your GitHub repository
3. **GitHub Pages**: Use the `gh-pages` package
4. **Firebase Hosting**: Use Firebase CLI

### Netlify Deployment Example
1. Run `npm run build`
2. Go to [Netlify](https://netlify.com)
3. Drag the `dist` folder to deploy
4. Customize your domain

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation component
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills section
│   ├── Projects.jsx    # Projects showcase
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer component
├── App.jsx             # Main app component
├── App.css             # Global styles
├── index.css           # Base styles
└── main.jsx            # Entry point
```

## 🎯 Key Features Explained

### 1. **Hero Section**
- Animated typing effect
- Call-to-action buttons
- Social media links
- Scroll indicator

### 2. **About Section**
- Tabbed interface (About, Experience, Education)
- Interactive timeline for experience
- Downloadable resume functionality

### 3. **Skills Section**
- Categorized skills display
- Animated progress bars
- Interactive category switching

### 4. **Projects Section**
- Filterable project grid
- Project modal with details
- Featured project highlighting

### 5. **Contact Section**
- Functional contact form
- Contact information display
- Social media integration

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool
- **CSS3** - Modern CSS with variables and animations
- **Font Awesome** - Icon library
- **Google Fonts** - Typography

## 📝 Customization Tips

1. **Start with content**: Update all text content first
2. **Add your projects**: Include real project screenshots and links
3. **Update contact info**: Ensure all links work correctly
4. **Test responsiveness**: Check on different devices
5. **Optimize images**: Compress images for better performance
6. **Add analytics**: Integrate Google Analytics or similar

## 🤝 Contributing

Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Share your customized version

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with React and Vite
- Icons from Font Awesome
- Fonts from Google Fonts
- Design inspiration from modern web trends

---

**Happy coding! 🚀**

If you found this portfolio template helpful, please consider giving it a star ⭐️
