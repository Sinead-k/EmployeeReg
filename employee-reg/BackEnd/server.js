// Setting up back end / exchanging of data
const express = require('express')
const app = express()
const port = 4000

const cors = require('cors');
const bodyParser = require('body-parser');

// Setting up Mongoose and MongoDB
const mongoose = require('mongoose');

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const strConnection = 'mongodb+srv://admin:admin@cluster0.gttyd.mongodb.net/sample_analytics?retryWrites=true&w=majority';
mongoose.connect(strConnection, {useNewUrlParser: true});

// Here we define the structure of our Schema
const Schema = mongoose.Schema;

const empSchema = new Schema({
    UserName:String,
    Name:String,
    Email:String,
    Address:String
})

const empModel = mongoose.model('customers', empSchema);

app.get('/api/sample_analytics/customers', (req, res) => {
    
    empModel.find((err,data)=>{
        res.json(data);
    })    
})

app.get('/api/sample_analytics/customers/:id',(req, res)=>{

    console.log(req.params.id);

    empModel.findById(req.params.id, (err,data)=>{
        res.json(data);
    })
})

// We have to send the new employee information to the database
app.post('/api/sample_analytics/customers',(req, res)=>{
    console.log('New Employee registered!');
    console.log(req.body.UserName);
    console.log(req.body.Name);
    console.log(req.body.Email);
    console.log(req.body.Address);

    // Here we create the new employee with their details
    EmpModel.create({
      UserName:req.body.UserName,
      Name:req.body.Name,
      Email:req.body.Email,
      Address:req.body.Address
    });

    res.render('Employee information saved');
})

app.get('/', (req, res) => {
  res.send('Server is running as fast as he can')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})