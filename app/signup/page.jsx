"use client";

import { useState } from "react";
import { Mail, Lock, User, LogIn } from "lucide-react";
import { messages } from "../messages";
import { useLanguage } from "../context/LanguageContext";

export default function Signup() {
  const { lang } = useLanguage();
  const t = messages[lang] || messages.en;
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setStatus("Please fill in all fields");
      return;
    }
    
    if (form.password !== form.confirmPassword) {
      setStatus("Passwords do not match");
      return;
    }
    
    if (form.password.length < 6) {
      setStatus("Password must be at least 6 characters");
      return;
    }
    
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      setStatus("Account created successfully!");
      setForm({ name: "", email: "", password: "", confirmPassword: "" });
    } catch {
      setStatus("Sign up failed. Please try again.");
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
                Sign Up
              </h1>
              <p className="text-lg text-white/90">Create your TRAVELII account</p>
            </div>
          </div>
        </div>

        {/* Sign Up Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <div>
              <label className="block text-sm font-semibold text-[#27374D] mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9DB2BF]" />
                <input
                  className="w-full border border-[#9DB2BF] rounded-lg px-4 py-3 pl-10 outline-none bg-white text-[#27374D] placeholder-[#9DB2BF] focus:ring-2 focus:ring-[#526D82] focus:border-[#526D82] transition-all"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={onChange}
                />
              </div>
            </div>

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
                  placeholder="Create a password"
                  value={form.password}
                  onChange={onChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#27374D] mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9DB2BF]" />
                <input
                  className="w-full border border-[#9DB2BF] rounded-lg px-4 py-3 pl-10 outline-none bg-white text-[#27374D] placeholder-[#9DB2BF] focus:ring-2 focus:ring-[#526D82] focus:border-[#526D82] transition-all"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={form.confirmPassword}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-[#526D82]">
              <input type="checkbox" className="rounded border-[#9DB2BF]" />
              <span>I agree to the Terms and Conditions</span>
            </div>

            {status && (
              <div className={`text-sm mt-2 px-4 py-2 rounded-lg ${
                status.includes('successfully') || status.includes('Success')
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
              {submitting ? "Creating account..." : "Sign Up"}
            </button>

            <div className="text-center text-sm text-[#526D82] mt-4">
              Already have an account?{" "}
              <a href="/signin" className="text-[#27374D] font-semibold hover:text-[#526D82] transition-colors">
                Sign in
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

