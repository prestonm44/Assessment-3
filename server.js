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
    response = res.send(`<a href='/stadium'>Welcome, ${teamSelection}!</a>`)
    console.log(response);
})

// app.post('/', (req,res) => {
//     const sess = req.session;
//     sess.value = req.body.value;
//     res.render('form.html.njk')
// })

// app.get('/', (req, res) => {
//     if (req.session.value) {
//         res.send(`<p>Hello ${req.session.value}!</p>`);
//     } else {
//         res.send(`<p>You're not welcome here<p>`)
//     }
// })
