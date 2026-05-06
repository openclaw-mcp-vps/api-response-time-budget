import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Response Time Budget — Set Performance Budgets for API Endpoints',
  description: 'Monitor API response times and get alerted when endpoints exceed your performance budgets. Trend analysis, dashboards, and smart alerting for API developers and DevOps teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5810b06e-37eb-42d0-b563-0b80774af532"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
