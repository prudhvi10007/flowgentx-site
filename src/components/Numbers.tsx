const stats = [
  { value: "10 min", label: "To deploy your first agent" },
  { value: "80%", label: "Reduction in manual processing time" },
  { value: "Zero", label: "Lines of code to build an agent" },
  { value: "100%", label: "Data stays in your infrastructure" },
];

export default function Numbers() {
  return (
    <section className="py-20 px-6 bg-dark-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight text-dark-800 mb-3">
                {s.value}
              </div>
              <div className="text-sm text-dark-400 font-light">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
