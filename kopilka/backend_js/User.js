import mongoose from "mongoose";

const User = new mongoose.Schema({
    user_id: {type: String, required: true},
    login: {type: String, required: true},
    password: {type: String, required: true}
})

export default mongoose.model('User', User)