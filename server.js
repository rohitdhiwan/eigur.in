const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for games
app.get('/games/:game', (req, res) => {
    const game = req.params.game;
    res.sendFile(path.join(__dirname, 'games', `${game}.html`));
});

// Route for news
app.get('/news', (req, res) => {
    res.sendFile(path.join(__dirname, 'news', 'index.html'));
});

// Route for facts
app.get('/facts', (req, res) => {
    res.sendFile(path.join(__dirname, 'facts', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`AI Hub website is running at http://localhost:${PORT}`);
    console.log(`Access the main page at http://localhost:${PORT}/`);
});