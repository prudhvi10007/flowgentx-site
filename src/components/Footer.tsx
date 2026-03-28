export default function Footer() {
  return (
    <footer className="bg-dark-900 text-dark-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
          <div>
            <span className="text-xl font-bold text-white">
              Flowgent<span className="text-primary-400">X</span>
            </span>
            <p className="text-sm text-dark-400 mt-2 max-w-xs">
              Enterprise AI agent orchestration platform. Self-hosted, provider-agnostic, production-ready.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold text-dark-200 mb-3">Platform</h4>
              <div className="space-y-2">
                <a href="#features" className="block hover:text-white transition">Features</a>
                <a href="#usecases" className="block hover:text-white transition">Use Cases</a>
                <a href="#pricing" className="block hover:text-white transition">Pricing</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-dark-200 mb-3">Company</h4>
              <div className="space-y-2">
                <a href="#about" className="block hover:text-white transition">About</a>
                <a href="mailto:contact@flowgentx.com" className="block hover:text-white transition">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-dark-200 mb-3">Legal</h4>
              <div className="space-y-2">
                <a href="/privacy" className="block hover:text-white transition">Privacy Policy</a>
                <a href="/terms" className="block hover:text-white transition">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dark-500">
          <p>&copy; {new Date().getFullYear()} FlowgentX. All rights reserved.</p>
          <a
            href="mailto:contact@flowgentx.com"
            className="hover:text-dark-300 transition"
          >
            contact@flowgentx.com
          </a>
        </div>
      </div>
    </footer>
  );
}
