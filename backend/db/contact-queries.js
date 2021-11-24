const db = require("./db");


const postContact = (contact) => {
  console.log(`${contact.name}`, `${contact.email}`, `${parseInt(contact.telephone)}`, `${contact.description}`);
  return db
  .query(" INSERT INTO contact(name,email,phone_number, description) VALUES($1, $2, $3, $4) RETURNING *;",

  [contact.name, contact.email, parseInt(contact.telephone), contact.description] 

  )
  
}
  
  


module.exports = { postContact }