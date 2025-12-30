import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import CommentForm from './CommentForm';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';

describe('Contact form', () => {
  afterEach(() => {
    cleanup();
  });

  it('Form button is disabled if no input field is filled', () => {
    render(<CommentForm></CommentForm>);
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeDefined();
    expect(submitButton).toBeDisabled();
  });

  it('Form button is disabled if only one input field is filled', async () => {
    render(<CommentForm></CommentForm>);
    const submitButton = screen.getByRole('button', { name: /Send/i });
    const nameInput = screen.getByPlaceholderText('Your name');
    const messageInput = screen.getByPlaceholderText(
      'What do you want to tell me?',
    );
    expect(nameInput).toBeDefined();
    expect(messageInput).toBeDefined();
    expect(submitButton).toBeDefined();

    // name filled out only
    await userEvent.type(nameInput, 'John Doe');
    expect(submitButton).toBeDisabled();
    await userEvent.clear(nameInput);

    // Message filled out only
    await userEvent.type(messageInput, 'Test message');
    expect(submitButton).toBeDisabled();
  });

  it('Form button is enabled if both input fields are filled', async () => {
    render(<CommentForm></CommentForm>);
    const submitButton = screen.getByRole('button', { name: /Send/i });
    const nameInput = screen.getByPlaceholderText('Your name');
    const messageInput = screen.getByPlaceholderText(
      'What do you want to tell me?',
    );
    expect(nameInput).toBeDefined();
    expect(messageInput).toBeDefined();
    expect(submitButton).toBeDefined();
    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(messageInput, 'test message');
    expect(submitButton).toBeEnabled();
  });
});
