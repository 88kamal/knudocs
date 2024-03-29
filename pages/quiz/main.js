import Link from 'next/link'
import React, { useContext } from 'react'
import userContext from '../../context/user/userContext'

export default function main() {
  const context = useContext(userContext)
  const { mode, setSearchkey, searchkey } = context
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-32 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"  style={{color: mode === 'dark' ? 'white' : '' }}>Welcome To WebKnu</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <Link href={'/quiz/javascript'} className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-2xl hover:shadow-[#6366F1] hover:ring-offset-1 hover:ring-1  "  style={{ backgroundColor: mode === 'dark' ? 'rgb(31 41 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2" style={{color: mode === 'dark' ? 'white' : '' }}>JavaScript</h2>
              <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
            </div>
          </Link>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-2xl hover:shadow-[#6366F1] hover:ring-offset-1 hover:ring-1"  style={{ backgroundColor: mode === 'dark' ? 'rgb(31 41 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                  <circle cx={6} cy={6} r={3} />
                  <circle cx={6} cy={18} r={3} />
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2"  style={{color: mode === 'dark' ? 'white' : '' }}>Python</h2>
              <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-2xl hover:shadow-[#6366F1] hover:ring-offset-1 hover:ring-1"  style={{ backgroundColor: mode === 'dark' ? 'rgb(31 41 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2"  style={{color: mode === 'dark' ? 'white' : '' }}>Java</h2>
              <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-2xl hover:shadow-[#6366F1] hover:ring-offset-1 hover:ring-1"  style={{ backgroundColor: mode === 'dark' ? 'rgb(31 41 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2"  style={{color: mode === 'dark' ? 'white' : '' }}>Data Structure</h2>
              <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-2xl hover:shadow-[#6366F1] hover:ring-offset-1 hover:ring-1"  style={{ backgroundColor: mode === 'dark' ? 'rgb(31 41 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2"  style={{color: mode === 'dark' ? 'white' : '' }}>Html</h2>
              <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-2xl hover:shadow-[#6366F1] hover:ring-offset-1 hover:ring-1"  style={{ backgroundColor: mode === 'dark' ? 'rgb(31 41 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2"  style={{color: mode === 'dark' ? 'white' : '' }}>React Js</h2>
              <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
