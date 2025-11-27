import type { BlogPost } from '../../types/BlogPost';

export async function createBlogPost(data: BlogPost) {
  const res = await fetch('http://localhost:8080/blogs/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return res;
}

export async function fetchBlogPostTitles() {
  const blogPosts = await fetch('http://localhost:8080/blogs/titles/', {
    method: 'GET',
  });

  return blogPosts.json();
}
