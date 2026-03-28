"use client";
import { useState, FormEvent } from "react";

// Replace with your Google Apps Script Web App URL after deploying the script
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

export default function DemoForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="demo" className="py-20 px-6 bg-dark-800">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See FlowgentX in Action
          </h2>
          <p className="text-dark-300 text-lg">
            Tell us about your use case and we&apos;ll show you how FlowgentX can help.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-primary-600/10 border border-primary-500/30 rounded-xl p-8 text-center">
            <div className="text-4xl mb-3">✓</div>
            <h3 className="text-xl font-semibold text-white mb-2">Thank you!</h3>
            <p className="text-dark-300">
              We&apos;ve received your request and will get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-200 mb-1.5">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-200 mb-1.5">
                  Work Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-dark-200 mb-1.5">
                  Company *
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-dark-200 mb-1.5">
                  Role / Title
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Engineering Manager"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-dark-200 mb-1.5">
                Tell us about your use case
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                placeholder="We're looking to automate..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-primary-600 text-white py-3.5 rounded-lg text-base font-semibold hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Request Demo"}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
