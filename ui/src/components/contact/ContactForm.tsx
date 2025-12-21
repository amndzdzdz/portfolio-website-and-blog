import { useState } from 'react';
import type { FormProps } from '../../types/FormProps';
const web3formsKey = import.meta.env.VITE_WEB3FORMS_KEY;

export default function ContactForm(formProps: FormProps) {
  const [isEmailEmpty, setIsEmailEmpty] = useState(true);
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [_result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult('');

    const formData = new FormData(e.currentTarget);

    formData.append('access_key', web3formsKey);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setIsEmailEmpty(true);
      setIsInputEmpty(true);
    } else {
      setResult('Something went wrong. Please try again.');
    }

    setLoading(false);
    window.location.reload();
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={onSubmit}
        className="
           bg-white text-black shadow-lg rounded-2xl px-6 py-8 mb-4
      "
      >
        <h1 className="text-2xl font-extrabold mb-6 text-center">
          {formProps.title}
        </h1>

        <div className="mb-4">
          <label
            className="block text-gray-800 text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={(e) => setIsEmailEmpty(e.target.value.length === 0)}
            placeholder="Email"
            className="
              shadow appearance-none border rounded w-full 
              py-2 px-3 text-gray-700 leading-tight focus:outline-none 
              focus:ring-2 focus:ring-blue-500
            "
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-800 text-sm font-semibold mb-2"
            htmlFor="message"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            onChange={(e) => setIsInputEmpty(e.target.value.length === 0)}
            placeholder="What do you want to tell me?"
            className="
              shadow appearance-none border rounded w-full py-2 px-3 
              text-gray-700 leading-tight h-40 resize-none focus:outline-none 
              focus:ring-2 focus:ring-blue-500
            "
            required
          />
        </div>

        <div className="flex justify-center gap-4">
          <button
            type="submit"
            disabled={isEmailEmpty || isInputEmpty || loading}
            className={`
              bg-blue-500 hover:bg-blue-600 text-white 
              font-bold py-2 px-4 rounded
              hover:cursor-pointer
              ${
                isInputEmpty || isEmailEmpty || loading
                  ? 'cursor-not-allowed bg-gray-400 hover:bg-gray-400'
                  : ''
              }
            `}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
}
