import connectDb from "../../database/db";
import Post from '../../model/Post'
import User from '../../model/User'
import bcrypt from "bcrypt"

connectDb()
export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            await getAnswer(req, res)
            break;
        // case 'POST':
        //     await signUpUser(req, res)
        //     break;
        case 'POST':
            await saveAnswer(req, res)
            break;

    }
}

// const {email} = req.body


const getAnswer = async (req, res) => {
    const post = await Post.find();
    res.status(200).json(post)


}

// const signUpUser = async (req, res) => {

//     const { name, designation, image, email, password } = req.body

//     try {
//         if (!name || !designation || !image || !email || !password) {
//             return res.status(422).json({ error: 'Please Fill All Field' })
//         }
//         const user = await User.findOne({ email })

//         if (user) {
//             return res.status(422).json({ error: 'User Already Exist' })
//         }

//         const hashedPassword = await bcrypt.hash(password, 12);

//         const newUser = await User({
//             name,
//             designation,
//             image,
//             email,
//             password: hashedPassword
//         })
//         await newUser.save()
//         res.status(201).json("Signup sucess")
//         console.log(newUser)


//     } catch (error) {
//         console.log(error)
//     }


// }

const saveAnswer = async (req, res) => {

    const { title, mediaUrl, description,name, designation } = req.body
    // const { newUser } = req.signup


    if (!title || !mediaUrl || !description || !name || !designation) {
        return res.status(422).json({ error: "Please All Fields " })
    }




    try {
        const post = await new Post({
            title,
            mediaUrl,
            description,
            name, 
            designation
        })
        await post.save()
        res.status(200).json({ message: "Post Add Successfully" })
    } catch (error) {
        res.status(400).json({ error })
    }

} 
