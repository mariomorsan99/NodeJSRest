var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/', (request, resp, next) => {
//     resp.status(200).json({
//         mensaje: 'peticion correcta',
//         ok: true,
//         data: 'usuario'
//     });
// });

app.get('/', function(req, res) {
    res.send({
        "Output": "Hello World!"
    });
});

var usuarioRoutes = require('./routes/usuario');

app.use('/usuario', usuarioRoutes);



app.listen(port);
module.exports = app;