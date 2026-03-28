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
    <section id="how" className="py-20 px-6 bg-dark-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">
            Up and Running in Minutes
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Three simple steps to your first AI agent.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((s, i) => (
            <div key={s.step} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary-600 text-white flex items-center justify-center text-lg font-bold">
                {s.step}
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-semibold text-dark-800 mb-2">{s.title}</h3>
                <p className="text-dark-400 leading-relaxed">{s.description}</p>
                {i < steps.length - 1 && (
                  <div className="w-px h-8 bg-primary-200 ml-7 mt-4 hidden md:block" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
