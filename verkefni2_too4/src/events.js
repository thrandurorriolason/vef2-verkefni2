import express from 'express';

const app = express();

app.locals.importantize = str => `${str}!`;

const viewsPath = new URL('../views', import.meta.url).pathname

app.set('views', viewsPath);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('events', { title: 'Viðburðarsíðan' })
})

app.get('/login', (req, res) => {
    res.render('login', { title: 'Innskráning' })
})

app.get('/event', (req, res) => {
    res.render('event', { title: 'Forritarar hittast í febrúar' })
})





const hostname = '127.0.0.1';
const port = 3001;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})