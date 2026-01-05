import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { checkAuthentication } from '../api/authApi';
import { MemoryRouter } from 'react-router-dom';
import CreatePost from './CreatePost';

vi.mock('../api/authApi', () => ({
  checkAuthentication: vi.fn(),
}));

vi.mock('suneditor-react', () => {
  return {
    __esModule: true,
    default: ({ onChange, setContents }: any) => (
      <div
        data-testid="content"
        contentEditable
        suppressContentEditableWarning
        onInput={(e) => onChange?.(e.currentTarget.textContent)}
      >
        {setContents}
      </div>
    ),
    buttonList: { complex: [] },
  };
});

describe('Create post page', () => {
  it('Test user interaction according to comments', async () => {
    vi.mocked(checkAuthentication).mockResolvedValue({ ok: true } as Response);
    // Render page and check if button is disabled
    render(
      <MemoryRouter>
        <CreatePost></CreatePost>
      </MemoryRouter>,
    );
    await waitFor(() => {
      expect(screen.getByRole('button')).toBeDisabled();
    });
    // Fill out everything and check if button is enabled
    await userEvent.type(screen.getByTestId('title'), 'Test');
    await userEvent.type(screen.getByTestId('image'), 'Test');
    await userEvent.type(screen.getByTestId('timeToRead'), '5');
    await userEvent.type(screen.getByTestId('caption'), 'Test');
    await userEvent.type(screen.getByTestId('category'), 'Test');
    await userEvent.type(screen.getByTestId('content'), 'Test');
    await waitFor(() => {
      expect(screen.getByRole('button')).toBeEnabled();
    });

    // Remove one field and check if button is disabled
    await userEvent.clear(screen.getByTestId('title'));
    await waitFor(() => {
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });
});
