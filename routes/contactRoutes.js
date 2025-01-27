const express = require("express");
const router = express.Router();
const {
  getContact,
  createContact,
  getContactById,
  updateContact,
  deleteContact
} = require("../Controller/contactController");
const validtoken = require("../Middleware/userHandleError");

router.use(validtoken);

router.route("/").get(getContact).post(createContact);

router.route("/get/:id").get(getContactById).put(updateContact).delete(deleteContact);

module.exports = router;
