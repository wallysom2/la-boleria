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

const orderRepository = {
   getClientById,
   getCakeById,
   insertOrder
}

export default orderRepository;