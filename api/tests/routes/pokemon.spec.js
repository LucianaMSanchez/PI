/* eslint-disable import/no-extraneous-dependencies */
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
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

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons/815', () => {
    it('should get 200', () =>
      agent.get('/pokemons/815').expect(200)
    );
  });
});
