const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    userName: String,
    yearOfStudy: Number,
    hobbies: String,
    major: String,
    password: String,
    points: Number,
    curr_quest_name: String,
    questProgress: [
        {
            quest_name: String,
            completed_milestones: Number,
            // index the milestone array with completed milestone to get the 
            // milestone that the user is on 
        }
    ]
})

const QuestSchema = new mongoose.Schema({
    name: String,
    total_milestones: Number,
    milestones: [
        {
            question: String,
            image_path: String, // this is the path to the image in the front-end
            google_maps_link: String, // link to google maps 
            latitude: mongoose.Decimal128,
            longitue: mongoose.Decimal128,
            height: mongoose.Decimal128
        }
    ]
})

const User = mongoose.model('User', UserSchema);
const Quest = mongoose.model('Quest', QuestSchema);

module.exports = { User, Quest }; 