import Link from "next/link";

export default function Header() {
    return (
        <main className="bg-black	 ">
      <div className="homeContainer">
        <div className="childContainer">
          <title>MAHEEN IMTIAZ Web World</title>
          <header className="text-white text-xl body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
              <a className="flex title font font-medium items-center text-grey-900  md:mb-0">
                <div className="flex space-x-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full relative">
                      <img
                        src="/mi.png"
                        alt="MAHI avatar logo"
                        className="rounded-full"
                      />
                      <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full border-2 border-white"></span>
                    </div>
                  </div>
                </div>
                <span className="ml-3 text-xl font-extrabold ">MAHEEN IMTIAZ</span>
              </a>
  
              <nav className="md:mr-5 md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-grey-400 flex flex-wrap items-center text-base justify-center">
                <Link className="inline-flex items-center bg-gradient-to-bl from-pink-500 to-indigo text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base mr-4" href={"/home"}>
                  Home
                </Link>
                <Link className="inline-flex items-center bg-gradient-to-r from-green-400 via-yellow-500 to-red-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base mr-4" href={"/about"}>
                  About Us
                </Link>
                <Link className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-pink-500 p-10 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base mr-4" href={"/contactus"}>
                  Contact Us
                </Link>
                <Link
                  className="inline-flex items-center bg-gradient-to-r from-blue-400 to-purple-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base mr-4"
                  href={"/Project"}
                >
                  Projects
                </Link>
              </nav>
  
              <div className="flex space-x-4 mt-4 md:mt-0">
                <button className="inline-flex items-center bg-slate-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base">
                <Link href={"/skills"}>Skills</Link>
                </button>
  
                <button className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-pink-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base">
             <Link href={"/Achivements"}>     Achivements  </Link>
                </button>
              </div>
            </div>
            </header>
            </div>
          </div>
          </main>
            )
            }