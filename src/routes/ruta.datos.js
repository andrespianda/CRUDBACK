var express = require('express');
var router = express.Router();
var datosController = require('../controller/controlador.datos')

/* GET users listing. */
router.post("/", datosController.create);
router.get("/", datosController.find);
router.get("/:id", datosController.findOne);
router.put("/:id", datosController.update);
router.delete("/:id", datosController.remove);

module.exports = router;