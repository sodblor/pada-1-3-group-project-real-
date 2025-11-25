// app/contact/page.js
"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { messages } from "../messages";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { lang } = useLanguage(); // Get current language
  const t = messages[lang] || messages.en; // Fallback to English

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!form.name || !form.email || !form.message) {
      setStatus(t.contact.errorRequired);
      return;
    }

    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800)); // simulate API call
      setStatus(t.contact.successMessage);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus(t.contact.errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, title: t.contact.email, text: "support@example.com" },
    { icon: Phone, title: t.contact.phone, text: "+976 9900 0000" },
    { icon: MapPin, title: t.contact.address, text: t.contact.addressText },
  ];

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/contact.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className={`relative max-w-6xl mx-auto py-32 px-4 md:px-6 transition-all duration-700 ease-out ${
          ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Header */}
        <header className="text-center mb-12 text-white">
          <h1 className="text-4xl font-bold mb-2">{t.contact.title}</h1>
          <p className="text-lg">{t.contact.subtitle}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <section
            className={`bg-white/10 dark:bg-black/60 backdrop-blur-sm rounded-2xl shadow-md p-6 flex flex-col gap-6 transition-all duration-700 ease-out ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {contactInfo.map(({ icon: Icon, title, text }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="p-3 bg-purple-100 text-purple-700 rounded-lg">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white">{title}</div>
                  <div className="text-gray-300">{text}</div>
                </div>
              </div>
            ))}
          </section>

          {/* Contact Form */}
          <section
            className={`bg-white/10 dark:bg-black/60 backdrop-blur-sm rounded-2xl shadow-md p-6 transition-all duration-700 ease-out ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  className="border border-gray-600 rounded-lg p-3 outline-none bg-black/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400"
                  name="name"
                  placeholder={t.contact.namePlaceholder}
                  value={form.name}
                  onChange={onChange}
                />
                <input
                  className="border border-gray-600 rounded-lg p-3 outline-none bg-black/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400"
                  name="email"
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  value={form.email}
                  onChange={onChange}
                />
              </div>

              <input
                className="border border-gray-600 rounded-lg p-3 outline-none bg-black/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400"
                name="subject"
                placeholder={t.contact.subjectPlaceholder}
                value={form.subject}
                onChange={onChange}
              />
              <textarea
                className="border border-gray-600 rounded-lg p-3 outline-none bg-black/30 text-white placeholder-gray-300 resize-none focus:ring-2 focus:ring-purple-400"
                name="message"
                placeholder={t.contact.messagePlaceholder}
                rows={5}
                value={form.message}
                onChange={onChange}
              />

              {status && (
                <div className="text-sm text-gray-300 mt-1" role="status">
                  {status}
                </div>
              )}

              <button
                className="mt-4 inline-flex items-center justify-center gap-2 bg-purple-600 text-white font-medium py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-70"
                type="submit"
                disabled={submitting}
              >
                <Send size={18} />
                {submitting ? t.contact.sending : t.contact.sendButton}
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
