const express = require("express");
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        // mongodb connection
        const con = await mongoose.connect('mongodb+srv://sai:sai@cluster0.ioyuyb3.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        })
        console.log(`MongoDB connected : ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;