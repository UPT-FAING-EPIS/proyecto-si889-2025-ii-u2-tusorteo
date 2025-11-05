"use client";
import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="px-4 py-3 rounded-xl border border-purple-700/40 bg-neutral-950 text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 transition"
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="px-4 py-3 rounded-xl border border-purple-700/40 bg-neutral-950 text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 transition"
        required
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:from-purple-500 hover:to-purple-700 transition"
        disabled={loading}
      >
        {loading ? "Ingresando..." : "Ingresar"}
      </button>
      {error && <p className="text-red-400 text-sm text-center mt-2">{error}</p>}
    </form>
  );
}
