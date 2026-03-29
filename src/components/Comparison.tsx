const rows = [
  { feature: "Self-Hosted / On-Premise", flowgentx: true, langflow: true, dify: false, custom: true },
  { feature: "No-Code Agent Builder", flowgentx: true, langflow: true, dify: true, custom: false },
  { feature: "Multi-Provider LLM Support", flowgentx: true, langflow: true, dify: true, custom: false },
  { feature: "Real-Time Execution Streaming", flowgentx: true, langflow: false, dify: false, custom: false },
  { feature: "Agent Versioning & Promotion", flowgentx: true, langflow: false, dify: false, custom: false },
  { feature: "Full Invocation Audit Trail", flowgentx: true, langflow: false, dify: false, custom: false },
  { feature: "Per-Execution Cost Tracking", flowgentx: true, langflow: false, dify: true, custom: false },
  { feature: "Webhook Event System", flowgentx: true, langflow: false, dify: true, custom: false },
  { feature: "Multi-Tenant Workspaces", flowgentx: true, langflow: false, dify: false, custom: false },
  { feature: "Space Export / Import", flowgentx: true, langflow: false, dify: false, custom: false },
  { feature: "REST API for Everything", flowgentx: true, langflow: true, dify: true, custom: true },
  { feature: "Production Ready Out of Box", flowgentx: true, langflow: false, dify: true, custom: false },
];

function Check() {
  return (
    <svg className="w-4 h-4 text-primary-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Cross() {
  return (
    <svg className="w-4 h-4 text-dark-200 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Comparison() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-primary-600 font-medium text-sm tracking-widest uppercase mb-4">Comparison</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-dark-800 tracking-tight mb-5">
            How FlowgentX Compares
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto font-light leading-relaxed">
            A complete platform — not just a framework or a hosted service.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl bg-dark-50 p-1">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left py-4 px-5 font-medium text-dark-500 text-xs tracking-wide uppercase">Feature</th>
                <th className="py-4 px-4 font-medium text-primary-600 text-xs tracking-wide uppercase bg-white rounded-t-xl">FlowgentX</th>
                <th className="py-4 px-4 font-medium text-dark-400 text-xs tracking-wide uppercase">LangFlow</th>
                <th className="py-4 px-4 font-medium text-dark-400 text-xs tracking-wide uppercase">Dify.ai</th>
                <th className="py-4 px-4 font-medium text-dark-400 text-xs tracking-wide uppercase">Custom Build</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={i < rows.length - 1 ? "border-b border-dark-100/50" : ""}>
                  <td className="py-3.5 px-5 text-dark-600 font-light">{row.feature}</td>
                  <td className="py-3.5 px-4 bg-white">{row.flowgentx ? <Check /> : <Cross />}</td>
                  <td className="py-3.5 px-4">{row.langflow ? <Check /> : <Cross />}</td>
                  <td className="py-3.5 px-4">{row.dify ? <Check /> : <Cross />}</td>
                  <td className="py-3.5 px-4">{row.custom ? <Check /> : <Cross />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
