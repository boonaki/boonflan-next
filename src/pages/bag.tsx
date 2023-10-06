import BagContents from "@/components/BagContents"
import LogoCard from "@/components/LogoCard"
import Navbar from "@/components/Navbar"
import Link from "next/link";
import { useEffect, useState } from "react";

interface BagItem{
   "slice": number,
   "mini": number,
   "whole": number,
   "id": string,
   "url": string,
   "title": string,
   "slicePrice": number,
   "miniPrice": number,
   "wholePrice": number
}
const BagItem = () => {
   const [items, setItems] = useState<BagItem[]>([]);
   const [isEditing, setIsEditing] = useState(false);

   useEffect(() => {
      const storage = localStorage.getItem("products")
      if (storage !== null) {
         const savedItems = JSON.parse(storage) || [];
         setItems(savedItems);
      }
   }, [])

   const handleRemoveItem = (id: string) => {
      let products = JSON.parse(localStorage.getItem('products') as string);
      products = products.filter((e: BagItem) => {
         return e.id !== id
      })
      setItems(products);
      localStorage.setItem("products", JSON.stringify(products))
   }

   return (
      <>
         <Navbar />
         <main className="h-full">
            <section>
               <LogoCard />
            </section>
            <section className="px-8 md:flex md:justify-center">
               <div className="md:w-[675px]">
                  <div className="flex justify-between items-center">
                     <div className="my-8 mb-4 w-fit">
                        <h2 className="font-extrabold text-3xl mb-2">My Bag</h2>
                        <div className="h-[3px] w-1/2 bg-[#a48a69] rounded-full"></div>
                     </div>
                     <button onClick={() => setIsEditing(prev => !prev)} className="mt-6 mr-6 font-semibold text-lg hover:underline target:underline flex">Edit
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil-minus ml-1" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                           <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                           <path d="M13.5 6.5l4 4" />
                           <path d="M16 19h6" />
                        </svg>
                     </button>
                  </div>
                  {items.length > 0 ?
                     <>
                        <BagContents items={items} isEditing={isEditing} handleRemoveItem={handleRemoveItem} />
                        <div className="text-center mt-6 mb-8">
                           <button className="p-2 w-full rounded-lg bg-[#f7ba84] hover:bg-[#ffa95e] transition font-semibold">Continue to Checkout</button>
                        </div>
                     </>
                     :
                     <div className="text-center w-full text-lg italic font-semibold">
                        <span>Nothing here yet, feel free to explore our <Link href="/#menu" className="underline">menu</Link></span>
                     </div>
                  }
               </div>
            </section>
         </main>
      </>
   )
}

export default BagItem