# Kappa Theta Pi - UNC Eta Chapter Website

Official website for Kappa Theta Pi's Eta Chapter at the University of North Carolina at Chapel Hill. A modern, responsive web application showcasing our tech-focused professional fraternity.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ktpunc/ktp_unc_website.git
cd ktp_unc_website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## Project Structure

```
ktp_unc_website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about-us/          # About page
│   │   ├── faq/               # FAQ page
│   │   ├── members/           # Members page
│   │   ├── recruitment/       # Recruitment page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable React components
│   │   ├── ui/                # UI primitives
│   │   ├── footer.tsx         # Site footer
│   │   ├── navbar.tsx         # Navigation bar
│   │   ├── layout.tsx         # Layout wrapper
│   │   └── index.ts           # Component exports
│   ├── ASSETS/                # Images and SVG files
│   ├── lib/                   # Utility functions
│   └── hooks/                 # Custom React hooks
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── next.config.js             # Next.js configuration
```

## Key Features

### Design System

- **Color Palette**: Navy blue (`#13294B`) primary, Carolina blue accents
- **Typography**: Roboto font family with weights 300-900
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Smooth transitions and hover effects using Framer Motion

### Components

#### Navbar
- Fixed position with blur backdrop
- Responsive mobile menu
- Active route highlighting
- Social media links in mobile view

#### Footer
- Multi-column layout
- Quick navigation links
- Contact information
- Social media integration

#### Page Hero
- Reusable hero section component
- Gradient backgrounds
- Animated text effects

### Pages

- **Home** (`/`) - Landing page with hero and call-to-action sections
- **About** (`/about-us`) - Information about the fraternity
- **Members** (`/members`) - Member directory and profiles
- **Recruitment** (`/recruitment`) - Recruitment information and timeline
- **FAQ** (`/faq`) - Frequently asked questions

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow React best practices and hooks patterns
- Use functional components with hooks
- Implement proper error boundaries
- Keep components small and focused

### Component Patterns

```typescript
// Example component structure
import { ComponentProps } from "react";

interface MyComponentProps {
  title: string;
  description?: string;
}

export function MyComponent({ title, description }: MyComponentProps) {
  return (
    <div className="container">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
```

### Styling Conventions

- Use Tailwind utility classes
- Follow mobile-first responsive design
- Use semantic color names from `tailwind.config.js`
- Maintain consistent spacing scale

### Path Aliases

The project uses TypeScript path aliases for cleaner imports:

```typescript
import { Navbar } from "@/components";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

## Deployment

The website is deployed on [Vercel](https://vercel.com/). Deployments are automatic:

- **Production**: Pushes to `main` branch
- **Preview**: Pull requests and feature branches

### Build Process

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

## Contributing

### Branch Strategy

- `main` - Production branch
- `website-modernization` - Active development branch
- Feature branches - Use descriptive names (e.g., `feature/new-member-page`)

### Workflow

1. Create a feature branch from `website-modernization`
2. Make your changes
3. Test locally with `npm run dev`
4. Commit with descriptive messages
5. Push and create a pull request
6. Request review from team members

### Commit Message Format

```
type: brief description

- Detailed change 1
- Detailed change 2
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## Environment Variables

Create a `.env.local` file for local development (not tracked in git):

```env
# Add environment variables here if needed
NEXT_PUBLIC_API_URL=your_api_url
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse score target: 90+ across all metrics
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Font optimization with next/font

## Accessibility

- WCAG 2.1 Level AA compliance
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)

## Contact

For questions or issues, contact:
- Email: uncktp@gmail.com
- Instagram: [@ktpunc](https://www.instagram.com/ktpunc/)
- LinkedIn: [KTP UNC](https://www.linkedin.com/company/ktp-unc/)

## License

© 2026 Kappa Theta Pi, Eta Chapter at UNC-Chapel Hill. All rights reserved.

---

Made with ❤️ at UNC
