const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { dataApiRouter } = require('./routes/databaseApiRouter');

const mongoose = require('mongoose');
const { json } = require('body-parser');

app.use(json());
app.use(dataApiRouter);
const dotenv = require('dotenv');
dotenv.config();

const { User, Quest } = require('./models');

mongoose.connect('mongodb+srv://' + process.env.userNameMongo + ':' + process.env.mongodbPass + '@cluster0.c9aei8w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
).then(
    () => {
        console.log('Connected to database!');
    },
    err => {
        console.log('Connection failed!' + err);
    }
);

// add default user and quest data if they don't exist already in the DB 

async function insertInitial() {
    await User.create({
        name: 'Dave',
        userName: 'dave123',
        yearOfStudy: 1,
        hobbies: 'Football, Reading, Gym',
        major: 'Computer Science',
        password: 'password',
        points: 0,
        curr_quest_name: 'Freshman-Experience',
        questProgress: [
            {
                quest_name: 'FreshmanExperience',
                completed_milestones: 0,
                // index the milestone array with completed milestone to get the 
                // milestone that the user is on 
            }
        ]
    }).then(function () {
        console.log("Data inserted") // Success 
    }).catch(function (error) {
        console.log(error)     // Failure 
    });
    console.log("added default user record");



    await Quest.create(
        {
            name: 'Freshman-Experience',
            total_milestones: 5,
            milestones: [
                {
                    question: 'Riddle 1',
                    image_path: './image/trinity_college.png', // TODO: image path in the frontend 
                    google_maps_link: 'https://maps.app.goo.gl/1k4CTQPz2b2xzwgq6',
                    latitude: 43.6432728,
                    longitue: -79.3820831,
                    height: 0
                },
                {
                    question: 'Riddle 1',
                    image_path: './image/trinity_college.png', // TODO: image path in the frontend 
                    google_maps_link: '',
                    latitude: 43.6432728,
                    longitue: -79.3820831,
                    height: 0
                },
                {
                    question: 'Riddle 1',
                    image_path: './image/trinity_college.png', // TODO: image path in the frontend 
                    google_maps_link: '',
                    latitude: 43.6432728,
                    longitue: -79.3820831,
                    height: 0
                },
                {
                    question: 'Riddle 1',
                    image_path: './image/trinity_college.png', // TODO: image path in the frontend 
                    google_maps_link: '',
                    latitude: 43.6432728,
                    longitue: -79.3820831,
                    height: 0
                },
                {
                    question: 'Riddle 1',
                    image_path: './image/trinity_college.png', // TODO: image path in the frontend 
                    google_maps_link: '',
                    latitude: 43.6432728,
                    longitue: -79.3820831,
                    height: 0
                }
            ]

        }
    ).then(function () {
        console.log("Data inserted") // Success 
    }).catch(function (error) {
        console.log(error)     // Failure 
    });
    console.log("added default quest records");
}


// insertInitial();

app.listen(port, () => console.log(`Server started on port ${port}`));
