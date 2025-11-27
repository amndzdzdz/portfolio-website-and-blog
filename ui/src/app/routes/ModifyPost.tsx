import { Link } from 'react-router-dom';
import 'suneditor/dist/css/suneditor.min.css';
import SunEditor, { buttonList } from 'suneditor-react';
import { fetchBlogPostTitles } from '../api/blogPostApi';
import { useEffect, useState } from 'react';

export default function ModifyPost() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState('');

  useEffect(() => {
    async function loadBlogPosts() {
      try {
        const blogPosts = await fetchBlogPostTitles();
        console.log(blogPosts['blogPostTitles']);
        setBlogPosts(blogPosts['blogPostTitles']);
      } catch (err) {
        console.log('An error occured: ' + err);
      } finally {
        setLoading(false);
      }
    }
    loadBlogPosts();
  }, []);

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
        <form>
          <div className="flex flex-col m-5">
            <label>Select which post to change/delete</label>
            <select
              className="
              bg-neutral-secondary-medium border border-default-medium 
              text-heading text-sm rounded-base focus:ring-brand 
              focus:border-brand block w-full px-2.5 py-2 shadow-xs 
              placeholder:text-body
              "
              onChange={(e) => {
                console.log(e.target.value);
                setCurrentPost(e.target.value);
              }}
            >
              {loading && <option>Blogposts loading</option>}
              {!loading && blogPosts.length == 0 && (
                <option>No blog posts</option>
              )}
              {!loading &&
                blogPosts.map((post) => (
                  <option key={post._id} value={post._id}>
                    {post.title}
                  </option>
                ))}
            </select>
          </div>
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
              placeholder="Load blog title..."
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
              placeholder="Load time to read..."
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
              type="number"
              placeholder="Load blog title..."
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
              placeholder="Load blog caption..."
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
              placeholder="Load blog category..."
            ></input>
          </div>

          <div className="flex flex-col m-5">
            <label>Content</label>
            <SunEditor
              setOptions={{
                buttonList: buttonList.complex,
              }}
            ></SunEditor>
          </div>

          <div className="flex flex-col m-5">
            <label>Comments</label>
            <input
              required
              className="
              bg-neutral-secondary-medium border border-default-medium 
              text-heading text-sm rounded-base focus:ring-brand 
              focus:border-brand block w-full px-2.5 py-2 shadow-xs 
              placeholder:text-body
              "
              placeholder="Load blog comments..."
            ></input>
          </div>
        </form>
        <div className="flex flex-row m-5">
          <button
            className="
            bg-red-500 text-white font-semibold px-6 py-3 mr-5
            rounded-lg shadow-md hover:bg-red-600 transition hover:cursor-pointer
                      "
          >
            Delete blog post
          </button>
          <button
            className="
            bg-blue-500 text-white font-semibold px-6 py-3 
            rounded-lg shadow-md hover:bg-blue-600 transition hover:cursor-pointer
                      "
          >
            Update blog post
          </button>
        </div>
      </div>
    </section>
  );
}
