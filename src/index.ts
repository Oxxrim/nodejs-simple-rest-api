import express from 'express';
import dotenv from 'dotenv';
import logger from './utils/logger';
import apiRoutes from './routes/api';
import authRoutes from './routes/authRoutes';
import productRoutes from './routes/productRoutes';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/auth', authRoutes);
app.use(productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
