let express = require('express');
let app = express();
const path = require("path");
let html = require('html');
let ejs = require('ejs');

// app.set( 'view engine', 'html' );
app.use(express.static(path.join(__dirname, 'public')));
app.set('/views', __dirname + '/views/')

// app.use( bodyParser.json() );
// app.use( bodyParser.urlencoded( {
//   extended: false
// } ) );


app.get('/', (req, res) => {
    console.log('checking in from home!')
    res.render('index.ejs');
})
// res.sendFile(__dirname + '/index.html');

app.get('/home', (req, res) => {
    console.log('checking in from home!')
    res.render('../home.ejs');
    // res.sendFile('/fileName.html');
})
let port = process.env.PORT || 3001;

app.listen(port, () =>{
  console.log('phase server is live on port:', port)
})
module.exports = app;
