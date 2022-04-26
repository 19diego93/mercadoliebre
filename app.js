// requires
const express = require('express');
const path = require('path');

// variables entrada de valores y rutas 
const app = express();
const laRaiz = '/';
const home = '/home';
const elHome = path.join(__dirname, './views/home.html');
const publicPath = path.join(__dirname, '/public/');

// en la app
app.listen(3000, () => { console.log('Servidor corriendo')});

app.use( express.static(publicPath) );

app.get(laRaiz, (req, res)=>{
    res.sendFile(elHome);
});
app.get(home, (req, res)=>{
    res.sendFile(elHome);
});
