const express = require("express");
const router = express.Router();
const people = require("../models/people");
// post route to add new people
router.post("/", async (req, res) => {
  try {
    const data = new people(req.body);
    const responce = await data.save();
    console.log("data save successfully");
    res.status(200).json({ message: "success" });
    console.log(data);
  } catch (Error) {
    console.error("error saving person", Error);
    res.status(500).json({ Error: "internal server error" });
  }
});
//get method to extract peoples in routes
router.get("/", async (req, res) => {
  try {
    const data = await people.find();
    console.log("data fethed");
    res.status(200).json(data);
  } catch (error) {
    console.error("error get person", Error);
    res.status(500).json({ Error: "internal server error" });
  }
});
// get permaterzied method to get people informations
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "owner" || workType == "waiter") {
      const data = await people.find({ work: workType });
      console.log("data fethed");
      res.status(200).json(data);
    } else {
      res.status(400).json({ error: "invalid search" });
    }
  } catch (error) {
    console.error("error saving person", Error);
    res.status(500).json({ Error: "internal server error" });
  }
});

// route for update people data

router.put("/:id", async (req, res) => {
  try {
    const peopleId = req.params.id;
    const peopleData = req.body;

    const responce = await people.findByIdAndUpdate(peopleId, peopleData, {
      new: true,
      runValidators: true,
    });
    if (!responce) {
      return res.status(404).json({ message: "not found user" });
    }
    res.status(200).json(responce);
    console.log("data updated");
  } catch (error) {
    console.error("error", Error);
    res.status(500).json({ Error: "internal server error" });
  }
});

// route for delete people data
router.delete("/:id", async (req, res) => {
    try {
      const peopleId = req.params.id;
      const response = await people.findByIdAndDelete(peopleId);
      if (!response) {
        return res.status(404).json({ message: "not found user" });
      }
      res.status(200).json({message:'data deleted'});
      console.log("data deleted");
    } catch (error) {
      console.error("error", error);
      res.status(500).json({ Error: "internal server error" });
    }
  });
  

module.exports = router;
