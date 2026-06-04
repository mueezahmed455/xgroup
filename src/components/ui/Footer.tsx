import Link from 'next/link'

const footerLinks = {
  Product: [
    { label: 'Platform', href: '/platform' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Integrations', href: '/platform' },
    { label: 'API Docs', href: '#' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Security', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border-subtle)] grid-texture">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <span className="font-display text-xl font-bold text-[var(--accent-primary)]">X.Group</span>
            </Link>
            <p className="mt-4 font-mono text-xs text-[var(--text-muted)] leading-relaxed max-w-xs">
              Enterprise automation infrastructure for businesses that refuse to stand still.
            </p>
            <div className="mt-6 flex gap-4">
              {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                <a key={social} href="#" className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors" aria-label={social}>{social}</a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)] mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="glow-line" />
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[var(--text-muted)]">&copy; 2025 X.Group International Ltd. All rights reserved.</p>
          <p className="font-mono text-xs text-[var(--text-muted)]">Registered in England &amp; Wales</p>
        </div>
      </div>
    </footer>
  )
}
