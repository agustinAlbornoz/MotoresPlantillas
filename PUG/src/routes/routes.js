const express = require("express");
const { Router } = express;
const Controller = require("../controllers/producto.controller.js");
const router = Router();


router.get("/", (req, res) => {
    res.render('lista', {datos: Controller.getAll()})
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
        res.send(Controller.find(parseInt(id)))
});

router.post('/', (req, res) => {
    res.send(Controller.create(req.body))
});
router.put('/:id', (req, res) =>{
    const {id} = req.params;
    const body = req.body;
    res.send(Controller.update(id, body))
})

router.delete('/:id', (req, res) =>{
    res.send(Controller.remove(req.params.id))
})

module.exports = router;