import insertCake from "../repositories/cakesRepository.js"

async function newCake (req,res) {
    const { name, price, image, description } = req.body;

    if (!name || !price|| !image|| !description){
        return res.status(400).send ("Preencha todos os campos")
    }

    try {
        await insertCake ({
            name, price, image, description
        });

        res.sendStatus (201)
        
    } catch (error) {
        console.log (error)
        return res.status(500).send("deu ruim")
    }

}

export {
    newCake
}