"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // TODO: wire up form submission (email service / API route)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 p-12 text-center">
        <CheckCircle className="mb-4 h-12 w-12 text-emerald-500" />
        <h3 className="text-xl font-bold text-emerald-900">Message Sent!</h3>
        <p className="mt-2 text-emerald-700">We'll get back to you within 24 hours.</p>
        <button
          onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
          className="mt-6 text-sm font-semibold text-emerald-700 underline hover:text-emerald-900"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm placeholder-neutral-400 focus:border-primary-900 focus:ring-2 focus:ring-primary-900/20 focus:outline-none transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-neutral-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name" name="name" type="text" required
            value={form.name} onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-neutral-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email" name="email" type="email" required
            value={form.email} onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-neutral-700">
            Phone Number
          </label>
          <input
            id="phone" name="phone" type="tel"
            value={form.phone} onChange={handleChange}
            placeholder="+91 98765 43210"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-neutral-700">
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            id="subject" name="subject" required
            value={form.subject} onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a subject…</option>
            <option value="admissions">Admissions Enquiry</option>
            <option value="academics">Academic Information</option>
            <option value="fees">Fee Structure</option>
            <option value="transport">Transport</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-neutral-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message" name="message" rows={5} required
          value={form.message} onChange={handleChange}
          placeholder="How can we help you?"
          className={inputClass}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={status === "loading"}
        rightIcon={<Send className="h-4 w-4" />}
        className="w-full sm:w-auto"
      >
        Send Message
      </Button>
    </form>
  );
}