
import mongoose from "mongoose";
const { Schema } = mongoose;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    mediaUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    // image: {
    //     type: String,
    //     required: true
    // },
    designation: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports =
    mongoose.models.Post || mongoose.model('Post', PostSchema);