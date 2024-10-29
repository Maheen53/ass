import Image from "next/image"
export default function Home(){




    return(
    <main>
 <div className="flex-shrink-0 mb-8 md:mb-0 md:ml-8">
              
      <div className="bg-white min-h-screen flex items-center justify-center">
          <div className="text-white text-center">
            {/*Profile Image */}
            
            
              <h1 className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text font-extrabold text-4xl md:text-6xl lg:text-7xl text-center py-4 hover:scale-105 transition-transform duration-300">hi i'm MAHEEN IMTIAZ</h1>
             <p className="text-black"> I am 21-year-old i am Graduated in Bachelor of Commerce at Karachi University and also passionate  web developer and creative enthusiast eager to bring innovative digital solutions to life.
              Currently, I am a student at the Governor Sindh IT Initiative (GIAIC), where I am honing my skills and expanding my knowledge in technology and development.
              I’m committed to advancing my skills in web development, having built a strong foundation in HTML, CSS, Tailwind CSS, TypeScript, and JavaScript.
              I’m also diving into Next.js and exploring cloud technologies to further enhance my expertise.
              </p>

            </div>
           <Image
                src="/about.avif"
                alt="MAHEEN IMTIAZ"
                width={10000}
                height={10}
                className="rounded-lg shadow-lg"
                 >
                  </Image>

           
                </div>

          </div>
        </main>
    )
}