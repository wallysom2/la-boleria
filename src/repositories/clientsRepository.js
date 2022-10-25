import db  from "../db/database.js";

async function insertClient ({
    name, 
    address, 
    phone 
}){

const result = await db.query 
(`INSERT INTO clients (name, address, phone)
 VALUES ($1, $2, $3);`,
[ name, address, phone ]);

return result;
}

const clientsRepository = {
    insertClient

}

export default clientsRepository;