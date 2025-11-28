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

export async function getBlogPostTitles() {
  const blogPosts = await fetch('http://localhost:8080/blogs/titles/', {
    method: 'GET',
  });
  return blogPosts.json();
}

export async function getBlogPostPreviews(limit: number, after?: string) {
  const blogPosts = await fetch(
    `http://localhost:8080/blogs/?after=${after}&limit=${limit}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return blogPosts.json();
}
