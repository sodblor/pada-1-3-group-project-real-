import { useState } from "react";
import { useAuth } from "../Providers/authProviders";
import { useRouter } from "next/navigation";

export default function Signup() {
  const { signup } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = signup(form);
    if (res?.ok) {
      router.push("/account");
    } else {
      alert(res?.error || "Signup failed");
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Signup</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {["firstName", "lastName", "email", "phone", "password"].map((f) => (
          <input
            key={f}
            name={f}
            type={f === "password" ? "password" : "text"}
            placeholder={f}
            value={form[f]}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        ))}
        <button className="bg-blue-500 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}
