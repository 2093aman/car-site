import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function generateToken(payload: object): string {
  // Increased to 7 days to prevent session expiry issues during editing
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      console.error('JWT Verification Error: Token Expired at', error.expiredAt);
    } else if (error instanceof jwt.JsonWebTokenError) {
      console.error('JWT Verification Error: Invalid Token -', error.message);
    } else {
      console.error('JWT Verification Error:', error);
    }
    return null;
  }
}