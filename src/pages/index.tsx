import Footer from '@/components/Footer'
import LogoCard from '@/components/LogoCard'
import MenuItem from '@/components/MenuItem'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
   return (
      <>
         <Navbar />
         <main>
            <section className="flex flex-col items-center">
               <img></img>
               <LogoCard />
               <p id="menu" className="mt-4 mb-8 italic text-lg px-8 text-center font-serif">Have a taste of some of the best flan in the Triangle area.</p>
            </section>
            <section className="flex justify-center">
               <div className="sm:grid sm:grid-cols-2 sm:gap-4 xl:grid-cols-3 xl:gap-8">
                  <MenuItem
                     title="Classic Flan"
                     altTitle={null}
                     url='classic'
                     description="Soft, creamy flan covered in a caramel glaze."
                     slicePrice={3}
                     wholePrice={14}
                     miniPrice={5}
                  />
                  <MenuItem
                     title="Boon of Flan"
                     altTitle="Most Popular"
                     url='boon-of-flan'
                     description="Classic flan infused with real vanilla."
                     slicePrice={5}
                     wholePrice={20}
                     miniPrice={8}
                  />
                  <MenuItem
                     title="Boon of Coco"
                     altTitle='Coconut Flan'
                     url='boon-of-coco'
                     description="Coconut is king."
                     slicePrice={4}
                     wholePrice={16}
                     miniPrice={6}
                  />
                  <MenuItem
                     title="Boon of Mango"
                     altTitle='Mango Flan'
                     url='boon-of-mango'
                     description="Mango never tasted creamier."
                     slicePrice={4}
                     wholePrice={16}
                     miniPrice={6}
                  />
                  <MenuItem
                     title="Boon of Café"
                     altTitle='Coffee Flan'
                     url='boon-of-cafe'
                     description="Kinda like tiramisu."
                     slicePrice={4}
                     wholePrice={16}
                     miniPrice={6}
                  />
               </div>
            </section>
            <section>
               {/* <!-- testimonies --> */}
            </section>
            <section>
               {/* <!-- meet the baker --> */}
            </section>
            <section>
               {/* <!-- contact --> */}
            </section>
         </main>
         <Footer />
      </>
   )
}
