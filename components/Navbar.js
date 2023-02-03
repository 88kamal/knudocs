import Link from 'next/link';
import React, { useContext, useState } from 'react'
import userContext from '../context/user/userContext';
import { MdDarkMode } from 'react-icons/md'
import { ImSearch } from 'react-icons/im'
import Cookies from 'js-cookie';
function Navbar() {
    // const [isExpanded, toggleExpansion] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const context = useContext(userContext)
    const { toggleMode, mode, setSearchkey, searchkey, user, logout, userProfile, users } = context
    const [inputs, setInput] = useState(false)


    const input = () => {
        setInput(!inputs)
    }
    return (
        <div>

            <nav className=" w-full z-50 shadow-lg fixed  top-0 bg-gray-200 " style={{ backgroundColor: mode === 'dark' ? '#20232a' : '', color: mode === 'dark' ? 'white' : '', }} >
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link href={'/'} >
                                {/* <h2 className="text-2xl font-bold text-[#6366F1]">Hunting CoDeR</h2> */}
                                <img className=' w-40 rounded-lg' src='img/logo.png'/>
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-900 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                                className=' text-black'
                                                style={{ color: mode === 'dark' ? '#6366F1' : '' }}
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                                className=' text-black'
                                                style={{ color: mode === 'dark' ? '#6366F1' : '' }}

                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-1 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-gray-900 hover:text-[#6366F1]">
                                    <Link href={'/'} style={{ color: mode === 'dark' ? 'white' : '' }}>Home</Link>
                                </li>
                                {/* <li className="text-gray-600 hover:text-blue-600">
                                    <a >Blog</a>
                                </li> */}
                                <li className="text-gray-900 hover:text-[#6366F1]">
                                    <Link href={'/docs'} style={{ color: mode === 'dark' ? 'white' : '' }}>Handbook</Link>
                                </li>
                                <li className="text-gray-900 hover:text-[#6366F1]">
                                    <Link href={'/about'} style={{ color: mode === 'dark' ? 'white' : '' }}>About</Link>
                                </li>




                                <li className="text-gray-900 hover:text-[#6366F1] order-last ">
                                    <button className='' style={{
                                        marginTop: '6px'
                                    }} onClick={toggleMode}><MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /></button>

                                </li>
                                <li className="text-gray-900 hover:text-[#6366F1]">
                                    <Link href={'/contact'} style={{ color: mode === 'dark' ? 'white' : '' }}>Contact US
                                    </Link>
                                </li>
                                <li className="text-gray-900 hover:text-[#6366F1]">
                                    <Link href={'/team'} style={{ color: mode === 'dark' ? 'white' : '' }}>Our Team
                                    </Link>
                                </li>
                                <li className="text-gray-900 hover:text-[#6366F1] flex">
                                    <div className='' >  {inputs ? (<input style={{ backgroundColor: mode === 'dark' ? '#ffffff36' : '', color: mode === 'dark' ? 'white' : '' }} className='bg-gray-200 border-0   border-gray-[#6366F1] text-gray-500 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block pl-44 p-2 md:p-[6px] md:pl-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"' type="text"
                                        id="searchkey"
                                        value={searchkey}
                                        onChange={e => setSearchkey(e.target.value)} placeholder="Search" />
                                    ) : ("")}</div>
                                    <button style={{
                                        marginTop: '6px'
                                    }} className=' text-[black] relative bottom-[4px] left-[6px] hover:text-[#6366F1]' onClick={input}><ImSearch size={20} style={{ color: mode === 'dark' ? 'white' : '' }} /></button>

                                </li>

                                {/* <li className="text-gray-900 hover:text-[#6366F1]">
 {
                                    (users.role == 'admin' || users.role == 'root') &&
                                    <li ><Link href={'/admin'}>Admin</Link></li>
                                }
                                </li> */}



                                <li className="text-gray-900 hover:text-[#6366F1]">
                                    {
                                        (user.role == 'admin' || user.role == 'root') &&
                                        <Link href={'/admin'} style={{ color: mode === 'dark' ? 'white' : '' }}>Admin</Link>
                                    }
                                </li>
                                <li className="text-gray-900 hover:text-[#6366F1]">
                                    {
                                        (user.role == 'admin' || user.role == 'root') &&
                                        <Link href={'/create'} style={{ color: mode === 'dark' ? 'white' : '' }}>Create</Link>
                                    }
                                </li>

                                {user ?
                                    <>
                                        {/* <li className=" ">
                                   
                                    <div>  {inputs ? (<input className='' type="text" />
                                    ) : ("")}</div>
                                 <div>   <button className=' text-[#6366F1] mb-10' onClick={input}><ImSearch size={20}/></button></div>
                                </li> */}

                                        <li className="  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                            <a onClick={logout} className=' cursor-pointer' >Logout</a>
                                        </li>
                                        <li className="text-gray-900 hover:text-[#6366F1]">
                                            <Link href={'/account'}>
                                                <img class="w-10 h-10 rounded-full" src={user.image} alt="Jese Leos" />

                                            </Link>
                                        </li>
                                    </>
                                    :
                                    <>  <li className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">
                                        <Link href={'/login'} >Login</Link>
                                    </li>
                                        <li className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">
                                            <Link href={'/signup'} >Create Account</Link>
                                        </li>
                                    </>}


                                {/* <div> */}

                                {/* </div> */}
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar