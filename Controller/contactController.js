const asyncHandler = require("express-async-handler");
const Contact = require("../Models/contactModel");
// get all contact
// GET api/contacts
// public access

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.find();
  res.status(200).json(contact);
});

// create contact
// POST api/contacts/
// private access
// "asynchandler handle exception in async error"
const createContact = asyncHandler(async (req, res) => {
  // console.log("created contact " , req.body);
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all field are mand");
  }

  // if (await Contact.findOne({ name })) {
  //   res.status(409);
  //   throw new Error("try another name");
  // }

  const contact = await Contact.create({ name, email, phone });

  res.status(201).json(contact);
});

// get contact by id
// GET api/contacts
// public access
const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }

  res.status(202).json(contact);
});

// update contact
// PUT api/contacts/:id
// public access
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }

  const updatecontact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(203).json(updatecontact);
});

// delete contact
// DELETE api/contacts
// private access
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }

  // res.json("hellp");
  await Contact.findByIdAndDelete(req.params.id);
  res.status(203).json(contact);
});

module.exports = {
  getContact,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
};
