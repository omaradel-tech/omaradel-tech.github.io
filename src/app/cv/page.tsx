import type { Metadata } from 'next'
import { CVContent } from '@/components/cv/CVContent'

export const metadata: Metadata = {
  title: 'CV',
  description:
    'Omar Adel — Senior Backend Engineer — CV / Resume. PHP, Laravel, Go, REST APIs, payment integrations, ecommerce, logistics, multi-tenant enterprise systems.',
}

export default function CVPage() {
  return <CVContent />
}
