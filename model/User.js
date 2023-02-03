import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "user",
        enum: ["user", 'admin', 'root']
    }
    
});

module.exports =
    mongoose.models.User || mongoose.model('User', UserSchema);