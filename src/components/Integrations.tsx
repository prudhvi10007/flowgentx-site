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
    <section className="py-24 px-6 bg-dark-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary-600 font-medium text-sm tracking-widest uppercase mb-4">Integrations</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-800 tracking-tight">
            Works With Your Stack
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {integrations.map((i) => (
            <div
              key={i.name}
              className="flex items-center gap-3 bg-white rounded-full px-5 py-3 hover:shadow-md transition-all duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-primary-500" />
              <span className="text-sm font-medium text-dark-800">{i.name}</span>
              <span className="text-xs text-dark-400">{i.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
