const express = require('express');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Define the directory for your static files (CSS, JavaScript, images)
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    console.log('Home page requested');
    res.render('index'); // This will render views/index.ejs
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));