import { mongoose } from 'mongoose'

const connectDb = async () => {
    // try {
    //     await mongoose.connect(process.env.MONGO_URI);
    //     console.log("--***Database Connected Successfully**--")
    // } catch (error) {
    //     console.log(error)
    // }
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.on('connected', () => {
        console.log("connected to mongo")
    })
    mongoose.connection.on('error', (err) => {
        console.log("error connecting", err)
    })
}

export default connectDb