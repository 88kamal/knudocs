import Link from 'next/link'
import React, { useContext } from 'react'
import userContext from '../context/user/userContext'

function PremiumUser() {
    const context = useContext(userContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900"
                            style={{
                                color: mode === 'dark' ? 'white' : ''
                            }}
                        >Plan For Premium User</h1>
                        <p style={{
                            color: mode === 'dark' ? 'white' : ''
                        }} className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
                        {/* <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
                    <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Monthly</button>
                    <button className="py-1 px-4 focus:outline-none">Annually</button>
                  </div> */}
                    </div>
                    <div className="flex flex-wrap -m-4 -mt-10">
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full ">
                            <div className="h-full p-6 rounded-lg border-2   border-gray-300 flex flex-col relative overflow-hidden hover:shadow-xl hover:shadow-[#6366F1] cursor-pointer">
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium" style={{
                                    color: mode === 'dark' ? 'white' : ''
                                }}>START</h2>
                                <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none"
                                    style={{
                                        color: mode === 'dark' ? 'white' : ''
                                    }}>Free</h1>
                                <p
                                    style={{
                                        color: mode === 'dark' ? 'white' : ''
                                    }}
                                    className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>Docs Available
                                </p>
                                <p
                                    style={{
                                        color: mode === 'dark' ? 'white' : ''
                                    }}
                                    className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>Get Projects
                                </p>
                                <p
                                    style={{
                                        color: mode === 'dark' ? 'white' : ''
                                    }}
                                    className="flex items-center text-gray-600 mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>Mixtape chillwave tumeric
                                </p>
                                {/* <Link href={'/login'}> */}
                                <Link href={'/login'}
                                    style={{
                                        color: mode === 'dark' ? 'black' : ''
                                    }} className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:0 rounded">Start Now
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                {/* </Link> */}

                                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full p-6 rounded-lg border-2  hover:shadow-xl hover:shadow-[#f163b6] cursor-pointer border-indigo-500 flex flex-col relative overflow-hidden">
                                <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl"
                                >POPULAR</span>
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium"
                                    style={{
                                        color: mode === 'dark' ? 'white' : ''
                                    }}>PRO</h2>
                                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span
                                        style={{
                                            color: mode === 'dark' ? 'white' : ''
                                        }}>₹100</span>
                                    <span
                                        style={{
                                            color: mode === 'dark' ? 'white' : ''
                                        }} className="text-lg ml-1 font-normal text-gray-500">/yr</span>
                                </h1>
                                <p style={{
                                    color: mode === 'dark' ? 'white' : ''
                                }} className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p style={{
                                    color: mode === 'dark' ? 'white' : ''
                                }} className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p style={{
                                    color: mode === 'dark' ? 'white' : ''
                                }} className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>Hexagon neutra unicorn
                                </p>
                                <p style={{
                                    color: mode === 'dark' ? 'white' : ''
                                }} className="flex items-center text-gray-600 mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>Mixtape chillwave tumeric
                                </p>
                                <button style={{
                                    color: mode === 'dark' ? 'white' : ''
                                }} className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Start Now
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full p-6 rounded-lg   hover:shadow-xl hover:shadow-[#6366F1] cursor-pointer border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium" style={{
                                    color: mode === 'dark' ? 'white' : ''
                                }}>BUSINESS</h2>
                                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span style={{
                                        color: mode === 'dark' ? 'white' : ''
                                    }}>₹56</span>
                                    <span style={{
                                        color: mode === 'dark' ? 'white' : ''
                                    }} className="text-lg ml-1 font-normal text-gray-500">/yr</span>
                                </h1>
                                <p style={{
                                    color: mode === 'dark' ? 'white' : ''
                                }} className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p style={{
                                    color: mode === 'dark' ? 'white' : ''
                                }} className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p style={{
                                    color: mode === 'dark' ? 'white' : ''
                                }} className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>Hexagon neutra unicorn
                                </p>
                                <p style={{
                                    color: mode === 'dark' ? 'white' : ''
                                }} className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p style={{
                                    color: mode === 'dark' ? 'white' : ''
                                }} className="flex items-center text-gray-600 mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>Mixtape chillwave tumeric
                                </p>
                                <button style={{
                                    color: mode === 'dark' ? 'black' : ''
                                }} className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:0 rounded">Start Now
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full p-6   hover:shadow-xl hover:shadow-[#f163c6] cursor-pointer rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium"
                                    style={{
                                        color: mode === 'dark' ? 'white' : ''
                                    }}>SPECIAL</h2>
                                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span style={{
                                        color: mode === 'dark' ? 'white' : ''
                                    }}>₹72</span>
                                    <span style={{
                                        color: mode === 'dark' ? 'white' : ''
                                    }} className="text-lg ml-1 font-normal text-gray-500">/yr</span>
                                </h1>
                                <p style={{
                                    color: mode === 'dark' ? 'white' : ''
                                }} className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p style={{
                                    color: mode === 'dark' ? 'white' : ''
                                }} className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p style={{
                                    color: mode === 'dark' ? 'white' : ''
                                }} className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>Hexagon neutra unicorn
                                </p>
                                <p style={{
                                    color: mode === 'dark' ? 'white' : ''
                                }} className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p style={{
                                    color: mode === 'dark' ? 'white' : ''
                                }} className="flex items-center text-gray-600 mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>Mixtape chillwave tumeric
                                </p>
                                <button style={{
                                    color: mode === 'dark' ? 'black' : ''
                                }} className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:0 rounded">Start Now
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PremiumUser