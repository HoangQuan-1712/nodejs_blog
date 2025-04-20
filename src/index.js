import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // Get the current file path
const __dirname = path.dirname(__filename); // Get the directory name

const app = express();
const port = 3000; // Define the port variable

app.use(morgan('combined'));

app.engine('hbs', engine({
    extname: '.hbs',
}));

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

app.use(express.urlencoded({
    extended: true
})); // Parse URL-encoded bodies (as sent by HTML forms)}));
app.use(express.json());


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); // Use path.join for cross-platform compatibility


//req: request, res: response
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/search', (req, res) => {
    console.log(req.query.q); // lấy giá trị của tham số q trong url giúp ta tìm kiếm
    res.render('search');
});

app.post('/search', (req, res) => {
    console.log(req.body); // lấy giá trị của tham số q trong url giúp ta tìm kiếm
    res.render('search');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});