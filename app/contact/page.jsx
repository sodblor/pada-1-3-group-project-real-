"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
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
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    if (!form.name || !form.email || !form.message) {
      setStatus("Та нэр, и-мэйл, мессежээ бөглөнө үү.");
      return;
    }
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      setStatus("Мэссэж амжилттай илгээгдлээ! Бид удахгүй холбогдоно.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("Алдаа гарлаа. Дахин оролдоно уу.");
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, title: "И-мэйл", text: "support@example.com" },
    { icon: Phone, title: "Утас", text: "+976 9900 0000" },
    { icon: MapPin, title: "Хаяг", text: "Улаанбаатар хот, Сүхбаатар дүүрэг" },
  ];

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/contact.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className={`relative max-w-6xl mx-auto py-20 px-4 md:px-6 transition-all duration-700 ease-out ${
          ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <header className="text-center mb-12 text-white">
          <h1 className="text-4xl font-bold mb-2">Бидэнтэй холбогдох</h1>
          <p className="text-lg">
            Санал хүсэлт, хамтын ажиллагааны талаар бидэнд бичээрэй.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section
            className={`bg-black/60 backdrop-blur-sm rounded-2xl shadow-md p-6 flex flex-col gap-6 transition-all duration-700 ease-out ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {contactInfo.map(({ icon: Icon, title, text }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="p-3 bg-blue-50 text-blue-700 rounded-lg">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white">{title}</div>
                  <div className="text-gray-300">{text}</div>
                </div>
              </div>
            ))}
          </section>
          <section
            className={`bg-black/60 backdrop-blur-sm rounded-2xl shadow-md p-6 transition-all duration-700 ease-out ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  className="border border-gray-600 rounded-lg p-3 outline-none bg-black/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-200"
                  name="name"
                  placeholder="Таны нэр"
                  value={form.name}
                  onChange={onChange}
                />
                <input
                  className="border border-gray-600 rounded-lg p-3 outline-none bg-black/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-200"
                  name="email"
                  type="email"
                  placeholder="Таны и-мэйл"
                  value={form.email}
                  onChange={onChange}
                />
              </div>

              <input
                className="border border-gray-600 rounded-lg p-3 outline-none bg-black/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-200"
                name="subject"
                placeholder="Гарчиг (сонголттой)"
                value={form.subject}
                onChange={onChange}
              />
              <textarea
                className="border border-gray-600 rounded-lg p-3 outline-none bg-black/30 text-white placeholder-gray-300 resize-none focus:ring-2 focus:ring-blue-200"
                name="message"
                placeholder="Таны мессеж..."
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
                className="mt-4 inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70"
                type="submit"
                disabled={submitting}
              >
                <Send size={18} />{" "}
                {submitting ? "Илгээж байна..." : "Мэссэж илгээх"}
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
