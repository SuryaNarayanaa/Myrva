import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_EXPIRY } from '../config/env';

export function hashPassword(password: string, salt: string): Promise<string> {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password.normalize(), salt, 64, (error, hash) => {
      if (error) reject(error)
      resolve(hash.toString("hex").normalize())
    })
  })
}

export async function comparePasswords({password,salt,hashedPassword}: 
    {password: string,salt: string,hashedPassword: string}) {
  const inputHashedPassword = await hashPassword(password, salt)

  return crypto.timingSafeEqual(
    Buffer.from(inputHashedPassword, "hex"),
    Buffer.from(hashedPassword, "hex")
  )
}

export function generateSalt() {
  return crypto.randomBytes(16).toString("hex").normalize()
}

export const generateToken = (payload: object) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY });
};

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
};

