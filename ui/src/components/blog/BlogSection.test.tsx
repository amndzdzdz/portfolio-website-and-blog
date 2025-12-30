import { describe, it, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BlogSection from './BlogSection';
import { getBlogPostPreviews } from '../../app/api/blogPostApi';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/vitest';

vi.mock('../../app/api/blogPostApi', () => ({
  getBlogPostPreviews: vi.fn(),
}));

vi.mock('react-infinite-scroll-component', () => ({
  default: ({ children }: any) => <div>{children}</div>,
}));

describe('BlogSection', () => {
  it('Fetches and displays the blog preview', async () => {
    (getBlogPostPreviews as any).mockResolvedValueOnce({
      blogPosts: [
        {
          image: 'asdf',
          title: 'Test title 1',
          caption: 'Test caption 1',
          category: 'Test cat 1',
          _id: '12345',
        },
        {
          image: 'asfff',
          title: 'Test title 2',
          caption: 'Test caption 2',
          category: 'Test cat 2',
          _id: '12346',
        },
      ],
      furthestDate: '2024-01-01',
    });

    render(
      <MemoryRouter>
        <BlogSection />
      </MemoryRouter>,
    );
    expect(await screen.findByText('Test title 1')).toBeInTheDocument();
  });
});
