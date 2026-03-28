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
    <section className="py-20 px-6 bg-dark-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            The full platform is free to self-host. Enterprise support available for teams that need it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 border-2 ${
                plan.highlighted
                  ? "border-primary-500 bg-white shadow-lg shadow-primary-600/10"
                  : "border-dark-100 bg-white"
              }`}
            >
              {plan.highlighted && (
                <div className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-4">
                  Recommended
                </div>
              )}
              <h3 className="text-xl font-bold text-dark-800">{plan.name}</h3>
              <div className="mt-3 mb-1">
                <span className="text-4xl font-bold text-dark-800">{plan.price}</span>
                <span className="text-sm text-dark-400 ml-1">/ {plan.period}</span>
              </div>
              <p className="text-sm text-dark-400 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-dark-600">
                    <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`block text-center py-3 rounded-lg font-semibold text-sm transition ${
                  plan.highlighted
                    ? "bg-primary-600 text-white hover:bg-primary-700"
                    : "border border-dark-200 text-dark-600 hover:bg-dark-50"
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
