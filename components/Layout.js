import Head from 'next/head'
import React, { useContext } from 'react'
import userContext from '../context/user/userContext'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout(props) {
    const context = useContext(userContext)
  const {mode} = context

// style={{color: mode==='dark'?'white':'#042743'}}
  return (
    <div style={{mode}} >
 
        <Navbar/>
        <div className="" >
            {props.children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout