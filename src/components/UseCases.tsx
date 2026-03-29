const useCases = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Document Processing",
    description:
      "Automatically extract data from invoices, contracts, purchase orders, and forms. Agents read, understand, and structure the information — saving hours of manual data entry.",
    examples: ["Invoice data extraction", "Contract clause analysis", "Form digitization"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Intelligent Customer Support",
    description:
      "Deploy agents that answer customer questions using your knowledge base, create tickets, and escalate when needed — all while maintaining conversation context.",
    examples: ["Knowledge base Q&A", "Ticket creation", "Smart escalation"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Workflow Automation",
    description:
      "Chain AI agents with your existing systems to automate multi-step business processes. Approvals, notifications, data validation — agents handle the orchestration.",
    examples: ["Approval workflows", "Cross-system sync", "Data validation pipelines"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Data Analysis & Reporting",
    description:
      "Agents that analyze datasets, generate insights, and produce structured reports. Connect them to your databases and get answers in natural language.",
    examples: ["Automated reporting", "Trend analysis", "Data summarization"],
  },
];

export default function UseCases() {
  return (
    <section id="usecases" className="py-28 px-6 bg-dark-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-dark-800 tracking-tight mb-5">
            Real Problems, Real Solutions
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto font-light leading-relaxed">
            See how organizations use FlowgentX to automate the work that matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="rounded-2xl p-8 bg-white transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-12 h-12 rounded-full bg-dark-50 text-dark-500 group-hover:text-primary-600 flex items-center justify-center mb-6 transition-colors duration-300">
                {uc.icon}
              </div>
              <h3 className="text-xl font-semibold text-dark-800 mb-3 tracking-tight">{uc.title}</h3>
              <p className="text-dark-400 leading-relaxed mb-5 font-light">{uc.description}</p>
              <div className="flex flex-wrap gap-2">
                {uc.examples.map((ex) => (
                  <span
                    key={ex}
                    className="text-xs bg-dark-50 text-dark-500 px-3 py-1.5 rounded-full font-medium"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
