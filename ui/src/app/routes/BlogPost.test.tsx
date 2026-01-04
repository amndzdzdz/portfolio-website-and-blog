import { afterEach, expect } from 'vitest';
import { describe, it, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BlogPost from './BlogPost';
import { getComments } from '../api/commentApi';
import { getBlogPostById } from '../api/blogPostApi';

vi.mock('../api/commentApi.ts', () => ({
  getComments: vi.fn(),
}));

vi.mock('../api/blogPostApi.ts', () => ({
  getBlogPostById: vi.fn(),
}));

describe('Commentsection', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('Fetches and displays comments', async () => {
    (getBlogPostById as any).mockResolvedValueOnce({
      blogPost: {
        title: 'Test title',
        timeToRead: '5',
        image: 'test',
        content: 'Test content',
      },
    });
    (getComments as any).mockResolvedValueOnce({
      comments: [
        {
          blogPostId: '1',
          name: 'Comment 1',
          message: 'Message 1',
          date: '2025-12-21T14:30:00.000Z',
        },
        {
          blogPostId: '2',
          name: 'Comment 2',
          message: 'Message 2',
          date: '2025-12-21T14:30:00.000Z',
        },
      ],
    });
    render(
      <MemoryRouter>
        <BlogPost></BlogPost>
      </MemoryRouter>,
    );
    await waitFor(() => {
      expect(screen.getByText('Comment 1')).toBeInTheDocument();
      expect(screen.getByText('Comment 2')).toBeInTheDocument();
    });
  });

  it('Fetches and displays blog post', async () => {
    (getBlogPostById as any).mockResolvedValueOnce({
      blogPost: {
        title: 'Test title',
        timeToRead: '5',
        image: 'test',
        content: 'Test content',
      },
    });
    (getComments as any).mockResolvedValueOnce({
      comments: [],
    });
    render(
      <MemoryRouter>
        <BlogPost></BlogPost>
      </MemoryRouter>,
    );
    await waitFor(() => {
      expect(screen.getByText('Test title')).toBeInTheDocument();
    });
  });
});
