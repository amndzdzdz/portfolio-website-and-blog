import { describe, it, expect, afterEach } from 'vitest';
import { clearTestDB, closeTestDB, connectTestDB } from '../setup/db';
import { beforeEach } from 'vitest';
import request from 'supertest';
import app from '../../src/app';

describe('user controller', () => {
  beforeEach(async () => {
    await connectTestDB();
  });
  afterEach(async () => {
    await clearTestDB();
    await closeTestDB();
  });

  describe('login', async () => {
    it('returns 200 if email and password are correct', async () => {
      const res = await request(app)
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(res.status).toBe(200);
    });

    it('returns 400 if email and password are missing or wrong', async () => {
      const res1 = await request(app)
        .post('/login')
        .send({ email: 'test@test.de', password: 'password123' });
      const res2 = await request(app)
        .post('/login')
        .send({ email: 'test@test.com' });
      expect(res2.status).toBe(400);
      expect(res1.status).toBe(400);
    });
  });

  describe('auth', async () => {
    it('returns 401 if no JWT is given', async () => {
      const res = await request(app).get('/login');
      expect(res.status).toBe(401);
    });

    it('returns 200 if correct JWT is given', async () => {
      const agent = request.agent(app);
      const loginRes = await agent
        .post('/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(loginRes.status).toBe(200);
      const authRes = await agent.get('/login');
      expect(authRes.status).toBe(200);
    });
  });
});
