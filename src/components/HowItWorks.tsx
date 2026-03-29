const steps = [
  {
    step: "01",
    title: "Define Your Agent",
    description:
      "Tell the agent what to do using plain language. Set its personality, goals, and constraints. Choose which AI model powers it.",
  },
  {
    step: "02",
    title: "Connect Your Tools",
    description:
      "Point the agent at your APIs, databases, and services. It learns what each tool does and when to use it — automatically.",
  },
  {
    step: "03",
    title: "Run & Monitor",
    description:
      "Execute the agent and watch it work in real-time. See every decision, every action, every result — with full cost tracking.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-28 px-6 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-5">
            Up and Running in Minutes
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto font-light leading-relaxed">
            Three simple steps to your first AI agent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="text-5xl font-bold text-primary-400/30 mb-6">{s.step}</div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{s.title}</h3>
              <p className="text-dark-300 leading-relaxed font-light text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
