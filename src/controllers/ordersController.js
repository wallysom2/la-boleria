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

async function showOrders (req, res) {

    try{
        const orders = []
        const allOrders = await orderRepository.getOrders()
        if ( allOrders.rowCount == 0){
            return res.status(404).send([]);
        }
        
        for (let i=0; i < allOrders.length; i++){
            orders.push(
                {
                    clients: {
                        id:  allOrders[i].clientId,
                        name:  allOrders[i].clientName,
                        address:  allOrders[i].clientAddress,
                        phone:  allOrders[i].clientPhone
                    },
                    cake: {
                        id:  allOrders[i].cakeId,
                        name:  allOrders[i].cakeName,
                        price:  allOrders[i].cakePrice,
                        description:  allOrders[i].cakeDescription,
                        image:  allOrders[i].cakeImage
                    },
                    orderId: allOrders[i].orderId,
                    createdAt: allOrders[i].createdAt,
                    quantity: allOrders[i].quantity,
                    totalPrice: allOrders[i].totalPrice
                }
            )
            }
        return res.status(200).send(orders)
    }catch(error){
        console.log(error)
        return res.status(500).send("Nao foi possivel identificar as ordens de compra")
    }
}


const orderController = {
    newOrder,
    showOrders
 }
 
 export default orderController;
