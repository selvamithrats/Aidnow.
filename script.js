const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/sponsors', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sponsors.html'));
});

app.get('/donate', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'donate.html'));
});

app.get('/help', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'help.html'));
});

app.post('/donate', (req, res) => {
    const { name, amount, email, mobile, payment } = req.body;
    // Here you can add logic to process the donation, e.g., save to a database
    res.send('Thank you for your donation!');
});

app.post('/help', (req, res) => {
    const { name, location, contact, people } = req.body;
    // Here you can add logic to process the help request, e.g., save to a database
    res.send('Your help request has been submitted!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});