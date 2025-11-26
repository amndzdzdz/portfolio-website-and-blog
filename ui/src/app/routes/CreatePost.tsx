import { useState } from 'react';
import { Link } from 'react-router-dom';
import SunEditor from 'suneditor-react';
import { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { createBlogPost } from '../api/blogPostApi';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [timeToRead, setTimeToRead] = useState('');
  const [image, setImage] = useState('');
  const [caption, setCaption] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      title: title,
      timeToRead: timeToRead,
      image: image,
      date: new Date().toISOString(),
      caption: caption,
      category: category,
      content: content,
    };

    try {
      await createBlogPost(formData);
    } catch {
      console.log('Failed creating the blogpost');
    }
    window.location.reload();
  };

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="flex justify-center flex-col p-20">
        <div className="ml-5 mt-5 mb-5">
          <Link
            to={'/select'}
            className="
            bg-gray-300 text-black font-semibold px-6 py-3
            rounded-lg shadow-md hover:bg-gray-400 transition hover:cursor-pointer
                      "
          >
            Go back
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col m-5">
            <label>Title</label>
            <input
              required
              className="
              bg-neutral-secondary-medium border border-default-medium 
              text-heading text-sm rounded-base focus:ring-brand 
              focus:border-brand block w-full px-2.5 py-2 shadow-xs 
              placeholder:text-body
              "
              placeholder="Enter blog title..."
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
          </div>

          <div className="flex flex-col m-5">
            <label>Time to read</label>
            <input
              required
              className="
              bg-neutral-secondary-medium border border-default-medium 
              text-heading text-sm rounded-base focus:ring-brand 
              focus:border-brand block w-full px-2.5 py-2 shadow-xs 
              placeholder:text-body
              "
              type="number"
              placeholder="Enter time to read..."
              onChange={(e) => {
                setTimeToRead(e.target.value);
              }}
            ></input>
          </div>

          <div className="flex flex-col m-5">
            <label>Image</label>
            <input
              required
              className="
              bg-neutral-secondary-medium border border-default-medium 
              text-heading text-sm rounded-base focus:ring-brand 
              focus:border-brand block w-full px-2.5 py-2 shadow-xs 
              placeholder:text-body
              "
              placeholder="Enter cover image..."
              onChange={(e) => {
                setImage(e.target.value);
              }}
            ></input>
          </div>

          <div className="flex flex-col m-5">
            <label>Caption</label>
            <input
              required
              className="
              bg-neutral-secondary-medium border border-default-medium 
              text-heading text-sm rounded-base focus:ring-brand 
              focus:border-brand block w-full px-2.5 py-2 shadow-xs 
              placeholder:text-body
              "
              placeholder="Enter blog caption..."
              onChange={(e) => {
                setCaption(e.target.value);
              }}
            ></input>
          </div>

          <div className="flex flex-col m-5">
            <label>Category</label>
            <input
              required
              className="
              bg-neutral-secondary-medium border border-default-medium 
              text-heading text-sm rounded-base focus:ring-brand 
              focus:border-brand block w-full px-2.5 py-2 shadow-xs 
              placeholder:text-body
              "
              placeholder="Enter blog category..."
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            ></input>
          </div>

          <div className="flex flex-col m-5">
            <label>Content</label>
            <SunEditor
              setOptions={{
                buttonList: buttonList.complex,
              }}
              onChange={(e) => {
                setContent(e);
              }}
            ></SunEditor>
          </div>
          <div className="flex flex-row m-5">
            <button
              className="
            bg-blue-500 text-white font-semibold px-6 py-3 
            rounded-lg shadow-md hover:bg-blue-600 transition hover:cursor-pointer
                      "
              type="submit"
            >
              Create blog post
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
