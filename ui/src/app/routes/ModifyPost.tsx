export default function ModifyPost() {
  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="flex justify-center flex-col m-20">
        <form>
          <div className="flex flex-col m-5">
            <label>Title</label>
            <input placeholder="Load blog title..."></input>
          </div>

          <div className="flex flex-col m-5">
            <label>Time to read</label>
            <input type="number" placeholder="Load time to read..."></input>
          </div>

          <div className="flex flex-col m-5">
            <label>Image</label>
            <input type="number" placeholder="Load blog title..."></input>
          </div>

          <div className="flex flex-col m-5">
            <label>Caption</label>
            <input placeholder="Load blog caption..."></input>
          </div>

          <div className="flex flex-col m-5">
            <label>Category</label>
            <input placeholder="Load blog category..."></input>
          </div>

          <div className="flex flex-col m-5">
            <label>Content</label>
            <textarea placeholder="Load blog content..."></textarea>
          </div>

          <div className="flex flex-col m-5">
            <label>Comments</label>
            <input placeholder="Load blog comments..."></input>
          </div>
        </form>
        <div className="flex flex-row m-5">
          <button
            className="
            bg-red-800 text-white font-semibold px-6 py-3 mr-5
            rounded-lg shadow-md hover:bg-red-600 transition
                      "
          >
            Delete blog post
          </button>
          <button
            className="
            bg-blue-800 text-white font-semibold px-6 py-3 
            rounded-lg shadow-md hover:bg-blue-600 transition
                      "
          >
            Delete blog post
          </button>
        </div>
      </div>
    </section>
  );
}
