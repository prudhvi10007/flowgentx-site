export default function Footer() {
  return (
    <footer className="bg-dark-900 text-dark-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-xl font-bold text-white">
              Flowgent<span className="text-primary-400">X</span>
            </span>
            <p className="text-sm text-dark-400 mt-1">AI Agent Orchestration Platform</p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#usecases" className="hover:text-white transition">Use Cases</a>
            <a href="#demo" className="hover:text-white transition">Request Demo</a>
            <a
              href="mailto:contact@flowgentx.com"
              className="hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dark-500">
          <p>&copy; {new Date().getFullYear()} FlowgentX. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-dark-300 transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-dark-300 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
