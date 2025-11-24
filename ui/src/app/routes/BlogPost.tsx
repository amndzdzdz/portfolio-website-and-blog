import CommentSection from '../../components/comment/CommentSection';

const blogPost = {
  id: '1',
  title: 'How to Build a React App From Scratch',
  image:
    'https://hasthemes.com/blog/wp-content/uploads/2021/10/react-blog-templates.jpg',
  timeToRead: '6 min',
  content: `Building a React application from scratch might sound overwhelming, 
but it's much easier than it seems once you understand the underlying 
concepts. In this guide, we'll walk through setting up your environment, 
creating components, and managing state effectively. By the end, you'll 
have a fully functional starter app and a solid understanding of the core 
concepts behind React development.

React is a component-based UI library that allows developers to break 
interfaces into reusable pieces. This makes your code more maintainable 
and scalable as your application grows. Whether you're building a small 
portfolio or a large production system, React provides the foundation to 
move fast and stay organized.

### Setting Up Your Development Environment

Before writing your first line of code, it's important to prepare a proper 
development setup. Most developers use Node.js and npm. With Node installed, 
you gain access to countless libraries that speed up development dramatically.

A common first step is to install a tool like Vite or Create React App. Vite 
is significantly faster and more modern, offering instant startup times and 
lightning-fast hot reloading. Once installed, you can structure your project 
by separating assets, components, utilities, and styles into clean folders.

### Understanding Components and Props

Everything in React revolves around components. A component represents an 
independent piece of UI. Many developers start by building small stateless 
components that later evolve into more complex, stateful ones. Components 
can accept props, which allow you to dynamically pass data from parent to 
child elements. This makes interfaces flexible and scalable.

As your app grows, you'll naturally begin to extract repeated elements into 
reusable components. For example, a button that appears throughout your app 
can be converted into a single component that accepts props such as "label", 
"onClick", or "variant". This reduces redundancy and makes updates much easier.

### State Management Fundamentals

State represents data that changes over time within your application. React’s 
built-in "useState" hook is perfect for smaller apps. For example, you can 
store the value of a text input or track the visibility of a dropdown.

However, as applications evolve, managing state across multiple nested 
components becomes challenging. Developers often turn to tools like Redux, 
Zustand, or React Context. Choosing the right approach depends on the size 
and complexity of your project. For many beginners, starting with "useState" 
and gradually growing into more advanced tools is the best learning path.

### Building Your Folder Structure

A clean folder structure is essential for long-term maintainability. Many 
developers follow conventions such as:

- "src/components" for UI components  
- "src/pages" for page-level views  
- "src/hooks" for custom logic  
- "src/services" for API calls  
- "src/styles" for global or modular styles  

This structure ensures that your codebase remains organized as you add new 
features. Nothing slows down development like a messy, inconsistent file 
hierarchy.

### Working With APIs

Modern web applications often rely on external data. With React, fetching 
data is commonly done inside "useEffect" or within a custom hook. You can use 
"fetch" or libraries like Axios. The key is to handle loading states, error 
conditions, and ensure that UI updates at the right time.

### Performance Considerations

React provides many tools to help manage performance. Techniques such as 
memoization, lazy loading, and splitting code into chunks ensure that 
your app remains fast. Even small optimizations like avoiding unnecessary 
re-renders can have noticeable impact on user experience.

### Deployment and Optimization

Once your app is complete, deployment becomes the final step. Tools like 
Vercel, Netlify, and GitHub Pages make deployment incredibly easy. Most of 
these platforms automatically detect React builds and configure the hosting 
environment for you.

Before deploying, it's wise to:

- Minify and uglify your production build  
- Remove unused imports  
- Optimize images  
- Enable caching  
- Test your application on mobile devices  

### Final Thoughts

Learning React opens the door to countless possibilities. Whether you're 
building dashboards, mobile apps using React Native, or full-scale SaaS 
applications, React provides a powerful and flexible foundation. The best 
way to improve is by building projects — small at first, then gradually 
more complex.

If you're feeling confident, a great next step is diving into state 
management, server-side rendering with Next.js, or experimenting with 
TypeScript to make your apps more robust.

React isn't just a library — it's a mindset. Once you understand how 
components, state, and reactivity work together, the process becomes 
incredibly enjoyable. Now that you have the fundamentals, go ahead and 
start building your own applications from scratch.
`,
  comments: [
    {
      id: 'c1',
      author: 'Alice Johnson',
      date: '2025-01-14',
      text: 'This is a great post! Really enjoyed the insights.',
    },
    {
      id: 'c2',
      author: 'Michael Chen',
      date: '2025-01-13',
      text: 'I think you could expand on the last section, but overall very helpful.',
    },
    {
      id: 'c3',
      author: 'Sara Khalid',
      date: '2025-01-11',
      text: 'Thanks for sharing this. Looking forward to more content!',
    },
    {
      id: 'c4',
      author: 'David P.',
      date: '2025-01-10',
      text: 'Amazing write-up. Clear, concise, and informative.',
    },
  ],
};

export default function BlogPost() {
  return (
    <>
      <section className="min-h-screen bg-gray-50 py-30">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            {blogPost.title}
          </h1>

          <div className="flex items-center text-gray-600 space-x-2 mb-10">
            <span>Joseph Dziri</span>
            <span>•</span>
            <span>{blogPost.timeToRead}</span>
            <span>•</span>
            <span>17.11.2025</span>
          </div>

          <img
            className="rounded-xl shadow-lg w-full mb-12"
            src={blogPost.image}
            alt="Blog Image"
          />

          <article className="text-justify ">
            <p className="text-gray-700">{blogPost.content}</p>
          </article>
        </div>
      </section>
      <CommentSection comments={blogPost.comments}></CommentSection>
    </>
  );
}
