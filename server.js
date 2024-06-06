import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import nunjucks from 'nunjucks';
import axios from 'axios';

const app = express();
const port = '4090';

//Middleware
app.use(morgan('dev'));
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

app.use(session({
    secret: 'shhhh',
    saveUninitialized: true,
    resave: false
}))

nunjucks.configure('views', {
    autoescape: true, 
    express: app
})

app.get('/', (req, res) => {
    res.render('form.html.njk')
})

app.get('/base', (req, res) => {
    res.render('base.html.njk')
})

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
})

app.get('/practice', (req, res) => {
    const teamSelection = req.query.selectPicker;
    console.log('hit')
    response = res.send(`<a href='/stadium'>Welcome, ${teamSelection}!</a>`)
    console.log(response);
})


app.get('/practice', (req, res) => {
    res.send('Hello!');
  });