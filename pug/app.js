const express = require('express');
const app = express();

// Set Pug as the template engine
app.set('view engine', 'pug');

// Set the templates directory
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home', {
        title: 'My Website',
        message: 'Welcome to Express with Pug!'
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});