const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const app = express();
const bodyParser = require("body-parser");
const connectDB = require('./config/connectdb');
const Todo = require('./model/todolistschema');
const helper = require('./helper');
const connectTelegramBot = require('./telegram');
connectTelegramBot()

app.set("view engine", "ejs");//This helps in setting the default engine to ejs
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

mongoose.set('strictQuery', false);//This helps in mongodb connection.

connectDB();

app.get('/', (req, res) => {
    Todo.find().then(result => {
        res.render('index', { data: result, helper: helper });
        // console.log(result);
    })
});

app.post('/', (req, res) => {
    const todo = new Todo({
        todo: req.body.todovalue,
        dueDate: req.body.dueDate
    })
    todo.save()
        .then(result => { res.redirect('/') })
})

app.delete('/:id', (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(result => {
            // console.log(result);
        })
})

app.listen(port, () => console.log(`Listening on port ${port}`))