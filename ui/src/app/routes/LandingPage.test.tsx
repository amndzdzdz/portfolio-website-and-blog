import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import LandingPage from '../../app/routes/LandingPage';
import Blog from '../../app/routes/Blog';
import Navbar from '../../components/navbar/Navbar';

describe('Landing-page', () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = vi.fn();
  });

  afterEach(() => {
    cleanup();
  });

  it('Renders the navbar with four buttons', () => {
    render(
      <MemoryRouter>
        <Navbar></Navbar>
        <LandingPage></LandingPage>
      </MemoryRouter>,
    );
    expect(screen.getByRole('link', { name: 'John Doe' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument();
  });

  it('Scrolls to the hero section upon clicking Contact', async () => {
    render(
      <MemoryRouter>
        <Navbar></Navbar>
        <LandingPage></LandingPage>
      </MemoryRouter>,
    );
    const heroLink = screen
      .getAllByRole('link', { name: 'John Doe' })
      .find((link) => link.getAttribute('href') === '/#hero-section');

    expect(heroLink).toBeDefined();
    await userEvent.click(heroLink!);
    await waitFor(() => {
      expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
    });
  });

  it('Scrolls to about section upon clicking About', async () => {
    render(
      <MemoryRouter>
        <Navbar></Navbar>
        <LandingPage></LandingPage>
      </MemoryRouter>,
    );
    const heroLink = screen
      .getAllByRole('link', { name: 'About' })
      .find((link) => link.getAttribute('href') === '/#about-section');

    expect(heroLink).toBeDefined();
    await userEvent.click(heroLink!);
    await waitFor(() => {
      expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
    });
  });

  it('Scrolls to contact section upon clicking Contact', async () => {
    render(
      <MemoryRouter>
        <Navbar></Navbar>
        <LandingPage></LandingPage>
      </MemoryRouter>,
    );
    const heroLink = screen
      .getAllByRole('link', { name: 'Contact' })
      .find((link) => link.getAttribute('href') === '/#contact-section');

    expect(heroLink).toBeDefined();
    await userEvent.click(heroLink!);
    await waitFor(() => {
      expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
    });
  });

  it('Goes to blog section upon clicking Blog', async () => {
    render(
      <MemoryRouter>
        <Navbar></Navbar>
        <LandingPage></LandingPage>
        <Blog></Blog>
      </MemoryRouter>,
    );
    const heroLink = screen
      .getAllByRole('link', { name: 'Blog' })
      .find((link) => link.getAttribute('href') === '/blog#blog-hero');
    expect(heroLink).toBeDefined();
    expect(heroLink).toHaveAttribute('href', '/blog#blog-hero');
    await userEvent.click(heroLink!);
  });

  it('Brings the user to the about section', async () => {
    render(
      <MemoryRouter>
        <LandingPage></LandingPage>
      </MemoryRouter>,
    );
    const button = screen
      .getAllByRole('link', { name: 'Get to know me' })
      .find((link) => link.getAttribute('href') === '/#about-section');
    expect(button).toBeDefined();
    await userEvent.click(button!);
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });
});
