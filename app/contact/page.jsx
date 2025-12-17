// app/contact/page.js
"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { messages } from "../messages";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { lang } = useLanguage();
  const t = messages[lang] || messages.en;
  
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
      setStatus(t.contactPage.errorRequired);
      return;
    }
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      setStatus(t.contactPage.successMessage);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus(t.contactPage.errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, title: t.contactPage.email, text: "support@travelii.com" },
    { icon: Phone, title: t.contactPage.phone, text: "+976 9900 0000" },
    { icon: MapPin, title: t.contactPage.address, text: t.contactPage.addressText },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#DDE6ED] to-[#9DB2BF]">
      {/* Hero Section */}
      <div className="relative h-[45vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-[#27374D]/60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-3">
              {t.contactPage.title}
            </h1>
            <p className="text-lg text-white/90">{t.contactPage.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#27374D] mb-6">Get in Touch</h2>
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, title, text }, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#DDE6ED] transition-colors"
                >
                  <div className="p-3 bg-[#DDE6ED] text-[#27374D] rounded-lg flex-shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#27374D] mb-1">{title}</div>
                    <div className="text-[#526D82]">{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Form */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#27374D] mb-6">Send us a Message</h2>
            <form className="flex flex-col gap-5" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input
                    className="w-full border border-[#9DB2BF] rounded-lg px-4 py-3 outline-none bg-white text-[#27374D] placeholder-[#9DB2BF] focus:ring-2 focus:ring-[#526D82] focus:border-[#526D82] transition-all"
                    name="name"
                    placeholder={t.contactPage.namePlaceholder}
                    value={form.name}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <input
                    className="w-full border border-[#9DB2BF] rounded-lg px-4 py-3 outline-none bg-white text-[#27374D] placeholder-[#9DB2BF] focus:ring-2 focus:ring-[#526D82] focus:border-[#526D82] transition-all"
                    name="email"
                    type="email"
                    placeholder={t.contactPage.emailPlaceholder}
                    value={form.email}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div>
                <input
                  className="w-full border border-[#9DB2BF] rounded-lg px-4 py-3 outline-none bg-white text-[#27374D] placeholder-[#9DB2BF] focus:ring-2 focus:ring-[#526D82] focus:border-[#526D82] transition-all"
                  name="subject"
                  placeholder={t.contactPage.subjectPlaceholder}
                  value={form.subject}
                  onChange={onChange}
                />
              </div>
              
              <div>
                <textarea
                  className="w-full border border-[#9DB2BF] rounded-lg px-4 py-3 outline-none bg-white text-[#27374D] placeholder-[#9DB2BF] resize-none focus:ring-2 focus:ring-[#526D82] focus:border-[#526D82] transition-all"
                  name="message"
                  placeholder={t.contactPage.messagePlaceholder}
                  rows={6}
                  value={form.message}
                  onChange={onChange}
                />
              </div>

              {status && (
                <div className={`text-sm mt-2 px-4 py-2 rounded-lg ${
                  status.includes('success') || status.includes('Success') 
                    ? 'bg-[#DDE6ED] text-[#27374D]' 
                    : 'bg-red-50 text-red-600'
                }`} role="status">
                  {status}
                </div>
              )}

              <button
                className="mt-2 inline-flex items-center justify-center gap-2 bg-[#27374D] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#526D82] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={submitting}
              >
                <Send size={18} />
                {submitting ? t.contactPage.sending : t.contactPage.sendButton}
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}