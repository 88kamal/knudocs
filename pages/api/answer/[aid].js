import connectDb from "../../../database/db"
import User from "../../../model/User"
import Post from "../../../model/Post"

connectDb()

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            await getOneAnswer(req, res)
            break;
        // case 'GET':
        //     await getOneUser(req, res)
        //     break;

        case 'DELETE':
            await deleteOneAnswer(req, res)
            break;

        case 'PUT':
            await updateOneAnswer(req, res)
            break;
    }
}

const getOneAnswer = async (req, res) => {
    const { aid } = req.query
    try {
        const answer = await Post.findOne({ _id: aid })
        res.status(201).json({ answer })

    } catch (error) {
        res.status(402).json({ error })
    }

}


const deleteOneAnswer = async (req, res) => {
    const { aid } = req.query
    try {
        const answer = await Post.findOneAndDelete({ _id: aid })
        res.status(201).json({ message: "Delete Answer Successfully" })
    } catch (error) {
        res.status(402).json({ error })

    }
}

const updateOneAnswer = async (req, res) => {
    const { aid } = req.query
    // const { title, imageUrl, description } = req.body
    try {
        const answer = await Post.findOneAndUpdate({ _id: aid }, {
            $set: {
                title: req.body.title,
                imageUrl: req.body.imageUrl,
                description: req.body.description,
            }
        })
        res.status(200).json({ answer })
        res.status(200).json({ message: 'Answer Updated Successfully' })
    } catch (error) {
        res.status(402).json({ error })

    }


}