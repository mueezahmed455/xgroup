export interface Metric {
  value: number
  suffix: string
  label: string
}

export interface PlatformFeature {
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

export interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular: boolean
  cta: string
}

export interface ContactFormData {
  name: string
  company: string
  email: string
  message: string
  useCase: string
}

export interface MousePosition {
  x: number
  y: number
  normalizedX: number
  normalizedY: number
}
