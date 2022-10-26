import orderRepository from "../repositories/ordersRepository.js"
import dayjs from 'dayjs';

async function newOrder (req,res) {
    const { clientId, cakeId, quantity, totalPrice } = req.body;
    const createdAt = dayjs(Date.now()).format('YYYY-MM-DD HH:mm');

    try {
        const isValidClientId = await orderRepository.getClientById (clientId)
        if (isValidClientId.rowCount == 0) {
          return res.status(404).send("Cliente nao encontrado")
        }

        const isValidCakeId = await orderRepository.getCakeById (cakeId)
        if (isValidCakeId.rowCount == 0) {
          return res.status(404).send("Cake nao encontrado")
        }

        await orderRepository.insertOrder ({
            clientId, cakeId, quantity, totalPrice,createdAt
        });

        return res.sendStatus(201)
        
    } catch (error) {
        console.log (error)
        return res.status(500).send("Nao foi possivel criar essa ordem")
    }
}
export {
    newOrder
}