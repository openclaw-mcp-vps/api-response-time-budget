export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Set Performance Budgets<br />
          <span className="text-[#58a6ff]">for Your API Endpoints</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Monitor API response times, define per-endpoint budgets, and get instant alerts when latency exceeds your thresholds — with trend analysis built in.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $16/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to explore. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">⚡</div>
            <h3 className="font-semibold text-white mb-1">Budget Alerts</h3>
            <p className="text-sm text-[#8b949e]">Define response time budgets per endpoint and get notified the moment they're breached.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">📈</div>
            <h3 className="font-semibold text-white mb-1">Trend Analysis</h3>
            <p className="text-sm text-[#8b949e]">Visualize latency trends over time to catch degradation before it impacts users.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">🔗</div>
            <h3 className="font-semibold text-white mb-1">Easy Integration</h3>
            <p className="text-sm text-[#8b949e]">Send data via webhook or lightweight SDK — works with any stack in minutes.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$16<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to keep APIs fast</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited API endpoints monitored',
              'Custom response time budgets',
              'Instant breach alerts (email + webhook)',
              'Trend charts & p95/p99 percentiles',
              'Webhook & SDK integration',
              'Data retained for 90 days',
              'Priority support'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How do I send response time data?</h3>
            <p className="text-sm text-[#8b949e]">Use our webhook endpoint or drop in the lightweight SDK (Node, Python, Go). Each request is tagged with your endpoint name and response time in milliseconds.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What happens when a budget is exceeded?</h3>
            <p className="text-sm text-[#8b949e]">You receive an immediate alert via email and/or webhook. The dashboard flags the breach and shows the surrounding trend so you can diagnose the cause quickly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} API Response Time Budget. All rights reserved.
      </footer>
    </main>
  )
}
