const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
    it('should return CI/CD demo message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('CI/CD demo');
    });
});