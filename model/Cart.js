import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema.Types

const CartSchema  = new mongoose.Schema({
    user:{
        type:ObjectId,
        ref:"User"
    },
    post: {
        type: ObjectId,
        ref: "Post"
    }
})


module.exports =
    mongoose.models.Cart || mongoose.model('Cart', CartSchema);
