import Link from 'next/link'
import React from 'react'

export default function Projects() {
  return (
    <div className='bg-black p-10 min-h-screen flex items-center justify-center'>
        <h1 className="bg-gradient-to-r from -bg-gradient-to-b from-red-400 to-yellow-400  text-transparent bg-clip-text font-extrabold text-4xl md:text-6xl  text-center py-4 hover:scale-105 transition-transform ">
         
      </h1>
      <Link className='bg-gradient-to-r from -bg-gradient-to-b from-red-400 to-yellow-400  text-transparent bg-clip-text font-bold text-4xl md:text-6xl  lg:text-7xl   text-center py-4 hover:scale-105 transition-transform duration-300' href={"/node"}> My Node Projects</Link>
      
    </div>
  )
}
