export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
          AI Agent Orchestration Platform
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-dark-800 leading-tight mb-6">
          Build AI Agents That{" "}
          <span className="text-primary-600">Actually Get Work Done</span>
        </h1>
        <p className="text-lg md:text-xl text-dark-400 max-w-2xl mx-auto mb-10">
          Stop building custom AI solutions from scratch. FlowgentX lets your team create,
          deploy, and manage intelligent agents that automate real business workflows —
          with full visibility and control.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#demo"
            className="bg-primary-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-primary-700 transition shadow-lg shadow-primary-600/20"
          >
            Request a Demo
          </a>
          <a
            href="#features"
            className="border border-dark-200 text-dark-600 px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-dark-50 transition"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
