const express = require("express")
const app = express()
const path = require('path')
const mongoose = require("mongoose")
const urlMongoose = `mongodb+srv://lysgut:I2ufVJQEgbUpcthi@adncluster.8o0oyno.mongodb.net/?retryWrites=true&w=majority`
const port = 1902

mongoose.connect(urlMongoose, { useNewUrlParser: true })

mongoose.connection.on('connected', function () {
  console.log('Conexión exitosa a la base de datos')
  const ADN = require('./models/adn.js'); 
  }
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', (req, res) => {res.render('index')})
app.listen(port, () => {
    console.log("Servidor iniciado en el puerto " + port);
});