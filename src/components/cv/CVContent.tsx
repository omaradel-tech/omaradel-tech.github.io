'use client'

import { Printer, Download, MapPin, Mail, Phone, Globe, ExternalLink } from 'lucide-react'
import { cvData } from '@/data/cv'

export function CVContent() {
  const { contact, summary, skills, experience, education, projects, languages, aiWorkflow } = cvData

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="py-8 sm:py-12">
      {/* Action bar — hidden in print */}
      <div className="cv-action-bar mx-auto max-w-4xl px-4 sm:px-6 mb-8 flex flex-wrap items-center gap-3">
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
        >
          <Printer className="h-4 w-4" />
          Print / Save as PDF
        </button>
        <a
          href="/Omar-Adel-Senior-Backend-Engineer-CV.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
        >
          <Download className="h-4 w-4" />
          Download CV
        </a>
      </div>

      {/* CV Document */}
      <div className="cv-document mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-6 sm:p-10 space-y-6">

          {/* Header */}
          <header className="text-center border-b border-border pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              {contact.name}
            </h1>
            <p className="mt-1 text-base sm:text-lg font-semibold text-blue-500">
              {contact.title}
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3 shrink-0" />
                {contact.location}
              </span>
              <span className="hidden sm:inline text-border">|</span>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-1 hover:text-blue-500 transition-colors">
                <Mail className="h-3 w-3 shrink-0" />
                {contact.email}
              </a>
              <span className="hidden sm:inline text-border">|</span>
              <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-1 hover:text-blue-500 transition-colors">
                <Phone className="h-3 w-3 shrink-0" />
                {contact.phone}
              </a>
            </div>
            <div className="mt-1.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-muted-foreground">
              <a
                href={`https://${contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-blue-500 transition-colors"
              >
                <ExternalLink className="h-3 w-3 shrink-0" />
                LinkedIn
              </a>
              <span className="text-border">|</span>
              <a
                href={`https://${contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-blue-500 transition-colors"
              >
                <ExternalLink className="h-3 w-3 shrink-0" />
                GitHub
              </a>
              <span className="text-border">|</span>
              <a
                href={`https://${contact.portfolio}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-blue-500 transition-colors"
              >
                <Globe className="h-3 w-3 shrink-0" />
                Portfolio
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="cv-section">
            <h2 className="cv-heading text-xs font-bold uppercase tracking-wider text-foreground border-b border-border pb-1 mb-3">
              Professional Summary
            </h2>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {summary}
            </p>
          </section>

          {/* Core Technical Skills */}
          <section className="cv-section">
            <h2 className="cv-heading text-xs font-bold uppercase tracking-wider text-foreground border-b border-border pb-1 mb-3">
              Core Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {skills.map((group) => (
                <div key={group.category} className="text-sm">
                  <span className="font-semibold text-foreground">{group.category}:</span>{' '}
                  <span className="text-foreground/80">{group.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section className="cv-section">
            <h2 className="cv-heading text-xs font-bold uppercase tracking-wider text-foreground border-b border-border pb-1 mb-3">
              Professional Experience
            </h2>
            <div className="space-y-5">
              {experience.map((entry) => (
                <div key={`${entry.company}-${entry.period}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-sm font-bold text-foreground">
                      {entry.company} — <span className="font-semibold">{entry.role}</span>
                    </h3>
                    <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">
                      {entry.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{entry.location}</p>
                  {entry.intro && (
                    <p className="mt-1.5 text-sm text-foreground/85 italic">
                      {entry.intro}
                    </p>
                  )}
                  <ul className="mt-1.5 space-y-1 list-disc list-outside pl-4">
                    {entry.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm text-foreground/85 leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Selected Projects */}
          <section className="cv-section">
            <h2 className="cv-heading text-xs font-bold uppercase tracking-wider text-foreground border-b border-border pb-1 mb-3">
              Selected Projects
            </h2>
            <div className="space-y-3">
              {projects.map((project) => (
                <div key={project.name}>
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <h3 className="text-sm font-semibold text-foreground">{project.name}</h3>
                    <span className="text-xs text-muted-foreground font-mono">({project.tech})</span>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="cv-section">
            <h2 className="cv-heading text-xs font-bold uppercase tracking-wider text-foreground border-b border-border pb-1 mb-3">
              Education
            </h2>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <div>
                <p className="text-sm font-semibold text-foreground">{education.degree}</p>
                <p className="text-sm text-foreground/80">{education.institution} — {education.location}</p>
              </div>
              <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">
                {education.period}
              </span>
            </div>
          </section>

          {/* Languages */}
          <section className="cv-section">
            <h2 className="cv-heading text-xs font-bold uppercase tracking-wider text-foreground border-b border-border pb-1 mb-3">
              Languages
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
              {languages.map((lang) => (
                <span key={lang.language} className="text-foreground/85">
                  <span className="font-semibold text-foreground">{lang.language}</span> — {lang.proficiency}
                </span>
              ))}
            </div>
          </section>

          {/* AI-Assisted Development Workflow */}
          {aiWorkflow && (
            <section className="cv-section">
              <h2 className="cv-heading text-xs font-bold uppercase tracking-wider text-foreground border-b border-border pb-1 mb-3">
                AI-Assisted Development Workflow
              </h2>
              <p className="text-sm text-foreground/85 leading-relaxed">
                <span className="font-semibold text-foreground">Tools:</span>{' '}
                {aiWorkflow.tools.join(', ')}
              </p>
              <p className="mt-1 text-sm text-foreground/80 leading-relaxed">
                {aiWorkflow.description}
              </p>
            </section>
          )}

        </div>
      </div>
    </div>
  )
}
