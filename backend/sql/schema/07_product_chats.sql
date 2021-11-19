DROP TABLE IF EXISTS product_chats CASCADE;

CREATE TABLE product_chats (
  id SERIAL PRIMARY KEY,
  product_id integer REFERENCES  products(id) ON DELETE CASCADE DEFAULT NULL,
  datetime timestamp,
  sender_id integer REFERENCES users(id) ON DELETE CASCADE DEFAULT NULL,
  receiver_id integer REFERENCES users(id) ON DELETE CASCADE DEFAULT NULL,
  messageText varchar DEFAULT NULL
);