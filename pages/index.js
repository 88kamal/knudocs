import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useState } from 'react'
import HerSection from '../components/HerSection'
import userContext from '../context/user/userContext'
import baseUrl from '../database/baseUrl'
import styles from '../styles/Home.module.css'

export default function Home({ post }) {
  const context = useContext(userContext)
  const { mode, setSearchkey, searchkey } = context
  // console.log(post)

  return (
    <div className=" ">
      <HerSection />
      <Head>
        <title>WebKnu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' mt-[-2em] md:mt-14  '  >
        <section className="text-gray-600 body-font " >
          <div className="container px-5  mx-auto ">
            <div className="">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-10 text-gray-900 text-center" style={{ color: mode === 'dark' ? 'white' : '' }}>BEST COURSE FOR EVER</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded mx-24">ok</div>
            </div>
            <div className=''>

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
                     </div></Link>
                   </div>
                 )
               })
             }
           </div>}

              {
                // post.map((i)=>{
                //   return(
                //     <h1>{i.title}</h1>
                //   )
                // })
              }
            </div>

            {/* <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="searchkey"
              id="searchkey"
              value={searchkey}
              onChange={e => setSearchkey(e.target.value)} /> */}


            {/* {
              Object.keys(answer).map((i, index) => {
                return (
                  <div>{console.log(answer(i))}</div>
                )
              })
            } */}



            {/* <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4 md:w-1/2 p-4  " >
                <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg " style={{ backgroundColor: mode === 'dark' ? 'rgb(31 41 55)' : '', color: mode === 'dark' ? 'white' : '' }} >
                  <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                  <h2 style={{ color: mode === 'dark' ? 'white' : '' }} className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
             
            </div> */}
             <Link href={'/github'}>
              <div className="container md:flex   md:justify-around md:items-center bg-gray-200 my-20 rounded-xl  p-5   hover:shadow-2xl hover:shadow-[#6366F1]   " style={{ backgroundColor: mode === 'dark' ? 'rgb(31 41 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                <div className="left flex justify-center">
                  <img className='  mb-5' src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="" />
                </div>
                <div className="right">
                  <h1 className=' text-3xl md:text-6xl text-center '>Get All Project Source Code On <span className=' text-purple-800 font-extrabold'> GitHub</span></h1>
                </div>
              </div>
            </Link>

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