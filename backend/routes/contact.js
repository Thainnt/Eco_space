const express = require("express");
const router = express.Router();
const contactQueries = require("../db/contact-queries");
// api/contact
router.post ("/reachme", function (req, res) {
  const contact = req.body;

  contactQueries.postContact(contact)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log("Error message", error);
  })

})

module.exports = router;