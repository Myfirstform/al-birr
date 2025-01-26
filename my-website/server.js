const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('public')); // Serve static files from 'public' folder
app.use(bodyParser.urlencoded({ extended: true }));

// Route for Login Page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html'); // Serve the login HTML page
});

// Handle Login Form Submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Add logic for username/password validation here
    if (username === 'admin' && password === '1234') {
        res.send('Login Successful!');
    } else {
        res.send('Invalid Credentials');
    }
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
