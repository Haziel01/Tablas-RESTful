const express = require('express');
const router = express.Router();
const controller = require('../controllers/calculadoras');

// Sumar n1 + n2
router.get("/:n1/:n2", controller.sumar);

// Multiplicar n1 * n2
router.post("/:n1/:n2", controller.multiplicar);

// Dividir n1 / n2
router.put("/:n1/:n2", controller.dividir);

// Potencia n1 ^ n2
router.patch("/:n1/:n2", controller.potencia);

// Restar n1 - n2
router.delete("/:n1/:n2", controller.restar);

module.exports = router;
