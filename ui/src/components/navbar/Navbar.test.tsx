import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Navbar from './Navbar';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import LandingPage from '../../app/routes/LandingPage';
import Blog from '../../app/routes/Blog';

describe('Navbar', () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = vi.fn();
  });

  it('Renders the navbar with four buttons', () => {
    render(
      <MemoryRouter>
        <Navbar></Navbar>
      </MemoryRouter>,
    );
    expect(
      screen.getByRole('link', { name: 'Joseph Dziri' }),
    ).toBeInTheDocument();
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
      .getAllByRole('link', { name: 'Joseph Dziri' })
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
    await userEvent.click(heroLink!);
    expect(window.location.pathname).toBe('/blog');
    expect(window.location.hash).toBe('#blog-hero');
  });
});
