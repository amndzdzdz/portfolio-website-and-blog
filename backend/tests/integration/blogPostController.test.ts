import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { clearTestDB, closeTestDB, connectTestDB } from '../setup/db';
import { beforeEach } from 'node:test';
import request from 'supertest';
import app from '../../src/app';

describe('Blog post controller', () => {
  beforeAll(async () => {
    await connectTestDB();
  });
  afterAll(async () => {
    await closeTestDB();
  });
  beforeEach(async () => {
    await clearTestDB();
  });
  describe('Create a blog post controller', async () => {
    it('Returns 400 if one field is missing', async () => {
      const agent = request.agent(app);
      const loginRes = await agent
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(loginRes.status).toBe(200);
      const createBlogPostRes = await agent.post('/blogs').send({
        title: 'title',
        caption: 'caption',
        category: 'category',
        date: '2025-12-22T12:20:26Z',
        timeToRead: 5,
      });
      expect(createBlogPostRes.status).toBe(400);
    });
    it('Returns 200 if blog post was successfully created', async () => {
      const agent = request.agent(app);
      const loginRes = await agent
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(loginRes.status).toBe(200);
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
    });
  });
  describe('Get Blog post by id controller', () => {
    it('Returns 200 for a valid blog post', async () => {
      const agent = request.agent(app);
      const loginRes = await agent
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(loginRes.status).toBe(200);
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
      const id = createBlogPostRes.body['blogPost']._id;
      const getBlogPostByIdRes = await request(app).get(`/blogs/${id}`);
      expect(getBlogPostByIdRes.status).toBe(200);
    });
    it('Returns 400 if no blog id is provided', async () => {
      const agent = request.agent(app);
      const loginRes = await agent
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(loginRes.status).toBe(200);
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
      const getBlogPostByIdRes = await request(app).get(`/blogs`);
      expect(getBlogPostByIdRes.status).toBe(400);
    });
    it("Returns 404 if blog post can't be fetched from db", async () => {
      const agent = request.agent(app);
      const loginRes = await agent
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(loginRes.status).toBe(200);
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
      const getBlogPostByIdRes = await request(app).get(
        `/blogs/507f191e810c19729de860ea`,
      );
      expect(getBlogPostByIdRes.status).toBe(404);
    });
  });
  describe('Update blog post controller', () => {
    it('Returns 200 upon successfully updating blog post', async () => {
      const agent = request.agent(app);
      const loginRes = await agent
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(loginRes.status).toBe(200);
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
      const id = createBlogPostRes.body['blogPost']._id;
      const updateBlogPostRes = await agent.put('/blogs/').send({
        id: id,
        title: 'title',
        caption: 'caption',
        category: 'category',
        date: '2025-12-22T12:20:26Z',
        timeToRead: '5',
        image: 'image',
        content: 'content',
      });
      expect(updateBlogPostRes.status).toBe(200);
    });
    it('Returns 400 if a field is missing', async () => {
      const agent = request.agent(app);
      const loginRes = await agent
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(loginRes.status).toBe(200);
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
      const updateBlogPostRes = await agent.put('/blogs/').send({
        title: 'title',
        caption: 'caption',
        category: 'category',
        date: 'date',
        timeToRead: '5',
        image: 'image',
        content: 'content',
      });
      expect(updateBlogPostRes.status).toBe(400);
    });
    it('Returns 404 if blog post cant be fetched from db', async () => {
      const agent = request.agent(app);
      const loginRes = await agent
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(loginRes.status).toBe(200);
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
      const updateBlogPostRes = await agent.put('/blogs/').send({
        id: '507f191e810c19729de860ea',
        title: 'title',
        caption: 'caption',
        category: 'category',
        date: '2025-12-22T12:20:26Z',
        timeToRead: '5',
        image: 'image',
        content: 'content',
      });
      expect(updateBlogPostRes.status).toBe(404);
    });
  });
  describe('Delete blog post controller', () => {
    it('Returns 200 if successfully deleted blog post', async () => {
      const agent = request.agent(app);
      const loginRes = await agent
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(loginRes.status).toBe(200);
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
      const id = createBlogPostRes.body['blogPost']._id;
      const updateBlogPostRes = await agent.delete(`/blogs/${id}`).send({
        title: 'title',
        caption: 'caption',
        category: 'category',
        date: '2025-12-22T12:20:26Z',
        timeToRead: '5',
        image: 'image',
        content: 'content',
      });
      expect(updateBlogPostRes.status).toBe(200);
    });
    it('Returns 404 if id is not in request params', async () => {
      const agent = request.agent(app);
      const loginRes = await agent
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(loginRes.status).toBe(200);
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
      const updateBlogPostRes = await agent.delete('/blogs/').send({
        title: 'title',
        caption: 'caption',
        category: 'category',
        date: '2025-12-22T12:20:26Z',
        timeToRead: '5',
        image: 'image',
        content: 'content',
      });
      expect(updateBlogPostRes.status).toBe(404);
    });
  });
  describe('Get blog post previews controller', () => {
    it('Returns 200 if everything works fine', async () => {
      const agent = request.agent(app);
      const loginRes = await agent
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(loginRes.status).toBe(200);
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
      const blogPostPreviewsRes = await request(app).get(
        '/blogs?limit=15&after=2025-12-22T12:23:26Z',
      );
      expect(blogPostPreviewsRes.status).toBe(200);
      //9 blog posts are in the database
      expect(blogPostPreviewsRes.body['blogPosts'].length).toBe(9);
    });
    it('Returns 400 if either after or limit is missing', async () => {
      const agent = request.agent(app);
      const loginRes = await agent
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(loginRes.status).toBe(200);
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
      const blogPostPreviewsRes = await request(app).get(
        '/blogs?after=2025-12-22T12:23:26Z',
      );
      expect(blogPostPreviewsRes.status).toBe(400);
    });
    it('Sets the current date as new furthestDate if no blog posts exist', async () => {
      const agent = request.agent(app);
      const loginRes = await agent
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(loginRes.status).toBe(200);
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
      const blogPostPreviewsRes = await request(app).get(
        '/blogs?limit=0&after=2025-12-22T12:23:55.000Z',
      );
      const date = blogPostPreviewsRes.body['furthestDate'];
      expect(date).toBe('2025-12-22T12:23:55.000Z');
    });
  });
  describe('Get blog post titles controller', () => {
    it('Gets all possible blog titles', async () => {
      const agent = request.agent(app);
      const loginRes = await agent
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(loginRes.status).toBe(200);
      const createBlogPostRes = await agent.get('/blogs/titles');
      expect(createBlogPostRes.status).toBe(200);
    });
  });
});
