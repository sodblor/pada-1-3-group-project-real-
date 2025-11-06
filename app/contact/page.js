"use client";
import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

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
      // Энд API эсвэл мэйл үйлчилгээ рүү илгээдэг байсан гэж үзнэ.
      await new Promise((r) => setTimeout(r, 800));
      setStatus("Мэссэж амжилттай илгээгдлээ! Бид удахгүй холбогдоно.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (e) {
      setStatus("Алдаа гарлаа. Дахин оролдоно уу.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Бидэнтэй холбогдох</h1>
          <p className={styles.subtitle}>Санал хүсэлт, хамтын ажиллагааны талаар бидэнд бичээрэй.</p>
        </header>

        <div className={styles.grid}>
          <section className={styles.card}>
            <div className={styles.infoItem}>
              <div className={styles.iconWrap}><Mail size={20} /></div>
              <div>
                <div className={styles.infoTitle}>И-мэйл</div>
                <div className={styles.infoText}>support@example.com</div>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.iconWrap}><Phone size={20} /></div>
              <div>
                <div className={styles.infoTitle}>Утас</div>
                <div className={styles.infoText}>+976 9900 0000</div>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.iconWrap}><MapPin size={20} /></div>
              <div>
                <div className={styles.infoTitle}>Хаяг</div>
                <div className={styles.infoText}>Улаанбаатар хот, Сүхбаатар дүүрэг</div>
              </div>
            </div>
          </section>

          <section className={styles.card}>
            <form className={styles.form} onSubmit={onSubmit}>
              <div className={styles.row}>
                <input
                  className={styles.input}
                  name="name"
                  placeholder="Таны нэр"
                  value={form.name}
                  onChange={onChange}
                />
                <input
                  className={styles.input}
                  name="email"
                  type="email"
                  placeholder="Таны и-мэйл"
                  value={form.email}
                  onChange={onChange}
                />
              </div>
              <input
                className={styles.input}
                name="subject"
                placeholder="Гарчиг (сонголттой)"
                value={form.subject}
                onChange={onChange}
              />
              <textarea
                className={styles.textarea}
                name="message"
                placeholder="Таны мессеж..."
                value={form.message}
                onChange={onChange}
              />
              {status && (
                <div className={styles.infoText} role="status">{status}</div>
              )}
              <div className={styles.actions}>
                <button className={styles.button} type="submit" disabled={submitting}>
                  <Send size={18} /> {submitting ? "Илгээж байна..." : "Мэссэж илгээх"}
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
