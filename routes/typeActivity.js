// update
const express = require("express");
const router = express.Router();

const typeActivities = [
  {
    id: 0,
    descript_en: "Tipo de actividad 1",
  },
  {
    id: 1,
    descript_en: "Tipo de actividad 2",
  },
];

router.get("/", async (req, res) => {
  let json = typeActivities;

  res.status(200).send({ success: true, data: json });
});
// get typeActivities by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  let json = typeActivities.find((p) => p.id == id);

  if (!json.id) {
    res
      .sendStatus(404)
      .send({ success: false, message: "Tipo de actividad no encontrada!" });
  } else {
    res.status(200).send({ success: true, data: json });
  }
});

module.exports = router;
