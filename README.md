# Rajath R Prasad - Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features stunning animations, interactive components, and a fully functional contact form.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Smooth Animations**: GSAP-powered animations for enhanced user experience
- **Interactive Contact Form**: Fully functional contact form with email integration
- **Project Showcase**: Beautiful project cards with links to code and live demos
- **Performance Optimized**: Fast loading with Vite build system

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock)
- **Email Service**: EmailJS
- **Icons**: Heroicons (SVG)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd React_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📧 Contact Form Setup

The contact form uses EmailJS to send emails directly to your inbox. Follow these steps to set it up:

### 1. EmailJS Account Setup
- Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
- Verify your email address

### 2. Configure Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service" and choose your email provider (Gmail, Outlook, etc.)
- Follow the authentication steps
- Note down your **Service ID**

### 3. Create Email Template
- Go to "Email Templates" in your dashboard
- Click "Create New Template"
- Use this template structure:
```html
Subject: New Contact Form Message from {{name}}

Name: {{name}}
Email: {{email}}
Message: {{message}}

This message was sent from your portfolio contact form.
```
- Save the template and note down your **Template ID**

### 4. Get Your Public Key
- Go to "Account" → "API Keys"
- Copy your **Public Key**

### 5. Update Configuration
- Open `emailjs-config.js` in the root directory
- Replace the placeholder values with your actual credentials:
```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',
  TEMPLATE_ID: 'your_actual_template_id',
  PUBLIC_KEY: 'your_actual_public_key'
};
```

### 6. Test the Form
- Start your development server: `npm run dev`
- Navigate to the contact section
- Fill out the form and submit
- Check your email to confirm the message was received

## 📁 Project Structure

```
React_portfolio/
├── src/
│   ├── components/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Header/
│   │   ├── Hero/
│   │   └── Projects/
│   ├── constants/
│   └── assets/
├── public/
├── emailjs-config.js
├── EMAIL_SETUP.md
└── README.md
```

## 🎨 Design Features

- **Dark Theme**: Professional slate-900 background with white text
- **Gradient Accents**: Cyan to teal gradients for visual appeal
- **Hover Effects**: Smooth transitions and scale effects
- **Card Design**: Modern card layouts with shadows and borders
- **Typography**: Clean, readable fonts with proper hierarchy

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to your preferred platform (Vercel, Netlify, etc.)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ by Rajath R Prasad**
