import Cookies from 'js-cookie'
import { useState, useEffect, useContext } from 'react'
import userContext from '../context/user/userContext'
import baseUrl from '../database/baseUrl'

function Admin() {
    const context = useContext(userContext)
    const { mode, } = context
    const [users, setUsers] = useState([])
    const [post, setpost] = useState([])

    const token = Cookies.get('token')
    useEffect(() => {
        fetchUser()
        getAnswer()
    }, [])
    const fetchUser = async () => {
        const res = await fetch(`${baseUrl}/api/user`, {
            headers: {
                "Authorization": token
            }
        })
        const res2 = await res.json()
        console.log(res2)
        setUsers(res2)
    }
    const getAnswer = async () => {
        const res = await fetch(`${baseUrl}/api/answer`, {
        })
        const res2 = await res.json()
        console.log(res2)
        setpost(res2)
    }
    const handleRole = async (_id, role) => {
        const res = await fetch(`${baseUrl}/api/user`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify({
                _id,
                role
            })
        })
        const res2 = await res.json()
        console.log(res2)
        // setUsers(res2)
        const updatedUsers = users.map(user => {
            if ((user.role != res2.role) && (user.email == res2.email)) {
                return res2
            } else {
                return user
            }
        })
        setUsers(updatedUsers)
    }

    return (
        // <div className=' my-36'>
        //     <h1>User roles</h1>
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>Name</th>
        //                 <th>Email</th>
        //                 <th>Role</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        // {users.map(item => {
        //     return (
        //         <tr>
        //             <td>{item.name}</td>
        //             <td>{item.email}</td>
        //             <td onClick={() => handleRole(item._id, item.role)}>{item.role}</td>

        //         </tr>
        //     )
        // })}


        //         </tbody>
        //     </table>

        // </div>
        <div>

            <div className="overflow-x-auto my-20  mb-[26em] " >
                <h1 className="title-font sm:text-4xl text-3xl mb-4 my-5 font-medium text-gray-900 text-center " style={{ color: mode === 'dark' ? 'white' : '' }}><span >
                    <span className=' font-bold text-purple-800  text-4xl ' style={{ color: mode === 'dark' ? '#6366F1' : '', fontWeight: mode === 'dark' ? 'bold' : '' }}>WebKnu</span> User's </span>
                </h1>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 container mx-auto " >
                    <thead className="  text-xs text-gray-700 uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400" style={{ backgroundColor: mode === 'dark' ? 'rgb(31, 41, 55)' : '', color: mode === 'dark' ? 'white' : '', backdropFilter: '50000px' }}>
                        <tr>
                            <th scope="col" className="py-3 px-6 text-white">
                                S.No
                            </th>
                            <th scope="col" className="py-3 px-6 text-white">
                                Pic
                            </th>
                            <th scope="col" className="py-3 px-6 text-white">
                                Name
                            </th>
                            <th scope="col" className="py-3 px-6 text-white">
                                Email
                            </th>
                            <th scope="col" className="py-3 px-6 text-white">
                                Role
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        {users.map((item, key) => {
                            return (
                                <tr className=" bg-[#d2dae2] border-b  border-[white] " style={{ backgroundColor: mode === 'dark' ? 'rgb(147 147 147 / 27%)' : '', color: mode === 'dark' ? 'white' : '', backdropFilter: '50000px' }}>
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                        {key + 1}
                                    </th>
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                        <img className='w-10 h-10 rounded-full' src={item.image} alt="" />

                                    </th>
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                        {item.name}
                                    </th>
                                    <td className="py-4 px-6 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                        {item.email}
                                    </td>
                                    <td onClick={() => handleRole(item._id, item.role)} className="py-4 px-6 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                        {item.role}
                                    </td>

                                </tr>
                            )
                        })}

                    </tbody>
                </table>
                {/* <h1>{post.length}</h1> */}
            </div>
        </div>

    )
}

export default Admin