const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

//post
router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const response = await newContact.save();
    res.send({ message: "contact saved" });
  } catch (error) {
    res.status(400).send({ message: "can not save it" });
  }
});

//get all
router.get("/", async (req, res) => {
  try {
    const result = await Contact.find();
    res.send({ response: result, message: "geeting contacts succesfully" });
  } catch (error) {
    res.status(400).send("can not get contacts");
  }
});
//get one
router.get("/:id", async (req, res) => {
  try {
    const result = await Contact.findOne({ _id: req.params.id });
    res.send({ response: result, message: "geeting contacts succesfully" });
  } catch (error) {
    res.status(400).send("no contact with this id");
  }
});
//delete
router.delete("/:id", async (req, res) => {
  try {
    const result = await Contact.deleteOne({ _id: req.params.id });
    result.n
      ? res.send({ response: result, message: " succesfully deleted" })
      : res.send({ message: "already deleted" });
  } catch (error) {
    res.status(400).send("contact not found");
  }
});
//update
router.put("/:id", async (req, res) => {
  try {
    const result = await Contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    console.log(result);
    result.nModified
      ? res.send({ message: "updated" })
      : res.send({ message: "already updated" });
  } catch (error) {
    res.status(400).send({message:"contact not updated"});
  }
});



module.exports = router;
