import FlanItemMenu from "@/components/FlanItemMenu"
import Navbar from "@/components/Navbar"
import Link from "next/link"

const classic = () => {
   return (
      <>
         <Navbar />
         <main className="lg:flex lg:justify-center lg:items-center">
            <section className="px-8 md:flex md:flex-row-reverse md:justify-center lg:block">
               <div className="pr-2 sm:w-[500px] md:ml-4 lg:ml-0">
                  <div className="flex">
                     <h3 className="title-span leading-none font-bold text-2xl font-mansalva">Classic Flan</h3>
                  </div>
                  <p className="leading-none my-2 font-serif italic">Soft, creamy flan covered in a caramel glaze.</p>
               </div>
               <img src="/flan-test.jpg" alt="" className="rounded-xl shadow-xl w-[400px]"></img>
            </section>
            <section className="pt-8 mt-8 bg-[#5555551c] md:flex md:flex-col md:items-center lg:w-[600px] lg:py-8 lg:mr-8 lg:px-4 lg:rounded-lg">
               {/* <!-- <div className="bg-transparent h-[412px] w-full absolute"></div> --> */}
               <FlanItemMenu slicePrice={3} miniPrice={5} wholePrice={12} id="classic" url="classic" title="Classic" />
               <div className="text-center underline py-8 text-sm lg:hidden">
                  <Link href="/">Return to Home</Link>
               </div>
            </section>
         </main>
         <div className="text-center underline my-8 text-sm hidden lg:block w-full">
            <div className="h-[100px]"></div>
            <a href="/">Return to Home</a>
         </div>
      </>
   )
}

export default classic