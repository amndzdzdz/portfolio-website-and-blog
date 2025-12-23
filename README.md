# Portfolio Website Template + Blog

![CI](https://github.com/amndzdzdz/portfolio-website-and-blog/actions/workflows/frontend-ci.yml/badge.svg)
![CI](https://github.com/amndzdzdz/portfolio-website-and-blog/actions/workflows/backend-ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![npm](https://img.shields.io/npm/v/my-package.svg)

I've started this project because my brother was in need of a website that displays his resume, but in a more open and chilled down way compared to linkedin. Additionally, he wanted an integrated blog in order to have a motivation to write and publish financial articles. I've felt like open-sourcing the code so that anyone who would like to a have a portfolio website with a blog could have one. Btw, all text is written myself but I've run chatgpt to refine some of my spelling.

## Portfolio-like landing page

The landing page greets you with a nice hero section and below starts directly with a short non-formal introduction of yourself, what you do, your hobbies and anything else you'd like to tell about yourself.

Underneath that you can showcase your previous work experience and add anything you'd like. You can make it a linkedin-style bulletpoints-filled card or less formal with just text that comes to your mind. The last section is the academic record. Similar to the previous section.

Last there is the contact form. Anyone can contact you through this. Make sure to read the setup section to set this up. If you don't want or need this, you can simply remove it.

[![Demo Video](assets/landing_page.png)](videos/landing_page.mp4)

The blog section starts with a hero that you can use to tell about your reasons for creating the blog, what readers can expect or how often you will publish an article. After that your articles are listed that you can click on and read about certain articles. Once clicked you will land on the blog articles that is followed by a comment-section where users can write comments.

[![Demo Video](assets/blog.png)](videos/blog.mp4)

If you want to publish/modify an existing post you would need to login under localhost:PORT/login. Since the login was only meant for my brother, the email and password must match what is specified in backend/.env. After that you can simply create or modify a post, which is very simplistic and straight forward.

[![Demo Video](assets/admin_pages.png)](videos/admin_pages.mp4)

# Setup
