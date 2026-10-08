import type { CVData } from '@/types'

export const cvData: CVData = {
  contact: {
    name: 'Omar Adel',
    title: 'Senior Backend Engineer | PHP / Laravel',
    location: 'Cairo, Egypt',
    email: 'omar.adel.omar818@gmail.com',
    phone: '+201550781783',
    linkedin: 'linkedin.com/in/omar-adel-605196196',
    github: 'github.com/omaradel-tech',
    portfolio: 'omaradel-tech.github.io',
  },

  summary:
    'Senior software engineer specializing in backend development, with production experience designing, extending, and maintaining Laravel/PHP systems — REST APIs, payment integrations, ecommerce and logistics workflows, and database/query optimization — across SaaS, ecommerce, and logistics platforms, applying SOLID and clean-code practices throughout. Also engineers backend functionality in Go for ILORA, a multi-tenant enterprise platform spanning ERP, CRM, HR, performance management, ecommerce, and WhatsApp-based communication, with additional AI-powered capabilities, adding further backend breadth alongside core Laravel/PHP expertise. Experienced across the backend lifecycle, from API design and database optimization to hands-on deployment, server configuration, and troubleshooting.',

  skills: [
    {
      category: 'Backend',
      skills: ['PHP', 'Laravel', 'Go', 'REST APIs', 'OOP', 'SOLID', 'Eloquent ORM'],
    },
    {
      category: 'Laravel Ecosystem',
      skills: ['Filament', 'Sanctum', 'Scribe', 'Horizon', 'Telescope', 'Laravel Log Viewer', 'Redis', 'Queues / Background Jobs'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'Query Optimization', 'Data Modeling', 'Migrations'],
    },
    {
      category: 'Payments & Integrations',
      skills: ['Stripe', 'PayPal', 'Paymob', 'Fawry', 'Third-party API Integrations'],
    },
    {
      category: 'Infrastructure',
      skills: ['Nginx', 'PHP-FPM', 'CloudPanel', 'Linux Server Operations', 'Cron / Scheduled Tasks', 'Deployment', 'Server Troubleshooting', 'Git', 'Postman'],
    },
    {
      category: 'Testing',
      skills: ['PHPUnit', 'Unit Testing', 'Integration Testing'],
    },
    {
      category: 'Frontend / Additional',
      skills: ['React', 'JavaScript', 'Bootstrap', 'Multi-tenant SaaS'],
    },
  ],

  experience: [
    {
      company: 'IVERA',
      role: 'Backend Engineer',
      period: 'Jan 2026 – Present',
      location: 'Remote / Cairo, Egypt',
      intro: 'Builds REST API services in Laravel/PHP for IVERA products and engineers backend functionality in Go for ILORA, a multi-tenant enterprise platform using Go, React, and PostgreSQL.',
      bullets: [
        'Engineers and maintains REST API services for IVERA products, applying SOLID and clean-code practices.',
        'Engineers backend functionality for ILORA\'s ERP and CRM systems, including organisation/tenant workflows, subscription and invoicing logic, multi-currency handling, CRM lead/deal pipelines, automated lead assignment, and booking/scheduling workflows.',
        'Engineers backend functionality for ILORA\'s HR, performance-management, and ecommerce systems, including employee leave/overtime workflows, job-offer processing, performance evaluation and improvement-plan tracking, and ecommerce backend workflows.',
        'Develops WhatsApp-based customer-communication functionality, including session/connection management for multi-tenant usage.',
        'Contributes to ILORA\'s AI-powered capabilities as part of the platform\'s enterprise feature set.',
      ],
    },
    {
      company: 'Algoriza',
      role: 'Backend Developer',
      period: 'Sept 2023 – Jan 2026',
      location: 'Cairo, Egypt',
      intro: 'Joined an existing Laravel-based SaaS ecommerce platform (Daashop) and extended and maintained its backend across the commerce lifecycle — product catalog through cart, checkout, and order management.',
      bullets: [
        'Extended and maintained product catalog, cart, checkout, and order management functionality.',
        'Worked with products, categories, variations, attributes, and coupons.',
        'Integrated and maintained four payment gateways: Paymob, PayPal, Stripe, and Fawry.',
        'Designed and documented RESTful APIs using Scribe.',
        'Implemented Redis caching and Laravel queue/background-job processing with Horizon.',
        'Optimized backend database and query performance.',
        'Covered core functionality with PHPUnit unit and integration tests.',
        'Applied SOLID and clean-code practices.',
      ],
    },
    {
      company: 'Buducloud',
      role: 'Full-Stack Developer',
      period: 'Aug 2021 – Oct 2022',
      location: 'Cairo, Egypt',
      bullets: [
        'Delivered backend and frontend features using PHP, Bootstrap, and JavaScript for internal tools and customer-facing applications across multiple concurrent projects.',
      ],
    },
    {
      company: 'Freelance',
      role: 'Backend / Full-Stack Developer',
      period: 'Jan 2021 – Jan 2023',
      location: 'Remote',
      bullets: [
        'Delivered Laravel/Bootstrap backend and frontend solutions for client projects, including Vclasses and Donor App applications.',
      ],
    },
  ],

  education: {
    degree: 'B.Sc. Computer Science',
    institution: 'Ain Shams University',
    location: 'Cairo, Egypt',
    period: 'Sept 2019 – July 2023',
  },

  projects: [
    {
      name: 'ILORA — AI-Powered Multi-Tenant Enterprise Platform',
      tech: 'Go, React, PostgreSQL',
      description: 'Multi-tenant enterprise platform spanning ERP, CRM, HR, performance management, ecommerce, WhatsApp communication, and AI-powered capabilities. Contributed backend functionality including CRM lead/deal pipelines, automated lead assignment, booking/scheduling, subscriptions/invoicing, multi-currency, HR leave/overtime/job-offers, performance evaluations/PIP tracking, ecommerce product templates/orders, and WhatsApp session management.',
    },
    {
      name: 'Turbo for Shipping',
      tech: 'Laravel, MySQL',
      description: 'Laravel logistics and supply-chain platform. Backend work covered shipment status workflows, ticketing and SLA handling, inventory, stock movements/transfers/reservations, manifest management, branches, franchises, and permissions/access logic.',
    },
    {
      name: 'Daashop',
      tech: 'Laravel, MySQL, Redis',
      description: 'Laravel SaaS ecommerce platform. Backend work included products/categories/variations/attributes/coupons, cart/checkout/orders, payment integrations (Paymob, PayPal, Stripe, Fawry), REST APIs, Redis caching, queues/Horizon, database/query optimization, and PHPUnit testing.',
    },
    {
      name: 'Business Now',
      tech: 'Laravel, Filament, MySQL',
      description: 'Laravel/Filament admin and business platform. Implemented Filament resources, forms, tables, filters, CRUD workflows, and relationship management.',
    },
    {
      name: 'FILHOS',
      tech: 'Laravel',
      description: 'Parent-school communication platform. Backend work covered child attendance tracking, daily activity logs, and medication records/dose management.',
    },
    {
      name: 'MATEN',
      tech: 'Laravel',
      description: 'Education/career guidance platform. Backend work covered courses, assessment questions/answers, recommendation logic, and study/career paths.',
    },
    {
      name: 'EVEUNITY',
      tech: 'Java',
      description: 'Electric-vehicle charging and shipping-related application. Contributed backend/application-level development.',
    },
  ],

  languages: [
    { language: 'Arabic', proficiency: 'Native' },
    { language: 'English', proficiency: 'Professional Working Proficiency (written & workplace communication)' },
  ],

  aiWorkflow: {
    tools: ['Claude Code', 'Windsurf'],
    description: 'Uses AI-assisted development tools as part of daily backend engineering workflow — codebase exploration, implementation support, debugging, and code review. A productivity practice supporting hands-on backend development, not a separate specialization.',
  },
}
