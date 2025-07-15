import { Request, Response } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

export const healthCheck = (req: Request, res: Response) => {
    res.status(200).json({ status: 'ok' });
};

export const echo = (req: Request, res: Response) => {
    res.status(200).json({ received: req.body });
};

export const getVersion = (req: Request, res: Response) => {
    const packageJson = JSON.parse(
        readFileSync(join(__dirname, '../../package.json'), 'utf-8')
    );
    res.status(200).json({ version: packageJson.version });
};
