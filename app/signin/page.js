"use client";

import { useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { messages } from "../messages";
import { useLanguage } from "../context/LanguageContext";

export default function Signin() {
  const { lang } = useLanguage();
  const t = messages[lang] || messages.en;
  
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    if (!form.email || !form.password) {
      setStatus("Please fill in all fields");
      return;
    }
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      setStatus("Sign in successful!");
      setForm({ email: "", password: "" });
    } catch {
      setStatus("Sign in failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#DDE6ED] to-[#9DB2BF] flex items-center justify-center py-20 px-6">
      <div className="w-full max-w-md">
        {/* Hero Section */}
        <div className="relative h-[35vh] overflow-hidden mb-8 rounded-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&auto=format&fit=crop')" }}
          >
            <div className="absolute inset-0 bg-[#27374D]/60"></div>
          </div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-3">
                Sign In
              </h1>
              <p className="text-lg text-white/90">Welcome back to TRAVELII</p>
            </div>
          </div>
        </div>

        {/* Sign In Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <div>
              <label className="block text-sm font-semibold text-[#27374D] mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9DB2BF]" />
                <input
                  className="w-full border border-[#9DB2BF] rounded-lg px-4 py-3 pl-10 outline-none bg-white text-[#27374D] placeholder-[#9DB2BF] focus:ring-2 focus:ring-[#526D82] focus:border-[#526D82] transition-all"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={onChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#27374D] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9DB2BF]" />
                <input
                  className="w-full border border-[#9DB2BF] rounded-lg px-4 py-3 pl-10 outline-none bg-white text-[#27374D] placeholder-[#9DB2BF] focus:ring-2 focus:ring-[#526D82] focus:border-[#526D82] transition-all"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-[#526D82] cursor-pointer">
                <input type="checkbox" className="rounded border-[#9DB2BF]" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-[#526D82] hover:text-[#27374D] transition-colors">
                Forgot password?
              </a>
            </div>

            {status && (
              <div className={`text-sm mt-2 px-4 py-2 rounded-lg ${
                status.includes('successful') || status.includes('Success')
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
              <LogIn size={18} />
              {submitting ? "Signing in..." : "Sign In"}
            </button>

            <div className="text-center text-sm text-[#526D82] mt-4">
              Don't have an account?{" "}
              <a href="/signup" className="text-[#27374D] font-semibold hover:text-[#526D82] transition-colors">
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
