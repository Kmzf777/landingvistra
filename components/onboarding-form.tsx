'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function OnboardingForm() {
  const [instagram, setInstagram] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!instagram.trim()) {
      setError('Por favor, informe seu Instagram.');
      return;
    }
    setError('');
    // TODO: Handle next step
    alert(`Instagram: ${instagram}`);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="space-y-2">
          <label htmlFor="instagram" className="text-2xl font-bold text-gray-900">
            Qual seu Instagram?
          </label>
          <input
            id="instagram"
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            placeholder="@seuusuario"
            className="w-full p-4 text-lg border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent transition-colors placeholder:text-gray-400"
            autoFocus
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
        >
          Próximo
        </button>
      </form>
    </div>
  );
}
