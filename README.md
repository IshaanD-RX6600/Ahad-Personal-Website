# Ahad Ahmad - Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with shadcn/ui components
- Dark mode support
- Sections for About, Projects, Skills, Testimonials, and Contact
- Contact form

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn or pnpm

### Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/yourusername/ahad-personal-website.git
cd ahad-personal-website
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

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project can be easily deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fahad-personal-website)

## Customization

- Update the content in `app/page.tsx` to personalize the website
- Replace placeholder images with your own images
- Update project details in the `ProjectCard` components
- Modify the skills in the `SkillSection` components
- Update contact information and social links

## License

This project is licensed under the MIT License - see the LICENSE file for details.
\`\`\`

Let's add a .gitignore file:

```text file=".gitignore"
# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
