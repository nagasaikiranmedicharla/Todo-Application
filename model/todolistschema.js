const mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('Tododetails', todoSchema);