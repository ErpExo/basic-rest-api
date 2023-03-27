// update
const express = require("express");
const router = express.Router();

const categories = [
  {
    id: 0,
    descript_en: "Categoria 1",
  },
  {
    id: 1,
    descript_en: "Categoria 2",
  },
];

router.get("/", async (req, res) => {
  let json = categories;

  res.status(200).send({ success: true, data: json });
});
// get categories by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  let json = categories.find((p) => p.id == id);

  if (!json.id) {
    res
      .sendStatus(404)
      .send({ success: false, message: "Categoria no encontrada!" });
  } else {
    res.status(200).send({ success: true, data: json });
  }
});

module.exports = router;
