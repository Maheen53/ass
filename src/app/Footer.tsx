import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    
        <footer  className='bg-black'>
            <div>
      <ul className='bg-black text-white flex justify-center gap-4 text-96 px-4  h-11 mt-20 text-center '>
        <li className=''>ABOUT US</li>
        <li>FAQS</li>
        <li>TERMS & CONDITIONS</li>
        <li>REFUND POLICY</li>
        <li>Privacy Policy</li>
      </ul>
      <br />
      <h1 className='text-center text-white'>© 2024, copyrights @ mahi</h1>
    </div>
    <ul className="flex justify-center gap-x-4">
    <li className="inline-flex items-center bg-green-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base"> <Link href ="https://web.whatsapp.com/">WATSAPP"</Link></li>
    
    <li className="inline-flex items-center bg-sky-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base"><Link href = "https://www.linkedin.com/in/maheen-imtiaz-635a792b5/">LINKDIN</Link></li>
    
    <li className="inline-flex items-center bg-pink-800 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base"><Link href="https://www.instagram.com/stories/dayswith_mi/">INSTAGRAM</Link></li>
    
    <li className="inline-flex items-center bg-sky-950 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base"><Link href ="https://www.facebook.com/profile.php?id=100005773187338">FACEBOOK</Link></li>
    
    <li className="inline-flex items-center bg-purple-950 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base"><Link href ="https://discord.com/channels/790484092772548613/1210170964550352956">DISCORD</Link></li>
    </ul>
    </footer>
  )
}
