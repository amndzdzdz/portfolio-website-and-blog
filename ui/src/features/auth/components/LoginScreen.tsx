import { useState } from "react";

export default function LoginScreen() {
  const [isEmailEmpty, setIsEmailEmpty] = useState(true);
  const [isPasswordEmpty, setisPasswordEmpty] = useState(true);

  return (
    <section className="min-h-screen bg-linear-to-r from-blue-600 to-indigo-700">
      <div className="flex min-h-screen justify-center items-center">
        <form
          className="
           bg-white text-black shadow-lg rounded-lg px-6 py-8 mb-4
      "
        >
          <h1 className="text-2xl font-extrabold mb-6 text-center">Login</h1>
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
              htmlFor="email"
            >
              Password
            </label>
            <input
              id="email"
              type="email"
              onChange={(e) => {
                if (e.target.value.length > 0) {
                  setisPasswordEmpty(false);
                } else {
                  setisPasswordEmpty(true);
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
          <div className="flex justify-center gap-4">
            <button
              type="submit"
              disabled={isEmailEmpty || isPasswordEmpty}
              className={`
              bg-blue-500 hover:bg-blue-600 text-white 
              font-bold py-2 px-4 rounded
              hover:cursor-pointer
              ${
                isPasswordEmpty || isEmailEmpty
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
    </section>
  );
}
