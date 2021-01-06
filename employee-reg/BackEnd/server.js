// Setting up back end / exchanging of data
const express = require('express')
const app = express()
// Defines what port to run server
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

// connection to mongodb
const strConnection = 'mongodb+srv://admin:admin@cluster0.gttyd.mongodb.net/sample_analytics?retryWrites=true&w=majority';
mongoose.connect(strConnection, {useNewUrlParser: true});

// here we define the structure of our Schema
const Schema = mongoose.Schema;

const empSchema = new Schema({
    Username:String,
    Name:String,
    Email:String,
    Address:String
})

const empModel = mongoose.model('customers', empSchema);

// Retrieve customer information
app.get('/api/sample_analytics/customers', (req, res) => {
    empModel.find((err,data)=>{
        res.json(data);
    })    
})

app.get('/api/sample_analytics/customers/:id',(req, res)=>{
    // print the employee id into the console
    console.log(req.params.id);

    empModel.findById(req.params.id, (err,data)=>{
        res.json(data);
    })
})

// The edit method
app.put('/api/sample_analytics/customers/:id', (req, res) =>{
    console.log("Edit employee details: "+req.params.id);
    console.log(req.body);

    empModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err, data) =>{
            req.send(data);
        })
})

// The delete method
app.delete('/api/sample_analytics/customers/:id', (req, res)=>{
    console.log(req.params.id);

    empModel.findByIdAndDelete({_id:req.params.id},
         (err, data)=>{
        res.send(data);
    })
})

//The write method
// We have to send the new employee information to the database
app.post('/api/sample_analytics/customers',(req, res)=>{
    console.log(req.body);

    // Here we create the new employee with their details
    empModel.create({
      Username:req.body.Username,
      Name:req.body.Name,
      Email:req.body.Email,
      Address:req.body.Address
    })
    // Callback function
    .then()
    .catch();

    // as a response....
    res.send('Employee Information Saved');
})

app.get('/', (req, res) => {
  res.send('Server is running as fast as he can')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})