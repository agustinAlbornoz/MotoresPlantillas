const express = require("express");
const router = require('./src/routes/routes.js')
const app = express();
const handlebars = require('express-handlebars')
const datos = require('./src/products/products.js').list()


app.engine(
    "hbs",
    handlebars.engine({
      extname: "hbs",
      defaultLayout: "index",
      layoutsDir: __dirname + "/src/views/Layouts",
      partialsDir: __dirname + "/src/views/partials"
    })
  );


app.set('views','./src/views')
app.set('view engine', 'hbs');
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/productos", router);
app.use(express.static(__dirname +"/public"))
app.get('/', (req, res) => {
    res.render('main')
})

const server = app.listen(8080, () => console.log(`Server running on port 8080`))
server.on('error', (err) => {
console.log(`el servidor tuvo un error: ${error}`)})
