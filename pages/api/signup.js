import connectDb from "../../database/db";
import User from "../../model/User";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

connectDb()


export default async function handler(req, res) {

    const { name, designation, image, email, password } = req.body

    try {
        if (!name || !designation || !image || !email || !password) {
            return res.status(422).json({ error: 'Please Fill All Field' })
        }
        const user = await User.findOne({ email })

        if (user) {
            return res.status(422).json({ error: 'User Already Exist' })
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await User({
            name,
            designation,
            image,
            email,
            password: hashedPassword
        })
        await newUser.save()
        console.log(newUser)

        res.status(201).json("Signup Successfully")

    } catch (error) {
        console.log(error)
    }

}
