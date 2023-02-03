import Cookies from 'js-cookie'
import React, { useContext, useEffect, useState } from 'react'
import userContext from '../context/user/userContext'
import baseUrl from '../database/baseUrl'

function Account() {
  // const user = Cookies.get('user')
  const context = useContext(userContext)
  const { user, mode } = context
  // setUser('')
  //   console.log(users)

  // console.log(users)
  return (
    // <div className=' my-36'>
    //   {/* <h1 >Account</h1> */}
    //   <h1>{users.name}</h1>
    //   <img className='w-20' src={users.image} alt="" />
    //   <h2>{users.designation}</h2>
    //   <h2>{users.role}</h2>
    //   <h2>{users.email}</h2>
    // </div>
    // <h1>uaa</h1>

    // <section className="text-gray-600 body-font ">
    //   <div className="container px-5 py-24 mx-auto">
    //     <div className="flex flex-wrap -m-4">
    //       <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
    //         <div className="h-full text-center">
    //           <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={user.image} /> <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm" style={{ color: mode === 'dark' ? 'rgb(130 131 239)' : '' }}>{user.name}</h2>
    //           <p className="text-gray-500" style={{ color: mode === 'dark' ? 'rgb(130 131 239)' : '' }}>{user.designation}</p>
    //           <p className="text-gray-500" style={{ color: mode === 'dark' ? 'rgb(10 131 239)' : '' }}>{user.role}</p>
    //           <p className="leading-relaxed" style={{ color: mode === 'dark' ? 'white' : '' }}>Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
    //           <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>


    // -----



    <main className=" bg-opacity-25 mt-20 mb-[28.5em]">
      <div className="lg:w-8/12 lg:mx-auto mb-8">
        <header className="flex flex-wrap items-center p-4 md:py-8">
          <div className="md:w-3/12 md:ml-16">
            {/* profile image */}
            <img className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-[3px] border-pink-600 p-1 hover:shadow-2xl hover:shadow-pink-800 " src={user.image} alt="profile" style={{ borderColor: mode === 'dark' ? '#6366F1' : '' }} />
          </div>
          {/* profile meta */}
          <div className="w-8/12 md:w-7/12 ml-4">
            <div className="md:flex md:flex-wrap md:items-center mb-4">
              <h2 className="text-2xl inline-block font-light md:mr-2 mb-2 sm:mb-0" style={{ color: mode === 'dark' ? 'white' : '' }}>
                {user.name}
              </h2>
              {/* badge */}
              <span className="inline-block fas fa-certificate fa-lg text-blue-500 
                                mr-6 text-xl transform -translate-y-2" aria-hidden="true">
                <i className="fas fa-check text-white text-xs  inset-x-0
                               ml-1 mt-px" />
              </span>
              {/* follow button */}
              <a href="#" className="bg-blue-500 px-2 py-1 
                        text-white font-semibold text-sm rounded block text-center 
                        sm:inline-block " style={{ backgroundColor: mode === 'dark' ? '#6366F1' : '' }}>Follow</a>
            </div>
            {/* post, following, followers list for medium screens */}
            {/* <ul className="hidden md:flex space-x-8 mb-4">
              <li style={{ color: mode === 'dark' ? 'white' : '' }}>
                <span className="font-semibold" >136</span>
                posts
              </li>
              <li style={{ color: mode === 'dark' ? 'white' : '' }}>
                <span className="font-semibold" >40.5k</span>
                followers
              </li>
              <li style={{ color: mode === 'dark' ? 'white' : '' }}>
                <span className="font-semibold" >302</span>
                following
              </li>
            </ul> */}
            {/* user meta form medium screens */}
            {/* <div className="hidden md:block" style={{ color: mode === 'dark' ? 'white' : '' }}>
              <h1 className="font-semibold" style={{ color: mode === 'dark' ? 'white' : '' }}>Mr Kamal...</h1>
              <span style={{ color: mode === 'dark' ? 'white' : '' }}>Travel, Nature and Music</span>
              <p style={{ color: mode === 'dark' ? 'white' : '' }}>Lorem ipsum dolor sit amet consectetur</p>
            </div> */}
          </div>
          {/* user meta form small screens */}
          {/* <div className="md:hidden text-sm my-2">
            <h1 className="font-semibold" style={{ color: mode === 'dark' ? 'white' : '' }}>Mr Travlerrr...</h1>
            <span style={{ color: mode === 'dark' ? 'white' : '' }}>Travel, Nature and Music</span>
            <p style={{ color: mode === 'dark' ? 'white' : '' }}>Lorem ipsum dolor sit amet consectetur</p>
          </div> */}
        </header>
        {/* posts */}
        <div className="px-px md:px-3">
          <ul className="flex md:hidden justify-around space-x-8 border-t 
                text-center p-2 text-gray-600 leading-snug text-sm">
            <li style={{ color: mode === 'dark' ? 'white' : '' }}>
              <span className="font-semibold text-gray-800 block" style={{ color: mode === 'dark' ? 'white' : '' }}>136</span>
              posts
            </li>
            <li style={{ color: mode === 'dark' ? 'white' : '' }}>
              <span className="font-semibold text-gray-800 block" style={{ color: mode === 'dark' ? 'white' : '' }}>40.5k</span>
              followers
            </li>
            <li style={{ color: mode === 'dark' ? 'white' : '' }}>
              <span className="font-semibold text-gray-800 block" style={{ color: mode === 'dark' ? 'white' : '' }}>302</span>
              following
            </li>
          </ul>
          
          {/* <ul className="flex items-center justify-around md:justify-center space-x-12  
                    uppercase tracking-widest font-semibold text-xs text-gray-600
                    border-t">
           
            <li className="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
              <a className="inline-block p-3" href="#">
                <i className="fas fa-th-large text-xl md:text-xs" />
                <span className="hidden md:inline">post</span>
              </a>
            </li>
            <li style={{ color: mode === 'dark' ? 'white' : '' }}>
              <a className="inline-block p-3" href="#">
                <i className="far fa-square text-xl md:text-xs" />
                <span className="hidden md:inline">igtv</span>
              </a>
            </li>
            <li style={{ color: mode === 'dark' ? 'white' : '' }}>
              <a className="inline-block p-3" href="#">
                <i className="fas fa-user border border-gray-500
                             px-1 pt-1 rounded text-xl md:text-xs" />
                <span className="hidden md:inline">tagged</span>
              </a>
            </li>
          </ul> */}
        
          {/* <div className="flex flex-wrap -mx-px md:-mx-3">
          
            <div className="w-1/3 p-px md:px-3">
              
              <a href="#">
                <article className="post bg-gray-100 text-white  pb-full md:mb-6">
                
                  <img className="w-full h-full  " src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="image" />
                  <i className="fas fa-square  right-0 top-0 m-1" />
                  
                  <div className="overlay bg-gray-800 bg-opacity-25 w-full h-full  
                                left-0 top-0 hidden">
                    <div className="flex justify-center items-center 
                                    space-x-4 h-full">
                      <span className="p-2">
                        <i className="fas fa-heart" />
                        412K
                      </span>
                      <span className="p-2" style={{ color: mode === 'dark' ? 'white' : '' }}>
                        <i className="fas fa-comment" />
                        2,909
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </div>
            <div className="w-1/3 p-px md:px-3">
              <a href="#">
               
                <article className="post bg-gray-100 text-white  pb-full md:mb-6">
                  <img className="w-full h-full  left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1498409570040-05bf6d3dd5b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="image" />
                 
                  <div className="overlay bg-gray-800 bg-opacity-25 w-full h-full  
                                left-0 top-0 hidden">
                    <div className="flex justify-center items-center 
                                    space-x-4 h-full">
                      <span className="p-2">
                        <i className="fas fa-heart" />
                        412K
                      </span>
                      <span className="p-2" style={{ color: mode === 'dark' ? 'white' : '' }}>
                        <i className="fas fa-comment" />
                        1,993
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </div>
            <div className="w-1/3 p-px md:px-3">
              <a href="#">
                <article className="post bg-gray-100 text-white  pb-full  md:mb-6">
                  <img className="w-full h-full  left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="image" />
                
                  <div className="overlay bg-gray-800 bg-opacity-25 w-full h-full  
                                left-0 top-0 hidden">
                    <div className="flex justify-center items-center 
                                    space-x-4 h-full">
                      <span className="p-2" style={{ color: mode === 'dark' ? 'white' : '' }}>
                        <i className="fas fa-heart" />
                        112K
                      </span>
                      <span className="p-2" style={{ color: mode === 'dark' ? 'white' : '' }}>
                        <i className="fas fa-comment" />
                        2,090
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </div>
            <div className="w-1/3 p-px md:px-3">
              <a href="#">
                <article className="post bg-gray-100 text-white  pb-full md:mb-6">
                  <img className="w-full h-full  left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="image" />
                  <i className="fas fa-video  right-0 top-0 m-1" />
                
                  <div className="overlay bg-gray-800 bg-opacity-25 w-full h-full  
                                left-0 top-0 hidden">
                    <div className="flex justify-center items-center 
                                    space-x-4 h-full">
                      <span className="p-2" style={{ color: mode === 'dark' ? 'white' : '' }}>
                        <i className="fas fa-heart" />
                        841K
                      </span>
                      <span className="p-2" style={{ color: mode === 'dark' ? 'white' : '' }}>
                        <i className="fas fa-comment" />
                        909
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </div>
            <div className="w-1/3 p-px md:px-3">
              <a href="#">
                <article className="post bg-gray-100 text-white  pb-full md:mb-6">
                  <img className="w-full h-full  left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" alt="image" />
                 
                  <div className="overlay bg-gray-800 bg-opacity-25 w-full h-full  
                                left-0 top-0 hidden">
                    <div className="flex justify-center items-center 
                                    space-x-4 h-full">
                      <span className="p-2" style={{ color: mode === 'dark' ? 'white' : '' }}>
                        <i className="fas fa-heart" />
                        120K
                      </span>
                      <span className="p-2" style={{ color: mode === 'dark' ? 'white' : '' }}>
                        <i className="fas fa-comment" />
                        3,909
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </main>


  )
}



// export async function getServerSideProps(ctx) {
//   // const token = Cookies.get(ctx)
//   // if (!token) {
//   //   const { res } = ctx
//   //   res.writeHead(302, { Location: "/login" })
//   //   res.end()
//   // }


//   // const res = await fetch(`${baseUrl}/api/user`,
//   //   {
//   //     headers: {
//   //       "Authorization": token
//   //     }
//   //   })

//   // const users = await res.json()

//   // console.log(users)


//   return {
//     props: {}
//   }
// }

export default Account