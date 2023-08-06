const validation = (pokeData) => {
    let errores = {};
    const regex= new RegExp(/^[^\d\s]+$/u);
    const regex2= new RegExp(/^\d+$/);

    
    if (!pokeData.id) {
        errores.name= "Your pokemon must have an id higher than 1821";
    }
    
    if (!pokeData.name) {
        errores.name= "Your pokémon must have a name";
    }
    
    if (!regex.test(pokeData.name)) {
        errores.name = "The name must not have any numbers";
    }

    if (pokeData.name.length > 15) {
        errores.name = "The name must have less than 15 characters";
    }

    if (!pokeData.hitPoints) {
        errores.hitPoints = "All stats must be completed";
    }

    if (!regex2.test(pokeData.hitPoints)) {
        errores.hitPoints = "HitPoints must be a number";
    }

    if (pokeData.hitPoints < 0 || pokeData.hitPoints > 100) {
        errores.hitPoints = "HitPoints must be between 0 and 100";
    }

    if (!pokeData.attack) {
        errores.attack = "All stats must be completed";
    }

    if (!regex2.test(pokeData.attack)) {
        errores.attack = "Attack must be a number";
    }

    if (pokeData.attack < 0 || pokeData.attack > 100) {
        errores.attack = "Attack must be between 0 and 100";
    }

    if (!pokeData.defense) {
        errores.defense = "All stats must be completed";
    }

    if (!regex2.test(pokeData.defense)) {
        errores.defense = "Defense must be a number";
    }

    if (pokeData.defense < 0 || pokeData.defense > 100) {
        errores.defense = "Defense must be between 0 and 100";
    }

    if (!pokeData.speed) {
        errores.speed = "All stats must be completed";
    }

    if (!regex2.test(pokeData.speed)) {
        errores.speed = "Speed must be a number";
    }
    
    if (pokeData.speed < 0 || pokeData.speed > 100) {
        errores.speed = "Speed must be between 0 and 100";
    }

    if (!pokeData.height) {
        errores.height = "Height must be completed";
    }

    if (!regex2.test(pokeData.height)) {
        errores.height = "Height must be a number";
    }
    
    if (pokeData.height < 0 || pokeData.height > 100) {
        errores.height = "Height must be between 0 and 100";
    }

    if (!pokeData.weight) {
        errores.weight = "Weight must be completed";
    }

    if (!regex2.test(pokeData.weight)) {
        errores.weight = "Weight must be a number";
    }
    
    if (pokeData.weight < 0 || pokeData.weight > 100) {
        errores.weight = "Weight must be between 0 and 100";
    }

    if (!pokeData.image) {
        errores.image = "Your pokémon must have an image";
    }
    
    
    return errores;
    };
    
    export default validation;