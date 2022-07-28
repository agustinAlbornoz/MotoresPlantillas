const express = require("express");
const { Router } = express;
const Controller = require("../controllers/producto.controller.js");
const router = Router();

// trae todos los productos
router.get("/", (req, res) => {
    res.render("lista", {datos: Controller.getAll()})
});
//trae producto por id
router.get("/:id", (req, res) => {
    const { id } = req.params;
        res.send(Controller.find(parseInt(id)))
});
//agrega un nuevo producto
router.post('/', (req, res) => {
    Controller.create(req.body);
    res.redirect('/')
});
//upgradea un nuevo producto
router.put('/:id', (req, res) =>{
    const {id} = req.params;
    const body = req.body;
    res.send(Controller.update(id, body))
})
//borra un producto
router.delete('/:id', (req, res) =>{
    res.send(Controller.remove(req.params.id))
})

module.exports = router;