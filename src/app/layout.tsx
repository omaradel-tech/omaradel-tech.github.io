import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://omaradel-tech.github.io'),
  title: {
    default: 'Omar Adel | Senior Backend Engineer | PHP / Laravel',
    template: '%s | Omar Adel',
  },
  description:
    'Senior software engineer specializing in backend development with production experience in Laravel/PHP, Go, REST APIs, ecommerce, payment integrations, logistics workflows, and multi-tenant SaaS platforms.',
  keywords: [
    'Omar Adel',
    'Backend Engineer',
    'PHP',
    'Laravel',
    'Go',
    'REST API',
    'Ecommerce',
    'PostgreSQL',
    'MySQL',
    'Software Engineer',
    'Cairo',
    'Egypt',
  ],
  authors: [{ name: 'Omar Adel' }],
  creator: 'Omar Adel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://omaradel-tech.github.io',
    siteName: 'Omar Adel — Engineering Portfolio',
    title: 'Omar Adel | Senior Backend Engineer | PHP / Laravel',
    description:
      'Senior software engineer specializing in backend development with production experience in Laravel/PHP, Go, REST APIs, ecommerce, payment integrations, logistics workflows, and multi-tenant SaaS platforms.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Omar Adel — Senior Backend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar Adel | Senior Backend Engineer | PHP / Laravel',
    description:
      'Senior software engineer specializing in backend development with production experience in Laravel/PHP, Go, REST APIs, ecommerce, and multi-tenant SaaS.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
