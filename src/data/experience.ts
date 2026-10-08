import type { ExperienceEntry } from '@/types'

export const experience: ExperienceEntry[] = [
  {
    company: 'IVERA',
    role: 'Backend Engineer',
    period: 'Jan 2026 – Present',
    location: 'Remote / Cairo, Egypt',
    type: 'full-time',
    current: true,
    summary:
      'Building REST API services in Laravel/PHP for IVERA products, and contributing Go backend development to the ILORA multi-tenant enterprise platform.',
    highlights: [
      'Builds and maintains REST API services in Laravel/PHP applying SOLID and clean-code practices',
      'Engineers backend functionality in Go for ILORA — a multi-tenant SaaS platform (Go, React, PostgreSQL) covering ERP, CRM, HR, performance management, ecommerce, and WhatsApp-based communication',
      'Implemented ERP and CRM backend: organisation/tenant workflows, subscription/invoicing logic, multi-currency handling, lead/deal pipelines with automated lead assignment, and booking/scheduling workflows',
      'Delivered HR and performance management backend: employee leave/overtime workflows, job-offer processing, performance evaluation tracking, and improvement-plan management',
      'Implemented ecommerce backend: product templates, attributes, and order processing workflows',
      'Developed WhatsApp-based customer communication functionality including session/connection management for multi-tenant usage',
      'Applied database/query optimization across ILORA modules',
      'Engineers backend across six operational modules of Turbo for Shipping (Laravel): shipments, ticketing, inventory, manifest, branches, and franchises',
      'Used Laravel Telescope and Log Viewer for backend monitoring and debugging',
      'Implemented Filament-based admin and business interfaces for Business Now',
    ],
    technologies: [
      'Go',
      'PHP',
      'Laravel',
      'Filament',
      'React',
      'PostgreSQL',
      'MySQL',
      'Laravel Telescope',
      'Log Viewer',
      'REST APIs',
    ],
  },
  {
    company: 'Algoriza',
    role: 'Backend Developer',
    period: 'Sept 2023 – Jan 2026',
    location: 'Cairo, Egypt',
    type: 'full-time',
    summary:
      'Joined an existing Laravel-based SaaS ecommerce platform (Daashop) and extended/maintained the backend. Also contributed to FILHOS, MATEN, and EVEUNITY.',
    highlights: [
      'Joined existing Daashop Laravel SaaS ecommerce platform and extended/maintained backend',
      'Extended and maintained core commerce functionality: product catalog (products, categories, variations, attributes), cart, checkout, order management/history, and admin functionality',
      'Integrated and maintained four payment gateways: Paymob, PayPal, Stripe, and Fawry',
      'Designed and documented RESTful APIs using Scribe',
      'Implemented Redis caching and Laravel queue/background-job processing with Horizon',
      'Optimized backend database and query performance',
      'Covered core functionality with PHPUnit unit and integration tests',
      'Worked on FILHOS (Laravel): child attendance tracking, daily activity logs, medication records, and dose management',
      'Worked on MATEN (Laravel): course management, assessment questions, recommendation logic, and study/career paths',
      'Contributed Java backend/application-level development on EVEUNITY (EV charging and shipping application)',
    ],
    technologies: [
      'PHP',
      'Laravel',
      'Java',
      'MySQL',
      'Redis',
      'Paymob',
      'PayPal',
      'Stripe',
      'Fawry',
      'PHPUnit',
      'Scribe',
      'Laravel Horizon',
      'REST APIs',
    ],
  },
  {
    company: 'Buducloud',
    role: 'Full-Stack Developer',
    period: 'Aug 2021 – Oct 2022',
    location: 'Cairo, Egypt',
    type: 'full-time',
    summary:
      'Delivered backend and frontend features for internal tools and customer-facing applications.',
    highlights: [
      'Delivered backend and frontend features (PHP, Bootstrap, JavaScript) for internal tools and customer-facing applications',
    ],
    technologies: ['PHP', 'Bootstrap', 'JavaScript'],
  },
  {
    company: 'Freelance',
    role: 'Backend / Full-Stack Developer',
    period: 'Jan 2021 – Jan 2023',
    location: 'Remote',
    type: 'freelance',
    summary:
      'Delivered Laravel/Bootstrap backend and frontend solutions for client projects including Vclasses and Donor App.',
    highlights: [
      'Delivered Laravel/Bootstrap backend and frontend solutions for client projects',
      'Projects included Vclasses (online learning platform) and Donor App',
    ],
    technologies: ['PHP', 'Laravel', 'Bootstrap', 'JavaScript'],
  },
]

export const education = {
  degree: 'B.Sc. Computer Science',
  institution: 'Ain Shams University',
  location: 'Cairo, Egypt',
  period: 'Sept 2019 – July 2023',
}
