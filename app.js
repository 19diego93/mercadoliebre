// requires
const express = require('express');
const path = require('path');

// app 
const app = express();

// variables barra
const raiz = '/';
const home = '/home';
const register = '/register'

// variables path
const toHome = path.join(__dirname, './views/home.html');
const publicPath = path.join(__dirname, '/public/');
const toregister = path.join(__dirname, './views/register.html')
// app.metodos
app.listen(3000, () => { console.log('Servidor corriendo')});

app.use( express.static(publicPath) );

app.get(raiz, (req, res)=>{
    res.sendFile(toHome);
});
app.get(home, (req, res)=>{
    res.sendFile(toHome);
});
app.get(register, (req, res)=>{
    res.sendFile(toregister);
});
