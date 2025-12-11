import type { BlogPost, BlogPostWithId } from '../../types/BlogPost';

export async function createBlogPost(data: BlogPost) {
  const res = await fetch('http://localhost:8080/blogs/', {
    method: 'POST',
    credentials: 'include',
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
    credentials: 'include',
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

export async function getBlogPostById(id: string) {
  const blogPosts = await fetch(`http://localhost:8080/blogs/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return blogPosts.json();
}

export async function deleteBlogPost(id: string) {
  const blogPosts = await fetch(`http://localhost:8080/blogs/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return blogPosts.json();
}

export async function updateBlogPost(data: BlogPostWithId) {
  const blogPosts = await fetch(`http://localhost:8080/blogs/`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return blogPosts.json();
}
