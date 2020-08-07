var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (request, resp, next) => {
    resp.status(200).json({
        mensaje: 'peticion correcta',
        ok: true,
        data: 'usuario'
    });
});

var usuarioRoutes = require('./routes/usuario');

app.use('/usuario', usuarioRoutes);


app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});