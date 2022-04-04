import mongoose from "mongoose";

const Item = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    full_sum: {type: Number, required: true},
    current_sum: {type: Number, required: true},
    currency: {type: String, required: true},
    user_id: {type: String, required: true},
    archive: {type: Boolean}
})

export default mongoose.model('Item', Item)