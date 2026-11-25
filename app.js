
const express = require('express');
const path = require('path');

const server = express();

server.use(express.static(path.join(__dirname, 'public')));

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

server.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'gallery.html'));
});

server.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});