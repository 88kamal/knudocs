// import React, { useContext, useState } from 'react'
// import userContext from '../context/user/userContext'

// function signup() {
//   const context = useContext(userContext)
//   const { mode } = context

// const [name, setName] = useState('')
// const [designation, setDesignation] = useState('')
// const [image, setImage] = useState('')
// const [email, setEmail] = useState('')
// const [password, setPassword] = useState('')
//   return (
//     <div classNameName=' flex justify-center'>
//       {/* <h5 className="text-xl font-medium text-gray-900 dark:text-white" style={{ color: mode === 'dark' ? 'white' : '' }}>Sign Up to our platform</h5> */}
//       <div className="p-4  my-24 w-[90%] max-w-sm bg-white rounded-md shadow-lg  border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700" style={{
//         backgroundColor: mode === 'dark' ? 'rgb(31 41 55)' : '', color: mode === 'dark' ? 'white' : '', backdropFilter: 'blur(90px)'
//       }}>
//         <form className="space-y-6" action="#">

// <img classNameName=" w-20 container mx-auto  shadow-md" style={{
//   borderRadius: '71px'
// }} src={image ? URL.createObjectURL(image) : ""} alt="" />

//           <div className="mb-3"></div>
// <div>
//   <label for="name" className="block mb-2  font-medium text-gray-900 dark:text-gray-300" style={{ color: mode === 'dark' ? 'white' : '' }}>Enter Your Full Name</label>
//   <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" style={{
//     backgroundColor: mode === 'dark' ? 'rgb(0 20 38)' : '', color: mode === 'dark' ? 'white' : ''
//   }} />
// </div>
// <div>
//   <label for="desig" className="block mb-2  font-medium text-gray-900 dark:text-gray-300" style={{ color: mode === 'dark' ? 'white' : '' }}>Enter Your Designation</label>
//   <input type="text" name="email" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" style={{
//     backgroundColor: mode === 'dark' ? 'rgb(0 20 38)' : '', color: mode === 'dark' ? 'white' : ''
//   }} />
// </div>
// <div>
//   {/* <label for="email" className="block mb-2  font-medium text-gray-900 dark:text-gray-300" style={{ color: mode === 'dark' ? 'white' : '' }}>Your email</label>
//   <input type="email" name="email"  className="bg-gray-50 border border-gray-300 text-gray-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" /> */}

//   <label className="block mb-2  font-medium text-gray-900 dark:text-gray-300" for="large_size" style={{ color: mode === 'dark' ? 'white' : '' }}>Large file input</label>
//   <input className="block w-full text-lg text-gray-900 bg-gray-50 rounded-md border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" type="file" onChange={(e) => setImage(e.target.files[0])} style={{
//     backgroundColor: mode === 'dark' ? 'rgb(0 20 38)' : '', color: mode === 'dark' ? 'white' : ''
//   }} />

// </div>
// <div>
//   <label for="email" className="block mb-2  font-medium text-gray-900 dark:text-gray-300" style={{ color: mode === 'dark' ? 'white' : '' }}>Your email</label>
//   <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@gmail.com" required="" style={{
//     backgroundColor: mode === 'dark' ? 'rgb(0 20 38)' : '', color: mode === 'dark' ? 'white' : ''
//   }} />
// </div>
// <div>
//   <label for="password" className="block mb-2  font-medium text-gray-900 dark:text-gray-300" style={{ color: mode === 'dark' ? 'white' : '' }}>Your password</label>
//   <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" style={{
//     backgroundColor: mode === 'dark' ? 'rgb(0 20 38)' : '', color: mode === 'dark' ? 'white' : ''
//   }} />
// </div>
//           {/* <div className="flex items-start">
//             <div className="flex items-start">
//               <div className="flex items-center h-5">
//                 <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
//               </div>
//               <label for="remember" className="ml-2  font-medium text-gray-900 dark:text-gray-300">Remember me</label>
//             </div>
//             <a href="#" className="ml-auto  text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
//           </div> */}
//           <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignUp</button>
//           <div className=" font-medium text-gray-500 dark:text-gray-300">
//             You registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500" style={{ color: mode === 'dark' ? 'white' : '' }}>Login Now</a>
//           </div>
//         </form>
//       </div >

//     </div >
//   )
// }

// export default signup



import React, { useContext, useState } from 'react'
import userContext from '../context/user/userContext'
import baseUrl from '../database/baseUrl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Signup() {
  const context = useContext(userContext)
  const { mode } = context
  const [name, setName] = useState('')
  const [designation, setDesignation] = useState('')
  const [image, setImage] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  // CREATE ACCOUNT 
  const userSignup = async (e) => {
    e.preventDefault()
    const image = await imageuploader()
    const res = await fetch(`${baseUrl}/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        designation,
        image,
        email,
        password
      })
    })
    const res2 = await res.json()

    if (res2.error) {
      console.log(res2.error)
      toast.error(res2.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    } else {
      // console.log(res2)
      toast.success(res2, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // router.push('/login')

    }
  }




  //IMAGE UPLOADER 
  const imageuploader = async () => {
    const data = new FormData();
    data.append('file', image)
    data.append('upload_preset', 'mystore')
    data.append('cloud_name', "dkjgzcnzu")
    const res = await fetch("https://api.cloudinary.com/v1_1/dkjgzcnzu/image/upload", {
      method: "POST",
      body: data
    })
    console.log(imageuploader)

    const res2 = await res.json()
    console.log(res2)
    return res2.url
  }
  return (
    <div className=' flex justify-center'>

      <div className="p-4  my-24 w-[90%] max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(31 41 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
        <form className="space-y-6" onSubmit={userSignup}>
          <img className=" w-20 container mx-auto  shadow-md" style={{
            borderRadius: '71px'
          }} src={image ? URL.createObjectURL(image) : ""} alt="" />

          {/* <h5 className="text-xl font-medium text-gray-900 dark:text-white" style={{ color: mode === 'dark' ? 'white' : '' }}>Sign Up to our platform</h5> */}
          <div>
            <label for="name" className="block mb-2  font-medium text-gray-900 dark:text-gray-300" style={{ color: mode === 'dark' ? 'white' : '' }}>Enter Your Full Name</label>
            <input type="text" name="name" value={name} className="bg-gray-50 border border-gray-300 text-gray-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" style={{
              backgroundColor: mode === 'dark' ? 'rgb(0 20 38)' : '', color: mode === 'dark' ? 'white' : ''
            }} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label for="desig" className="block mb-2  font-medium text-gray-900 dark:text-gray-300" style={{ color: mode === 'dark' ? 'white' : '' }}>Enter Your Designation</label>
            <input type="text" name="email" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" style={{
              backgroundColor: mode === 'dark' ? 'rgb(0 20 38)' : '', color: mode === 'dark' ? 'white' : ''
            }} value={designation} onChange={(e) => setDesignation(e.target.value)} />
          </div>
          <div>
            <label className="block mb-2  font-medium text-gray-900 dark:text-gray-300" for="large_size" style={{ color: mode === 'dark' ? 'white' : '' }}>Please Upload own pic</label>
            <input className="block w-full text-lg text-gray-900 bg-gray-50 rounded-md border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" type="file" onChange={(e) => setImage(e.target.files[0])} style={{
              backgroundColor: mode === 'dark' ? 'rgb(0 20 38)' : '', color: mode === 'dark' ? 'white' : ''
            }} />

          </div>
          <div>
            <label for="email" className="block mb-2  font-medium text-gray-900 dark:text-gray-300" style={{ color: mode === 'dark' ? 'white' : '' }}>Your email</label>
            <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@gmail.com" required="" style={{
              backgroundColor: mode === 'dark' ? 'rgb(0 20 38)' : '', color: mode === 'dark' ? 'white' : ''
            }} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label for="password" className="block mb-2  font-medium text-gray-900 dark:text-gray-300" style={{ color: mode === 'dark' ? 'white' : '' }}>Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" style={{
              backgroundColor: mode === 'dark' ? 'rgb(0 20 38)' : '', color: mode === 'dark' ? 'white' : ''
            }} value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {/* <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
              </div>
              <label for="remember" className="ml-2  font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" className="ml-auto  text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
          </div> */}
          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignUp</button>
          <ToastContainer />
          <div className=" font-medium text-gray-500 dark:text-gray-300">
            You registered? <Link href={'/login'} className="text-blue-700 hover:underline dark:text-blue-500" style={{ color: mode === 'dark' ? 'white' : '' }}>Login Now</Link>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Signup