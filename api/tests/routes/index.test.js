const server = require('../src/server');
const session = require('supertest');
const request = session(server);

const pokemon = {
    id: 815,
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

describe("Test de RUTAS", () => {

    describe('GET /pokemons/:id', () => {

it('Responde con status: 200', async ()=>{
    const res = await request.get('/rickandmorty/pokemons/1');
    expect(res.statusCode).toBe(200);
});

it('Responde un objeto con las propiedades: "id", "name", "hitPoints", "attack", "defense", "speed", "height", "weight", "types" e "image"', async ()=>{
    const res = await request.get('/pokemons/1');
    for (const prop in pokemon){
        expect(res.body).toHaveProperty(prop);
        };
});

it('Si hay un error responde con status: 404', async ()=>{
    const res = await request.get('/pokemons/458236lk');
    expect(res.statusCode).toBe(404);
});
});

    describe("GET /users/login", () => {

it("Responde con un userId cuando envia info correcta del usuario", async ()=>{
    const res = await request.get('/users/login?email=lulutcht@hotmail.com&password=Password3');
    const userId = {userId};
    expect(res.body).toEqual(userId);
});

it("Responde con un estado 404 cuando envia info incorrecta del usuario", async ()=>{
    const res = await request.get('/users/login?luluht@hotmail.com&password=Pas56ord3');
    expect(res.statusCode).toBe(404);
});
});

    describe("POST /users/pokedex", () => {

it("Debe guardar el pokémon en el arreglo de pokédex", async ()=>{
    const res = await request.post('/users/pokedex').send(pokemon);
    expect(res.body).toContainEqual(pokemon);
});
    
it("Debe guardar el nuevo pokémon en pokédex sin modificar el arreglo original", async ()=>{
    pokemon.id = 675;
    const res = await request.post('/users/pokedex').send(pokemons);
    expect(res.body.length).toBe(2);
});
});

describe("DELETE /users/pokedex/:id", () => {

    it("Si no hay pokémon con el id solicitado, devuelve el arreglo original sin modificar", async ()=>{
        const res = await request.delete('/users/pokedex/3');
        expect(res.body.length).toBe(2);
    });
        
    it("Si hay pokémon con el id enviado, devuelve el arreglo original sin sin el personaje con ese id", async ()=>{
        const res = await request.delete('/users/pokedex/675');
        expect(res.body.length).toBe(1);
    });
    });

});