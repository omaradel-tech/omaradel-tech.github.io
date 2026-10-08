export interface TechStack {
  backend: string[]
  frontend?: string[]
  database?: string[]
  infrastructure?: string[]
  integrations?: string[]
  tools?: string[]
}

export interface Module {
  name: string
  description: string
}

export interface ProjectIntegration {
  name: string
  description: string
}

export interface Challenge {
  problem: string
  solution: string
}

export interface Project {
  slug: string
  name: string
  tagline: string
  category: string[]
  industry: string[]
  role: string
  company: string
  period: string
  technologies: TechStack
  featured: boolean
  overview: string
  modules?: Module[]
  integrations?: ProjectIntegration[]
  backend?: string
  database?: string
  performance?: string
  testing?: string
  monitoring?: string
  challenges?: Challenge[]
  contribution: string
  missingInfo?: string[]
}

export interface ExperienceHighlight {
  text: string
}

export interface ExperienceEntry {
  company: string
  role: string
  period: string
  location: string
  type: 'full-time' | 'part-time' | 'freelance'
  summary: string
  highlights: string[]
  technologies: string[]
  current?: boolean
}

export interface Skill {
  name: string
  note?: string
}

export interface SkillCategory {
  name: string
  description: string
  skills: Skill[]
}

export interface EngineeringDomain {
  title: string
  description: string
  items: string[]
  icon: string
}

export interface EngineeringPractice {
  title: string
  description: string
  details: string[]
}
