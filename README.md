# 💎 Accredian Enterprise — Premium SaaS Landing Page

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-0F172A?style=for-the-badge&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

A high-performance, pixel-perfect, and enterprise-ready landing page clone for **Accredian Enterprise**. This project was developed as part of a **Full Stack Developer Internship** assignment, focusing on delivering a premium SaaS user experience with modern web technologies.

---

## 🚀 Project Overview

The objective of this assignment was to build a sophisticated landing page that replicates the core visual identity and structural hierarchy of the Accredian Enterprise platform. The focus was not just on cloning the UI, but on implementing a **scalable, modular architecture** that follows industry-standard design principles.

The application serves as a comprehensive showcase of professional upskilling programs, featuring a seamless flow from value proposition to lead capture.

---

## ✨ Key Features

- **📱 Fully Responsive Design**: Mobile-first architecture ensuring a premium experience from smartphones to ultra-wide displays.
- **🎨 Premium SaaS UI**: Enterprise-level aesthetics inspired by Stripe, Linear, and Notion.
- **🌗 Seamless Dark Mode**: Intelligent theme switching with high-contrast color mappings and persistent state management.
- **♾️ Infinite Logo Scroll**: A custom, break-free marquee for trusted partners, implemented with CSS keyframes for maximum performance.
- **🧩 Modular Component Architecture**: Reusable UI components (Cards, Containers, Buttons) built for maintainability.
- **📩 Lead Capture System**: A polished contact section with a multi-input form designed for high conversion.
- **❓ Interactive FAQ Accordion**: Smooth expand/collapse logic with dedicated category switching.
- **✨ Micro-interactions**: Subtle hover lifts, scaling transitions, and backdrop blurs to enhance tactile feedback.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://reactjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 📦 Setup Instructions

Follow these steps to run the project locally on your machine:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/accredian-landing.git
   cd accredian-landing
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

4. **Build for Production**
   ```bash
   npm run build
   npm run start
   ```

---

## 🧠 Approach & Thought Process

As a developer, my focus went beyond the visual surface. I approached this project with a **"Component-First"** mindset:

- **Component Reusability**: Instead of writing ad-hoc styles, I built a core design system. The `Card` and `Container` components serve as the foundation, ensuring that every section shares the same padding, border-radius, and shadow tokens.
- **Design System Consistency**: I strictly enforced a color palette (Primary: `#2563EB`, Background: `#FFFFFF`/`#0B1120`) across the entire site. This ensures a professional, unified look that builds user trust.
- **Vertical Rhythm & Hierarchy**: I standardized spacing using a `py-24 md:py-28` system for all major sections, creating a consistent breathing room that guides the eye through the content.
- **Modular Sections**: Each section of the landing page (Hero, Benefits, Testimonials) is an isolated component. This makes the codebase easy to navigate and allows for independent updates or A/B testing in a real-world scenario.

---

## 🤖 AI Usage & Collaboration

In building this project, I leveraged AI tools (including **ChatGPT** and **Antigravity**) to accelerate the development lifecycle. This collaboration allowed me to focus on high-level design decisions while automating repetitive tasks.

- **How AI Helped**:
  - **Structuring**: Rapidly generating initial component boilerplate and structural layouts.
  - **Debugging**: Solving complex CSS conflicts and ensuring cross-browser compatibility.
  - **Optimization**: Suggesting logic for theme switching and CSS variable management.
- **What I Manually Refined**:
  - **Pixel-Perfect Polish**: AI often misses the subtle nuances of spacing. I manually adjusted every margin and padding to ensure a perfect "Enterprise" feel.
  - **Edge Case Handling**: Fixed the "Logo Loop Bug" by manually calculating the `scrollX` animation logic to ensure a seamless infinite loop without gaps.
  - **Responsive Tweaks**: Hand-tuned the mobile-stacking behavior for complex sections like the CAT Framework and Domain Expertise.

---

## 🚧 Roadmap & Future Improvements

Given more time, I would implement the following high-impact features:

- **🔗 Backend Integration**: Connect the lead capture form to a database (Supabase/Prisma) and trigger email notifications using Resend.
- **🎭 Advanced Animations**: Integrate **Framer Motion** or **GSAP** for scroll-triggered reveal animations.
- **♿ Accessibility (a11y)**: Perform a full audit to ensure WCAG 2.1 compliance (ARIA labels, keyboard navigation).
- **🔍 SEO Optimization**: Implement OpenGraph metadata, JSON-LD schemas, and dynamic sitemaps for better search visibility.
- **📄 CMS Integration**: Use Sanity.io or Contentful to allow non-developers to update course descriptions and testimonials.

---

## 🌐 Live Deployment

Check out the live version of the project here:  
👉 **[Live Vercel Demo](https://accredian-landing-yourlink.vercel.app)** *(Link Placeholder)*

---

## 📸 Screenshots

### 🖼️ Hero Section
![Hero Section Screenshot](file:///C:/Users/hp/.gemini/antigravity/brain/1a0f9a8d-f7a0-49bf-aaaa-e162ac511a8c/dark_mode_final_check_1777226695307.png)

### ♾️ Trusted Partners & Benefits
*Visual showcase of the infinite scroll and the global card system.*

### 📩 Contact & Lead Capture
*A conversion-focused split layout for enterprise inquiries.*

---

**Developed with ❤️ by [Your Name]**  
*Full Stack Developer Intern @ Accredian Assignment*
