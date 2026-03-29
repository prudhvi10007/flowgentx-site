const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
    title: "Your Data, Your Servers",
    description: "Self-hosted deployment means your data never leaves your infrastructure. Full compliance with your security policies.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "No Vendor Lock-In",
    description: "Switch between OpenAI, AWS Bedrock, or any LLM provider at any time. Your agents keep working — only the AI model changes.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Complete Audit Trail",
    description: "Every agent execution is recorded — what it did, what it decided, what it cost. Perfect for regulated industries that need accountability.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Production Ready",
    description: "Not a prototype or framework. FlowgentX is a complete platform with versioning, real-time streaming, webhooks, and enterprise-grade reliability.",
  },
];

export default function WhyFlowgentX() {
  return (
    <section className="py-28 px-6 bg-dark-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-dark-800 tracking-tight mb-5">
            Built for Enterprise
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto font-light leading-relaxed">
            The trust and control your organization needs to adopt AI confidently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-5 rounded-2xl p-7 bg-white hover:shadow-lg transition-all duration-300 group">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-dark-50 text-dark-500 group-hover:text-primary-600 flex items-center justify-center transition-colors duration-300">
                {r.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark-800 mb-2 tracking-tight">{r.title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed font-light">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
