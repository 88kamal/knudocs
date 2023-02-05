import React, { useContext } from 'react'
import userContext from '../context/user/userContext'

function Team() {
    const context = useContext(userContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-[5.3em] mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest" style={{color: mode === 'dark' ? 'white' : ''}}>OUR TEAM</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base" style={{color: mode === 'dark' ? 'white' : ''}}>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left bg-gray-300" style={{ backgroundColor: mode === 'dark' ? '#ffffff36' : '', color: mode === 'dark' ? 'white' : '' }} >
                                <img alt="team" className="flex-shrink-0 rgb(130 131 239) w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="data:image/jpeg;base64,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" />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900"  style={{color: mode === 'dark' ? 'white' : ''}}>Holden Caulfield</h2>
                                    <h3 className="text-gray-500 mb-3">UI Developer</h3>
                                    <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                    <span className="inline-flex">
                                        <a className="text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left bg-gray-300"  style={{ backgroundColor: mode === 'dark' ? '#ffffff36' : '', color: mode === 'dark' ? 'white' : '' }} >
                                <img alt="team" className="flex-shrink-0 rgb(130 131 239) w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEABy10QnLp_dlJWIWx8KKu7rV9L6MBKUyeIkuGRMUqYu8VM3F_G4O0YtvXU1j4id_24&usqp=CAU" />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900" style={{color: mode === 'dark' ? 'white' : ''}}>Alper Kamu</h2>
                                    <h3 className="text-gray-500 mb-3">Designer</h3>
                                    <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                    <span className="inline-flex">
                                        <a className="text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left bg-gray-300" style={{ backgroundColor: mode === 'dark' ? '#ffffff36' : '', color: mode === 'dark' ? 'white' : '' }} >
                                <img alt="team" className="flex-shrink-0 rgb(130 131 239) w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmf-D-xHLrHdFexvJRJfxh0SR_jEwNPPw4gXpN5dpXq1TwOZxKCleGW1FIOunycxATVD8&usqp=CAU" />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900" style={{color: mode === 'dark' ? 'white' : ''}}>Atticus Finch</h2>
                                    <h3 className="text-gray-500 mb-3">UI Developer</h3>
                                    <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                    <span className="inline-flex">
                                        <a className="text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left bg-gray-300" style={{ backgroundColor: mode === 'dark' ? '#ffffff36' : '', color: mode === 'dark' ? 'white' : '' }} >
                                <img alt="team" className="flex-shrink-0 rgb(130 131 239) w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrAC5gxs-sTA0DwgCsQKPAgE37kujIeoccNeLpiWqwURP1ndCpaVowvJEkZaXqABhBXmU&usqp=CAU" />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900" style={{color: mode === 'dark' ? 'white' : ''}}>Henry Letham</h2>
                                    <h3 className="text-gray-500 mb-3">Designer</h3>
                                    <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                    <span className="inline-flex">
                                        <a className="text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team