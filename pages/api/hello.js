// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// // import Admin from "../../model/Admin"
// // import Blog from "../../model/Blog"
// import Product from "../../model/Product"
// import Frame from "../../model/Frame"

// export default async function handler(req, res) {

//   //  const product = await Product.create({
//   //  name: 'kamal',
//   //  price:12
//   //  })
//   // //  await product.save()


//   //  res.status(200).json(product)

//   //  const frame = await Frame.create({
//   //   name: 'kamal jee'
//   //   })
//   //  //  await product.save()
 
 
//   //   res.status(200).json(frame)
//   // const blog = await Blog({
//   //   title: req.body.title
//   //  })
//   //  await blog.save()

//   //  res.status(200).json(blog)
//   // Users
//   //   .find({_id: req.users.id})
//   //   .populate("blogs") // key to populate
//   //   .then(user => {
//   //     res.json(user);
//   //   });


//   //   Blog.find()
//   // .populate("admins")
//   // .then(p=>console.log(p))
//   // .catch(error=>console.log(error));
//   // res.status(200).json({ name: 'John Doe' })



//   // Answer.findOne({})
//   //   .populate("user")
//   //   .then(p => console.log(p))
//   //   .catch(error => console.log(error));

//   Product.find()
// .populate('farm', 'name')
// .then(product=>console.log(product))
// .catch(error=>console.log(error));
// }
