import logger from '../utils/logger';
import { Request, Response } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

export const healthCheck = (req: Request, res: Response) => {
    logger.info('Health check');
    res.status(200).json({ status: 'ok' });
};

export const echo = (req: Request, res: Response) => {
    logger.info(`Received message: ${req.body.greeting}`);
    res.status(200).json({ received: req.body.greeting });
};

export const getVersion = (req: Request, res: Response) => {
    logger.info('Getting version');
    const packageJson = JSON.parse(
        readFileSync(join(__dirname, '../../package.json'), 'utf-8')
    );
    logger.info(`App version: ${packageJson.version}`);
    res.status(200).json({ version: packageJson.version });
};
