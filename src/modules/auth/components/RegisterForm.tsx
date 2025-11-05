"use client";
import React, { useState } from "react";
import { useRegister } from "../hooks/useRegister";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, loading, error } = useRegister();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(name, email, password);
  };

  return (
    <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre completo"
        value={name}
        onChange={e => setName(e.target.value)}
        className="px-4 py-3 rounded-xl border border-purple-700/40 bg-neutral-950 text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 transition"
        required
      />
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
        className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:from-purple-300 hover:to-purple-500 transition"
        disabled={loading}
      >
        {loading ? "Creando cuenta..." : "Crear cuenta"}
      </button>
      {error && <p className="text-red-400 text-sm text-center">{error}</p>}
    </form>
  );
}
