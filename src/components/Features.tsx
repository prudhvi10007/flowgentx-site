const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Visual Agent Builder",
    description:
      "Configure AI agents through an intuitive interface — define prompts, assign tools, set input/output schemas, and manage versions. No custom code required.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: "Universal Tool Integration",
    description:
      "Connect agents to any REST API or internal service. Import endpoints from cURL, add template variables, and let agents call your systems autonomously.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Multi-Provider LLM Support",
    description:
      "OpenAI, AWS Bedrock, Grok, or any OpenAI-compatible API. Switch providers per agent with a click — same agent, different model, zero code changes.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Real-Time Execution Streaming",
    description:
      "Watch agents think and act in real-time via Server-Sent Events. Every tool call, every decision, every iteration — streamed live to your dashboard.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Agent Versioning & Promotion",
    description:
      "Clone versions, test changes safely, activate when ready. Export entire environments and import into production — like Git for your AI agents.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Complete Cost & Usage Tracking",
    description:
      "Per-execution token counts, cost estimates by provider pricing, and full invocation graphs. Know exactly what every agent costs — down to the API call.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Multi-Tenant Workspaces",
    description:
      "Isolated environments (Spaces) for every team, project, or client. Each Space has its own agents, tools, providers, and access controls.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
    title: "Webhook Event System",
    description:
      "Subscribe external systems to agent lifecycle events — execution started, completed, failed, tool invoked. Trigger downstream workflows automatically.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Document & Multimodal Processing",
    description:
      "Agents that read PDFs, process images, and extract data from documents. Upload files directly through the API or UI for multimodal AI workflows.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-primary-600 font-medium text-sm tracking-widest uppercase mb-4">Platform Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-dark-800 tracking-tight mb-5">
            Everything You Need to Run
            <br className="hidden md:block" />
            AI Agents in Production
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto font-light leading-relaxed">
            A complete platform — not a framework. Build, deploy, monitor, and scale AI agents from a single pane of glass.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl p-7 bg-dark-50 hover:bg-dark-100/80 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-full bg-white text-dark-500 group-hover:text-primary-600 flex items-center justify-center mb-5 shadow-sm transition-colors duration-300">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-dark-800 mb-2 tracking-tight">{f.title}</h3>
              <p className="text-dark-400 text-sm leading-relaxed font-light">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
