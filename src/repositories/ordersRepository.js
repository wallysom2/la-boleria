import db  from "../db/database.js";

async function getClientById(id) {
    return db.query(`SELECT * FROM clients WHERE id = $1 `, [id]);
}

async function getCakeById(id) {
    return db.query(`SELECT * FROM cakes WHERE id = $1 `, [id]);
}

async function insertOrder({ clientId, cakeId, quantity, totalPrice, createdAt }) {
    return db.query(
      `INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice", "createdAt") VALUES ($1, $2, $3, $4, $5)`,
      [clientId, cakeId, quantity, totalPrice, createdAt]
    );
  }

async function getOrders () {
    const allOrders = await db.query (
    `
    SELECT o.id AS "orderId", o."clientId", cl.name as "clientName", cl.address AS "clientAddress", cl.phone AS "clientPhone", o."cakeId", ca.name AS "cakeName", ca.price AS "cakePrice", ca.description AS "cakeDescription", ca.image AS "cakeImage",
    o.quantity, o.quantity, TO_CHAR(o."createdAt", 'YYYY-MM-DD HH24:MI') AS "createdAt", o."totalPrice" FROM orders o JOIN clients cl ON o."clientId" = cl.id JOIN cakes ca ON o."cakeId" = ca.id
    `
    );
    return allOrders.rows;
}

const orderRepository = {
   getClientById,
   getCakeById,
   insertOrder,
   getOrders
}

export default orderRepository;