const server = require('../../src/app.js');
const session = require('supertest');
const request = session(server);
const { expect } = require('chai');

const pokemon = {
    id: "815",
    name: "potato",
    hitPoints: 30,
    attack: 75,
    defense: 87,
    speed: 54,
    height: 75,
    weight: 87,
    types: ["grass", "water"],
    image: "image.jpg"
};

const userId = "25cde654-084e-41fc-a547-df3f212203a1"

describe("Test de RUTAS", () => {

    describe('GET /pokemons/:id', () => {

        it('should respond with status: 200', async () => {
            const res = await request.get('/pokemons/1');
            expect(res.statusCode).to.equal(200); 
        });

        it('should respond with an object containing specified properties', async () => {
            const res = await request.get('/pokemons/1');
            for (const prop in pokemon) {
                expect(res.body).to.have.property(prop); 
            }
        });

        it('should respond with status: 404 if the ID is invalid', async () => {
            const res = await request.get('/pokemons/458236lk');
            expect(res.statusCode).to.equal(404); 
        });
    });

    describe("POST /users/login", () => {

        it("should respond with a status 200 when valid user info is provided", async () => {
            const res = (await request.post('/users/login')).send({ email: "lu@gmail.com", password: "Password3"});
            expect(res.statusCode).to.equal(200);
        });

        it("should respond with status: 404 when invalid user info is provided", async () => {
            const res = await request.post('/users/login').send({ email: "lasfsdu@gmaildasd.com", password: "Pasasdsxc345sword3"});
            expect(res.statusCode).to.equal(404); 
        });
    });
  
})