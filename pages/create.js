import React, { useContext, useState } from 'react'
import { DefaultEditor } from 'react-simple-wysiwyg';
import userContext from '../context/user/userContext';
import baseUrl from '../database/baseUrl';
import nookies from 'nookies'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function create() {
  const context = useContext(userContext)
  const { mode, user, setUser } = context

  const [title, setTitle] = useState('')
  const [mediaUrl, setMediaUrl] = useState('')
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')
  const [designation, setDesignation] = useState('')
  const [logo, setLogo] = useState('')
  const [link, setLink] = useState('')


  /**========================================================================
   * !                              Save Answer 
   *========================================================================**/
  // const users = user()

  // const { name } = user
  // console.log(user)

  const saveAnswer = async (e) => {
    e.preventDefault(e)
    // const image = await imageuploader()

    // console.log(title,mediaUrl, description, email)
    setTitle("")
    setMediaUrl("")
    setDescription("")
    setName("")
    setDesignation("")
    setLogo(""),
    setLink("")
    
    const res = await fetch(`${baseUrl}/api/answer`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        title,
        mediaUrl,
        description,
        name,
        designation,
        logo,
        link
      })
    })
    // console.log(res)
    // const cookie = nookies.get('user')
    // setUser('user.email')
    const res2 = await res.json()
    if (res2.error) {
      // console.log(res2.error)
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
    }
    else {
      console.log(res2)
      toast.success('Post Added Sucessfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }



  // //IMAGE UPLOADER 
  // const imageuploader = async () => {
  //   const data = new FormData();
  //   data.append('file', image)
  //   data.append('upload_preset', 'mystore')
  //   data.append('cloud_name', "dkjgzcnzu")
  //   const res = await fetch("https://api.cloudinary.com/v1_1/dkjgzcnzu/image/upload", {
  //     method: "POST",
  //     body: data
  //   })
  //   console.log(imageuploader)

  //   const res2 = await res.json()
  //   console.log(res2)
  //   return res2.url
  // }

  return (
    <div className=' my-[6em] container mx-auto p-3 md:px-20 '  >
      <h1 className=' text-center text-3xl  mb-5 font-bold' style={{
        color: mode === 'dark' ? 'white' : ''
      }}>Upload Own Docs </h1>
      <form onSubmit={saveAnswer} className='bg-gray-300  p-5 rounded-lg border-2 border-gray-600 shadow-xxl' style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', backdropFilter: '50000px', }}>
        <div className="mb-6">
          <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-black" required value={title} onChange={e => setTitle(e.target.value)} style={{
            backgroundColor: mode === 'dark' ? 'rgb(64 70 81)' : '', color: mode === 'dark' ? 'white' : 'black'
          }} placeholder="Enter Your Title" />
        </div>
        <div className="mb-6">
          <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={mediaUrl} onChange={e => setMediaUrl(e.target.value)} style={{
            backgroundColor: mode === 'dark' ? 'rgb(64 70 81)' : '', color: mode === 'dark' ? 'white' : 'black'
          }} placeholder="Enter Your Thumbnail Url" />
        </div>
        <div className="mb-6">
          <input type="text" name='name' className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={name} onChange={e => setName(e.target.value)} style={{
            backgroundColor: mode === 'dark' ? 'rgb(64 70 81)' : '', color: mode === 'dark' ? 'white' : 'black'
          }} placeholder="Enter Your Name" />
        </div>
        <div className="mb-6">
          <input type="text" name='designation' className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={designation} onChange={e => setDesignation(e.target.value)} style={{
            backgroundColor: mode === 'dark' ? 'rgb(64 70 81)' : '', color: mode === 'dark' ? 'white' : 'black'
          }} placeholder="Enter Your Designation" />
        </div>
        <div className="mb-6">
          <input type="text" name='Logo' className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={logo} onChange={e => setLogo(e.target.value)} style={{
            backgroundColor: mode === 'dark' ? 'rgb(64 70 81)' : '', color: mode === 'dark' ? 'white' : 'black'
          }} placeholder="Enter Your Docs Logo" />
        </div>
        <div className="mb-6">
          <input type="text" name='link' className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={link} onChange={e => setLink(e.target.value)} style={{
            backgroundColor: mode === 'dark' ? 'rgb(64 70 81)' : '', color: mode === 'dark' ? 'white' : 'black'
          }} placeholder="Enter Your Docs Link" />
        </div>
        <div className="mb-6">
          <input type="text" name='description' className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={description} onChange={e => setDescription(e.target.value)} style={{
            backgroundColor: mode === 'dark' ? 'rgb(64 70 81)' : '', color: mode === 'dark' ? 'white' : 'black'
          }} placeholder="Enter Short Description" />
        </div>
       
      
        <button type="submit" style={{
          color: mode === 'dark' ? 'black' : '',
          backgroundColor: mode === 'dark' ? 'rgb(97, 218, 251)' : 'black'
        }} className=" w-full text-white  focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5   dark:focus:ring-[#3b5998]/55 " >Submit</button>
        <ToastContainer />
      </form>
    </div>

    // <form className='mt-32' onSubmit={saveAnswer}>
    //   <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="t" />
    //   <input type="text" value={medai} onChange={(e) => setImageUrl(e.target.value)} placeholder="i" />
    //   <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="e"/>
    //   <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}  placeholder=""/>
    //   <button type='submit'>add</button>
    // </form>

    // <div className="container mx-auto p-4 my-24">
    //   <form >
    //   <label htmlFor="title" className="block mb-2  font-medium text-gray-900 dark:text-gray-300">Enter Your Title</label>
    //   <div className="border border-gray-400 rounded-lg flex mb-4 shadow-lg">
    //     <input type="text" className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent focus:border-green-500 focus:text-green-500" required/>
    //   </div>
    //   <div className="border border-gray-400 rounded-lg flex mb-4 shadow-lg">
    //     <input type="text"  className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent focus:border-green-500 focus:text-green-500" required/>
    //   </div>

    // <button className="bg-green-500 w-full font-medium text-white px-4 py-3 rounded-lg shadow-lg hover:bg-green-400">Submit</button>

    //   </form>
    // </div>
    // <div className=" min-h-screen flex items-center">
    //   <div className="w-full">
    //     <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Fill out our form</h2>
    //     <div className="bg-gray-200 p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
    //       <form action>
    //         <div className="mb-5">
    //           <label htmlFor="title" className="block mb-2  font-medium text-gray-900 dark:text-gray-300">Enter Your Title</label>
    //           <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={title} onChange={e => setTitle(e.target.value)} />
    //         </div>
    //         <div className="mb-5">
    //           <label htmlFor="title" className="block mb-2  font-medium text-gray-900 dark:text-gray-300">Enter Your Image Url</label>
    //           <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={imageUrl} onChange={(e) => setMediaUrl(e.target.value)} />
    //         </div>
    //         <div className="mb-5">
    //           <label htmlFor="title" className="block mb-2  font-medium text-gray-900 dark:text-gray-300">Enter Your Image Url</label>
    //           <DefaultEditor value={description} onChange={e => setDescription(e.target.value)} />

    //         </div>
    //         <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
    //       </form>
    //     </div>
    //   </div>
    // </div>

  )
}

export default create