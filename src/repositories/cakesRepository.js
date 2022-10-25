import db  from "../db/database.js";

async function getCakeByName(name) {
    return db.query(`SELECT * FROM cakes WHERE name = $1 `, [name]);
  }

async function insertCake ({
    name,
    price,
    image,
    description 
}){

const result = await db.query 
(`INSERT INTO cakes (name, price, image, description)
 VALUES ($1, $2, $3, $4);`,
[ name, price, image, description ]);

return result;
}

const cakesRepository = {
    getCakeByName,
    insertCake

}

export default cakesRepository;

