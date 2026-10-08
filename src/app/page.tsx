import type { Metadata } from 'next'
import { HeroSection } from '@/components/home/HeroSection'
import { EngineeringSnapshot } from '@/components/home/EngineeringSnapshot'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'

export const metadata: Metadata = {
  title: 'Omar Adel | Senior Backend Engineer | PHP / Laravel',
  description:
    'Senior software engineer specializing in backend development with production experience in Laravel/PHP, Go, REST APIs, ecommerce, payment integrations, and multi-tenant SaaS platforms.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EngineeringSnapshot />
      <FeaturedProjects />
    </>
  )
}
