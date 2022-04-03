//We're testing things out here please ignore
const express = require('express');

// App Setup
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Template Engine Config
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // The render method takes the name of the HTML
    // page to be rendered as input
    // This page should be in the views folder
    // in the root directory.
    res.render('home');
});

//static acts on the first instance of index within the public folder
app.use(express.static('./public'));

// this communicates with our database
const models = require('./models');

// the server and port
app.listen(8080, function () {
    console.log('The app is now listening on port 8080...');
});