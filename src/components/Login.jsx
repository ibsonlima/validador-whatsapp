import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-hot-toast';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      toast.success('Login realizado com sucesso!');
    } else {
      toast.error('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-sm w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-itp-primary mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Usuário
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-itp-2 focus:border-itp-2 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-itp-2 focus:border-itp-2 block w-full p-2.5"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-itp-primary hover:bg-itp-7 focus:ring-4 focus:ring-itp-2/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}