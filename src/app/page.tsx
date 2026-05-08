import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-lg flex items-center justify-center text-sm">⚖️</div>
            <span className="text-xl font-bold tracking-tight">CompliAI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <Link href="#features" className="hover:text-white transition">Features</Link>
            <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
            <Link href="#regulations" className="hover:text-white transition">Regulations</Link>
          </div>
          <Link href="#waitlist" className="text-sm bg-gradient-to-r from-emerald-500 to-blue-500 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition">
            Join Waitlist
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 text-sm text-red-400 mb-8">
            ⚠️ EU AI Act enforcement is LIVE — Are you compliant?
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            AI Compliance
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Automated
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Monitor your AI systems for EU AI Act, GDPR, and emerging regulations. Get real-time risk scores, auto-generated documentation, and audit-ready reports.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#waitlist" className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-blue-500 px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition text-center">
              Start Free Assessment →
            </Link>
            <Link href="#features" className="w-full sm:w-auto border border-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-800 transition text-center">
              See How It Works
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <div className="text-3xl font-bold text-emerald-400">€35M</div>
              <div className="text-sm text-slate-500">Max fine avoided</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">7%</div>
              <div className="text-sm text-slate-500">Global revenue at risk</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">2026</div>
              <div className="text-sm text-slate-500">High-risk deadline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Everything you need for AI compliance</h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            From automated risk classification to audit-ready documentation — CompliAI covers the full compliance lifecycle.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Auto Risk Classification", desc: "Classify AI systems under EU AI Act categories: minimal, limited, high, or unacceptable risk.", icon: "🎯" },
              { title: "Compliance Monitoring", desc: "Continuous scanning of AI pipelines for compliance gaps with real-time alerts.", icon: "📡" },
              { title: "Auto Documentation", desc: "Generate technical documentation, conformity assessments, and risk management reports.", icon: "📄" },
              { title: "GDPR Data Mapping", desc: "Track personal data flows through your AI systems with automated data lineage.", icon: "🗺️" },
              { title: "Regulation Tracking", desc: "Stay updated on new AI regulations across EU, US, UK, Canada, and more.", icon: "🌍" },
              { title: "Audit-Ready Reports", desc: "One-click audit reports that satisfy regulatory requirements across jurisdictions.", icon: "✅" },
            ].map((f, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Simple, transparent pricing</h2>
          <p className="text-slate-400 text-center mb-16">Start free, scale as your compliance needs grow.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Starter", price: "$0", period: "/mo", features: ["1 AI system", "Basic risk assessment", "Community support"], cta: "Get Started", highlight: false },
              { name: "Growth", price: "$49", period: "/mo", features: ["5 AI systems", "Full monitoring", "Auto-documentation", "Email alerts", "API access"], cta: "Start Free Trial", highlight: true },
              { name: "Business", price: "$149", period: "/mo", features: ["25 AI systems", "Multi-team", "Slack integration", "Priority support", "Custom frameworks"], cta: "Start Free Trial", highlight: false },
              { name: "Enterprise", price: "Custom", period: "", features: ["Unlimited systems", "Dedicated CISO advisor", "On-prem deployment", "Custom integrations", "SLA"], cta: "Contact Sales", highlight: false },
            ].map((p, i) => (
              <div key={i} className={`rounded-xl p-6 ${p.highlight ? "bg-gradient-to-b from-emerald-500/20 to-blue-500/10 border-2 border-emerald-500/50" : "bg-slate-900 border border-slate-800"}`}>
                {p.highlight && <div className="text-xs font-semibold text-emerald-400 mb-2">MOST POPULAR</div>}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-2 mb-4">
                  <span className="text-3xl font-bold">{p.price}</span>
                  <span className="text-slate-400">{p.period}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f, j) => (
                    <li key={j} className="text-sm text-slate-400 flex items-center gap-2">
                      <span className="text-emerald-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="#waitlist" className={`block text-center py-2.5 rounded-lg font-medium text-sm ${p.highlight ? "bg-gradient-to-r from-emerald-500 to-blue-500 hover:opacity-90" : "bg-slate-800 hover:bg-slate-700"} transition`}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to automate your AI compliance?</h2>
          <p className="text-slate-400 mb-8">Join 150+ AI teams on the waitlist. Get early access + 50% lifetime discount.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="you@company.com" className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500" />
            <button type="submit" className="bg-gradient-to-r from-emerald-500 to-blue-500 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition whitespace-nowrap">
              Join Waitlist
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold">CompliAI</span>
            <span className="text-slate-500 text-sm">by ZOO Technologies</span>
          </div>
          <div className="text-sm text-slate-500">© 2026 ZOO Technologies. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
