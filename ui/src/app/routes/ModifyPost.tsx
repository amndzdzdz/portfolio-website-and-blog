import { Link } from 'react-router-dom';
import 'suneditor/dist/css/suneditor.min.css';
import SunEditor, { buttonList } from 'suneditor-react';
import {
  deleteBlogPost,
  getBlogPostById,
  getBlogPostTitles,
  updateBlogPost,
} from '../api/blogPostApi';
import { useEffect, useState } from 'react';

export default function ModifyPost() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<string | undefined>(undefined);
  const [caption, setCaption] = useState<string | undefined>(undefined);
  const [timeToRead, setTimeToRead] = useState<string | undefined>(undefined);
  const [image, setImage] = useState<string | undefined>(undefined);
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [content, setContent] = useState<string | undefined>(undefined);
  const [action, setAction] = useState<'update' | 'delete' | undefined>(
    undefined,
  );
  const [currentPostId, setCurrentPostId] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    async function loadBlogPosts() {
      try {
        const blogPosts = await getBlogPostTitles();
        setBlogPosts(blogPosts['blogPostTitles']);
      } catch (err) {
        console.log('An error occured: ' + err);
      } finally {
        setLoading(false);
      }
    }
    loadBlogPosts();
  }, []);

  async function loadBlogPost(id: string) {
    try {
      const blogPost = await getBlogPostById(id!);
      setTitle(blogPost['blogPost'].title);
      setCaption(blogPost['blogPost'].caption);
      setTimeToRead(blogPost['blogPost'].timeToRead);
      setImage(blogPost['blogPost'].image);
      setCategory(blogPost['blogPost'].category);
      setContent(blogPost['blogPost'].content);
      setDate(blogPost['blogPost'].date);
    } catch (err) {
      console.log('An error occured: ' + err);
    }
  }

  async function handleOnSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (action === 'update') {
      try {
        const data = {
          id: currentPostId!,
          title: title!,
          caption: caption!,
          timeToRead: timeToRead!,
          image: image!,
          date: date!,
          category: category!,
          content: content!,
        };
        await updateBlogPost(data);
      } catch (err) {
        console.log('An error occured: ' + err);
      }
    }
    if (action === 'delete') {
      try {
        await deleteBlogPost(currentPostId!);
      } catch (err) {
        console.log('An error occured: ' + err);
      }
    }
    window.location.reload();
  }

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="flex justify-center flex-col p-20">
        <div className="ml-5 mt-5 mb-5">
          <Link
            to={'/select'}
            className="
            bg-gray-300 text-black font-semibold px-6 py-3
            rounded-lg shadow-md hover:bg-gray-400 
            transition hover:cursor-pointer
            "
          >
            Go back
          </Link>
        </div>
        <form onSubmit={handleOnSubmit}>
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
                const id = e.target.value;
                if (id !== 'Select blogpost') {
                  setCurrentPostId(id);
                  loadBlogPost(id);
                } else {
                  setCurrentPostId(undefined);
                }
              }}
            >
              <option key="-1">Select blogpost</option>
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
              value={currentPostId ? (title ?? '') : ''}
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
              placeholder="Load time to read..."
              value={currentPostId ? (timeToRead ?? '') : ''}
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
              type="text"
              placeholder="Load blog image..."
              value={currentPostId ? (image ?? '') : ''}
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
              placeholder="Load blog caption..."
              value={currentPostId ? (caption ?? '') : ''}
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
              placeholder="Load blog category..."
              value={currentPostId ? (category ?? '') : ''}
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
              setContents={currentPostId ? (content ?? '') : ''}
              onChange={(e) => {
                setContent(e);
              }}
            ></SunEditor>
          </div>
          <div className="flex flex-row m-5">
            <button
              disabled={currentPostId ? false : true}
              name="delete-button"
              className="
            bg-red-500 text-white font-semibold px-6 py-3 mr-5
            rounded-lg shadow-md hover:bg-red-600 transition 
            hover:cursor-pointer disabled:bg-gray-400 
            disabled:cursor-not-allowed
            "
              onClick={() => {
                setAction('delete');
              }}
            >
              Delete blog post
            </button>
            <button
              disabled={currentPostId ? false : true}
              name="update-button"
              className="
            bg-blue-500 text-white font-semibold px-6 py-3 
            rounded-lg shadow-md hover:bg-blue-600 transition 
            hover:cursor-pointer disabled:bg-gray-400 
            disabled:cursor-not-allowed
            "
              onClick={() => {
                setAction('update');
              }}
            >
              Update blog post
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
