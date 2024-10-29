import Image from 'next/image'


export default function Hero(){
  return(
    <main className="bg-black">
    <div className="bg-black min-h-screen flex-col mb-3 items-center justify-wrap">
      <h1 className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text font-extrabold text-4xl md:text-6xl lg:text-7xl text-center py-4 hover:scale-105 transition-transform duration-300">
        Welcome to My Portfolio
      </h1>

      <Image 
                src="her.jpg"
                alt="MAHEEN IMTIAZ"
                width={1000}
                height={10}
                className="w-full"
                unoptimized={true} 
              />

      

      </div>
      </main>
      )
      }
