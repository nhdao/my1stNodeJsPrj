const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');
const morgan = require('morgan');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//HTTP logger
//app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
console.log(__dirname);

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
