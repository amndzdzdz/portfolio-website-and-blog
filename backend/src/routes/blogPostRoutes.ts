import express = require("express");

const router = express.Router();

router.get("/", (_req, res) => {
  res.status(200).json({ message: "Get all blogs" });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `Get blog with id: ${id}` });
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Created one blog post" });
});

router.put("/", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Updated one blog post" });
});

router.delete("/", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Delete one blog post" });
});

module.exports = router;
