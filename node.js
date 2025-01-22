const express = require('express');
const fs = require('fs');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Data file path
const dataFilePath = path.join(__dirname, 'data.json');

// Multer configuration for image uploads
const upload = multer({ dest: path.join(__dirname, 'uploads') });

// Read data from JSON file
function readData() {
    if (!fs.existsSync(dataFilePath)) {
        return {};
    }
    return JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
}

// Write data to JSON file
function writeData(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

// API: Get all data
app.get('/api/data', (req, res) => {
    const data = readData();
    res.json(data);
});

// API: Update text data
app.post('/api/update-text', (req, res) => {
    const { key, value } = req.body;
    const data = readData();
    data[key] = value;
    writeData(data);
    res.json({ message: 'Text updated successfully', data });
});

// API: Upload image
app.post('/api/upload-image', upload.single('image'), (req, res) => {
    const data = readData();
    const { key } = req.body;

    // Update image path in JSON
    const imagePath = `/uploads/${req.file.filename}`;
    if (!data.images) data.images = {};
    data.images[key] = imagePath;
    writeData(data);

    res.json({ message: 'Image uploaded successfully', imagePath });
});

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
