'use strict';
const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.server)
describe('server', () => {
    it(' 404 status', async () => {
        const response = await request.get('/randomRout');
        expect(response.status).toBe(404);
    });
    it(' 404 status', async () => {
        const response = await request.post('/person');
        expect(response.status).toBe(404);
    });

    it('show the welcome', async () => {
        let route = '/';
        const response = await request.get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Server Is Working');
    });

    it('should get an errors', async () => {
        const response = await request.get('/person?name=');
        expect(response.status).toEqual(500);
    });
    it(' There is a name in the query', async () => {
        const response = await request.get('/person?name=Mousa');
        expect(response.status).toEqual(200);
    });   
    it(' The name Should be Mousa', async () => {
        const response = await request.get('/person?name=Mousa');
        expect(response.body.name).toEqual('Mousa');
    });


});