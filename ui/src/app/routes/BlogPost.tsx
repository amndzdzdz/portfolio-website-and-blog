export default function BlogPost() {
  const blogPost = {
    id: "1",
    title: "How to Build a React App From Scratch",
    image:
      "https://hasthemes.com/blog/wp-content/uploads/2021/10/react-blog-templates.jpg",
    timeToRead: "6 min",
    content: `
    Building a React application from scratch might sound overwhelming, 
    but it's much easier than it seems. In this guide, we'll walk through 
    setting up your environment, creating components, and managing state 
    effectively. By the end, you'll have a fully functional starter app 
    and a solid understanding of the core concepts behind React development.

    React is a component-based UI library that allows developers to break 
    interfaces into reusable pieces. This makes your code more maintainable 
    and scalable as your application grows. Whether you're building a small 
    portfolio or a large production system, React provides the foundation to 
    move fast and stay organized.

    Let's dive into the essentials and get your first React project running.
  `,
    comments: [
      {
        id: "c1",
        author: "Sarah Jones",
        text: "Really helpful breakdown! I finally understand how components work.",
        date: "2025-01-15",
      },
      {
        id: "c2",
        author: "Mark Peterson",
        text: "Could you make a follow-up on state management? That would be awesome!",
        date: "2025-01-16",
      },
      {
        id: "c3",
        author: "Aisha Karim",
        text: "Loved the explanation — super beginner friendly.",
        date: "2025-01-18",
      },
    ],
  };

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="flex flex-col p-20 justify-center">
        <div className="flex items-center justify-center mr-10 ml-10 mt-10">
          <h1 className="text-8xl font-extrabold">{blogPost.title}</h1>
        </div>

        <div className="flex items-center ml-10 mb-5">
          <h1 className="text-lg mr-2">Joseph Dziri</h1>
          <span className="text-lg mr-2">•</span>
          <h1 className="text-lg mr-2">{blogPost.timeToRead}</h1>
          <span className="text-lg mr-2">•</span>
          <h1 className="text-lg">17.11.2025</h1>
        </div>

        <div className="flex items-center justify-center m-10">
          <img className="object-none" src={blogPost.image}></img>
        </div>
      </div>
    </section>
  );
}
