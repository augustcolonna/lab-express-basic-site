const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/views/home.html')
});

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works.html')
})

app.get('/gallery', (request, response) => {
    response.sendFile(__dirname + '/views/gallery.html')
})

app.get('/styles', (request, response) => {
    response.sendFile(__dirname + '/public/styles.css')
})

app.listen(3001, () => {
    console.log('We are in port 3001')
});