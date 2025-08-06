import logger from '../utils/logger';
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

export const getProductByArticle = async (req: Request, res: Response) => {
  const { article } = req.params;

  try {
    const product = await prisma.product.findUnique({ where: { article } });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Error fetching product' });
  }
};
