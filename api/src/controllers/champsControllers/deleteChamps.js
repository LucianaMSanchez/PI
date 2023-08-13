

const deleteChamps = async (id, champs) => {
 

    const champsLeft = await champs.filter(champ => champ.id !== id)

    return champsLeft;
};


module.exports = deleteChamps;