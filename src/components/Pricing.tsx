const plans = [
  {
    name: "Community",
    price: "Free",
    period: "forever",
    description: "Self-hosted, full platform, no limits",
    features: [
      "All platform features",
      "Unlimited agents & executions",
      "Multi-provider LLM support",
      "Full audit trail",
      "Community support",
    ],
    cta: "Get Started",
    ctaHref: "#demo",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "per organization",
    description: "Managed deployment, SLA, and dedicated support",
    features: [
      "Everything in Community",
      "Managed deployment & upgrades",
      "Dedicated support & SLA",
      "Custom integrations",
      "Architecture & onboarding assistance",
      "Priority feature requests",
    ],
    cta: "Contact Sales",
    ctaHref: "#demo",
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-primary-600 font-medium text-sm tracking-widest uppercase mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-dark-800 tracking-tight mb-5">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto font-light leading-relaxed">
            The full platform is free to self-host. Enterprise support available for teams that need it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-dark-900 text-white shadow-2xl shadow-dark-900/20 scale-[1.02]"
                  : "bg-dark-50"
              }`}
            >
              {plan.highlighted && (
                <div className="text-xs font-medium text-primary-400 uppercase tracking-widest mb-4">
                  Recommended
                </div>
              )}
              <h3 className={`text-xl font-semibold tracking-tight ${plan.highlighted ? "text-white" : "text-dark-800"}`}>{plan.name}</h3>
              <div className="mt-4 mb-2">
                <span className={`text-4xl font-semibold tracking-tight ${plan.highlighted ? "text-white" : "text-dark-800"}`}>{plan.price}</span>
                <span className={`text-sm ml-2 ${plan.highlighted ? "text-dark-300" : "text-dark-400"}`}>/ {plan.period}</span>
              </div>
              <p className={`text-sm mb-8 ${plan.highlighted ? "text-dark-300" : "text-dark-400"} font-light`}>{plan.description}</p>

              <ul className="space-y-3.5 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-start gap-3 text-sm ${plan.highlighted ? "text-dark-200" : "text-dark-500"}`}>
                    <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-primary-400" : "text-primary-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-light">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`block text-center py-3 rounded-full font-medium text-sm transition-all ${
                  plan.highlighted
                    ? "bg-white text-dark-900 hover:bg-dark-100"
                    : "bg-dark-900 text-white hover:bg-dark-800"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
