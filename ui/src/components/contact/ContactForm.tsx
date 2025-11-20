import { useState } from "react";
import type { FormProps } from "../../types/FormProps";

export default function ContactForm(formProps: FormProps) {
  const [isEmailEmpty, setIsEmailEmpty] = useState(true);
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  return (
    <div className="w-full max-w-md mx-auto">
      <form
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
            type="email"
            onChange={(e) => {
              if (e.target.value.length > 0) {
                setIsEmailEmpty(false);
              } else {
                setIsEmailEmpty(true);
              }
            }}
            placeholder="email"
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
            htmlFor="text"
          >
            Your message
          </label>
          <textarea
            id="text"
            onChange={(e) => {
              if (e.target.value.length > 0) {
                setIsInputEmpty(false);
              } else {
                setIsInputEmpty(true);
              }
            }}
            placeholder="What do you want to tell me?"
            className="
              shadow appearance-none border rounded w-full py-2 px-3 
              text-gray-700 leading-tight h-40 resize-none focus:outline-none 
              focus:ring-2 focus:ring-blue-500
            "
          />
        </div>
        <div className="flex justify-center gap-4">
          <button
            type="submit"
            disabled={isEmailEmpty || isInputEmpty}
            className={`
              bg-blue-500 hover:bg-blue-600 text-white 
              font-bold py-2 px-4 rounded
              hover:cursor-pointer
              ${
                isInputEmpty || isEmailEmpty
                  ? "disabled:cursor-not-allowed disabled:bg-gray-400"
                  : ""
              }
            `}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
