# Grace Coburn - Postpartum Doula Services

A professional website for Grace Coburn's Postpartum Doula Services.

## 📁 Project Structure

```
postpartum-doula/
├── index.html           # Home page
├── about.html           # About Grace
├── services.html        # Services offered
├── contact.html         # Contact form
├── css/
│   └── style.css       # Shared styling
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Images directory (add your photos here)
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- A text editor (VS Code recommended)
- Git installed on your machine
- A GitHub account

### Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gracecoburn/postpartum-doula.git
   cd postpartum-doula
   ```

2. **Open in VS Code:**
   ```bash
   code .
   ```

3. **View the website:**
   - Open `index.html` in your browser
   - Or use VS Code's Live Server extension:
     - Install "Live Server" extension
     - Right-click on `index.html` and select "Open with Live Server"

## 📝 Customization

### Update Personal Information

1. **Home page (`index.html`):**
   - Update the hero section title and description
   - Customize the service preview cards

2. **About page (`about.html`):**
   - Add your bio and background
   - List your certifications and qualifications
   - Include a professional photo

3. **Services page (`services.html`):**
   - Detail each service you offer
   - Add pricing information
   - Include benefits and what to expect

4. **Contact page (`contact.html`):**
   - Update your email address
   - Add phone number
   - Update location information

### Styling

- Edit `css/style.css` to customize colors, fonts, and layouts
- Current color scheme uses:
  - Primary color: `#6b4e9e` (purple)
  - Secondary color: `#f5a5a5` (coral)
  - Feel free to change these in the `:root` section

## 📧 Email Functionality

The contact form currently has placeholder functionality. To enable email sending, you have several options:

### Option 1: FormSubmit.co (Recommended - No Backend Required)

1. Go to [formsubmit.co](https://formsubmit.co)
2. Update the `contact.html` form's `action` attribute:
   ```html
   <form action="https://formsubmit.co/your-email@example.com" method="POST">
   ```
3. Add `method="POST"` to the form
4. Your emails will be sent directly!

### Option 2: EmailJS (Client-side JavaScript)

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Get your Service ID, Template ID, and Public Key
3. Update `js/script.js` with EmailJS configuration
4. Replace the `submitFormToEmail` function

### Option 3: Custom Backend

Set up a backend service (Node.js, Python, etc.) to handle email sending. Update the form's action to point to your backend endpoint.

## 🖼️ Adding Images

1. Create an `images/` directory in the project root
2. Add your photos to this directory
3. Reference them in your HTML:
   ```html
   <img src="images/your-image.jpg" alt="Description">
   ```

## 🌐 Deploying Your Website

### Option 1: GitHub Pages (Free)

1. Go to repository Settings → Pages
2. Select "main" branch as source
3. Your site will be available at: `https://gracecoburn.github.io/postpartum-doula`

### Option 2: Netlify (Free with custom domain option)

1. Connect your GitHub repository to [Netlify](https://www.netlify.com)
2. Deploy with one click
3. Custom domain setup available

### Option 3: Traditional Hosting

1. Upload files to your hosting provider via FTP
2. Configure domain settings
3. Your site goes live!

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

Test on different devices during development using:
- Browser DevTools (F12 or Cmd+Option+I)
- Chrome Mobile Simulator
- Physical devices

## 🔧 Making Changes

1. Make edits to your files locally
2. Test changes in your browser (use Live Server)
3. Commit changes to Git:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

## 📚 Resources

- [HTML Tutorial](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Git Documentation](https://git-scm.com/doc)

## 💡 Tips

- Use descriptive commit messages
- Test your changes before pushing
- Keep your images optimized (compress large files)
- Use semantic HTML for better SEO
- Consider adding analytics (Google Analytics)
- Regularly backup your work

## 📞 Support

For questions about GitHub or this template, refer to:
- [GitHub Docs](https://docs.github.com)
- [GitHub Community](https://github.community)

## 📄 License

This project is personal use.

---

**Happy coding! 🎉**