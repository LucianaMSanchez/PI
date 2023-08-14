import images from "./images";

export const switchBackColor = (style, type) => {
    switch (type) {
        case "shadow":
            return style.backShadow;
        case "fire":
            return style.backFire;
        case "water":
            return style.backWater;
        case "dark":
            return style.backDark;
        case "bug":
            return style.backBug;
        case "dragon":
            return style.backDragon;
        case "electric":
            return style.backElectric;
        case "grass":
            return style.backGrass;
        case "poison":
            return style.backPoison;
        case "ice":
            return style.backIce;
        case "fighting":
            return style.backFighting;
        case "flying":
            return style.backFlying;
        case "unknown":
            return style.backUnknown;
        case "normal":
            return style.backNormal;
        case "fairy":
            return style.backFairy;
        case "psychic":
            return style.backPsychic;
        case "rock":
            return style.backRock;
        case "ground":
            return style.backGround;
        case "ghost":
            return style.backGhost;
        case "steel":
            return style.backSteel
        default:
            return "";
    }
};

export const switchImageRel = (style, type) => {
    switch (type) {
        case "shadow":
            return style.imageShadow;
        case "fire":
            return style.imageFire;
        case "water":
            return style.imageWater;
        case "dark":
            return style.imageDark;
        case "bug":
            return style.imageBug;
        case "dragon":
            return style.imageDragon;
        case "electric":
            return style.imageElectric;
        case "grass":
            return style.imageGrass;
        case "poison":
            return style.imagePoison;
        case "ice":
            return style.imageIce;
        case "fighting":
            return style.imageFighting;
        case "flying":
            return style.imageFlying;
        case "unknown":
            return style.imageUnknown;
        case "normal":
            return style.imageNormal;
        case "fairy":
            return style.imageFairy;
        case "psychic":
            return style.imagePsychic;
        case "rock":
            return style.imageRock;
        case "ground":
            return style.imageGround;
        case "ghost":
            return style.imageGhost;
        case "steel":
            return style.imageSteel
        default:
            return "";
    }
}

export const switchIcon = (type) => {
    switch (type) {
        case "shadow":
            return images.shadow;
        case "fire":
            return images.fire;
        case "water":
            return images.water;
        case "dark":
            return images.dark;
        case "bug":
            return images.bug;
        case "dragon":
            return images.dragon;
        case "electric":
            return images.electric;
        case "grass":
            return images.grass;
        case "poison":
            return images.poison;
        case "ice":
            return images.ice;
        case "fighting":
            return images.fighting;
        case "flying":
            return images.flying;
        case "unknown":
            return images.unknown;
        case "normal":
            return images.normal;
        case "fairy":
            return images.fairy;
        case "psychic":
            return images.psychic;
        case "rock":
            return images.rock;
        case "ground":
            return images.ground;
        case "ghost":
            return images.ghost;
        case "steel":
            return images.steel
        default:
            return "";
    }
}

