import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Login from './Login';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import { checkAuthentication } from '../api/authApi';

vi.mock('../api/authApi', () => ({
  checkAuthentication: vi.fn(),
  login: vi.fn(),
}));

describe('Contact form', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('Form button is disabled if no input field is filled', async () => {
    vi.mocked(checkAuthentication).mockResolvedValue({ ok: false } as Response);
    render(<Login />);
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeDisabled();
  });

  it('Form button is disabled if only one input field is filled', async () => {
    vi.mocked(checkAuthentication).mockResolvedValue({ ok: false } as Response);
    render(<Login />);
    const submitButton = screen.getByRole('button', { name: /send/i });
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    await userEvent.type(emailInput, 'test@gmail.com');
    expect(submitButton).toBeDisabled();
    await userEvent.clear(emailInput);
    await userEvent.type(passwordInput, 'Test message');
    expect(submitButton).toBeDisabled();
  });

  it('Form button is enabled if both input fields are filled', async () => {
    vi.mocked(checkAuthentication).mockResolvedValue({ ok: false } as Response);
    render(<Login />);
    const submitButton = screen.getByRole('button', { name: /send/i });
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    await userEvent.type(emailInput, 'test@gmail.com');
    await userEvent.type(passwordInput, 'test message');
    expect(submitButton).toBeEnabled();
  });

  it('Redirects upon already authenticated user', async () => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: {
        href: '',
        reload: vi.fn(),
      },
    });
    vi.mocked(checkAuthentication).mockResolvedValue({ ok: true } as Response);
    render(<Login />);
    await waitFor(() => {
      expect(window.location.href).toBe('/select');
    });
  });
});
