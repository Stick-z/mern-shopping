const router = require("express").Router();

//item model
const Item = require("../../models/item");

// GET api/items: gets all items
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// POST api/items: create a new item
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem.save().then((item) => res.json(item));
});

// DELETE api/items/(id): deletes item of the specified ID
router.delete("/:id", (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
