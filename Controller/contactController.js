const asyncHandler = require("express-async-handler")
// get all contact
// GET api/contacts
// public access

const getContact = asyncHandler(async(req, res) => {
  res.status(200).json({ message: "hello to get all contact...." });
});

// create contact
// post api/contacts/
// private access
// "asynchandler handle exception in async error"
const createContact = asyncHandler(async(req, res) => {
  // console.log("created contact " , req.body);
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all field are mand");
  }

  res.status(201).json({ message: `created contact ${name}` });
});

// get contact by id
// get api/contacts
// public access
const getContactById = asyncHandler(async(req, res) => {
  res.status(202).json({ message: `get contact from ${req.params.id}` });
});

// update contact
// put api/contacts/:id
// public access
const updateContact = asyncHandler(async(req, res) => {
  res.status(203).json({ message: `update contact from ${req.params.id}` });
});

// delete contact
// post api/contacts
// private access
const deleteContact = asyncHandler(async(req, res) => {
  res.status(203).json({ message: `delete contact from ${req.params.id}` });
});

module.exports = {
  getContact,
  getContactById,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
};
