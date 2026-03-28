const options = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: "Single Container",
    description: "Frontend + Backend + API in one Docker container. Deploy with a single command.",
    detail: "docker-compose up",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Any Cloud",
    description: "AWS, Azure, GCP, or any platform that runs Docker. No proprietary cloud dependencies.",
    detail: "Cloud agnostic",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "On-Premise",
    description: "Air-gapped environments welcome. Runs entirely within your firewall with zero external calls.",
    detail: "Full data sovereignty",
  },
];

export default function Deployment() {
  return (
    <section className="py-20 px-6 bg-dark-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-3">Deployment</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">
            Deploy Anywhere, Your Way
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Single-container architecture means FlowgentX runs wherever Docker runs.
            No complex microservices, no vendor-specific infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {options.map((opt) => (
            <div
              key={opt.title}
              className="bg-white rounded-xl p-8 border border-dark-100 text-center hover:shadow-lg transition"
            >
              <div className="w-16 h-16 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-5">
                {opt.icon}
              </div>
              <h3 className="text-lg font-semibold text-dark-800 mb-2">{opt.title}</h3>
              <p className="text-dark-400 text-sm leading-relaxed mb-4">{opt.description}</p>
              <span className="inline-block text-xs font-mono bg-dark-50 text-dark-500 px-3 py-1 rounded">
                {opt.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
