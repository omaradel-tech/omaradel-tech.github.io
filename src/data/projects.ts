import type { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'ilora',
    name: 'ILORA — AI ERP System',
    tagline:
      'Multi-tenant AI ERP platform covering CRM, HR, Performance Management, Ecommerce, and WhatsApp-based communication — built with Go, React, and PostgreSQL.',
    category: ['AI ERP System', 'SaaS', 'Multi-tenant', 'Backend', 'Go', 'ERP', 'CRM', 'HR', 'Ecommerce', 'Integrations'],
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
      'ILORA is a multi-tenant AI ERP platform built with Go, React, and PostgreSQL. It consolidates ERP, CRM, HR, performance management, ecommerce, and WhatsApp-based customer communication into a single enterprise system. The platform is designed around a multi-tenant architecture where each organisation operates within its own isolated context. The platform scope includes ERP, CRM, HR, Performance Management, Ecommerce, WhatsApp, Marketing, Finance/Accounting, Sales, Purchasing, Ticketing, Payroll, and Attendance — though this scope is broader than my individually documented contribution. I contribute backend functionality in Go across several of these modules as part of my role at IVERA.',
    architecture:
      'Multi-tenant Go backend with PostgreSQL. Each organisation operates within its own tenant-scoped context. Business logic is implemented across domain-specific modules (CRM, HR, PMS, Ecommerce, WhatsApp).',
    modules: [
      {
        name: 'Organisation / Tenant Management',
        description:
          'Backend workflows for onboarding and managing organisations (tenants) within the platform. Includes tenant isolation logic and organisation-level configuration.',
        details: [
          'Organisation onboarding and lifecycle workflows',
          'Tenant-scoped data isolation across all modules',
          'Organisation-level configuration and settings',
        ],
      },
      {
        name: 'Subscription & Invoicing',
        description:
          'Subscription lifecycle management and invoicing logic, covering billing workflows tied to tenant accounts.',
        details: [
          'Organisation subscription creation and lifecycle management',
          'Invoice generation tied to subscription billing cycles',
          'Multi-currency support across subscription and invoicing workflows',
          'Subscription-related backend validation and business rules',
        ],
      },
      {
        name: 'Multi-Currency Support',
        description:
          'Backend handling for multi-currency data across the platform, ensuring correct currency representation in financial workflows.',
        details: [
          'Currency configuration per organisation/tenant',
          'Correct currency representation in invoicing, ecommerce, and financial modules',
        ],
      },
      {
        name: 'CRM — Leads & Deals',
        description:
          'Full CRM pipeline backend: leads, deals, clients, contacts, pipelines, lead sources, lost reasons, tags, and custom fields. The CRM business model uses a one Lead → many Deals relationship. Lead conversion is implemented as a business workflow, not merely CRUD.',
        details: [
          'One Lead → many Deals relationship model',
          'Lead conversion implemented as a business workflow',
          'Lead and deal pipeline management',
          'Client and contact management linked to leads and deals',
          'Lead sources and lost reasons tracking',
          'Tags and custom fields for tenant-configurable data across CRM records',
          'Custom field types supporting different field configurations and selection behaviour',
        ],
      },
      {
        name: 'CRM — Automated Lead Assignment',
        description:
          'Backend logic for automatically assigning incoming leads to sales owners based on configured rules within the CRM pipeline.',
        details: [
          'Automated assignment of incoming leads to sales team members',
        ],
      },
      {
        name: 'CRM — Booking / Scheduling',
        description:
          'Backend workflows for booking and scheduling within the CRM context, supporting sales scheduling and client interaction management.',
        details: [
          'Booking link generation for sales scheduling',
          'Pooled sales calendar support',
          'Automatic lead-owner assignment through booking workflows',
        ],
      },
      {
        name: 'HR — Employee & Leave Management',
        description:
          'HR backend covering employee records, leave request workflows, leave approval logic, and leave balance tracking.',
        details: [
          'Employee record management within tenant scope',
          'Leave request and approval workflows',
          'Leave balance tracking: total, used, and carried-forward days',
        ],
      },
      {
        name: 'HR — Overtime Workflows',
        description:
          'Backend processing for overtime requests and approval workflows tied to employee records.',
      },
      {
        name: 'HR — Job Offers',
        description:
          'Backend processing for the job offer lifecycle within the HR module, including offer creation, candidate handling, and communication workflows.',
        details: [
          'Job offer creation and lifecycle management',
          'Candidate National ID information processing',
          'HR blacklist import/export functionality',
          'Job offer email send/response workflows',
          'Job offer location information handling',
        ],
      },
      {
        name: 'Performance Management — Evaluations & Improvement Plans',
        description:
          'Backend for performance evaluation workflows, improvement plan tracking, competency management, goal tracking, and performance gap reporting.',
        details: [
          'Performance evaluation creation and lifecycle workflows',
          'Competency management: competencies, competency indicators, and competency recommendations',
          'Core competency defaults and default competency level configuration',
          'Competency weight management for evaluation scoring',
          'Evaluation rating calculation and publishing of results',
          'Competency level and date propagation to employee profiles',
          'Goal tracking linked to performance evaluations',
          'Performance gap identification and reporting',
          'PIP (Performance Improvement Plan) tracking',
          'Weekly PIP planning and progress metrics',
        ],
      },
      {
        name: 'Ecommerce — Products & Orders',
        description:
          'Ecommerce backend covering product templates, product attributes, and order processing workflows.',
        details: [
          'Product template management with configurable attributes',
          'Product attribute definitions and assignment',
          'Order creation and processing workflows',
          'Ecommerce backend verification and testing',
        ],
      },
      {
        name: 'WhatsApp Communication',
        description:
          'Backend functionality for WhatsApp-based customer communication, including session and connection management for multi-tenant usage. Each tenant manages its own WhatsApp session context.',
        details: [
          'WhatsApp session management per tenant',
          'Connection lifecycle and state management',
          'Multi-tenant WhatsApp usage with isolated sessions',
        ],
      },
    ],
    backend:
      'Backend engineering in Go, covering business logic implementation across ERP, CRM, HR, performance management, ecommerce, and WhatsApp modules. Includes API endpoint development, data validation, authorization logic, and workflow orchestration. Work spans the full CRM pipeline (leads, deals, pipelines, custom fields, automated assignment, booking), HR workflows (leave management, overtime, job offers, blacklist), performance management (evaluations, competencies, improvement plans, goal tracking), ecommerce (product templates, orders), and WhatsApp communication (session management, multi-tenant isolation).',
    database:
      'PostgreSQL with organisation-scoped queries across all modules. Applied database and query optimization including complex joins, aggregations, and reporting queries across CRM, HR, performance management, and ecommerce domains.',
    contribution:
      'Contribute backend functionality in Go to select modules of the ILORA platform as part of my role at IVERA. My confirmed backend contributions include: organisation/tenant workflows, subscription and invoicing, CRM (leads, deals, pipelines, custom fields, automated assignment, booking), HR (employee management, leave, overtime, job offers), performance management (evaluations, competencies, improvement plans, goals), ecommerce (product templates, orders), and WhatsApp communication. The platform scope is broader than my individual contribution.',
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
    category: ['Logistics', 'Supply Chain', 'SaaS', 'Backend', 'Laravel'],
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
        details: [
          'Shipment status workflows modelling the full delivery lifecycle',
          'Status transition logic enforcing valid state changes between shipment stages',
          'Client request handling for shipment operations',
        ],
      },
      {
        name: 'Ticketing',
        description:
          'Ticket management backend: ticket assignment workflows, SLA handling logic, and AI-agent integration workflows for ticket processing automation.',
        details: [
          'Ticket creation and assignment workflows',
          'SLA tracking and enforcement logic',
          'AI-agent integration workflows for automated ticket processing',
        ],
      },
      {
        name: 'Inventory',
        description:
          'Warehouse inventory backend: stock movement recording, inventory transfer workflows, reservation logic, and database/query optimization to support accurate real-time stock data.',
        details: [
          'Stock movement recording',
          'Inventory transfer workflows between locations',
          'Stock reservation logic for pending shipments',
          'Database/query optimization for accurate stock queries',
        ],
      },
      {
        name: 'Manifest',
        description:
          'Shipment grouping backend: manifest creation from shipments, manifest status workflows tracking the lifecycle of grouped shipments.',
        details: [
          'Manifest creation by grouping shipments',
          'Manifest status workflows tracking grouped shipment lifecycle',
        ],
      },
      {
        name: 'Branches',
        description:
          'Branch management backend: branch entity management, relationships to other entities (shipments, staff, inventory), and access/permission logic scoped to branch level.',
        details: [
          'Branch entity management and relationships to shipments, staff, and inventory',
          'Branch-level access and permission scoping',
        ],
      },
      {
        name: 'Franchises',
        description:
          'Franchise management backend: franchise entity management, entity relationships, and access/permission logic for franchise-level operations.',
        details: [
          'Franchise entity management and entity relationships',
          'Franchise-level access and permission logic',
        ],
      },
    ],
    monitoring:
      'Laravel Telescope for backend request inspection, query monitoring, and job tracking. Log Viewer for production log access and backend debugging workflows.',
    contribution:
      'Engineer backend functionality across all six operational modules of Turbo for Shipping at IVERA. My backend contributions include shipment status workflows, ticketing with SLA handling, inventory management, manifest grouping, and branch/franchise access logic. Also responsible for backend debugging and monitoring using Telescope and Log Viewer.',
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
    category: ['Ecommerce', 'SaaS', 'Backend', 'Laravel', 'Payments'],
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
        details: [
          'Product and category management',
          'Product variations and attribute management',
          'Coupon logic',
        ],
      },
      {
        name: 'Cart & Checkout',
        description:
          'Extended and maintained cart management and checkout workflows, including backend logic for cart state, item management, and the checkout flow leading to order creation.',
        details: [
          'Cart state management and item addition/removal/update',
          'Checkout flow validation and order creation',
          'Cart-to-order transition through checkout flow',
        ],
      },
      {
        name: 'Order Management',
        description:
          'Extended and maintained order lifecycle backend: order creation from checkout, order history, order status management, and admin-side order management.',
        details: [
          'Order creation from completed checkout',
          'Order status tracking and history',
          'Admin-side order management and filtering',
        ],
      },
      {
        name: 'Admin Functionality',
        description:
          'Extended and maintained admin-side backend functionality supporting merchant and platform administration.',
      },
      {
        name: 'Payment Gateways',
        description:
          'Implemented and maintained backend integrations for four payment gateways: Paymob, PayPal, Stripe, and Fawry. Covers the full payment lifecycle from initiation through verification.',
        details: [
          'Payment workflow implementation for four gateway providers',
          'Gateway communication and payment status handling',
        ],
      },
      {
        name: 'REST API & Documentation',
        description:
          'Designed and documented RESTful APIs as a core part of the platform. API documentation generated via Scribe.',
        details: [
          'RESTful API design',
          'API documentation generated and maintained with Scribe',
        ],
      },
      {
        name: 'Background Processing',
        description:
          'Implemented Redis caching and Laravel queue/background-job processing for async operations, using Laravel Horizon for queue monitoring.',
        details: [
          'Laravel queue jobs for asynchronous processing',
          'Redis as queue driver and caching layer',
          'Laravel Horizon for queue monitoring and management',
        ],
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
    database:
      'MySQL. Database/query optimization applied across product catalog, orders, and admin queries.',
    caching:
      'Redis caching and queue driver for background job processing.',
    performance:
      'Applied Laravel queue and background-job processing for async operations managed via Laravel Horizon. Optimized backend database queries and overall query performance.',
    testing:
      'Covered core platform functionality with PHPUnit unit and integration tests.',
    contribution:
      'Joined an existing Laravel-based SaaS ecommerce platform at Algoriza and extended/maintained the backend. Responsible for payment gateway integrations (Paymob, PayPal, Stripe, Fawry), REST API development and documentation, Redis caching and queue implementation, database optimization, and PHPUnit testing. Did not build the platform from scratch.',
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
    category: ['Admin Platform', 'SaaS', 'Backend', 'Laravel'],
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
        details: [
          'Resource class definitions for each business entity',
          'Create and edit page form integration',
        ],
      },
      {
        name: 'Forms & Validation',
        description:
          'Built Filament form schemas for business-specific data entry, including field configuration and validation logic.',
        details: [
          'Form schema definitions with field types and layout',
          'Validation rules for data entry',
        ],
      },
      {
        name: 'Tables & Filters',
        description:
          'Implemented Filament table definitions with columns, sorting, search, and filter configurations for business data management.',
        details: [
          'Table column definitions with sorting and search',
          'Filter definitions for data querying',
        ],
      },
      {
        name: 'Relationship Management',
        description:
          'Implemented relationship handling within Filament resources — managing related entity selection and display.',
        details: [
          'Relationship management in forms and tables',
          'Related entity selection and display',
        ],
      },
      {
        name: 'CRUD Workflows',
        description:
          'End-to-end CRUD workflow implementation for business entities through the Filament admin panel.',
        details: [
          'Full create/read/update/delete workflows per business entity',
        ],
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
    category: ['Education', 'Communication', 'Backend', 'Laravel'],
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
        details: [
          'Per-student attendance record creation and management',
          'Attendance history tracking and querying',
        ],
      },
      {
        name: 'Daily Activity Logs',
        description:
          'Backend for creating and managing daily activity log entries per student — recording school-day activities for parent visibility.',
        details: [
          'Daily activity log entry creation per student',
          'Parent-facing visibility of student activities',
        ],
      },
      {
        name: 'Medication Records & Dose Management',
        description:
          'Backend for managing student medication records and tracking dose administration — covering medication data, dosing schedules, and administration records.',
        details: [
          'Medication record management per student',
          'Dose scheduling and tracking',
          'Dose administration record keeping',
        ],
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
    category: ['Education', 'Career Guidance', 'Backend', 'Laravel'],
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
      'MATEN is a Laravel-based platform for education and career guidance. It provides backend functionality for course management, student assessment, and recommendation logic that guides users toward suitable study or career paths based on their assessment results. The core engineering story is: assessment → evaluation/recommendation logic → study/career guidance.',
    modules: [
      {
        name: 'Course Management',
        description:
          'Backend for creating and managing courses available on the platform.',
        details: [
          'Course creation and management',
        ],
      },
      {
        name: 'Assessment Questions',
        description:
          'Backend for managing assessment question sets used to evaluate student knowledge or aptitude.',
        details: [
          'Question set creation and management',
          'Answer recording and management',
        ],
      },
      {
        name: 'Recommendation Logic',
        description:
          'Backend logic for generating study and career path recommendations based on assessment results. This is the core engineering component connecting assessment outcomes to guidance.',
        details: [
          'Assessment result evaluation and processing',
          'Recommendation generation based on assessment results',
          'Path matching logic connecting results to suitable study/career paths',
        ],
      },
      {
        name: 'Study & Career Paths',
        description:
          'Backend for defining and managing study paths and career paths, linked to the recommendation system.',
        details: [
          'Study path definition and management',
          'Career path definition and management',
          'Path-to-recommendation linkage',
        ],
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
    category: ['Mobile Backend', 'EV Technology', 'Backend', 'Java'],
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
    slug: 'vclasses',
    name: 'Vclasses',
    tagline:
      'Freelance-built online learning and classes platform using Laravel, Bootstrap, and JavaScript.',
    category: ['Education', 'Freelance', 'Backend', 'Laravel'],
    industry: ['Education'],
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
      'Vclasses is an online learning/classes platform delivered as a freelance project. Built with Laravel for the backend and Bootstrap/JavaScript for the frontend. The platform provides online learning functionality for students and instructors.',
    contribution:
      'Delivered backend and frontend features for the Vclasses online learning platform as a freelance developer.',
    missingInfo: [
      'Specific features and modules implemented',
      'Database details',
      'Whether payments or subscriptions were involved',
    ],
  },

  {
    slug: 'donor-app',
    name: 'Donor App',
    tagline:
      'Freelance-built donation-related application using Laravel, Bootstrap, and JavaScript.',
    category: ['Social', 'Freelance', 'Backend', 'Laravel'],
    industry: ['Non-profit', 'Social'],
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
      'Donor App is a donation-related application delivered as a freelance project. Built with Laravel for the backend and Bootstrap/JavaScript for the frontend.',
    contribution:
      'Delivered backend and frontend features for the Donor App as a freelance developer.',
    missingInfo: [
      'Specific donation features implemented',
      'Database details',
      'Payment integration details',
    ],
  },

  {
    slug: 'salaty',
    name: 'Salaty',
    tagline:
      'Prayer times, adhkar, and religious content application.',
    category: ['Backend'],
    industry: ['Religious Content', 'Lifestyle'],
    role: 'Backend Developer',
    company: '—',
    period: '—',
    technologies: {
      backend: ['PHP'],
      tools: ['Git'],
    },
    featured: false,
    overview:
      'Salaty is an application providing prayer times, adhkar (daily Islamic remembrances), and religious questions/content.',
    contribution:
      'Contributed backend development for the Salaty application.',
    missingInfo: [
      'Company and period',
      'Technology stack confirmation (Laravel not yet verified)',
      'Specific features and modules implemented',
      'Database details',
    ],
  },

  {
    slug: 'gea',
    name: 'GEA',
    tagline:
      'Saudi entertainment and events application.',
    category: ['Backend'],
    industry: ['Entertainment', 'Events'],
    role: 'Backend Developer',
    company: '—',
    period: '—',
    technologies: {
      backend: [],
      tools: ['Git'],
    },
    featured: false,
    overview:
      'GEA is an application in the Saudi entertainment and events space. Details of the specific features and backend work are limited.',
    contribution:
      'Contributed backend development for the GEA application.',
    missingInfo: [
      'Company and period',
      'Technology stack confirmation',
      'Specific features and modules implemented',
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
