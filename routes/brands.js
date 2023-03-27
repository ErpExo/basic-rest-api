// update
const express = require("express");
const router = express.Router();

const brands = [
  {
    id: 0,
    name_en: "Sansumg Galaxy",
    descript_en: "S1, s2, s3",
    obs_en: "ninguna",
  },
  {
    id: 1,
    name_en: "One",
    descript_en: "TB1, TB22",
    obs_en: "Color negro y azul",
  },
];

router.get("/", async (req, res) => {
  let json = brands;

  res.status(200).send({ success: true, data: json });
});
// get brand by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  let json = brands.find((p) => p.id == id);

  if (!json.id) {
    res
      .sendStatus(404)
      .send({ success: false, message: "brand no encontrado!" });
  } else {
    res.status(200).send({ success: true, data: json });
  }
});

module.exports = router;
