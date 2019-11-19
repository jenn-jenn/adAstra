const express = require("express");
const router = express.Router();
const CosmicObject = require('../../models/CosmicObject');

router.get("/", (req, res) => {
  CosmicObject.find()
    .then(cosmicObjects => res.json(cosmicObjects))
    .catch(err => res.status(404).json(err));
});

module.exports = router;