import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

//@desc Post login data and get JWT back
//@route POST /login/
//@access public
export const login = asyncHandler(async (req: Request, res: Response) => {
  const body = req.body;
  const key = process.env.jwtKey;
  const { email, password } = body;
  if (!email || !password) {
    res.status(400);
    throw new Error('Email and password is required!');
  }
  if (email === process.env.email && password === process.env.password) {
    jwt.sign({ body }, key!, { expiresIn: '1d' }, (err, token) => {
      if (err) {
        console.log(err);
      }
      res
        .status(200)
        .cookie('token', token, {
          httpOnly: true,
          sameSite: 'lax',
          secure: false,
          maxAge: 1000 * 60 * 60 * 24,
        })
        .json({ response: 'Logged in Successfully!' });
    });
  } else {
    res.status(400);
    throw new Error('Login data is wrong');
  }
});
