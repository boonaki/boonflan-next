import { useState } from "react";


const AddToBagButton = (props: { id: string, handleAddToBag: () => void }) => {
   const [isAdded, setIsAdded] = useState(false);

   const handleAddToBag = () => {
      props.handleAddToBag()
      setIsAdded(true);
      setTimeout(() => {
         setIsAdded(false)
      }, 5000)
   }

   return (
      <>
         {!isAdded ?
            <button onClick={() => handleAddToBag()} className="flex relative items-center border-2 rounded-lg py-1 px-2 font-semibold hover:border-transparent hover:bg-[#ffa95e] transition">Add to Bag
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-paper-bag ml-1" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 3h8a2 2 0 0 1 2 2v1.82a5 5 0 0 0 .528 2.236l.944 1.888a5 5 0 0 1 .528 2.236v5.82a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-5.82a5 5 0 0 1 .528 -2.236l1.472 -2.944v-3a2 2 0 0 1 2 -2z" />
                  <path d="M14 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M6 21a2 2 0 0 0 2 -2v-5.82a5 5 0 0 0 -.528 -2.236l-1.472 -2.944" />
                  <path d="M11 7h2" />
               </svg>
            </button>
            :
            <span className="flex relative items-center border-2 border-transparent rounded-lg py-1 px-2 font-semibold">Added to Bag
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler absolute right-[8px] icon-tabler-circle-check animate-pingNoRepeat ml-1" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00b341" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 12l2 2l4 -4" />
               </svg>
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check ml-1" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00b341" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 12l2 2l4 -4" />
               </svg>
            </span>
         }
      </>
   )
}

export default AddToBagButton