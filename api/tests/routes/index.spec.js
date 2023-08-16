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

const userId = "cc7c62d8-1244-45f0-915d-2ddbea577d82"

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
            const res = await request.post('/users/login').send({ email: "lu@gmail.com", password: "Password3"});
            expect(res.statusCode).to.equal(200);
        });
    
        it("should respond with status: 404 when invalid user info is provided", async () => {
            const res = await request.post('/users/login').send({ email: "lasfsdu@gmaildasd.com", password: "Pasasdsxc345sword3"});
            expect(res.statusCode).to.equal(404); 
        });
    });

    describe('POST /users/pokedexFull', () => {
        it('should get user pokedex successfully', async () => {
          const response = await request.post('/users/pokedexFull').send({ userId });
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('array'); 
        });
    
        it('should return 404 for invalid userId', async () => {
          const userId = '7458'; 
          const response = await request.post('/getPokedex').send({ userId });
          expect(response.status).to.equal(404);
        });
      });
    
     
      describe('DELETE /users/pokedex', () => {
        it('should delete a pokemon from user pokedex', async () => {
          const id = '815'; 
          const response = await request.delete('/users/pokedex').send({ id, userId });
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('array');
        });
    
        it('should return 404 for invalid userId or id', async () => {
          const userId = '4523';
          const id = '98563'; 
          const response = await request.delete('/users/pokedex').send({ id, userId });
    
          expect(response.status).to.equal(404);
        });
      });
    
     
      describe('POST /users/pokedex', () => {
        it('should add a pokemon to user pokedex', async () => {
          const id = '25'; 
          const response = await request(request).post('/users/pokedex').send({ id, userId });
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('array'); 
        });
    
        it('should return 404 for invalid userId or id', async () => {
          const userId = '8452'; 
          const id = '98542'; 
          const response = await request(request).post('/users/pokedex').send({ id, userId });
          expect(response.status).to.equal(404);
        });
      });
});    


