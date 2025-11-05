import RegisterForm from '@/modules/auth/components/RegisterForm';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-neutral-900 to-purple-700 animate-fadein">
      <Link href="/" className="mb-6 block">
        <img src="/logo.png" alt="Logo" className="w-50 h-auto mx-auto hover:scale-105 transition-transform duration-200" />
      </Link>
      <div className="bg-neutral-900/80 border border-purple-700/30 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-full max-w-md flex flex-col items-center transition-all duration-300">
        <div className="flex items-center gap-2 mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-purple-400 animate-bounce"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" /></svg>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Crear cuenta</h1>
        </div>
        <RegisterForm />
  <p className="text-gray-400 mt-6 text-sm text-center">¿Ya tienes cuenta? <Link href="/login" className="text-purple-400 hover:underline">Ingresar</Link></p>
      </div>
    </main>
  );
}
