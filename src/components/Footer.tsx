export default function Footer() {
  return (
    <footer className="bg-dark-900 text-dark-400 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div>
            <span className="text-xl font-semibold text-white tracking-tight">
              Flowgent<span className="text-primary-400">X</span>
            </span>
            <p className="text-sm text-dark-400 mt-3 max-w-xs font-light leading-relaxed">
              Enterprise AI agent orchestration platform. Self-hosted, provider-agnostic, production-ready.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
            <div>
              <h4 className="font-medium text-dark-200 mb-4 text-xs tracking-widest uppercase">Platform</h4>
              <div className="space-y-3">
                <a href="#features" className="block hover:text-white transition-colors font-light">Features</a>
                <a href="#usecases" className="block hover:text-white transition-colors font-light">Use Cases</a>
                <a href="#pricing" className="block hover:text-white transition-colors font-light">Pricing</a>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-dark-200 mb-4 text-xs tracking-widest uppercase">Company</h4>
              <div className="space-y-3">
                <a href="#about" className="block hover:text-white transition-colors font-light">About</a>
                <a href="mailto:contact@flowgentx.com" className="block hover:text-white transition-colors font-light">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-dark-200 mb-4 text-xs tracking-widest uppercase">Legal</h4>
              <div className="space-y-3">
                <a href="/privacy" className="block hover:text-white transition-colors font-light">Privacy Policy</a>
                <a href="/terms" className="block hover:text-white transition-colors font-light">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-dark-500">
          <p className="font-light">&copy; {new Date().getFullYear()} FlowgentX. All rights reserved.</p>
          <a
            href="mailto:contact@flowgentx.com"
            className="hover:text-dark-300 transition-colors font-light"
          >
            contact@flowgentx.com
          </a>
        </div>
      </div>
    </footer>
  );
}
