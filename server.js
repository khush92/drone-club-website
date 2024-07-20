const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT||3000;

// Middleware to parse JSON data from form submissions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

//serve the index.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'index.html'));
});

//Serve the registration.html file
app.get('/registration.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'registration.html'));
});

//Handle form submissions
app.post('/form', (req, res) => {
    const formData = req.body;
    console.log('Form Data:', formData);

    //Here you can process the form data, such as saving it to a database

    res.send('Form submitted successfully!');
});

app.listen(PORT,() => {
    console.log('server is running on port ${PORT}');
});