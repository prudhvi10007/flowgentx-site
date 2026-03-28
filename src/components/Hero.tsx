export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-primary-600/10 border border-primary-500/20 text-primary-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide uppercase">
          Enterprise AI Agent Platform
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Deploy AI Agents Your{" "}
          <span className="text-primary-400">Enterprise Can Trust</span>
        </h1>
        <p className="text-lg md:text-xl text-dark-300 max-w-2xl mx-auto mb-6">
          FlowgentX gives your organization a self-hosted platform to build, run, and
          monitor AI agents — with complete data control, full audit trails, and zero vendor lock-in.
        </p>
        <p className="text-sm text-dark-400 max-w-xl mx-auto mb-10">
          Trusted by engineering teams automating document processing, customer workflows,
          and cross-system integrations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#demo"
            className="bg-primary-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-primary-500 transition shadow-lg shadow-primary-600/25"
          >
            Schedule a Demo
          </a>
          <a
            href="#how"
            className="border border-dark-600 text-dark-200 px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-dark-700 transition"
          >
            See How It Works
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-dark-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            Self-Hosted &amp; Secure
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
            Provider Agnostic
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            Full Audit Trail
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Production Ready
          </div>
        </div>
      </div>
    </section>
  );
}
