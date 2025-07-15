import request from 'supertest';
import express from 'express';
import routes from '../src/routes/api';

const app = express();
app.use(express.json());
app.use('/api', routes);

describe('Echo API', () => {
    it('should respond with status ok on /health', async () => {
        const res = await request(app).get('/api/health');
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('ok');
    });

    it('should echo back the posted JSON', async () => {
        const payload = { greeting: 'Hello' };
        const res = await request(app).post('/api/echo').send(payload);
        expect(res.statusCode).toBe(200);
        expect(res.body.received).toEqual(payload.greeting);
    });

    it('should return version from package.json', async () => {
        const res = await request(app).get('/api/version');
        expect(res.statusCode).toBe(200);
        expect(res.body.version).toBeDefined();
        expect(res.body.version).toEqual('1.0.0');
    });
});
