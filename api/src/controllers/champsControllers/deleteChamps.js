

const deleteChamps = async (id, champs) => 
 await champs.filter(champ => champ.id !== id)


module.exports = deleteChamps;