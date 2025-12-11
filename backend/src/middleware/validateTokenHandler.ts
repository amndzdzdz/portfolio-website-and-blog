import { NextFunction, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import jwt, { VerifyErrors } from 'jsonwebtoken';

export const validateTokenHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if (!token) {
      res.status(400);
      throw new Error('No token in request!');
    }
    jwt.verify(
      token,
      process.env.jwtKey!,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (err: VerifyErrors | null, _decoded: object | string | undefined) => {
        if (err) {
          res.status(400).json({
            title: 'Authentication failed',
            error: 'err',
          });
        }
        next();
      },
    );
  },
);
