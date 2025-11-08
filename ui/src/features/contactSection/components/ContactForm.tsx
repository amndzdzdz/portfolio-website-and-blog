export default function ContactForm() {
  return (
    <div className="w-full max-w-md mx-auto">
      <form
        className="
           bg-white text-black shadow-lg rounded-lg px-6 py-8 mb-4
      "
      >
        <h1 className="text-2xl font-extrabold mb-6 text-center">
          Send me an email!
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
            className="
              bg-blue-500 hover:bg-blue-600 text-white 
              font-bold py-2 px-4 rounded
            "
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
