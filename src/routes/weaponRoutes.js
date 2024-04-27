const express = require('express');
const controller = require('../controller/weaponController')

const route = express.Router();

route.get("/", controller.getAll)
route.get("/:id", controller.getId)
route.post("/", controller.create)
route.patch("/:id", controller.update)
route.delete("/:id", controller.destroy)

module.exports = route;