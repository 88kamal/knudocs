import { useRouter } from 'next/router'
import React, { useContext, useState, Fragment, useEffect } from 'react'
import userContext from '../../context/user/userContext'
import baseUrl from '../../database/baseUrl'
import { Dialog, Transition } from '@headlessui/react'
import { DefaultEditor } from 'react-simple-wysiwyg';
import Link from 'next/link'




function Answer(getOneAnswer) {
    // console.log(getOneAnswer)
    let [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const context = useContext(userContext)
    const { mode, user, token } = context
    // console.log(getOneAnswer.getOneAnswer.answer._id)
    const [title, setTitle] = useState('')
    const [mediaUrl, setmediaUrl] = useState('')
    const [description, setDescription] = useState('')
    // const [users, setUsers] = useState([]) 



    console.log(user)




    // HTML CODE
    function createMarkup(c) {
        return { __html: c };
    }
    // DELETE ANSWER
    const deleteOneAnswer = async () => {
        const res = await fetch(`${baseUrl}/api/answer/${getOneAnswer.getOneAnswer.answer._id}`, {
            method: 'DELETE'
        });
        const res2 = await res.json()

        if (res2.error) {
            console.log(res2.error)
        }
        else {
            console.log(res2)
            router.push('/')

        }
    }



    // UPDATE ANSWER
    const updateOneAnswer = async (e) => {
        e.preventDefault()
        // console.log(title,mediaUrl, description)
        const res = await fetch(`${baseUrl}/api/answer/${getOneAnswer.getOneAnswer.answer._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                mediaUrl,
                description
            })
        });
        // getServerSideProps()
        const res2 = await res.json();
        if (res2.error) {
            console.log(res2.error)
        }
        else {
            console.log(res2)
            // router.push('/')
            // router.reload(window.location.pathname)
            router.push('/')

        }
    }

    // CLOSE MODAL FUNCTION
    function closeModal() {
        setIsOpen(false)
    }

    // CLOSE MODAL FUNCTION
    function openModal() {
        setIsOpen(true)
    }


    // console.log(users)

    // if(router.isFallback){
    //     return(
    //         <h3>loading...</h3>
    //     )
    // }
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 mdpx-0 py-24 mx-auto flex flex-col">
                    {Object.keys(getOneAnswer).map((item, index) => {
                        return (
                            <div key={getOneAnswer[item].answer._id}>
                                <div className=" lg:w-5/6 mx-auto" >
                                    <div className="rounded-lg overflow-hidden">
                                        <img alt="content" className="h-full  w-full border-2 border-white rounded-lg" src={getOneAnswer[item].answer.mediaUrl} />
                                    </div>
                                    <div className="flex flex-col sm:flex-row mt-10">
                                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                            {/* {(user.role === 'admin' && <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 shadow-2xl">
                                                <img src={getOneAnswer[item].answer.image} alt="" />
                                            </div>)} */}
                                            <div className="flex flex-col items-center text-center justify-center">
                                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg" style={{ color: mode === 'dark' ? 'white' : '' }}>Created By: {getOneAnswer[item].answer.name}</h2>
                                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg" style={{ color: mode === 'dark' ? 'white' : '' }}>Created At: {getOneAnswer[item].answer.date.substr(0, 10)}</h2>
                                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                                                {(user.role === 'admin') && <h2 className="font-medium title-font  text-gray-900 text-lg" style={{ color: mode === 'dark' ? 'white' : '' }}>{getOneAnswer[item].answer.designation}</h2>}
                                                {/* <p className="text-base" style={{ color: mode === 'dark' ? 'white' : '' }}>Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p> */}
                                                <div className=' my-5'>

                                                    {(user.role == 'admin' || user.role == 'root' || user.role == 'subdmin') && 
                                                    <div>

                                                        {/* {(user.name) && 
                                                        <> */}
                                                        <button onClick={openModal} type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Update</button>
                                                        <button onClick={deleteOneAnswer} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                                                        {/* </> */}
                                                        {/* // } */}
                                                    </div>
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0  sm:text-left">
                                            <div className=" flex">
                                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  mb-4">
                                                    <img className=' rounded-full' src={getOneAnswer[item].answer.logo} alt="reactjs" />
                                                </div>
                                                <div>
                                                    <h1 className=' text-3xl font-extrabold mx-5' style={{ color: mode === 'dark' ? 'white' : '' }}>{getOneAnswer[item].answer.title}</h1>
                                                </div>
                                            </div>

                                            <div className="leading-relaxed text-lg md:my-5 p-4  " style={{ backgroundColor: mode === 'dark' ? '' : '', color: mode === 'dark' ? 'white' : '', backdropFilter: '50000px' }}>{(getOneAnswer[item].answer.description)}</div>
                                            <Link
                                                href={getOneAnswer[item].answer.link}>
                                                <button className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-5' >click</button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10 " onClose={closeModal} >
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto bg-slate-400 ">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all" style={{ backgroundColor: mode === 'dark' ? 'rgb(31, 41, 55)' : '', color: mode === 'dark' ? 'white' : '', backdropFilter: '50000px' }}>
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg font-medium leading-6 text-gray-900"
                                                style={{ color: mode === 'dark' ? 'white' : '' }}    >
                                                {getOneAnswer.getOneAnswer.answer.title}
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                {/* <p className="text-sm text-gray-500">
                                                    Your payment has been successfully submitted. We’ve sent
                                                    you an email with all of the details of your order.
                                                </p> */}

                                                <form onSubmit={updateOneAnswer}>
                                                    <div className="mb-6">
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" style={{ color: mode === 'dark' ? 'white' : '' }}>Enter Your Title</label>
                                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={title} onChange={(e) => setTitle(e.target.value)} />
                                                    </div>
                                                    <div className="mb-6">
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" style={{ color: mode === 'dark' ? 'white' : '' }}>Enter YourmediaUrl</label>
                                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={mediaUrl} onChange={(e) => setmediaUrl(e.target.value)} />
                                                    </div>
                                                    <div className="mb-6">
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" style={{ color: mode === 'dark' ? 'white' : '' }}>Enter Your Description</label>
                                                        <DefaultEditor className=' border-4' style={{ height: '16em' }} value={description} onChange={e => setDescription(e.target.value)} />

                                                    </div>
                                                    <div className="">
                                                        {/* <button
                                                            
                                                            className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                            onClick={closeModal}
                                                        >
                                                            Close
                                                        </button> */}
                                                        <button
                                                            type="submit"
                                                            className=" inline-flex justify-center rounded-md border border-transparent bg-blue-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                        >
                                                            Update Answer
                                                        </button>
                                                    </div>
                                                </form>

                                            </div>


                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                    {/* <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                    </svg>
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Phoebe Caulfield</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                                    <p className="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
                                <a className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    )
}

export async function getServerSideProps({ params: { id } }) {
    const res = await fetch(`${baseUrl}/api/answer/${id}`)
    const getOneAnswer = await res.json()

    // const res2 = await fetch(`${baseUrl}/api/answer/${id}`)
    // const getOneUser = await res2.json()
    return {
        props: { getOneAnswer, }, // will be passed to the page component as props
    }
}

// export async function getStaticProps({params:{id}}) {
//     const res = await fetch(`${baseUrl}/api/answer/${id}`)
//     const getOneAnswer = await res.json()
//     return {
//       props: {getOneAnswer}
//     }
//   }

// export async function getStaticPaths() {
//     return {
//       paths: [
//         { params: { id:"636d4b64f76c9bc335158457" } } 
//       ],
//       fallback: true
//   }
// }

export default Answer