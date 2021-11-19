DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name varchar,
  quantity integer,
  description varchar,
  image_url varchar,
  created_at timestamp,
  seller_id integer REFERENCES users(id) ON DELETE CASCADE,
  category_id integer REFERENCES categories(id) ON DELETE CASCADE,
  location varchar,
  is_sold boolean,
  is_paid boolean,
  amount integer DEFAULT NULL
);