const { Router } = require('express');
const ownPokemonsRouter = require ('./ownPokemonsRouter')
const pokemonsRouter = require ('./pokemonsRouter')
const typesRouter = require ('./typesRouter')
const usersRouter = require ('./usersRouter')
const filterRouter = require ('./filterRouter')
const cardRouter = require ('./cardRouter')
const champsRouter = require ('./champsRouter')


const router = Router();

router.use("/ownPokemons", ownPokemonsRouter);
router.use("/pokemons", pokemonsRouter);
router.use("/types", typesRouter);
router.use("/users", usersRouter);
router.use("/filter", filterRouter);
router.use("/closeCard", cardRouter);
router.use("/champs", champsRouter);

module.exports = router;
