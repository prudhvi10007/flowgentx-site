const problems = [
  {
    icon: "🕐",
    title: "Hours Lost to Repetitive Work",
    description:
      "Your team spends valuable time on tasks that AI could handle — data extraction, document processing, report generation, and more.",
  },
  {
    icon: "🔧",
    title: "Every AI Project Starts from Zero",
    description:
      "Each new AI use case requires months of custom development. There's no shared foundation, no reusable components, no standard approach.",
  },
  {
    icon: "🔒",
    title: "Locked into One AI Vendor",
    description:
      "Your solutions are tied to a single AI provider. Switching means rewriting everything. Costs change, you can't adapt.",
  },
  {
    icon: "🙈",
    title: "No Visibility into AI Decisions",
    description:
      "When an AI agent processes a request, you have no idea what it did, why it did it, or how much it cost. It's a black box.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">
            Sound Familiar?
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Most organizations struggle with the same challenges when adopting AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-dark-50 rounded-xl p-8 border border-dark-100"
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-semibold text-dark-800 mb-2">{p.title}</h3>
              <p className="text-dark-400 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
