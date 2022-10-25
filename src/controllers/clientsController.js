import clientsRepository from "../repositories/clientsRepository.js"

async function newClient (req,res) {
    const { name, address, phone } = req.body;

    try {
        await clientsRepository.insertClient ({
            name, address, phone 
        });
        res.sendStatus(201)
        
    } catch (error) {
        console.log (error)
        return res.status(500).send("Nao foi possivel adicionar novo cliente")
    }
}
export {
    newClient
}