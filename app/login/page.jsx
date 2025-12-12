"use client";
import { useState } from "react";
import API from "@/lib/api";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded">
        <h1 className="text-xl font-bold mb-4">Login</h1>

        <input name="email" className="border p-2 w-full mb-3" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" className="border p-2 w-full mb-3" placeholder="Password" onChange={handleChange} />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
}
