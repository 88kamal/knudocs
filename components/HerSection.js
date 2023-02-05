// import Link from 'next/link'
// import React, { useContext } from 'react'
// import userContext from '../context/user/userContext'

// function HerSection() {
//     const context = useContext(userContext)
//     const { mode } = context
//     return (
//         <div>
//             <section className="text-gray-600 body-font">
//                 <div className="container mx-auto flex px-5 mt-28 md:mt-36 md:flex-row flex-col-reverse items-center">
//                     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//                         <h1 className="title-font sm:text-4xl text-3xl mb-4 my-5 font-medium text-gray-900 " style={{ color: mode === 'dark' ? 'white' : '' }}><span >Welcome To
//                             <span className=' font-bold text-purple-800  text-4xl  ' style={{ color: mode === 'dark' ? '#6366F1' : '', fontWeight: mode === 'dark' ? 'bold' : '' }}> WebKnu</span> </span>
//                         </h1>
//                         <p className="mb-8 leading-relaxed" style={{ color: mode === 'dark' ? 'white' : '' }}>Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
//                         <div className="flex justify-center">
//                             {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">About</button> */}
//                             <button style={{ backgroundColor: mode === 'dark' ? 'white' : '', color: mode === 'dark' ? 'black' : '' }} type="button" className="text-white bg-[black]   focus:ring-1 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 ">
//                                 <Link href={'/freecourse'}> Free Cource</Link>
//                             </button>
//                           <Link href={'/quiz/main'}>
//                           <button style={{ backgroundColor: mode === 'dark' ? 'rgb(172 177 179)' : '', color: mode === 'dark' ? 'black' : '' }} type="button" className="text-black bg-[#d8dadb]  focus:ring-2 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 ">
//                                 Start Quiz
//                             </button>
//                           </Link>

//                             {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
//                         </div>
//                     </div>
//                     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//                         <img className="rounded-lg hover:shadow-2xl hover:shadow-[#6366F1] cursor-pointer " alt="hero" src="https://www.officesolutionsit.com.au/hubfs/cyber-security-vulnerability.jpg" />
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default HerSection


import Link from 'next/link'
import React, { useContext } from 'react'
import userContext from '../context/user/userContext'

function HeroSection() {
    // https://networkencyclopedia.com/wp-content/uploads/2019/08/hacking-1024x512.jpeg
    // https://c4.wallpaperflare.com/wallpaper/374/392/867/anarchy-computer-cyber-dark-wallpaper-preview.jpg
    // https://wallpaperaccess.com/full/3909258.jpg
    const context = useContext(userContext)
    const {mode } = context
  return (
    <div className=' my-[4.1em]'>
        {/* Component Code */}
        <div className="relative  h-[35em] w-full flex items-center justify-center text-center bg-contain bg-center" style={{backgroundImage: mode == 'dark' ? 'url(https://wallpaperaccess.com/full/3909258.jpg)' :'url(https://c4.wallpaperflare.com/wallpaper/111/745/193/reactjs-javascript-programming-programming-language-hd-wallpaper-preview.jpg)', backgroundRepeat:"no-repeat", backgroundSize:' cover'}}>
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75" />
          <main className="px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center">
              <h2 className="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl">
                <span className="text-[#c7ecee] ">Welcome to</span> <span className=' text-[#61DAFB] font-bold'>KnuDocs</span> 
              </h2>
              <p className="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex justify-center">
                <div className="rounded-md shadow">
                  <Link href={'/document'} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-lg leading-6 font-regular  text-black bg-[#61DAFB] hover:bg-[white]  focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10">
                    Get started
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-lg leading-6 font-regular  text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:px-10">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
        
      </div>
  )
}

export default HeroSection