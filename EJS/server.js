const express = require("express");
const router = require('./src/routes/routes.js')
const app = express();
const datos = require('./src/products/products.js').list()

app.set('views','./src/Views')
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/productos", router);
app.use(express.static(__dirname +"/public"))
app.get('/', (req, res) => {
    res.render('form', {datos})
})

const server = app.listen(8080, () => console.log(`Server running on port 8080`))
server.on('error', (err) => {
console.log(`el servidor tuvo un error: ${error}`)})
