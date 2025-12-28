import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createComment } from '../../app/api/commentApi';

export default function CommentForm() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment = {
      blogPostId: id!,
      name: name,
      message: message,
      date: new Date().toISOString(),
    };
    try {
      await createComment(comment);
    } catch (err) {
      console.log('An error occured: ' + err);
    }
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
          Write a comment!
        </h1>

        <div className="mb-4">
          <label
            className="block text-gray-800 text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Your name
          </label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
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
            onChange={(e) => setMessage(e.target.value)}
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
            disabled={name.length > 0 && message.length > 0 ? false : true}
            className={`
              bg-blue-500 hover:bg-blue-600 text-white 
              font-bold py-2 px-4 rounded
              hover:cursor-pointer
              disabled:cursor-not-allowed disabled:bg-gray-400
            `}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
