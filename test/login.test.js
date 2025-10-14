const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();

describe('Login', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com um token em string quando usar credenciais válidas', async () => {
            const response = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    'username': "cassio.patrizzi",
                    'senha': "121314"
                    });

            expect(response.status).to.equal(200);
            expect(response.body.token).to.be.a('string');
        });
    });
});