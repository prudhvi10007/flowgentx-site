const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Months to Deploy Each AI Use Case",
    description:
      "Every new AI initiative requires custom development — new codebase, new infrastructure, new integrations. Your team is rebuilding the same foundation every time.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Data Leaving Your Control",
    description:
      "SaaS AI platforms process your sensitive data on their servers. For regulated industries — healthcare, finance, government — that's a non-starter.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: "Locked into One AI Vendor",
    description:
      "Your entire AI stack depends on a single provider. When pricing changes, models deprecate, or performance degrades — you're stuck rewriting everything.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "No Visibility into AI Decisions",
    description:
      "When your AI processes a customer request, what did it do? What data did it access? What did it cost? Without answers, compliance and optimization are impossible.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-primary-600 font-medium text-sm tracking-widest uppercase mb-4">The Challenge</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-dark-800 tracking-tight mb-5">
            Enterprise AI Adoption Is Harder
            <br className="hidden md:block" />
            Than It Should Be
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto font-light leading-relaxed">
            Most organizations face the same barriers when trying to move AI from proof-of-concept to production.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-8 bg-dark-50 hover:bg-dark-100/80 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-white text-dark-500 flex items-center justify-center mb-5 shadow-sm">
                {p.icon}
              </div>
              <h3 className="text-lg font-semibold text-dark-800 mb-2 tracking-tight">{p.title}</h3>
              <p className="text-dark-400 text-sm leading-relaxed font-light">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
