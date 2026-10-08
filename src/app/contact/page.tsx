import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Omar Adel — Senior Backend Engineer based in Cairo, Egypt.',
}

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Contact"
          subtitle="Based in Cairo, Egypt. Open to backend engineering roles, remote or on-site."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact details */}
          <div className="space-y-5">
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold text-foreground mb-5">Omar Adel</h2>
              <p className="text-sm text-muted-foreground mb-5">
                Senior Backend Engineer · PHP / Laravel · Go
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:omar.adel.omar818@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted group-hover:bg-blue-500/10 transition-colors">
                    <Mail className="h-4 w-4 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                  </div>
                  omar.adel.omar818@gmail.com
                </a>

                <a
                  href="tel:+201550781783"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted group-hover:bg-blue-500/10 transition-colors">
                    <Phone className="h-4 w-4 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                  </div>
                  +201550781783
                </a>

                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </div>
                  Cairo, Egypt
                </div>
              </div>
            </div>

            {/* Social + CV */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold text-foreground mb-4">Links</h2>
              <div className="space-y-3">
                <a
                  href="https://github.com/omaradel-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted group-hover:bg-blue-500/10 transition-colors">
                    <Github className="h-4 w-4 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                  </div>
                  github.com/omaradel-tech
                </a>

                <a
                  href="https://linkedin.com/in/omar-adel-605196196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted group-hover:bg-blue-500/10 transition-colors">
                    <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                  </div>
                  linkedin.com/in/omar-adel-605196196
                </a>

                <a
                  href="/Omar-Adel-Senior-Backend-Engineer-CV.pdf"
                  download
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted group-hover:bg-blue-500/10 transition-colors">
                    <Download className="h-4 w-4 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                  </div>
                  Download CV (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* Quick info */}
          <div className="space-y-5">
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold text-foreground mb-4">Quick Facts</h2>
              <div className="space-y-3 text-sm">
                {[
                  ['Primary Stack', 'PHP / Laravel'],
                  ['Secondary Stack', 'Go (ILORA/IVERA)'],
                  ['Databases', 'PostgreSQL, MySQL'],
                  ['Current Role', 'Backend Engineer at IVERA'],
                  ['Location', 'Cairo, Egypt'],
                  ['Availability', 'Open to opportunities'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4">
                    <span className="text-muted-foreground">{label}</span>
                    <span className="text-foreground font-medium text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-6">
              <h2 className="text-sm font-semibold text-foreground mb-2">
                Preferred contact method
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Email is the best way to reach me.
              </p>
              <a
                href="mailto:omar.adel.omar818@gmail.com"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
