import Link from 'next/link'
import { Container } from '@/components/ui/Container'

export default function NotFound() {
  return (
    <div className="py-32">
      <Container>
        <div className="text-center">
          <p className="font-mono text-6xl font-bold text-blue-500">404</p>
          <h1 className="mt-4 text-2xl font-bold text-foreground">Page not found</h1>
          <p className="mt-3 text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
