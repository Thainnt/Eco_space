# Backend set up
npm i
- Fill in .env with .env.example
Log in Postgresql: `sudo -u postgres psql`
Create user: `CREATE ROLE username WITH LOGIN PASSWORD 'password';`
Create database: `CREATE DATABASE dbname WITH OWNER dev;`
Log in database dbname as user dev: `psql -h localhost -d dbname -U dev -p 5432`
Access database: `\c dbname;`
- Initiate DB
In server folder: `npm run db:reset`