import jwt from 'jsonwebtoken';
import { environment } from '../config/environment.js';

export interface TokenPayload {
  userId: string;
  role: 'customer' | 'shop';
}

export function signToken(payload: TokenPayload, expiresIn: string | number = '7d'): string {
  return jwt.sign(payload, environment.jwtSecret, { expiresIn } as jwt.SignOptions);
}

export function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, environment.jwtSecret) as TokenPayload;
}
