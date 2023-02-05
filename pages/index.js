import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useState, useEffect } from 'react'
import HerSection from '../components/HerSection'
import PremiumUser from '../components/PremiumUser'
import userContext from '../context/user/userContext'
import baseUrl from '../database/baseUrl'
import styles from '../styles/Home.module.css'

export default function Home({ post }) {
  const context = useContext(userContext)
  const { mode, setSearchkey, searchkey } = context
  // console.log(post)

  // const myTimeout = setTimeout(myGreeting, 1000);

  // function myGreeting() {
  //   document.getElementById("demo").innerHTML = "Happy Birthday!"
  //   // clearTimeout(myTimeout)
  // }

  // useEffect(() => {
  //  setInterval(() => {
    // clearTimeout(myTimeout)
  //  }, 5000);
  // }, [myTimeout]);
  return (
    <div className=" ">
      <HerSection />
      <Head>
        <title>WebKnu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' mt-[-2em]    '  >
        
        <section className="text-gray-600 body-font " >
          <div className="container px-5  mx-auto ">
            <div className="">
              <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900 text-center" style={{ color: mode === 'dark' ? 'white' : '' }}>Overview Of Documentation</h1>
            </div>
            <h2 id="demo"></h2>

            {/* <div className=''>

             {searchkey ? (<h1 className=' text-center text-3xl'>Not Found</h1>)
             :
             <div className=' flex flex-wrap -m-4 md:-m-6 '>

             {
               post.filter((obj) => obj.title.toLowerCase().includes(searchkey)).map((item) => {
                 return (
                   <div className="xl:w-1/4 md:w-1/2 p-10 py-1 md:p-4 mb-2  " key={item._id} >
                     <Link href={`/answers/${item._id}`}> <div className="bg-gray-200 p-5 rounded-2xl  hover:shadow-2xl hover:shadow-[#6366F1] hover:ring-offset-1 hover:ring-1  " style={{ backgroundColor: mode === 'dark' ? 'rgb(31 41 55)' : '', color: mode === 'dark' ? 'white' : '' }} >
                       <img className="h-40 rounded-lg w-full   mb-6" src={item.mediaUrl} alt="content" />
                       <h3 className="tracking-widest text-[#6366F1] text-xs font-medium title-font">FREE COURCE</h3>
                       <h2 style={{ color: mode === 'dark' ? 'white' : '' }} className="text-lg text-gray-900 font-medium title-font mb-4">{item.title.substr(0, 25)}</h2>
                       <p className="leading-relaxed text-base text-justify" >{item.description.replace(/<[^>]+>/g, '').substr(0, 70)}</p>
                       <p className='my-1'><span style={{ color: mode === 'dark' ? 'white' : '' }} className=' text-black font-bold'>Created At:</span> <span style={{ color: mode === 'dark' ? '#6366F1' : '' }}>{item.date.substr(0, 10)}</span> </p>
                     </div>
                     </Link>
                   </div>
                 )
               })
             }
           </div>}
            </div> */}
            <section className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" style={{
                    color: mode === 'dark' ? 'white' : ''
                  }}>Best Docs For
                    Beginner
                  </h1>
                  <p className="mb-8 leading-relaxed" style={{
                    color: mode === 'dark' ? 'white' : ''
                  }}>Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>

                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <img className="object-cover object-center rounded -mt-20 md:-mt-0 hover:shadow-2xl hover:shadow-[#6366F1] cursor-pointer" alt="hero" src={mode === 'dark' ? 'img/docsdark.png' : 'img/docslight.png'} />
                </div>
              </div>
            </section>

            {/* handbook banner  */}

            <section className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                  <img className="object-cover object-center rounded -mt-20 md:-mt-0 hover:shadow-2xl hover:shadow-[#6366F1] cursor-pointer" alt="hero" src={mode === 'dark' ? 'img/darkhand.png' : 'img/lighthand.png'} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" style={{
                    color: mode === 'dark' ? 'white' : ''
                  }}>Best handbook For
                    Beginner
                  </h1>
                  <p className="mb-8 leading-relaxed" style={{
                    color: mode === 'dark' ? 'white' : ''
                  }}>Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                </div>
              </div>
            </section>
            {/* plane for primium  */}

            <PremiumUser />

          </div>

        </section>

      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${baseUrl}/api/answer`);
  const post = await res.json()
  // console.log(answer)
  return {
    props: { post }, // will be passed to the page component as props
  }
}