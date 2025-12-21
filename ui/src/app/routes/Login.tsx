import { useEffect, useState } from 'react';
import { checkAuthentication, login } from '../api/authApi';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    async function checkAuth() {
      const response = await checkAuthentication();
      if (response.ok) {
        window.location.href = '/select';
      }
    }
    checkAuth();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await login(email, password);
    if (response.ok) {
      window.location.href = '/select';
    } else {
      window.location.reload();
    }
  };

  return (
    <section className="min-h-screen bg-linear-to-r from-blue-600 to-indigo-700">
      <div className="flex min-h-screen justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="
           bg-white text-black shadow-lg 
           md:w-1/4 md:h-100 rounded-lg px-6 py-8 mb-4
      "
        >
          <h1 className="text-4xl mb-6 text-center">Login</h1>
          <div className="mb-4">
            <label
              className="block text-gray-800 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              className="
              shadow appearance-none border rounded w-full 
              py-2 px-3 text-gray-700 leading-tight focus:outline-none 
              focus:ring-2 focus:ring-blue-500
            "
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-800 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Email"
              className="
              shadow appearance-none border rounded w-full 
              py-2 px-3 text-gray-700 leading-tight focus:outline-none 
              focus:ring-2 focus:ring-blue-500
            "
            />
          </div>
          <div className="flex justify-center gap-4">
            <button
              type="submit"
              disabled={email.length === 0 || password.length === 0}
              className={`
              bg-blue-500 hover:bg-blue-600 text-white 
              font-bold py-2 px-4 rounded md:mt-10
              hover:cursor-pointer
              ${
                password.length === 0 || email.length === 0
                  ? 'disabled:cursor-not-allowed disabled:bg-gray-400'
                  : ''
              }
            `}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
