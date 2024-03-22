const express = require('express');
const dataApiRouter = express.Router();
const { User, Quest } = require('../models.js');

dataApiRouter.get('/api/quests/:questId', [], async function (req, res) {
    const questData = await Quest.find({ name: req.params.questId });
    console.log(questData);
    console.log(questData.length);
    if (questData.length > 0) {
        // send all the auto-generated user-data
        res.send(questData);
    } else {
        res.send("Quest ID not found. Check Quest ID");
    }
})

dataApiRouter.get('/api/userData', [], async function (req, res) {
    const userData = await User.find({ userName: "dave123" })
    res.send(userData);
})

dataApiRouter.get('/api/check', [], (req, res) => {
    return res.send("API is running");
})

module.exports = { dataApiRouter };
