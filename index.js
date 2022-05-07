// const http = require ('http');

// const server = http.createServer((req, res) => {
//     res.status = 200;
//     res.setHeader('Content-Type','text/plain');
//     res.end('Hello World');
// });

// server.listen(3000, () => {
//     console.log('Server on port 3000');
// });

//Iniciar un servidor con express
 const express = require('express');
 const app = express();

 app.get('/', (req, res) => {
     res.send('Hello World');
 });

 app.get('/about', (req, res) => {
    res.send('About me');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Form Contact</h1>');
});

app.get('/', (req, res) => {
    res.send('PETICION GET RECEIVED');
});

app.post('/', (req, res) => {
    res.send('POST REQUEST RECEIVED');
});

app.put('/', (req, res) => {
    res.send('UPDATE REQUEST RECEIVED');
});

app.delete('/', (req, res) => {
    res.send('DELETE REQUEST RECEIVED');
});

 app.listen(3000, () => {
     console.log('Server on port 3000')
 }); 