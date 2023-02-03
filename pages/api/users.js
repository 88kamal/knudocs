// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../../database/db";
import User from "../../model/User";
// import Answer from "../../model/Answer"
// import Item from "../../model/Item"
// import Position from "../../model/Position"

connectDb()

export default async function handler(req, res) {

  // const ObjectId = "63695768b85e2e95bead8650"

  // const users = await Users.findOne({}).populate("address")
  // res.status(200).json(users.answers)

  //   try {
  //     let data = await Users.findOne().populate("address");
  //     res.status(200).send({data: [...data], success: true})
  // } catch (err) {
  //     console.log(err)
  //     res.status(404).send({success: false, msg: err.message})
  // }


  // const fetchUserCart =  Authenticated(async (req,res) =>{
  // const userId = '63695768b85e2e95bead8650'
  // const cart =  await Users.findOne({userId})
  //               .populate("address")
  // res.status(200).json(cart.address)


  // try {
  //   // const userId = req.user._id; //change this to logged -in user id
  //   const result = await Users.findById('63695768b85e2e95bead8650').populate("address");
  //   res.send(result);
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).send("Something went wrong, check logs");
  // }
  // res.status(200).json({})



  // const item = await Item.create({
  //   name: 'Test item'
  // });
  // const position = await Position.create({
  //   item: item._id,
  //   name: 'Main position'
  // });
  // // console.log(await Position.findById({_id: position._id}).populate('item'));

  // const res2 = await Position.findById({_id: position._id}).populate('item')
  // res.status(200).json(res2)

  // const user = await User.create({
  //   name: 'Test user',
  //   designation: "web d",
  //   image: 'image',
  //   email: 'email',
  //   password: 'password'
  // });
  // const answer = await Answer.create({
  //   // user: user._id,
  //   title: 'answer title',
  //   imageUrl: 'image',
  //   description: "desc"
  // });
  // // console.log(await Position.findById({_id: position._id}).populate('item'));

  // const res2 = await Answer.findOne({   }).populate('user')
  // res.status(200).json(res2)


















  // const { name, designation, image, email, password } = req.body

  // try {
  //   if (!name || !designation || !image || !email || !password) {
  //     return res.status(422).json({ error: 'Please Fill All Field' })
  //   }
  //   const user = await User.findOne({ email })

  //   if (user) {
  //     return res.status(422).json({ error: 'User Already Exist' })
  //   }

  //   const hashedPassword = await bcrypt.hash(password, 12);

  //   const newUser = await User({
  //     name,
  //     designation,
  //     image,
  //     email,
  //     password: hashedPassword
  //   })
  //   await newUser.save()
  //   console.log(newUser)

  //   res.status(201).json("Signup Successfully")

  // } catch (error) {
  //   console.log(error)
  // }

  // const { title, imageUrl, description } = req.body

  // if (!title || !imageUrl || !description) {
  //   return res.status(422).json({ error: "Please All Fields " })
  // }

  // try {
  //   const answer = await new Answer({
  //     user: newUser._id,
  //     // user: newUser.name,
  //     // user: newUser.designation,
  //     // user: newUser.image,
  //     title,
  //     imageUrl,
  //     description
  //   })
  //   await answer.save()
  //     console.log(await Answer.findById({_id: answer._id}).populate('user'));

  //   res.status(200).json({ message: "Answer Add Successfully" })
  // } catch (error) {
  //   res.status(400).json({ error })
  // }





  // const fetchUsers = Authenticated(async (req, res) => {
  // const users = await User.findOne({email: }).select("-password")
  // res.status(200).json(users)
  // console.log(users)
  // }


  const users = await User.findOne({ email: 'knupadhyay784@gmail.com' })
  res.status(200).json({ users })






}
