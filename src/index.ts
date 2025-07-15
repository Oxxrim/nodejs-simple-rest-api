import express from 'express';
import dotenv from 'dotenv';
import logger from './utils/logger';
import apiRoutes from './routes/api';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
