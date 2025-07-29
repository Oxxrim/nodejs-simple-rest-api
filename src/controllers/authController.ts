import { Request, Response } from 'express';
import * as authService from '../services/authService';

export const register = async (req: Request, res: Response) => {
  const result = await authService.registerUser(req.body);
  res.status(result.status).json(result.data);
};

export const login = async (req: Request, res: Response) => {
  const result = await authService.loginUser(req.body);
  res.status(result.status).json(result.data);
};
