const express = require("express");
const router = express.Router();
const menuCard = require("../models/menucard");

// Route for getting all menu cards
router.get("/", async (req, res) => {
  try {
    const data = await menuCard.find();
    res.status(200).json(data);
    console.log("Data fetched");
  } catch (error) {
    console.error("Error fetching menu card data: ", error);
    res.status(500).json({ Error: "Internal server error" });
  }
});

// Route for getting menu cards by category
router.get("/:Foodcategory", async (req, res) => {
  try {
    const Foodcategory = req.params.Foodcategory;
    const validCategories = [
      "Beverages",
      "Sandwiches",
      "Snacks",
      "Breakfast",
      "Desserts",
      "Salads",
      "Soups"
    ];

    if (validCategories.includes(Foodcategory)) {
      const data = await menuCard.find({ category: Foodcategory });
      res.status(200).json(data);
      console.log("Data fetched");
    } else {
      res.status(400).json({ error: "Invalid search" });
    }
  } catch (error) {
    console.error("Error fetching menu card data by category: ", error);
    res.status(500).json({ Error: "Internal server error" });
  }
});

// Route for creating a new menu card
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenuCard = new menuCard(data);
    const result = await newMenuCard.save();
    res.status(201).json({ message: "Data saved successfully", result });
    console.log("Data saved successfully: ", data);
  } catch (error) {
    console.error("Error saving menu card data: ", error);
    res.status(500).json({ Error: "Internal server error" });
  }
});

// Route for updating a menu card
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const response = await menuCard.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "Data updated successfully", response });
  } catch (error) {
    console.error("Error updating menu card data: ", error);
    res.status(500).json({ Error: "Internal server error" });
  }
});

// Route for deleting a menu card
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await menuCard.findByIdAndDelete(id);
    if (!response) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "Data deleted successfully" });
    console.log("Data deleted successfully: ", id);
  } catch (error) {
    console.error("Error deleting menu card data: ", error);
    res.status(500).json({ Error: "Internal server error" });
  }
});

module.exports = router;
