import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Platform — X.Group International',
  description: 'Deep dive into the X.Group automation platform. Multi-tenant architecture, real-time analytics, and enterprise-grade integrations.',
}

const features = [
  {
    title: 'Workflow Engine',
    description: 'Our visual workflow builder lets you design complex automation chains without writing code. Drag, connect, deploy — it is that simple. Supports conditional logic, loops, error handling, and parallel execution across distributed workers.',
    details: ['Visual drag-and-drop builder', 'Conditional branching and loops', 'Parallel execution across workers', 'Built-in error handling and retries'],
  },
  {
    title: 'Multi-Tenant Architecture',
    description: 'Every client gets a fully isolated environment. Data, compute, and networking are partitioned at the infrastructure level. Zero shared state between tenants means zero risk of data leakage.',
    details: ['Row-level security isolation', 'Dedicated compute per tenant', 'Custom domain mapping', 'Tenant-level audit logging'],
  },
  {
    title: 'Real-Time Analytics',
    description: 'Sub-second latency dashboards that give you a live pulse on every workflow, every tenant, every execution. Spot bottlenecks before they become outages.',
    details: ['Live execution monitoring', 'Custom metric dashboards', 'Anomaly detection alerts', 'Cost attribution by tenant'],
  },
  {
    title: 'API Gateway',
    description: 'A unified gateway for all your integrations. Rate limiting, authentication, and request transformation built in. Connect to any REST, GraphQL, or gRPC service.',
    details: ['Automatic rate limiting', 'OAuth 2.0 and API key auth', 'Request/response transforms', 'Webhook management'],
  },
]

const integrations = [
  'Slack', 'Stripe', 'HubSpot', 'Salesforce', 'Zapier', 'AWS',
  'Google Cloud', 'Azure', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka',
  'Twilio', 'SendGrid', 'Intercom', 'Jira', 'GitHub', 'GitLab',
]

export default function PlatformPage() {
  return (
    <main>
      <Nav />

      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)] mb-4 block">
          Platform
        </span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          The Infrastructure Behind{' '}
          <span className="text-[var(--accent-primary)]">Modern Automation</span>
        </h1>
        <p className="font-body text-lg text-[var(--text-secondary)] max-w-3xl">
          X.Group is not another no-code tool. It is enterprise-grade automation infrastructure designed for teams that need reliability, scale, and control.
        </p>
      </section>

      <div className="glow-line" />

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="space-y-24">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-start`}
            >
              <div className="flex-1">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">{feature.title}</h2>
                <p className="font-body text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <span className="text-[var(--accent-primary)] mt-0.5">✓</span>
                      <span className="font-mono text-sm text-[var(--text-secondary)]">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <div className="glass rounded-lg p-8 gradient-border h-64 flex items-center justify-center">
                  <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest">
                    {feature.title} Diagram
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="glow-line" />

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)] mb-4 block">
            Integrations
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Connect <span className="text-[var(--accent-primary)]">Everything</span>
          </h2>
          <p className="font-body text-lg text-[var(--text-secondary)] mt-6 max-w-2xl mx-auto">
            200+ pre-built connectors. REST, GraphQL, webhooks. Plug in your entire stack in minutes.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {integrations.map((name) => (
            <div key={name} className="glass rounded-lg p-4 text-center hover:border-[var(--border-active)] transition-colors">
              <span className="font-mono text-sm text-[var(--text-secondary)]">{name}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
