const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const route = require('./routes');

const app = express();
const port = 3000;

app.use(morgan('combined'));

app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

route(app); // khởi tạo route

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
