import React, { useContext } from 'react'
import userContext from '../context/user/userContext'

function Create() {
    const context = useContext(userContext)
    const { mode } = context
    return (
        <div>
          <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
             style={{
                color: mode === 'dark' ? 'white' : ''
            }}>Admin can creating a docs
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed font-light"
             style={{
                color: mode === 'dark' ? 'white' : ''
            }}>Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded hover:shadow-2xl hover:shadow-[#6366F1] cursor-pointer" alt="hero" src={mode==='dark'? 'img/createdark.png':'img/createlight.png'} />
          </div>
        </div>
      </section>
        </div>
    )
}

export default Create