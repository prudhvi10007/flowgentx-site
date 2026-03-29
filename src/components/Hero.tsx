export default function Hero() {
  return (
    <section className="relative pt-36 pb-32 px-6 bg-dark-900 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary-600/15 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto text-center relative">
        <div className="inline-block text-primary-300 text-sm font-medium mb-8 tracking-wide">
          Enterprise AI Agent Platform
        </div>
        <h1 className="text-5xl md:text-7xl font-semibold text-white leading-[1.05] tracking-tight mb-6">
          Deploy AI Agents{" "}
          <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
            Your Enterprise Can Trust
          </span>
        </h1>
        <p className="text-lg md:text-xl text-dark-300 max-w-2xl mx-auto mb-5 leading-relaxed font-light">
          A self-hosted platform to build, run, and monitor AI agents — with
          complete data control, full audit trails, and zero vendor lock-in.
        </p>
        <p className="text-sm text-dark-400 max-w-xl mx-auto mb-12">
          Trusted by engineering teams automating document processing, customer
          workflows, and cross-system integrations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#demo"
            className="bg-white text-dark-900 px-8 py-3.5 rounded-full text-base font-medium hover:bg-dark-100 transition-all"
          >
            Schedule a Demo
          </a>
          <a
            href="#how"
            className="border border-white/20 text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-white/10 transition-all"
          >
            See How It Works
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-20 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-dark-400">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            Self-Hosted
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
            Provider Agnostic
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            Full Audit Trail
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Production Ready
          </div>
        </div>
      </div>
    </section>
  );
}
