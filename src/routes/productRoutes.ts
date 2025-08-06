import { Router } from 'express';
import { getAllProducts, getProductByArticle } from '../controllers/productController';

const router = Router();

router.get('/products', getAllProducts);
router.get('/products/:article', getProductByArticle);

export default router;
