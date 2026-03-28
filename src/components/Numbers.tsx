const stats = [
  { value: "10 min", label: "To deploy your first agent" },
  { value: "80%", label: "Reduction in manual processing time" },
  { value: "Zero", label: "Lines of code to build an agent" },
  { value: "100%", label: "Data stays in your infrastructure" },
];

export default function Numbers() {
  return (
    <section className="py-16 px-6 bg-white border-b border-dark-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {s.value}
              </div>
              <div className="text-sm text-dark-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
