import cakesRepository from "../repositories/cakesRepository.js"

async function newCake (req,res) {
    const { name, price, image, description } = req.body;

    try {

        const isValidCakeName = await cakesRepository.getCakeByName (name)
        if (isValidCakeName.rowCount > 0) {
          return res.status(409).send("Nome ja existe")
        }

        await cakesRepository.insertCake ({
            name, price, image, description
        });
        res.sendStatus(201)
        
    } catch (error) {
        console.log (error)
        return res.status(500).send("deu ruim")
    }
}
export {
    newCake
}