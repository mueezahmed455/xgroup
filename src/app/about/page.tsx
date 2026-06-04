import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — X.Group International',
  description: 'The story behind X.Group International. Enterprise automation infrastructure built by engineers, for businesses.',
}

const milestones = [
  { year: '2022', title: 'Founded', description: 'X.Group International Ltd incorporated in the UK. First prototype of the automation engine built.' },
  { year: '2023', title: 'First Client', description: 'Deployed our first production workflow for a logistics company. Eliminated 14 hours of manual work per week.' },
  { year: '2023', title: 'Seed Round', description: 'Raised pre-seed funding to expand the engineering team and build out multi-tenant infrastructure.' },
  { year: '2024', title: '10 Clients', description: 'Crossed 10 active clients across 3 countries. Launched real-time analytics dashboard.' },
  { year: '2025', title: 'Enterprise Ready', description: 'Achieved SOC 2 compliance. Launched dedicated enterprise tier with custom SLA and on-premise deployment options.' },
]

export default function AboutPage() {
  return (
    <main>
      <Nav />

      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)] mb-4 block">
          About
        </span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Automation Infrastructure{' '}
          <span className="text-[var(--accent-primary)]">Built Right</span>
        </h1>
        <p className="font-body text-lg text-[var(--text-secondary)] max-w-3xl">
          We built X.Group because we saw businesses drowning in manual processes that should have been automated years ago. The tools on the market were either too simple or too complex. We chose to build the infrastructure layer that sits between your tools and your ambition.
        </p>
      </section>

      <div className="glow-line" />

      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="glass rounded-lg p-8 md:p-12 gradient-border">
          <blockquote className="font-body text-xl md:text-2xl text-[var(--text-primary)] leading-relaxed mb-8">
            &ldquo;We are not building another SaaS tool. We are building the infrastructure layer that enterprise automation runs on. Every workflow we execute, every tenant we isolate, every metric we surface — it all comes back to one question: does this make our client’s business fundamentally more efficient? If the answer is no, we do not ship it.&rdquo;
          </blockquote>
          <div>
            <p className="font-display text-sm font-bold text-[var(--accent-primary)]">Mueez</p>
            <p className="font-mono text-xs text-[var(--text-muted)]">Founder and Lead Engineer, X.Group International</p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass rounded-lg p-8 gradient-border">
            <h2 className="font-display text-2xl font-bold mb-4">Our Mission</h2>
            <p className="font-mono text-sm text-[var(--text-secondary)] leading-relaxed">
              To give every business access to enterprise-grade automation infrastructure — regardless of their size. We believe that manual processes are a tax on human potential, and our job is to eliminate them.
            </p>
          </div>
          <div className="glass rounded-lg p-8 gradient-border">
            <h2 className="font-display text-2xl font-bold mb-4">Our Vision</h2>
            <p className="font-mono text-sm text-[var(--text-secondary)] leading-relaxed">
              A world where every repetitive business process is automated, every client environment is isolated and secure, and every team has real-time visibility into their operations. We are building the infrastructure to make that world real.
            </p>
          </div>
        </div>
      </section>

      <div className="glow-line" />

      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Our <span className="text-[var(--accent-primary)]">Journey</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-[var(--border-subtle)]" />

          <div className="space-y-12">
            {milestones.map((milestone, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start gap-8`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--accent-primary)] border-2 border-[var(--bg-base)] z-10" />

                <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="font-mono text-xs text-[var(--accent-primary)] uppercase tracking-widest">
                    {milestone.year}
                  </span>
                  <h3 className="font-display text-xl font-bold mt-1 mb-2">{milestone.title}</h3>
                  <p className="font-mono text-sm text-[var(--text-secondary)]">{milestone.description}</p>
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
