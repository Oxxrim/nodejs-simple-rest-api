import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../clients/prisma';
import { LoginInput, RegisterInput } from '../types/authTypes';

export const registerUser = async ({ name, login, password }: RegisterInput) => {
  const existing = await prisma.user.findUnique({ where: { login } });
  if (existing) {
    return { status: 409, data: { error: 'User already exists' } };
  }

  const hashed = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      login,
      password: hashed,
      role: 'USER'
    }
  });

  return {
    status: 201,
    data: { message: 'User registered' }
  };
};

export const loginUser = async ({ login, password }: LoginInput) => {
  const user = await prisma.user.findUnique({ where: { login } });
  if (!user) return { status: 401, data: { error: 'Invalid credentials' } };

  const match = await bcrypt.compare(password, user.password);
  if (!match) return { status: 401, data: { error: 'Invalid credentials' } };

  const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET!, {
    expiresIn: '1h'
  });

  return {
    status: 200,
    data: { token }
  };
};
