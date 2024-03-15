const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = new Schema ({
    email: {
        type:String,
        required:true,
        unique: true
    }
})

UserSchema.plugin(passportLocalMongoose); //adds password and username behind the scene 

module.exports = mongoose.model('User', UserSchema); //compile the model 