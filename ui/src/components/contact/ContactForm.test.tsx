import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import ContactForm from './ContactForm';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';

describe('Contact form', () => {
  afterEach(() => {
    cleanup();
  });

  it('Form button is disabled if no input field is filled', () => {
    render(<ContactForm title={'Mock form'}></ContactForm>);
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeDefined();
    expect(submitButton).toBeDisabled();
  });

  it('Form button is disabled if only one input field is filled', async () => {
    render(<ContactForm title={'Mock form'}></ContactForm>);
    const submitButton = screen.getByRole('button', { name: /Send/i });
    const emailInput = screen.getByPlaceholderText('Email');
    const messageInput = screen.getByPlaceholderText(
      'What do you want to tell me?',
    );
    expect(emailInput).toBeDefined();
    expect(messageInput).toBeDefined();
    expect(submitButton).toBeDefined();

    // Email filled out only
    await userEvent.type(emailInput, 'test@gmail.com');
    expect(submitButton).toBeDisabled();
    await userEvent.clear(emailInput);

    // Message filled out only
    await userEvent.type(messageInput, 'Test message');
    expect(submitButton).toBeDisabled();
  });

  it('Form button is enabled if both input fields are filled', async () => {
    render(<ContactForm title={'Mock form'}></ContactForm>);
    const submitButton = screen.getByRole('button', { name: /Send/i });
    const emailInput = screen.getByPlaceholderText('Email');
    const messageInput = screen.getByPlaceholderText(
      'What do you want to tell me?',
    );
    expect(emailInput).toBeDefined();
    expect(messageInput).toBeDefined();
    expect(submitButton).toBeDefined();
    await userEvent.type(emailInput, 'test@gmail.com');
    await userEvent.type(messageInput, 'test message');
    expect(submitButton).toBeEnabled();
  });
});
