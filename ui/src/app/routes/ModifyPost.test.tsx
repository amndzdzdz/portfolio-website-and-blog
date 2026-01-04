import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { checkAuthentication } from '../api/authApi';
import ModifyPost from './ModifyPost';
import { getBlogPostById, getBlogPostTitles } from '../api/blogPostApi';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

vi.mock('../api/authApi', () => ({
  checkAuthentication: vi.fn(),
}));

vi.mock('../api/blogPostApi', () => ({
  getBlogPostTitles: vi.fn(),
  getBlogPostById: vi.fn(),
}));

vi.mock('suneditor-react', () => {
  return {
    __esModule: true,
    default: (props: any) => (
      <div data-testid="content">{props.setContents}</div>
    ),
    buttonList: { complex: [] },
  };
});

describe('Modify Post page', () => {
  it('Test user interaction as specified in the comments', async () => {
    // Mock apis
    vi.mocked(checkAuthentication).mockResolvedValue({ ok: true } as Response);
    (getBlogPostTitles as any).mockResolvedValueOnce({
      blogPostTitles: [
        { _id: '1', title: 'Title 1' },
        { _id: '2', title: 'Titlte 2' },
      ],
    });
    (getBlogPostById as any).mockResolvedValueOnce({
      blogPost: {
        title: 'Test',
        caption: 'Test',
        timeToRead: 5,
        image: 'Test',
        category: 'Test',
        content: 'Test',
        date: 'Test',
      },
    });
    // Render
    render(
      <MemoryRouter>
        <ModifyPost></ModifyPost>
      </MemoryRouter>,
    );
    // Check if button disabled
    await waitFor(() => {
      expect(screen.getByText('Update blog post')).toBeDisabled();
      expect(screen.getByText('Delete blog post')).toBeDisabled();
    });
    // Select one title & check if all fields are filled
    await userEvent.selectOptions(screen.getByRole('combobox'), 'Title 1');
    await waitFor(() => {
      expect(screen.getByTestId('title').getAttribute('value')).toBe('Test');
    });
    await waitFor(() => {
      expect(screen.getByTestId('timeToRead').getAttribute('value')).toBe('5');
    });
    await waitFor(() => {
      expect(screen.getByTestId('image').getAttribute('value')).toBe('Test');
    });
    await waitFor(() => {
      expect(screen.getByTestId('caption').getAttribute('value')).toBe('Test');
    });
    await waitFor(() => {
      expect(screen.getByTestId('category').getAttribute('value')).toBe('Test');
    });
    await waitFor(() => {
      expect(screen.getByTestId('content')).toHaveTextContent('Test');
    });
    // Check if buttons are enabled
    await waitFor(() => {
      expect(screen.getByText('Update blog post')).toBeEnabled();
      expect(screen.getByText('Delete blog post')).toBeEnabled();
    });
    // Remove  a field
    userEvent.clear(screen.getByTestId('category'));
    // Check if button can be clicked
    await waitFor(() => {
      expect(screen.getByText('Update blog post')).toBeDisabled();
      expect(screen.getByText('Delete blog post')).toBeDisabled();
    });
  });
});
