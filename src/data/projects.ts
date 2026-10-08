import type { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'ilora',
    name: 'ILORA — AI ERP System',
    tagline:
      'Multi-tenant AI ERP platform covering CRM, HR, Performance Management, Ecommerce, and WhatsApp-based communication — built with Go, React, and PostgreSQL.',
    category: ['AI ERP System', 'SaaS', 'Multi-tenant'],
    industry: ['Enterprise SaaS', 'B2B'],
    role: 'Backend Engineer',
    company: 'IVERA',
    period: 'Jan 2026 – Present',
    technologies: {
      backend: ['Go'],
      frontend: ['React'],
      database: ['PostgreSQL'],
      tools: ['Git', 'Postman'],
    },
    featured: true,
    overview:
      'ILORA is a multi-tenant AI ERP platform built with Go, React, and PostgreSQL. It consolidates ERP, CRM, HR, performance management, ecommerce, and WhatsApp-based customer communication into a single enterprise system. The platform is designed around a multi-tenant architecture where each organisation operates within its own isolated context. I contribute backend functionality in Go across several of these modules as part of my role at IVERA.',
    modules: [
      {
        name: 'Organisation / Tenant Management',
        description:
          'Backend workflows for onboarding and managing organisations (tenants) within the platform. Includes tenant isolation logic and organisation-level configuration.',
      },
      {
        name: 'Subscription & Invoicing',
        description:
          'Subscription lifecycle management and invoicing logic, covering billing workflows tied to tenant accounts.',
      },
      {
        name: 'Multi-Currency Support',
        description:
          'Backend handling for multi-currency data across the platform, ensuring correct currency representation in financial workflows.',
      },
      {
        name: 'CRM — Leads & Deals',
        description:
          'Full CRM pipeline backend: leads, deals, clients, contacts, pipelines, lead sources, lost reasons, tags, and custom fields. Includes automated lead assignment logic and booking/scheduling workflows.',
      },
      {
        name: 'CRM — Automated Lead Assignment',
        description:
          'Backend logic for automatically assigning incoming leads based on configured rules within the CRM pipeline.',
      },
      {
        name: 'CRM — Booking / Scheduling',
        description:
          'Backend workflows for booking and scheduling within the CRM context, supporting client interaction management.',
      },
      {
        name: 'HR — Employee & Leave Management',
        description:
          'HR backend covering employee records, leave request workflows, and leave approval logic.',
      },
      {
        name: 'HR — Overtime Workflows',
        description:
          'Backend processing for overtime requests and approval workflows tied to employee records.',
      },
      {
        name: 'HR — Job Offers',
        description:
          'Backend processing for job offer creation, management, and lifecycle within the HR module.',
      },
      {
        name: 'Performance Management — Evaluations & Improvement Plans',
        description:
          'Backend for performance evaluation workflows, improvement plan tracking, competency management, and goal tracking.',
      },
      {
        name: 'Ecommerce — Products & Orders',
        description:
          'Ecommerce backend covering product templates, product attributes, and order processing workflows.',
      },
      {
        name: 'WhatsApp Communication',
        description:
          'Backend functionality for WhatsApp-based customer communication, including session and connection management for multi-tenant usage. Each tenant manages its own WhatsApp session context.',
      },
    ],
    backend:
      'Backend engineering in Go, covering business logic implementation across ERP, CRM, HR, performance management, ecommerce, and WhatsApp modules. Includes API endpoint development, data validation, authorization logic, and workflow orchestration. Database and query optimization applied across modules to maintain performance at scale.',
    database:
      'PostgreSQL. Applied database and query optimization across modules as part of ongoing backend work.',
    contribution:
      'Contribute backend functionality in Go to select modules of the ILORA platform as part of my role at IVERA. Work covers ERP/CRM workflows, HR and performance management, ecommerce backend, and WhatsApp-based communication features. Do not claim ownership of the full platform — contribution is module-level across an existing enterprise codebase.',
    missingInfo: [
      'Exact module ownership boundaries',
      'Team size',
      'Database schema details',
    ],
  },

  {
    slug: 'turbo-for-shipping',
    name: 'Turbo for Shipping',
    tagline:
      'Laravel-based logistics and supply-chain platform with six operational modules: shipments, ticketing, inventory, manifest, branches, and franchises.',
    category: ['Logistics', 'Supply Chain', 'SaaS'],
    industry: ['Logistics', 'Supply Chain'],
    role: 'Backend Engineer',
    company: 'IVERA',
    period: 'Jan 2026 – Present',
    technologies: {
      backend: ['PHP', 'Laravel'],
      database: ['MySQL'],
      tools: ['Laravel Telescope', 'Log Viewer', 'Git', 'Postman'],
    },
    featured: true,
    overview:
      'Turbo for Shipping is a logistics and supply-chain platform built with Laravel. It covers the end-to-end operational backend for shipping companies, including shipment lifecycle management, customer-facing ticketing, warehouse inventory, manifest grouping, and branch/franchise network management. I engineer backend functionality across the platform\'s six operational modules at IVERA.',
    modules: [
      {
        name: 'Shipments',
        description:
          'Shipment lifecycle backend: status workflows covering the full shipment journey and status transition logic to enforce valid state changes.',
      },
      {
        name: 'Ticketing',
        description:
          'Ticket management backend: ticket assignment workflows, SLA handling logic, and AI-agent integration workflows for ticket processing automation.',
      },
      {
        name: 'Inventory',
        description:
          'Warehouse inventory backend: stock movement recording, inventory transfer workflows, reservation logic, and database/query optimization to support accurate real-time stock data.',
      },
      {
        name: 'Manifest',
        description:
          'Shipment grouping backend: manifest creation from shipments, manifest status workflows tracking the lifecycle of grouped shipments.',
      },
      {
        name: 'Branches',
        description:
          'Branch management backend: branch entity management, relationships to other entities (shipments, staff, inventory), and access/permission logic scoped to branch level.',
      },
      {
        name: 'Franchises',
        description:
          'Franchise management backend: franchise entity management, entity relationships, and access/permission logic for franchise-level operations.',
      },
    ],
    monitoring:
      'Laravel Telescope for backend request inspection, query monitoring, and job tracking. Log Viewer for production log access and backend debugging workflows.',
    contribution:
      'Engineer backend functionality across all six operational modules of Turbo for Shipping at IVERA. Responsible for business logic implementation, workflow engineering, and backend debugging/monitoring. Do not claim ownership of the full platform.',
    missingInfo: [
      'Database type (MySQL assumed from Laravel convention — to confirm)',
      'AI provider or framework used in ticketing AI-agent integration',
      'Team size',
    ],
  },

  {
    slug: 'daashop',
    name: 'Daashop',
    tagline:
      'Laravel-based SaaS ecommerce platform. Joined existing codebase and extended/maintained the backend including four payment gateway integrations, Redis caching, and queue processing.',
    category: ['Ecommerce', 'SaaS'],
    industry: ['Ecommerce', 'Retail'],
    role: 'Backend Developer',
    company: 'Algoriza',
    period: 'Sept 2023 – Jan 2026',
    technologies: {
      backend: ['PHP', 'Laravel'],
      database: ['MySQL'],
      integrations: ['Paymob', 'PayPal', 'Stripe', 'Fawry', 'Redis'],
      tools: [
        'Laravel Horizon',
        'PHPUnit',
        'Scribe',
        'Git',
        'Postman',
      ],
    },
    featured: true,
    overview:
      'Daashop is a Laravel-based SaaS ecommerce platform. I joined the existing codebase at Algoriza and was responsible for extending and maintaining the backend — not building the platform from scratch. Work covered the core commerce backend, four payment gateway integrations, REST API design and documentation, Redis caching, Laravel queue processing, database/query optimization, and unit/integration testing.',
    modules: [
      {
        name: 'Product Catalog',
        description:
          'Extended and maintained the product catalog backend: products, categories, product variations, and product attributes. Covers the data model and business logic supporting merchant product management.',
      },
      {
        name: 'Cart & Checkout',
        description:
          'Extended and maintained cart management and checkout workflows, including backend logic for cart state, item management, and the checkout flow leading to order creation.',
      },
      {
        name: 'Order Management',
        description:
          'Extended and maintained order lifecycle backend: order creation from checkout, order history, order status management, and admin-side order management.',
      },
      {
        name: 'Admin Functionality',
        description:
          'Extended and maintained admin-side backend functionality supporting merchant and platform administration.',
      },
      {
        name: 'Payment Gateways',
        description:
          'Implemented and maintained backend integrations for four payment gateways: Paymob, PayPal, Stripe, and Fawry. Covers payment workflow implementation, gateway communication, and payment status handling.',
      },
      {
        name: 'REST API & Documentation',
        description:
          'Designed and documented RESTful APIs as a core part of the platform. API documentation generated via Scribe.',
      },
      {
        name: 'Background Processing',
        description:
          'Implemented Redis caching and Laravel queue/background-job processing for async operations, using Laravel Horizon for queue monitoring.',
      },
    ],
    integrations: [
      {
        name: 'Paymob',
        description: 'Payment gateway integration for card and wallet payments.',
      },
      {
        name: 'PayPal',
        description: 'PayPal payment gateway integration.',
      },
      {
        name: 'Stripe',
        description: 'Stripe payment gateway integration.',
      },
      {
        name: 'Fawry',
        description: 'Fawry payment gateway integration for local Egyptian payment methods.',
      },
    ],
    backend:
      'Extended and maintained core ecommerce business logic in Laravel/PHP: product catalog, cart, checkout, order management, payment workflows, and admin functionality. Applied SOLID principles and clean-code practices throughout. Designed RESTful APIs and documented them with Scribe.',
    performance:
      'Implemented Redis caching for performance-sensitive data. Applied Laravel queue and background-job processing for async operations managed via Laravel Horizon. Optimized backend database queries and overall query performance.',
    testing:
      'Covered core platform functionality with PHPUnit unit and integration tests.',
    contribution:
      'Joined an existing Laravel-based SaaS ecommerce platform at Algoriza and extended/maintained the backend. Responsible for payment gateway integrations, API development, Redis/queue implementation, database optimization, and testing. Did not build the platform from scratch.',
    missingInfo: [
      'Specific performance metrics',
      'Number of merchants/stores on the platform',
    ],
  },

  {
    slug: 'business-now',
    name: 'Business Now',
    tagline:
      'Laravel/Filament-based admin and business management platform. Engineered Filament resources, forms, tables, filters, CRUD workflows, and relationship management.',
    category: ['Admin Platform', 'SaaS'],
    industry: ['Business Management'],
    role: 'Backend Engineer',
    company: 'IVERA',
    period: 'Jan 2026 – Present',
    technologies: {
      backend: ['PHP', 'Laravel'],
      frontend: ['Filament'],
      database: ['MySQL'],
      tools: ['Git'],
    },
    featured: true,
    overview:
      'Business Now is a Laravel/Filament-based platform providing admin and business management interfaces. I engineered the Filament-based backend and admin UI, building resources, forms, tables, and workflows for business-specific management use cases at IVERA.',
    modules: [
      {
        name: 'Filament Resources',
        description:
          'Implemented Filament resource classes to expose business entities through the admin panel — covering listing, creation, editing, and deletion.',
      },
      {
        name: 'Forms & Validation',
        description:
          'Built Filament form schemas for business-specific data entry, including field configuration and validation logic.',
      },
      {
        name: 'Tables & Filters',
        description:
          'Implemented Filament table definitions with columns, sorting, search, and filter configurations for business data management.',
      },
      {
        name: 'Relationship Management',
        description:
          'Implemented relationship handling within Filament resources — managing related entity selection, display, and data integrity.',
      },
      {
        name: 'CRUD Workflows',
        description:
          'End-to-end CRUD workflow implementation for business entities through the Filament admin panel.',
      },
    ],
    backend:
      'Backend implemented with Laravel and Filament. Built resource definitions, form schemas, table definitions, filter logic, and relationship management for business-specific admin interfaces.',
    contribution:
      'Personally implemented the Filament-based admin and business interfaces for Business Now at IVERA, including resources, forms, tables, filters, CRUD workflows, and relationship management.',
    missingInfo: [
      'Specific business domains managed by the platform',
      'Database schema details',
    ],
  },

  {
    slug: 'filhos',
    name: 'FILHOS',
    tagline:
      'Laravel-based parent-school communication platform covering child attendance tracking, daily activity logs, and medication record management.',
    category: ['Education', 'Communication'],
    industry: ['Education'],
    role: 'Backend Developer',
    company: 'Algoriza',
    period: 'Sept 2023 – Jan 2026',
    technologies: {
      backend: ['PHP', 'Laravel'],
      database: ['MySQL'],
      tools: ['Git', 'Postman'],
    },
    featured: false,
    overview:
      'FILHOS is a Laravel-based platform for parent-school communication. It provides backend functionality for schools to manage and communicate student-related information to parents, including attendance records, daily activity logs, and medication management.',
    modules: [
      {
        name: 'Attendance Tracking',
        description:
          'Backend for recording and managing child attendance data, supporting per-student attendance history.',
      },
      {
        name: 'Daily Activity Logs',
        description:
          'Backend for creating and managing daily activity log entries per student — recording school-day activities for parent visibility.',
      },
      {
        name: 'Medication Records & Dose Management',
        description:
          'Backend for managing student medication records and tracking dose administration — covering medication data, dosing schedules, and administration records.',
      },
    ],
    contribution:
      'Worked on backend functionality for FILHOS at Algoriza, covering attendance tracking, daily activity logs, and medication/dose management.',
    missingInfo: [
      'Whether this was a new build or maintenance of an existing system',
      'Specific API design details',
    ],
  },

  {
    slug: 'maten',
    name: 'MATEN',
    tagline:
      'Laravel-based education and career-guidance platform with courses, assessment questions, recommendation logic, and study/career path management.',
    category: ['Education', 'Career Guidance'],
    industry: ['Education', 'Career Development'],
    role: 'Backend Developer',
    company: 'Algoriza',
    period: 'Sept 2023 – Jan 2026',
    technologies: {
      backend: ['PHP', 'Laravel'],
      database: ['MySQL'],
      tools: ['Git', 'Postman'],
    },
    featured: false,
    overview:
      'MATEN is a Laravel-based platform for education and career guidance. It provides backend functionality for course management, student assessment, and recommendation logic that guides users toward suitable study or career paths based on their assessment results.',
    modules: [
      {
        name: 'Course Management',
        description:
          'Backend for creating and managing courses available on the platform.',
      },
      {
        name: 'Assessment Questions',
        description:
          'Backend for managing assessment question sets used to evaluate student knowledge or aptitude.',
      },
      {
        name: 'Recommendation Logic',
        description:
          'Backend logic for generating study and career path recommendations based on assessment results.',
      },
      {
        name: 'Study & Career Paths',
        description:
          'Backend for defining and managing study paths and career paths, linked to the recommendation system.',
      },
    ],
    contribution:
      'Worked on backend functionality for MATEN at Algoriza, covering course management, assessment questions, recommendation logic, and study/career path management.',
    missingInfo: [
      'Whether this was a new build or maintenance of an existing system',
      'Recommendation algorithm details',
    ],
  },

  {
    slug: 'eveunity',
    name: 'EVEUNITY',
    tagline:
      'Java backend/application-level development for an electric-vehicle charging and shipping-related application.',
    category: ['Mobile Backend', 'EV Technology'],
    industry: ['Electric Vehicles', 'Transportation'],
    role: 'Backend Developer',
    company: 'Algoriza',
    period: 'Sept 2023 – Jan 2026',
    technologies: {
      backend: ['Java'],
      tools: ['Git'],
    },
    featured: false,
    overview:
      'EVEUNITY is an application focused on electric-vehicle charging and shipping-related functionality. I contributed backend and application-level development in Java. This is one of my secondary-stack engagements outside my primary PHP/Laravel work.',
    contribution:
      'Contributed backend/application-level development in Java for the EVEUNITY application at Algoriza.',
    missingInfo: [
      'Specific Java frameworks used (Spring Boot, etc.) — not confirmed',
      'Exact modules or features worked on',
      'Database used',
      'Infrastructure details',
    ],
  },

  {
    slug: 'freelance-projects',
    name: 'Freelance Projects',
    tagline:
      'Freelance Laravel/PHP backend and full-stack work including Vclasses (online learning) and Donor App, delivered remotely.',
    category: ['Freelance', 'Education', 'Social'],
    industry: ['Education', 'Non-profit/Social'],
    role: 'Backend/Full-Stack Developer',
    company: 'Freelance',
    period: 'Jan 2021 – Jan 2023',
    technologies: {
      backend: ['PHP', 'Laravel'],
      frontend: ['Bootstrap', 'JavaScript'],
      tools: ['Git'],
    },
    featured: false,
    overview:
      'Freelance backend and full-stack projects delivered remotely between 2021 and 2023. Named projects include Vclasses (an online learning/classes platform) and Donor App. Work was delivered using Laravel for the backend and Bootstrap/JavaScript for frontend elements.',
    modules: [
      {
        name: 'Vclasses',
        description:
          'Online learning/classes platform. Backend and frontend development in Laravel and Bootstrap.',
      },
      {
        name: 'Donor App',
        description:
          'Application with donation-related functionality. Backend and frontend development in Laravel and Bootstrap.',
      },
    ],
    contribution:
      'Delivered backend and frontend features as a freelance developer for client projects including Vclasses and Donor App.',
    missingInfo: [
      'Specific feature details for each project',
      'Client/company names',
      'Database details',
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug)
}
