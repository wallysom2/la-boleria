CREATE TABLE cakes (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  price NUMERIC NOT NULL,
  image VARCHAR NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE clients (
   id SERIAL PRIMARY KEY,
   name VARCHAR NOT NULL,
   address VARCHAR NOT NULL,
   phone VARCHAR NOT NULL
);

CREATE TABLE urls (
  id SERIAL PRIMARY KEY,
  "clientId" INTEGER REFERENCES clients(id),
  "cakeId" INTEGER REFERENCES cakes(id),
  quantity INTEGER NOT NULL,
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "totalPrice" NUMERIC NOT NULL
);