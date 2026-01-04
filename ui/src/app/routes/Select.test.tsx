import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { checkAuthentication } from '../api/authApi';
import { MemoryRouter } from 'react-router-dom';
import Select from './Select';

vi.mock('../api/authApi', () => ({
  checkAuthentication: vi.fn(),
}));

describe('Select page', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('Stays on page if authenticated', async () => {
    vi.mocked(checkAuthentication).mockResolvedValue({ ok: true } as Response);
    render(
      <MemoryRouter>
        <Select></Select>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByRole('link', { name: 'Create new Blog Post' }));
    });
  });

  it('Goes back to landing page if unauthenticated', async () => {
    vi.mocked(checkAuthentication).mockResolvedValue({ ok: false } as Response);
    render(
      <MemoryRouter>
        <Select></Select>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(window.location.pathname).toBe('/');
    });
  });
});
