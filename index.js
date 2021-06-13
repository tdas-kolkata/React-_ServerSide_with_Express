const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

sample_data = [
{
	sub:"bengali",
	scrore:50
},
{
	sub:"English",
	scrore:50
}];


app.get('/login',(req,res)=>{
	console.log("request came to login..");
	res.render('login');
});

app.get('/home',(req,res)=>{
	res.render('index', { title: "User",data:sample_data});
});


app.get('/',(req,res)=>{
	var name = req.params.name;
	res.send("hello");
});

app.listen(3000,()=>{
	console.log('server is running.....');
})



