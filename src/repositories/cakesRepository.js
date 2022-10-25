import db  from "../db/database.js";

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

export default insertCake ;

