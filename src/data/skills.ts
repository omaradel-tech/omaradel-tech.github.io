import type { SkillCategory, EngineeringDomain, EngineeringPractice } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    name: 'Backend',
    description: 'Primary backend stack and engineering fundamentals',
    skills: [
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'Go', note: 'Secondary stack — IVERA/ILORA' },
      { name: 'Java', note: 'EVEUNITY project' },
      { name: 'REST API Design' },
      { name: 'OOP' },
      { name: 'SOLID Principles' },
      { name: 'Eloquent ORM' },
      { name: 'MVC Architecture' },
    ],
  },
  {
    name: 'Laravel Ecosystem',
    description: 'Laravel packages, tools, and supporting libraries',
    skills: [
      { name: 'Filament' },
      { name: 'Laravel Sanctum' },
      { name: 'Scribe', note: 'API documentation' },
      { name: 'Laravel Horizon', note: 'Queue monitoring' },
      { name: 'Laravel Telescope', note: 'Backend debugging' },
      { name: 'Log Viewer', note: 'Production log access' },
      { name: 'Redis' },
      { name: 'Queues / Background Jobs' },
    ],
  },
  {
    name: 'Databases',
    description: 'Relational databases and data storage',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Database/Query Optimization' },
      { name: 'Data Modeling' },
      { name: 'Database Migrations' },
    ],
  },
  {
    name: 'Payments & Integrations',
    description: 'Payment gateways and third-party integrations',
    skills: [
      { name: 'Stripe' },
      { name: 'PayPal' },
      { name: 'Paymob' },
      { name: 'Fawry' },
      { name: 'WhatsApp Business API', note: 'ILORA multi-tenant communication' },
    ],
  },
  {
    name: 'Infrastructure & Tooling',
    description: 'Server, deployment, and developer tooling',
    skills: [
      { name: 'Nginx', note: 'Virtual hosts, SSL' },
      { name: 'PHP-FPM' },
      { name: 'CloudPanel' },
      { name: 'Linux Server Operations' },
      { name: 'Cron / Scheduled Tasks' },
      { name: 'Deployment & Troubleshooting' },
      { name: 'Git' },
      { name: 'Postman' },
      { name: 'PHPUnit' },
    ],
  },
  {
    name: 'Additional',
    description: 'Supporting technologies and practices',
    skills: [
      { name: 'React', note: 'Admin interfaces — ILORA' },
      { name: 'Bootstrap', note: 'Buducloud / freelance' },
      { name: 'JavaScript' },
      { name: 'Multi-tenant SaaS Architecture' },
    ],
  },
  {
    name: 'AI-Assisted Development',
    description: 'AI tools used as part of the daily engineering workflow',
    skills: [
      {
        name: 'Claude Code',
        note: 'Codebase exploration, implementation support, debugging, code review',
      },
      {
        name: 'Windsurf',
        note: 'Codebase exploration, implementation support, debugging, code review',
      },
    ],
  },
]

export const engineeringDomains: EngineeringDomain[] = [
  {
    title: 'Backend',
    description: 'Primary engineering discipline',
    items: ['PHP / Laravel', 'Go', 'REST APIs', 'OOP / SOLID'],
    icon: 'Server',
  },
  {
    title: 'APIs & Integrations',
    description: 'API design and third-party connectivity',
    items: ['REST API Design', 'Scribe Docs', 'Payment Gateways', 'WhatsApp API'],
    icon: 'Plug',
  },
  {
    title: 'Data',
    description: 'Databases and data layer',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'Query Optimization'],
    icon: 'Database',
  },
  {
    title: 'Commerce',
    description: 'Ecommerce and payment workflows',
    items: ['Ecommerce Backend', 'Checkout Flows', 'Stripe / PayPal / Paymob / Fawry'],
    icon: 'ShoppingCart',
  },
  {
    title: 'Enterprise',
    description: 'Enterprise SaaS and multi-tenant platforms',
    items: ['AI ERP System (ILORA)', 'CRM / HR / Ecommerce', 'Multi-tenant SaaS', 'Filament Admin'],
    icon: 'Building2',
  },
  {
    title: 'Infrastructure',
    description: 'Server and deployment',
    items: ['Linux / Nginx / PHP-FPM', 'CloudPanel', 'Queues / Background Jobs', 'Deployment'],
    icon: 'HardDrive',
  },
]

export const engineeringPractices: EngineeringPractice[] = [
  {
    title: 'SOLID Principles & Clean Code',
    description:
      'Applied consistently across Laravel codebase work — particularly during the Daashop engagement at Algoriza and ongoing work at IVERA.',
    details: [
      'Single Responsibility: each class and service has one clear purpose',
      'Open/Closed: design for extension without modifying existing logic',
      'Dependency Inversion: depend on abstractions, not concrete implementations',
      'Clean, readable code that communicates intent over cleverness',
    ],
  },
  {
    title: 'REST API Design & Documentation',
    description:
      'Designing and documenting RESTful APIs as a core deliverable, not an afterthought.',
    details: [
      'Resource-oriented API design following REST conventions',
      'Consistent response structure and error handling',
      'API documentation with Scribe (Laravel)',
      'Tested with Postman during development',
    ],
  },
  {
    title: 'Database & Query Optimization',
    description:
      'Applied across multiple projects including ILORA (PostgreSQL), Turbo for Shipping (MySQL), and Daashop (MySQL).',
    details: [
      'Query analysis and optimization for performance-critical paths',
      'Appropriate use of Eloquent relationships vs. raw queries',
      'Avoiding N+1 query problems via eager loading',
      'Indexing strategy aligned with query patterns',
      'Data modeling decisions that support the application\'s query needs',
    ],
  },
  {
    title: 'Redis Caching & Queue Processing',
    description:
      'Implemented Redis caching and Laravel queue/background-job processing in Daashop.',
    details: [
      'Redis for caching frequently accessed data',
      'Laravel queues for async and background processing',
      'Laravel Horizon for queue monitoring and management',
      'Background jobs to offload time-consuming operations from request cycles',
    ],
  },
  {
    title: 'Testing with PHPUnit',
    description: 'Unit and integration testing of core backend functionality in Daashop.',
    details: [
      'PHPUnit for unit and integration tests',
      'Testing core commerce logic: cart, checkout, order flows',
      'Testing payment gateway integrations',
    ],
  },
  {
    title: 'Backend Monitoring & Debugging',
    description:
      'Using Laravel Telescope and Log Viewer to monitor and debug production Laravel applications.',
    details: [
      'Laravel Telescope: request inspection, query monitoring, job tracking, exception logging',
      'Log Viewer: structured access to application logs in production',
      'Systematic debugging workflows from log → trace → fix',
    ],
  },
  {
    title: 'Server Configuration & Deployment',
    description:
      'Hands-on experience with Linux server configuration, Nginx, PHP-FPM, and CloudPanel.',
    details: [
      'Nginx virtual host configuration and SSL setup',
      'PHP-FPM pool configuration',
      'CloudPanel server management',
      'Linux server operations and cron/scheduled task management',
      'Deployment and production troubleshooting',
    ],
  },
  {
    title: 'Multi-Tenant Backend Architecture',
    description:
      'Working within a multi-tenant SaaS architecture on the ILORA platform at IVERA.',
    details: [
      'Tenant isolation at the data and application logic level',
      'Organisation-scoped workflows and access control',
      'Per-tenant configuration and resource management',
      'WhatsApp session management scoped per tenant',
    ],
  },
  {
    title: 'AI-Assisted Development',
    description:
      'Uses AI-assisted development tools as part of the daily backend engineering workflow — for codebase exploration, implementation support, debugging, and code review.',
    details: [
      'Claude Code: codebase exploration, implementation support, debugging, code review',
      'Windsurf: codebase exploration, implementation support, debugging, code review',
      'AI tools are a productivity practice supporting hands-on backend development — not a separate specialization',
    ],
  },
]
