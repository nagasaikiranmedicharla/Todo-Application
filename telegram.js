const TelegramBot = require('node-telegram-bot-api');
const Todo = require('./model/todolistschema');
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const connectDB = require('./config/connectdb');

mongoose.set('strictQuery', false);//This helps in mongodb connection.
connectDB();

const connectTelegramBot = () => {
    const token = '5697668776:AAEDyfOHDHUU_7sKlXCtyUH559vIupS95f4';

    const bot = new TelegramBot(token, { polling: true });

    bot.onText(/Hello|hello/, (message, match) => {
        console.log(message);
        let chat_id = message.from.id;
        let username = message.from.first_name;

        Todo.find({}, function (err, data) {
            if (err) console.log(err);
            let todoData = [];

            for (let i = 0; i < data.length; i++) {
                todoData.push(`${i + 1}.'${data[i].todo}' was created on ${data[i].createdAt.toLocaleDateString()}`);
            }

            bot.sendMessage(chat_id, `Hi ${username} You have ${data.length} pending tasks:\n${todoData.join('\n')}`);
        })
    });
}

module.exports = connectTelegramBot;
