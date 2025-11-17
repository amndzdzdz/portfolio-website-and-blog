import { Link } from "react-router-dom";

export default function CreatePost() {
  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="flex justify-center flex-col p-20">
        <div className="ml-5 mt-5 mb-5">
          <Link
            to={"/select"}
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
            >
              <option>Placeholder 1</option>
              <option>Placeholder 2</option>
              <option>Placeholder 3</option>
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
              placeholder="Enter blog title..."
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
              placeholder="Enter blog title..."
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
            ></input>
          </div>

          <div className="flex flex-col m-5">
            <label>Content</label>
            <textarea
              required
              className="
              bg-neutral-secondary-medium border border-default-medium 
              text-heading text-sm rounded-base focus:ring-brand 
              focus:border-brand block w-full px-2.5 py-2 shadow-xs 
              placeholder:text-body
              "
              placeholder="Enter blog content..."
            ></textarea>
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
              placeholder="Enter blog comments..."
            ></input>
          </div>
        </form>
        <div className="flex flex-row m-5">
          <button
            className="
            bg-blue-500 text-white font-semibold px-6 py-3 
            rounded-lg shadow-md hover:bg-blue-600 transition hover:cursor-pointer
                      "
          >
            Create blog post
          </button>
        </div>
      </div>
    </section>
  );
}
