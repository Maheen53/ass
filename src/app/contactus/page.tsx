import Link from "next/link"
export default function Contactus(){
    return(
      <main className='bg-cover bg-center h-screen' style={{backgroundImage: "url('/images/bg.jpg')"}}
>
 <div className="bg-black bg-cover bg-center h-screen">
 <h1 className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text font-extrabold text-4xl md:text-6xl lg:text-7xl text-center py-4 hover:scale-105 transition-transform duration-300">Contact us</h1>

    <h1 className="text-xl mb-6 w-screen">
      <div className="w-screen">
    <img 
                src="/contact.jpg"
                alt="MAHEEN IMTIAZ"
                width={1000}
                height={2}
                className="w-full"
              />
              </div>
              </h1>

    
    <br />
    <ul className="flex gap-x-4">
    <li className="inline-flex items-center bg-green-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base"> <Link href ="https://web.whatsapp.com/">WATSAPP"</Link></li>
    
    <li className="inline-flex items-center bg-sky-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base"><Link href = "https://www.linkedin.com/in/maheen-imtiaz-635a792b5/">LINKDIN</Link></li>
    
    <li className="inline-flex items-center bg-pink-800 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base"><Link href="https://www.instagram.com/stories/dayswith_mi/">INSTAGRAM</Link></li>
    
    <li className="inline-flex items-center bg-sky-950 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base"><Link href ="https://www.facebook.com/profile.php?id=100005773187338">FACEBOOK</Link></li>
    
    <li className="inline-flex items-center bg-purple-950 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base"><Link href ="https://discord.com/channels/790484092772548613/1210170964550352956">DISCORD</Link></li>
    </ul>
    </div>
 
 </main>
    )
}