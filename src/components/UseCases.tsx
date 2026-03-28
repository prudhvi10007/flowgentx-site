const useCases = [
  {
    icon: "📄",
    title: "Document Processing",
    description:
      "Automatically extract data from invoices, contracts, purchase orders, and forms. Agents read, understand, and structure the information — saving hours of manual data entry.",
    examples: ["Invoice data extraction", "Contract clause analysis", "Form digitization"],
  },
  {
    icon: "💬",
    title: "Intelligent Customer Support",
    description:
      "Deploy agents that answer customer questions using your knowledge base, create tickets, and escalate when needed — all while maintaining conversation context.",
    examples: ["Knowledge base Q&A", "Ticket creation", "Smart escalation"],
  },
  {
    icon: "⚙️",
    title: "Workflow Automation",
    description:
      "Chain AI agents with your existing systems to automate multi-step business processes. Approvals, notifications, data validation — agents handle the orchestration.",
    examples: ["Approval workflows", "Cross-system sync", "Data validation pipelines"],
  },
  {
    icon: "📊",
    title: "Data Analysis & Reporting",
    description:
      "Agents that analyze datasets, generate insights, and produce structured reports. Connect them to your databases and get answers in natural language.",
    examples: ["Automated reporting", "Trend analysis", "Data summarization"],
  },
];

export default function UseCases() {
  return (
    <section id="usecases" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">
            Real Problems, Real Solutions
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            See how organizations use FlowgentX to automate the work that matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="rounded-xl p-8 border border-dark-100 hover:border-primary-200 transition"
            >
              <div className="text-3xl mb-4">{uc.icon}</div>
              <h3 className="text-xl font-semibold text-dark-800 mb-3">{uc.title}</h3>
              <p className="text-dark-400 leading-relaxed mb-4">{uc.description}</p>
              <div className="flex flex-wrap gap-2">
                {uc.examples.map((ex) => (
                  <span
                    key={ex}
                    className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full font-medium"
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
