import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

export const login = asyncHandler(async (req: Request, res: Response) => {
  const body = req.body;
  const key = process.env.jwtKey;
  const { email, password } = body;
  if (!email || !password) {
    res.status(400);
    throw new Error('Email and password is required!');
  }
  if (email === process.env.email && password === process.env.password) {
    jwt.sign({ body }, key!, { expiresIn: '2h' }, (err, token) => {
      if (err) {
        console.log(err);
      }
      res.status(200).send(token);
    });
  } else {
    res.status(400);
    throw new Error('Login data is wrong');
  }
});
