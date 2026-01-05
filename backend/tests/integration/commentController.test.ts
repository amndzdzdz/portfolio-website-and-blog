import { afterEach } from 'node:test';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { clearTestDB, closeTestDB, connectTestDB } from '../setup/db';
import request from 'supertest';
import app from '../../src/app';

describe('Comment controller', () => {
  beforeAll(async () => {
    await connectTestDB();
  });
  afterEach(async () => {
    await clearTestDB();
  });
  afterAll(async () => {
    await closeTestDB();
  });
  describe('Get Comments', () => {
    it('throws 400 if id is invalid', async () => {
      const res = await request(app).get('/comments/randomid');
      expect(res.status).toBe(400);
    });

    it('throws 404 if id is not in database', async () => {
      const res = await request(app).get('/comments/507f191e810c19729de860ea');
      expect(res.status).toBe(404);
    });
    it('throws 200 if valid id is given', async () => {
      const agent = request.agent(app);

      // Log in
      const loginRes = await agent
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(loginRes.status).toBe(200);

      // Create blog post
      const createBlogPostRes = await agent.post('/blogs').send({
        title: 'title',
        caption: 'caption',
        category: 'category',
        date: '2025-12-22T12:20:26Z',
        timeToRead: 5,
        image: 'image',
        content: 'content',
      });
      expect(createBlogPostRes.status).toBe(200);

      // Get blogpost by id
      const id = createBlogPostRes.body['blogPost']._id;

      // Add comments to it
      const createCommentRes = await agent.post(`/comments/${id}`).send({
        name: 'John Doe',
        message: 'Hello World!',
        date: '2025-12-22T12:20:26Z',
      });
      expect(createCommentRes.status).toBe(200);

      // Fetch comments
      const getCommentsRes = await agent.get(`/comments/${id}`);
      expect(getCommentsRes.status).toBe(200);
    });
    it('outputs empty list if no comments are found', async () => {
      const agent = request.agent(app);

      // Log in
      const loginRes = await agent
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(loginRes.status).toBe(200);

      // Create blog post
      const createBlogPostRes = await agent.post('/blogs').send({
        title: 'title',
        caption: 'caption',
        category: 'category',
        date: '2025-12-22T12:20:26Z',
        timeToRead: 5,
        image: 'image',
        content: 'content',
      });
      expect(createBlogPostRes.status).toBe(200);

      // Get blogpost by id
      const id = createBlogPostRes.body['blogPost']._id;

      // Fetch comments
      const getCommentsRes = await agent.get(`/comments/${id}`);
      expect(getCommentsRes.body['comments']).toStrictEqual([]);
    });
  });

  describe('Create Comment', () => {
    it('throws 400 if name, email or date are missing', async () => {
      const agent = request.agent(app);

      // Log in
      const loginRes = await agent
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(loginRes.status).toBe(200);

      // Create blog post
      const createBlogPostRes = await agent.post('/blogs').send({
        title: 'title',
        caption: 'caption',
        category: 'category',
        date: '2025-12-22T12:20:26Z',
        timeToRead: 5,
        image: 'image',
        content: 'content',
      });
      expect(createBlogPostRes.status).toBe(200);

      // Get blogpost by id
      const id = createBlogPostRes.body['blogPost']._id;

      // Add comments to it
      const createCommentRes = await agent.post(`/comments/${id}`).send({
        message: 'Hello World!',
        date: '2025-12-22T12:20:26Z',
      });
      expect(createCommentRes.status).toBe(400);
    });
    it('throws 400 if no id request param is given', async () => {
      const agent = request.agent(app);

      // Log in
      const loginRes = await agent
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(loginRes.status).toBe(200);

      // Create blog post
      const createBlogPostRes = await agent.post('/blogs').send({
        title: 'title',
        caption: 'caption',
        category: 'category',
        date: '2025-12-22T12:20:26Z',
        timeToRead: 5,
        image: 'image',
        content: 'content',
      });
      expect(createBlogPostRes.status).toBe(200);

      // Add comments to it
      const createCommentRes = await agent.post(`/comments/`).send({
        name: 'John Doe',
        message: 'Hello World!',
        date: '2025-12-22T12:20:26Z',
      });
      expect(createCommentRes.status).toBe(404);
    });
    it('throws 200 if name, email, date and id are valid', async () => {
      const agent = request.agent(app);

      // Log in
      const loginRes = await agent
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(loginRes.status).toBe(200);

      // Create blog post
      const createBlogPostRes = await agent.post('/blogs').send({
        title: 'title',
        caption: 'caption',
        category: 'category',
        date: '2025-12-22T12:20:26Z',
        timeToRead: 5,
        image: 'image',
        content: 'content',
      });
      expect(createBlogPostRes.status).toBe(200);

      // Get blogpost by id
      const id = createBlogPostRes.body['blogPost']._id;

      // Add comments to it
      const createCommentRes = await agent.post(`/comments/${id}`).send({
        name: 'John Doe',
        message: 'Hello World!',
        date: '2025-12-22T12:20:26Z',
      });
      expect(createCommentRes.status).toBe(200);
    });
  });
});
