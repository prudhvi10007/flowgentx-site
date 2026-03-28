const integrations = [
  { name: "OpenAI", category: "LLM Provider" },
  { name: "AWS Bedrock", category: "LLM Provider" },
  { name: "Anthropic Claude", category: "LLM Provider" },
  { name: "Grok", category: "LLM Provider" },
  { name: "MongoDB", category: "Database" },
  { name: "Keycloak", category: "Identity" },
  { name: "REST APIs", category: "Integration" },
  { name: "Webhooks", category: "Integration" },
];

export default function Integrations() {
  return (
    <section className="py-16 px-6 bg-white border-t border-dark-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-3">Integrations</p>
          <h2 className="text-2xl md:text-3xl font-bold text-dark-800">
            Works With Your Stack
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {integrations.map((i) => (
            <div
              key={i.name}
              className="flex items-center gap-3 bg-dark-50 border border-dark-100 rounded-lg px-5 py-3 hover:border-primary-200 transition"
            >
              <div className="w-2 h-2 rounded-full bg-primary-500" />
              <div>
                <span className="text-sm font-medium text-dark-800">{i.name}</span>
                <span className="text-xs text-dark-400 ml-2">{i.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
