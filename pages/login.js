import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import userContext from '../context/user/userContext'
import baseUrl from '../database/baseUrl'
import Cookies from "js-cookie";
import nookies from 'nookies'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const context = useContext(userContext)
  const { mode, setUser, setuserProfile, setUsers } = context
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const userlogin = async (e) => {
    e.preventDefault()
    const res = await fetch(`${baseUrl}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const res2 = await res.json()

    console.log(res2)
    if (res2.error) {
      console.log(res2.error)
      toast.error(res2.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      console.log(res2)
      router.push('/')
      // setCookies('token', res2.token)
      // setCookies('user', JSON.stringify(res2.user))
      // localStorage.setItem('token', res2.token)
      // localStorage.setItem('user', JSON.stringify(res2.user))
      Cookies.set('token', res2.token)
      Cookies.set('user', JSON.stringify(res2.user))
      // setUser('user')
      const cookie = nookies.get('user')
      setUser(cookie.user ? JSON.parse(cookie.user) : '')
      // setUsers('user')
      // setuserProfile('user')

    }
  }
  return (
    <div className=' flex justify-center mb-[11em]'>

      <div className="p-4  my-52 w-[90%] max-w-sm bg-gray-300 rounded-lg border border-gray-400 shadow-lg sm:p-6 md:p-8 " style={{ backgroundColor: mode === 'dark' ? '#20232a' : '', color: mode === 'dark' ? 'white' : 'black' }}>
        <form onSubmit={userlogin} className=" space-y-4" >
          <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Sign In to our platform</h5>
          <div>
            {/* <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Your email</label> */}
            <input type="email" name="email" value={email} className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:text-white" placeholder="name@company.com" required="" onChange={(e) => setEmail(e.target.value)} style={{
              backgroundColor: mode === 'dark' ? '#20232a' : '', color: mode === 'dark' ? 'white' : 'black'
            }} />
          </div>
          <div>
            {/* <label for="password" className="block mb-2  text-sm font-medium text-gray-900 dark:text-gray-300" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Your password</label> */}
            <input type="password" name="password" placeholder="••••••••" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required="" value={password} onChange={(e) => setPassword(e.target.value)} style={{
              backgroundColor: mode === 'dark' ? '#20232a' : '', color: mode === 'dark' ? 'white' : 'black'
            }} />
          </div>
          {/* <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
              </div>
              <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
          </div> */}
          <button type="submit" className="w-full my-5 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login to your account</button>
          <ToastContainer />
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
            Not registered? <Link href={'/signup'} className="text-blue-700 hover:underline dark:text-blue-500" style={{ color: mode === 'dark' ? 'green' : '' }}>Create Account</Link>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login